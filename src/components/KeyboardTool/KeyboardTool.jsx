import { useEffect, useMemo, useState } from 'react'
import styles from './KeyboardTool.module.css'

const KEY_ROWS = [
  ['Escape', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'],
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight'],
  ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'MetaRight', 'ContextMenu', 'ControlRight'],
]

const LABELS = {
  Backquote: '`',
  Minus: '-',
  Equal: '=',
  BracketLeft: '[',
  BracketRight: ']',
  Backslash: '\\',
  Semicolon: ';',
  Quote: "'",
  Comma: ',',
  Period: '.',
  Slash: '/',
  Space: 'Space',
}

const labelFor = (code) => LABELS[code] || code.replace('Key', '').replace('Digit', '').replace('Left', '').replace('Right', '')

export default function KeyboardTool() {
  const [pressed, setPressed] = useState(new Set())
  const [tested, setTested] = useState(new Set())
  const totalKeys = useMemo(() => KEY_ROWS.flat().length, [])

  useEffect(() => {
    const handleDown = (event) => {
      event.preventDefault()
      setPressed(prev => new Set(prev).add(event.code))
      setTested(prev => new Set(prev).add(event.code))
    }
    const handleUp = (event) => {
      setPressed(prev => {
        const next = new Set(prev)
        next.delete(event.code)
        return next
      })
    }

    window.addEventListener('keydown', handleDown)
    window.addEventListener('keyup', handleUp)
    return () => {
      window.removeEventListener('keydown', handleDown)
      window.removeEventListener('keyup', handleUp)
    }
  }, [])

  return (
    <section className={styles.wrapper} aria-label="Keyboard testing tool">
      <div className={styles.status}>
        <strong>{tested.size}</strong>
        <span>of {totalKeys} keys tested</span>
        <button type="button" className="btn-outline" onClick={() => setTested(new Set())}>Reset</button>
      </div>

      <div className={styles.keyboard} role="application" aria-label="Virtual keyboard">
        {KEY_ROWS.map((row, index) => (
          <div key={index} className={styles.row}>
            {row.map(code => (
              <span
                key={code}
                className={`${styles.key} ${pressed.has(code) ? styles.pressed : ''} ${tested.has(code) ? styles.tested : ''} ${code === 'Space' ? styles.space : ''}`}
              >
                {labelFor(code)}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
