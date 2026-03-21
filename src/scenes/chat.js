import { texts } from '../i18n.js'
import gsap from 'gsap'

export function renderChat(app, next) {
  const currentLang = window.__lang || 'es'
  const messages = texts[currentLang].chat.messages
  const finalTop = texts[currentLang].chat.finalTop
  const finalBottom = texts[currentLang].chat.finalBottom

  app.innerHTML = `
    <main
      style="
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
      "
    >
      <div
        id="chat-stack"
        style="
          position: absolute;
          left: 7vw;
          top: 50%;
          transform: translateY(-50%);
          width: min(420px, 36vw);
          display: flex;
          flex-direction: column;
          gap: 14px;
        "
      ></div>

      <div
        id="chat-copy"
        style="
          position: absolute;
          right: 18vw;
          top: 50%;
          transform: translateY(-50%);
          width: min(420px, 34vw);
          text-align: left;
          opacity: 0;
        "
      >
        <p
          id="chat-copy-top"
          style="
            margin: 0 0 14px 0;
            font-size: 0.9rem;
            letter-spacing: 0.06em;
            opacity: 0.72;
            color: #f5f1ea;
          "
        >
          ${finalTop}
        </p>

        <h2
          id="chat-copy-bottom"
          style="
            margin: 0;
            font-size: clamp(2.2rem, 4vw, 3.6rem);
            line-height: 1.05;
            letter-spacing: -0.04em;
            font-weight: 700;
            color: #f5f1ea;
          "
        >
          ${finalBottom}
        </h2>

        <p
          id="chat-copy-hint"
          style="
            margin: 18px 0 0 0;
            font-size: 0.75rem;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            opacity: 0;
            color: #f5f1ea;
          "
        >
          ${texts[currentLang].bridge.hint}
        </p>
      </div>
    </main>
  `

  const stack = document.querySelector('#chat-stack')
  const copy = document.querySelector('#chat-copy')
  const hint = document.querySelector('#chat-copy-hint')

  let i = 0
  let finished = false
  const delays = [700, 600, 900, 700, 600, 800]

  function createBubble(message) {
    const bubble = document.createElement('div')
    const isChi = message.from === 'Chi'

    bubble.textContent = `${message.from}: ${message.text}`

    bubble.style.maxWidth = isChi ? '260px' : '300px'
    bubble.style.padding = '12px 16px'
    bubble.style.borderRadius = '16px'
    bubble.style.background = 'rgba(255,255,255,0.04)'
    bubble.style.border = '1px solid rgba(255,255,255,0.05)'
    bubble.style.color = '#f5f1ea'
    bubble.style.fontSize = '1rem'
    bubble.style.lineHeight = '1.4'
    bubble.style.opacity = '0'
    bubble.style.backdropFilter = 'blur(4px)'
    bubble.style.webkitBackdropFilter = 'blur(4px)'
    bubble.style.willChange = 'transform, opacity'

    if (isChi) {
      bubble.style.alignSelf = 'flex-start'
      bubble.style.marginLeft = '0'
    } else {
      bubble.style.alignSelf = 'flex-start'
      bubble.style.marginLeft = '18px'
    }

    return bubble
  }

  function showNext() {
    if (i >= messages.length) {
      finished = true

      gsap.timeline()
        .to(stack, {
          opacity: 0.42,
          duration: 0.4,
          ease: 'power2.out'
        })
        .to(copy, {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power3.out'
        }, '-=0.12')
        .to(hint, {
          opacity: 0.28,
          duration: 0.25,
          ease: 'power2.out'
        }, '-=0.15')

      return
    }

    const message = messages[i]
    const isChi = message.from === 'Chi'
    const bubble = createBubble(message)
    stack.appendChild(bubble)

    gsap.fromTo(
      bubble,
      {
        opacity: 0,
        y: 10,
        x: isChi ? -10 : 12
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: i === messages.length - 1 ? 0.55 : 0.38,
        ease: 'power2.out'
      }
    )

    const delay = delays[i] || 750
    i++
    setTimeout(showNext, delay)
  }

  gsap.set(copy, { x: 22 })

  showNext()

  app.addEventListener(
    'click',
    () => {
      if (!finished) return

      gsap.to([stack, copy], {
        opacity: 0,
        y: -12,
        duration: 0.32,
        ease: 'power2.in',
        stagger: 0.04,
        onComplete: next
      })
    },
    { once: true }
  )
}