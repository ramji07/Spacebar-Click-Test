import { useState, useEffect, useRef, useCallback } from 'react'
import styles from './SpacebarTool.module.css'

const TIME_OPTIONS = [1, 5, 10, 15, 30, 60]

const getLevel = (cps) => {
  if (cps < 2) return { label: 'Beginner', color: '#606880', emoji: '🌱' }
  if (cps < 4) return { label: 'Average', color: '#00d4ff', emoji: '⚡' }
  if (cps < 6) return { label: 'Fast', color: '#9b59ff', emoji: '🔥' }
  if (cps < 9) return { label: 'Pro', color: '#ff2d78', emoji: '💎' }
  return { label: 'Legend', color: '#00ff88', emoji: '👑' }
}

const getAccuracyLabel = (consistency) => {
  if (consistency >= 80) return { label: 'Excellent', color: '#00ff88' }
  if (consistency >= 60) return { label: 'Good', color: '#00d4ff' }
  if (consistency >= 40) return { label: 'Average', color: '#9b59ff' }
  return { label: 'Irregular', color: '#ff2d78' }
}

export default function SpacebarTool() {
  const [selectedTime, setSelectedTime] = useState(10)
  const [customTime, setCustomTime] = useState('')
  const [useCustom, setUseCustom] = useState(false)
  const [status, setStatus] = useState('idle') // idle | running | finished
  const [timeLeft, setTimeLeft] = useState(10)
  const [clicks, setClicks] = useState(0)
  const [cps, setCps] = useState(0)
  const [bestScore, setBestScore] = useState(() => {
    const saved = localStorage.getItem('spacebar_best')
    return saved ? JSON.parse(saved) : { clicks: 0, cps: 0 }
  })
  const [ripples, setRipples] = useState([])
  const [intervals, setIntervals] = useState([])
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [copied, setCopied] = useState(false)

  const timerRef = useRef(null)
  const startTimeRef = useRef(null)
  const clicksRef = useRef(0)
  const activeTimeRef = useRef(10)
  const intervalClicksRef = useRef([])
  const toolRef = useRef(null)
  const audioCtxRef = useRef(null)

  const playClick = useCallback(() => {
    if (!soundEnabled) return
    try {
      if (!audioCtxRef.current) audioCtxRef.current = new AudioContext()
      const ctx = audioCtxRef.current
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.frequency.setValueAtTime(800, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.05)
      gain.gain.setValueAtTime(0.1, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05)
      osc.start(ctx.currentTime)
      osc.stop(ctx.currentTime + 0.05)
    } catch {
      // Audio is optional; browsers can block it until user interaction.
    }
  }, [soundEnabled])

  const getActiveTime = useCallback(() => {
    if (useCustom && customTime) return Math.min(Math.max(parseInt(customTime) || 10, 1), 300)
    return selectedTime
  }, [customTime, selectedTime, useCustom])

  const startTest = useCallback(() => {
    if (status === 'running') return
    const time = getActiveTime()
    activeTimeRef.current = time
    clicksRef.current = 0
    intervalClicksRef.current = []
    setClicks(0)
    setCps(0)
    setTimeLeft(time)
    setStatus('running')
    startTimeRef.current = Date.now()

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        const next = prev - 1
        if (next <= 0) {
          clearInterval(timerRef.current)
          const totalTime = activeTimeRef.current
          const finalClicks = clicksRef.current
          const finalCps = parseFloat((finalClicks / totalTime).toFixed(2))
          setCps(finalCps)
          setStatus('finished')
          // Compute consistency
          const ivals = intervalClicksRef.current
          if (ivals.length > 1) {
            setIntervals(ivals)
          }
          setBestScore(prev => {
            const newBest = {
              clicks: Math.max(prev.clicks, finalClicks),
              cps: Math.max(prev.cps, finalCps)
            }
            localStorage.setItem('spacebar_best', JSON.stringify(newBest))
            return newBest
          })
          return 0
        }
        return next
      })
    }, 1000)
  }, [getActiveTime, status])

  const handlePress = useCallback((e) => {
    if (e && e.type === 'keydown') {
      if (e.code !== 'Space') return
      e.preventDefault()
    }
    if (status === 'idle' || status === 'finished') { startTest(); return }
    if (status !== 'running') return

    clicksRef.current += 1
    setClicks(clicksRef.current)
    playClick()

    const elapsed = (Date.now() - startTimeRef.current) / 1000
    const elapsedCps = parseFloat((clicksRef.current / elapsed).toFixed(2))
    setCps(elapsedCps)

    // Track per-second intervals
    const secIdx = Math.floor(elapsed)
    if (!intervalClicksRef.current[secIdx]) intervalClicksRef.current[secIdx] = 0
    intervalClicksRef.current[secIdx]++

    // Ripple
    const id = Date.now() + Math.random()
    setRipples(r => [...r, id])
    setTimeout(() => setRipples(r => r.filter(x => x !== id)), 600)
  }, [status, startTest, playClick])

  const resetTest = useCallback(() => {
    clearInterval(timerRef.current)
    setStatus('idle')
    setClicks(0)
    setCps(0)
    setTimeLeft(getActiveTime())
    setRipples([])
    setIntervals([])
  }, [getActiveTime])

  const handlePresetTime = (time) => {
    setSelectedTime(time)
    setUseCustom(false)
    if (status !== 'running') {
      clearInterval(timerRef.current)
      setStatus('idle')
      setClicks(0)
      setCps(0)
      setTimeLeft(time)
      setRipples([])
      setIntervals([])
    }
  }

  const handleCustomToggle = () => {
    setUseCustom(true)
    if (status === 'idle') setTimeLeft(getActiveTime())
  }

  const handleCustomTimeChange = (value) => {
    setCustomTime(value)
    if (status === 'idle') {
      const nextTime = Math.min(Math.max(parseInt(value) || 10, 1), 300)
      setTimeLeft(nextTime)
    }
  }

  const resetBest = () => {
    setBestScore({ clicks: 0, cps: 0 })
    localStorage.removeItem('spacebar_best')
  }

  const copyResult = () => {
    const txt = `My Spacebar Test Result:\n${clicks} clicks in ${activeTimeRef.current}s\nCPS: ${cps}\nBest: ${bestScore.clicks} clicks\nhttps://spacebarclicktest.net`
    navigator.clipboard.writeText(txt).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const shareResult = () => {
    const txt = `I pressed the spacebar ${clicks} times in ${activeTimeRef.current}s with ${cps} CPS! 🎮 Try to beat me at spacebarclicktest.net`
    if (navigator.share) {
      navigator.share({ title: 'Spacebar Click Test', text: txt, url: 'https://spacebarclicktest.net' })
    } else {
      navigator.clipboard.writeText(txt)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handlePress)
    return () => window.removeEventListener('keydown', handlePress)
  }, [handlePress])

  useEffect(() => {
    return () => clearInterval(timerRef.current)
  }, [])

  const time = getActiveTime()
  const progress = ((time - timeLeft) / time) * 100
  const level = getLevel(cps)
  const consistency = intervals.length > 1
    ? Math.max(0, Math.round((1 - Math.sqrt(intervals.reduce((a,b)=>a+(b-intervals.reduce((x,y)=>x+y,0)/intervals.length)**2,0)/intervals.length) / (intervals.reduce((x,y)=>x+y,0)/intervals.length || 1)) * 100))
    : 100
  const accuracyInfo = getAccuracyLabel(consistency)

  return (
    <div className={styles.wrapper}>
      {/* Timer selector */}
      <div className={styles.timerRow}>
        {TIME_OPTIONS.map(t => (
          <button
            key={t}
            className={`${styles.timerBtn} ${!useCustom && selectedTime === t ? styles.timerActive : ''}`}
            onClick={() => handlePresetTime(t)}
            aria-label={`Set timer to ${t} seconds`}
          >{t}s</button>
        ))}
        <button
          className={`${styles.timerBtn} ${useCustom ? styles.timerActive : ''}`}
          onClick={handleCustomToggle}
        >Custom</button>
        {useCustom && (
          <input
            type="number"
            className={styles.customInput}
            placeholder="Sec"
            min="1"
            max="300"
            value={customTime}
            onChange={e => handleCustomTimeChange(e.target.value)}
            aria-label="Custom time in seconds"
          />
        )}
      </div>

      {/* Main press area */}
      <div
        ref={toolRef}
        className={`${styles.pressArea} ${status === 'running' ? styles.running : ''} ${status === 'finished' ? styles.finished : ''}`}
        onClick={handlePress}
        role="button"
        tabIndex={0}
        aria-label="Click here or press Spacebar to test"
        onKeyDown={e => e.code === 'Space' && handlePress(e)}
      >
        {ripples.map(id => (
          <span key={id} className={styles.ripple} />
        ))}

        {status === 'finished' ? (
          <div className={styles.result} style={{pointerEvents:'none'}}>
            <div className={styles.resultLevel} style={{color: level.color}}>
              {level.emoji} {level.label}
            </div>
            <div className={styles.resultClicks}>{clicks}</div>
            <div className={styles.resultLabel}>CLICKS</div>
            <div className={styles.resultCps}>{cps} <span>CPS</span></div>
          </div>
        ) : (
          <div className={styles.pressContent} style={{pointerEvents:'none'}}>
            {status === 'idle' ? (
              <>
                <div className={styles.spacebarIcon}>SPACE</div>
                <div className={styles.pressHint}>Press Spacebar or Click to Start</div>
              </>
            ) : (
              <div className={styles.liveCount}>{clicks}</div>
            )}
          </div>
        )}

        {/* Progress ring */}
        {status === 'running' && (
          <svg className={styles.progressRing} viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3"/>
            <circle
              cx="100" cy="100" r="90" fill="none"
              stroke="url(#ringGrad)" strokeWidth="3"
              strokeDasharray={`${2 * Math.PI * 90}`}
              strokeDashoffset={`${2 * Math.PI * 90 * (1 - progress / 100)}`}
              strokeLinecap="round"
              transform="rotate(-90 100 100)"
            />
            <defs>
              <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00d4ff"/>
                <stop offset="100%" stopColor="#9b59ff"/>
              </linearGradient>
            </defs>
          </svg>
        )}
      </div>

      {/* Stats grid */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statValue} style={{color: 'var(--neon-blue)'}}>{clicks}</div>
          <div className={styles.statLabel}>Total Hits</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue} style={{color: 'var(--neon-purple)'}}>{cps}</div>
          <div className={styles.statLabel}>CPS</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue} style={{color: 'var(--neon-cyan)'}}>{timeLeft}s</div>
          <div className={styles.statLabel}>Time Left</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue} style={{color: 'var(--neon-green)'}}>{bestScore.clicks}</div>
          <div className={styles.statLabel}>Best Score</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue} style={{color: accuracyInfo.color}}>{status === 'finished' ? `${consistency}%` : '--'}</div>
          <div className={styles.statLabel}>Consistency</div>
        </div>
      </div>

      {/* Action buttons */}
      <div className={styles.actions}>
        {status !== 'running' && (
          <button className="btn-neon" onClick={startTest} aria-label="Start test">
            {status === 'finished' ? '▶ Restart' : '▶ Start Test'}
          </button>
        )}
        {status !== 'idle' && (
          <button className="btn-outline" onClick={resetTest} aria-label="Reset test">Reset</button>
        )}
        {status === 'finished' && (
          <>
            <button className="btn-outline" onClick={copyResult} aria-label="Copy result">
              {copied ? '✓ Copied!' : '📋 Copy'}
            </button>
            <button className="btn-outline" onClick={shareResult} aria-label="Share result">🔗 Share</button>
          </>
        )}
        <button
          className={`${styles.soundBtn} ${soundEnabled ? styles.soundOn : ''}`}
          onClick={() => setSoundEnabled(s => !s)}
          aria-label={soundEnabled ? 'Disable sound' : 'Enable sound'}
        >
          {soundEnabled ? '🔊' : '🔇'}
        </button>
        <button className={styles.resetBest} onClick={resetBest} aria-label="Reset best score">Reset Best</button>
      </div>
    </div>
  )
}
