import gsap from 'gsap'
import { texts } from '../../i18n.js'

export function renderMonthTwoFinal(app, next) {
  const lang = window.__lang || 'es'
  const t = texts[lang].monthTwoFinal

  app.innerHTML = `
    <section class="m2-final">
      <div class="m2-final-glow"></div>

      <div class="m2-final-content">
        <img class="m2-final-photo" src="${t.image}" alt="month 2 final">

        <h2>${t.title}</h2>
        <p>${t.text}</p>

        <button class="m2-final-btn">${t.button}</button>
      </div>

      <div class="m2-final-continued">
        <p>${t.continued}</p>
      </div>
    </section>

    <style>
      .m2-final {
        min-height: 100vh;
        display: grid;
        place-items: center;
        position: relative;
        overflow: hidden;
        padding: 32px;
        background:
          radial-gradient(circle at 50% 15%, rgba(214,185,145,.10), transparent 34%),
          linear-gradient(180deg, #101010, #050505);
        color: #F5F1EA;
      }

      .m2-final-glow {
        position: absolute;
        width: 380px;
        height: 380px;
        border-radius: 999px;
        background: rgba(214,185,145,.08);
        filter: blur(50px);
      }

      .m2-final-content {
        position: relative;
        z-index: 2;
        width: min(620px, 92vw);
        text-align: center;
      }

      .m2-final-photo {
        width: min(360px, 82vw);
        max-height: 52vh;
        object-fit: contain;
        border-radius: 30px;
        display: block;
        margin: auto;
        box-shadow: 0 30px 80px rgba(0,0,0,.45);
      }

      .m2-final-content h2 {
        margin: 34px 0 18px;
        font-size: clamp(3rem, 8vw, 5.8rem);
        line-height: .9;
        letter-spacing: -.06em;
      }

      .m2-final-content p {
        margin: auto;
        max-width: 480px;
        line-height: 1.9;
        color: rgba(245,241,234,.64);
      }

      .m2-final-btn {
        margin-top: 40px;
        padding: 13px 24px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,.08);
        background: rgba(255,255,255,.04);
        color: white;
        cursor: pointer;
        text-transform: uppercase;
        letter-spacing: .22em;
        font-size: .7rem;
      }

      .m2-final-continued {
        position: absolute;
        inset: 0;
        z-index: 4;
        display: grid;
        place-items: center;
        opacity: 0;
        pointer-events: none;
        background: #050505;
      }

      .m2-final-continued p {
        margin: 0;
        font-size: clamp(1.8rem, 6vw, 4rem);
        letter-spacing: -.04em;
        color: rgba(245,241,234,.9);
      }
    </style>
  `

  gsap.from('.m2-final-content', {
    opacity: 0,
    y: 24,
    duration: 1,
    ease: 'power3.out'
  })

  gsap.to('.m2-final-glow', {
    scale: 1.15,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  document.querySelector('.m2-final-btn').onclick = () => {
    const tl = gsap.timeline({
      onComplete: next
    })

    tl.to('.m2-final-content', {
      opacity: 0,
      y: -18,
      duration: 0.65,
      ease: 'power2.inOut'
    })

    tl.to('.m2-final-continued', {
      opacity: 1,
      duration: 0.7,
      ease: 'power2.out'
    })

    tl.fromTo(
      '.m2-final-continued p',
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )

    tl.to('.m2-final-continued p', {
      opacity: 0,
      y: -12,
      duration: 0.7,
      delay: 1.3,
      ease: 'power2.inOut'
    })
  }
}