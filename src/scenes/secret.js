import gsap from 'gsap'
import { texts } from '../i18n.js'

export function renderSecret(app, next) {
  const currentLang = window.__lang || 'es'
  const t = texts[currentLang].secret

  app.innerHTML = `
    <main
      id="secret-main"
      style="
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background:
          radial-gradient(circle at center, rgba(255,255,255,0.05), transparent 42%),
          linear-gradient(180deg, #0d0d0f 0%, #050505 100%);
        color: #f5f1ea;
        cursor: pointer;
      "
    >
      <div
        style="
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        "
      >
        <div
          id="secret-content"
          style="
            text-align: center;
            max-width: 760px;
          "
        >
          <p class="secret-top">${t.top}</p>
          <h1 class="secret-title">${t.title}</h1>
          <p class="secret-subtitle">${t.subtitle}</p>
          <p class="secret-line">${t.line}</p>
          <p id="secret-hint">${texts[currentLang].bridge.hint}</p>
        </div>
      </div>
    </main>

    <style>
      .secret-top {
        margin: 0 0 14px 0;
        font-size: 0.82rem;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: rgba(245, 241, 234, 0.5);
        opacity: 0;
        transform: translateY(10px);
      }

      .secret-title {
        margin: 0;
        font-size: clamp(2.3rem, 5vw, 4.4rem);
        line-height: 0.98;
        letter-spacing: -0.05em;
        font-weight: 700;
        color: #f5f1ea;
        opacity: 0;
        transform: translateY(14px);
      }

      .secret-subtitle {
        margin: 18px auto 0;
        max-width: 28ch;
        font-size: clamp(1rem, 2vw, 1.18rem);
        line-height: 1.6;
        color: rgba(245, 241, 234, 0.75);
        opacity: 0;
        transform: translateY(12px);
      }

      .secret-line {
        margin: 32px auto 0;
        max-width: 24ch;
        font-size: clamp(1.3rem, 2.6vw, 1.8rem);
        line-height: 1.45;
        color: #ffffff;
        opacity: 0;
        transform: translateY(12px);
      }

      #secret-hint {
        margin: 22px 0 0 0;
        font-size: 0.74rem;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: #f5f1ea;
        opacity: 0;
      }
    </style>
  `

  const top = document.querySelector('.secret-top')
  const title = document.querySelector('.secret-title')
  const subtitle = document.querySelector('.secret-subtitle')
  const line = document.querySelector('.secret-line')
  const hint = document.querySelector('#secret-hint')

  const tl = gsap.timeline()

  tl.to(top, { opacity: 1, y: 0, duration: 0.45 })

    .to(title, { opacity: 1, y: 0, duration: 0.7 }, '+=0.15')

    .to(subtitle, { opacity: 1, y: 0, duration: 0.6 }, '+=0.3')

    .to(line, { opacity: 1, y: 0, duration: 0.8 }, '+=0.5')

    .to(line, {
      scale: 1.02,
      duration: 1.2,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: 1
    }, '+=0.2')

    .to(hint, { opacity: 0.28, duration: 0.3 }, '+=0.2')

  let canAdvance = false
  setTimeout(() => (canAdvance = true), 1400)

  app.addEventListener(
    'click',
    () => {
      if (!canAdvance) return

      const exitTl = gsap.timeline({
        onComplete: next
      })

      exitTl
        .to(hint, { opacity: 0, duration: 0.15 })
        .to(
          [top, title, subtitle, line],
          {
            opacity: 0,
            y: -10,
            duration: 0.28,
            stagger: 0.05
          },
          0
        )
    },
    { once: true }
  )
}