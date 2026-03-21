import gsap from 'gsap'
import { texts } from '../i18n.js'

export function renderFinal(app) {
  const t = texts.final

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
        id="final-stage"
        style="
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        "
      >
        <div
          id="final-copy"
          style="
            width: min(760px, 88vw);
            opacity: 0;
            transform: translateY(14px) scale(0.98);
          "
        >
          <p
            id="final-top"
            style="
              margin: 0 0 18px 0;
              font-size: 0.82rem;
              letter-spacing: 0.22em;
              text-transform: uppercase;
              opacity: 0.5;
              color: #f5f1ea;
            "
          >
            ${t.top}
          </p>

          <h1
            id="final-title"
            style="
              margin: 0;
              font-size: clamp(3rem, 7vw, 5.8rem);
              line-height: 0.95;
              letter-spacing: -0.06em;
              font-weight: 700;
              color: #f5f1ea;
            "
          >
            ${t.title}
          </h1>

          <p
            id="final-subtitle"
            style="
              margin: 22px auto 0;
              max-width: 20ch;
              font-size: clamp(1.05rem, 2vw, 1.35rem);
              line-height: 1.45;
              opacity: 0.78;
              color: #f5f1ea;
            "
          >
            ${t.subtitle}
          </p>

          <p
            id="final-hint"
            style="
              margin: 34px 0 0 0;
              font-size: 0.74rem;
              letter-spacing: 0.2em;
              text-transform: uppercase;
              opacity: 0;
              color: #f5f1ea;
            "
          >
            ${t.hint}
          </p>

          <button
            id="restart-btn"
            style="
              margin-top: 28px;
              padding: 10px 18px;
              border-radius: 999px;
              border: 1px solid rgba(255,255,255,0.2);
              background: transparent;
              color: #f5f1ea;
              font-size: 0.8rem;
              letter-spacing: 0.08em;
              cursor: pointer;
              opacity: 0;
              transition: 0.3s;
            "
          >
            ${t.button}
          </button>

        </div>
      </div>
    </main>
  `

  const copy = document.querySelector('#final-copy')
  const hint = document.querySelector('#final-hint')
  const btn = document.querySelector('#restart-btn')

  const tl = gsap.timeline()

  tl
    .to(copy, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.9,
      ease: 'power3.out'
    })
    .to(hint, {
      opacity: 0.22,
      duration: 0.5,
      ease: 'power2.out'
    }, '-=0.25')
    .to(btn, {
      opacity: 0.5,
      duration: 0.4,
      ease: 'power2.out'
    }, '-=0.2')

  btn.addEventListener('mouseenter', () => {
    btn.style.opacity = '1'
  })

  btn.addEventListener('mouseleave', () => {
    btn.style.opacity = '0.5'
  })

  btn.addEventListener('click', () => {
    gsap.to(copy, {
      opacity: 0,
      y: -10,
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        window.location.reload()
      }
    })
  })
}