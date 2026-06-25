import gsap from 'gsap'
import { texts } from '../../i18n.js'

export function renderMonthTwoIntro(app, next) {
  const lang = window.__lang || 'es'
  const t = texts[lang].monthTwoIntro

  app.innerHTML = `
    <section class="month-two-intro">
      <div class="m2-intro-glow"></div>

      <div class="m2-intro-content">
        <p class="m2-intro-kicker">${t.kicker}</p>
        <h1>${t.title}</h1>
        <p class="m2-intro-text">${t.text}</p>
        <button class="m2-intro-btn">${t.button}</button>
      </div>
    </section>

    <style>
      .month-two-intro {
        min-height: 100vh;
        position: relative;
        overflow: hidden;
        display: grid;
        place-items: center;
        padding: 32px;
        background:
          radial-gradient(circle at 50% 20%, rgba(214,185,145,.13), transparent 35%),
          radial-gradient(circle at 15% 80%, rgba(255,255,255,.05), transparent 28%),
          linear-gradient(180deg, #111111 0%, #050505 100%);
        color: rgba(245,241,234,.94);
      }

      .m2-intro-glow {
        position: absolute;
        width: 360px;
        height: 360px;
        border-radius: 999px;
        background: rgba(214,185,145,.08);
        filter: blur(45px);
      }

      .m2-intro-content {
        position: relative;
        z-index: 2;
        width: min(92vw, 720px);
        text-align: center;
      }

      .m2-intro-kicker {
        margin: 0 0 22px;
        font-size: .72rem;
        letter-spacing: .34em;
        text-transform: uppercase;
        color: rgba(245,241,234,.42);
      }

      .m2-intro-content h1 {
        margin: 0;
        font-size: clamp(3.4rem, 9vw, 7rem);
        line-height: .88;
        letter-spacing: -.065em;
        font-weight: 600;
      }

      .m2-intro-text {
        margin: 30px auto 0;
        max-width: 520px;
        font-size: clamp(.98rem, 2vw, 1.08rem);
        line-height: 1.85;
        color: rgba(245,241,234,.62);
      }

      .m2-intro-btn {
        margin-top: 38px;
        padding: 13px 24px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,.1);
        background: rgba(255,255,255,.04);
        color: rgba(245,241,234,.76);
        cursor: pointer;
        font-size: .7rem;
        letter-spacing: .22em;
        text-transform: uppercase;
      }
    </style>
  `

  gsap.from('.m2-intro-content', {
    opacity: 0,
    y: 24,
    duration: 1,
    ease: 'power3.out'
  })

  gsap.to('.m2-intro-glow', {
    scale: 1.16,
    opacity: 0.7,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  document.querySelector('.m2-intro-btn').addEventListener('click', () => {
    gsap.to('.m2-intro-content', {
      opacity: 0,
      y: -18,
      duration: 0.7,
      ease: 'power2.inOut',
      onComplete: next
    })
  })
}