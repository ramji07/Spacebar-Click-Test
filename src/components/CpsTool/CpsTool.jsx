import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './CpsTool.module.css'

const TIME_OPTIONS = [1, 5, 10, 15, 30]

const getLevel = (cps) => {
  if (cps < 3) return 'Beginner'
  if (cps < 6) return 'Average'
  if (cps < 9) return 'Fast'
  if (cps < 12) return 'Pro'
  return 'Legend'
}

export default function CpsTool() {
  const [selectedTime, setSelectedTime] = useState(5)
  const [status, setStatus] = useState('idle')
  const [timeLeft, setTimeLeft] = useState(5)
  const [clicks, setClicks] = useState(0)
  const [cps, setCps] = useState(0)
  const [bestScore, setBestScore] = useState(() => {
    const saved = localStorage.getItem('cps_best')
    return saved ? JSON.parse(saved) : { clicks: 0, cps: 0 }
  })

  const timerRef = useRef(null)
  const startTimeRef = useRef(null)
  const clicksRef = useRef(0)

  const finishTest = useCallback(() => {
    clearInterval(timerRef.current)
    const finalClicks = clicksRef.current
    const finalCps = parseFloat((finalClicks / selectedTime).toFixed(2))
    setCps(finalCps)
    setStatus('finished')
    setBestScore(prev => {
      const newBest = {
        clicks: Math.max(prev.clicks, finalClicks),
        cps: Math.max(prev.cps, finalCps),
      }
      localStorage.setItem('cps_best', JSON.stringify(newBest))
      return newBest
    })
  }, [selectedTime])

  const startTest = useCallback(() => {
    if (status === 'running') return
    clearInterval(timerRef.current)
    clicksRef.current = 0
    startTimeRef.current = Date.now()
    setClicks(0)
    setCps(0)
    setTimeLeft(selectedTime)
    setStatus('running')
  }, [selectedTime, status])

  const reset = useCallback((time = selectedTime) => {
    clearInterval(timerRef.current)
    clicksRef.current = 0
    setStatus('idle')
    setClicks(0)
    setCps(0)
    setTimeLeft(time)
  }, [selectedTime])

  const handleClick = useCallback(() => {
    if (status === 'idle' || status === 'finished') {
      startTest()
      return
    }
    if (status !== 'running') return

    clicksRef.current += 1
    setClicks(clicksRef.current)
    const elapsed = Math.max((Date.now() - startTimeRef.current) / 1000, 0.1)
    setCps(parseFloat((clicksRef.current / elapsed).toFixed(2)))
  }, [startTest, status])

  useEffect(() => {
    if (status !== 'running') return undefined

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          finishTest()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timerRef.current)
  }, [finishTest, status])

  const progress = ((selectedTime - timeLeft) / selectedTime) * 100
  const level = getLevel(cps)

  return (
    <section className={styles.wrapper} aria-label="CPS test tool">
      <div className={styles.timerRow} aria-label="Choose test duration">
        {TIME_OPTIONS.map(time => (
          <button
            key={time}
            className={`${styles.timerBtn} ${selectedTime === time ? styles.active : ''}`}
            onClick={() => {
              setSelectedTime(time)
              reset(time)
            }}
            type="button"
          >
            {time}s
          </button>
        ))}
      </div>

      <button
        className={`${styles.clickArea} ${status === 'running' ? styles.running : ''}`}
        onClick={handleClick}
        type="button"
      >
        {status === 'finished' ? (
          <span className={styles.result}>
            <strong>{cps} CPS</strong>
            <small>{clicks} clicks in {selectedTime}s - {level}</small>
          </span>
        ) : status === 'running' ? (
          <span className={styles.liveCount}>{clicks}</span>
        ) : (
          <span className={styles.hint}>Click to Start</span>
        )}
        {status === 'running' && <span className={styles.progress} style={{ width: `${progress}%` }} />}
      </button>

      <div className={styles.statsGrid}>
        <div><strong>{clicks}</strong><span>Clicks</span></div>
        <div><strong>{cps}</strong><span>CPS</span></div>
        <div><strong>{timeLeft}s</strong><span>Left</span></div>
        <div><strong>{bestScore.cps}</strong><span>Best</span></div>
      </div>

      <div className={styles.actions}>
        {status !== 'running' && <button className="btn-neon" onClick={startTest} type="button">Start</button>}
        {status !== 'idle' && <button className="btn-outline" onClick={() => reset()} type="button">Reset</button>}
      </div>
    </section>
  )
}
