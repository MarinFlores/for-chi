import gsap from 'gsap'
import { texts } from '../i18n.js'
import { renderSecret } from './secret.js'

export function renderHug(app, next) {
  const currentLang = window.__lang || 'es'
  const t = texts[currentLang].hug

  app.innerHTML = `
    <main
      id="hug-main"
      style="
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        cursor: pointer;
      "
    >
      <div
        style="
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at center, rgba(255,255,255,0.06), transparent 42%),
            linear-gradient(180deg, #0d0d0f 0%, #050505 100%);
        "
      ></div>

      <div
        id="hug-stage"
        style="
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px 20px;
        "
      >
        <div
          id="hug-grid"
          style="
            width: min(1100px, 100%);
            display: grid;
            grid-template-columns: 1fr 1.1fr;
            gap: 44px;
            align-items: center;
          "
        >
          <div id="hug-copy">
            <p
              id="hug-top"
              style="
                margin: 0 0 14px 0;
                font-size: 0.82rem;
                letter-spacing: 0.2em;
                text-transform: uppercase;
                color: #f5f1ea;
                opacity: 0;
                transform: translateY(10px);
              "
            >
              ${t.top}
            </p>

            <h1
              id="hug-title"
              style="
                margin: 0;
                font-size: clamp(2.5rem, 6vw, 5rem);
                line-height: 0.95;
                letter-spacing: -0.055em;
                font-weight: 700;
                color: #f5f1ea;
                max-width: 10ch;
                opacity: 0;
                transform: translateY(18px);
              "
            >
              ${t.title}
            </h1>

            <p
              id="hug-subtitle"
              style="
                margin: 18px 0 0 0;
                max-width: 28ch;
                font-size: clamp(1rem, 2vw, 1.18rem);
                line-height: 1.55;
                color: rgba(245,241,234,0.78);
                opacity: 0;
                transform: translateY(12px);
              "
            >
              ${t.subtitle}
            </p>

            <p
              id="hug-line"
              style="
                margin: 28px 0 0 0;
                font-size: clamp(1.15rem, 2.3vw, 1.55rem);
                line-height: 1.45;
                color: #f5f1ea;
                opacity: 0;
                transform: translateY(12px);
              "
            >
              ${t.line}
            </p>

            <p
              id="hug-hint"
              style="
                margin: 20px 0 0 0;
                font-size: 0.74rem;
                letter-spacing: 0.18em;
                text-transform: uppercase;
                color: #f5f1ea;
                opacity: 0;
              "
            >
              ${texts[currentLang].bridge.hint}
            </p>
          </div>

          <div
            id="hug-visual"
            style="
              opacity: 0;
              transform: translateY(26px) scale(1.04);
              display: flex;
              justify-content: center;
            "
          >
            <div
              id="hug-frame"
              style="
                width: min(430px, 78vw);
                aspect-ratio: 4 / 5;
                border-radius: 28px;
                overflow: hidden;
                box-shadow: 0 24px 70px rgba(0,0,0,0.4);
                background: rgba(255,255,255,0.03);
              "
            >
              <img
                id="hug-image"
                src="/assets/hug-fusion.png"
                alt="A dreamlike hug"
                style="
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  display: block;
                  opacity: 0;
                  transform: scale(1.08);
                "
              />
            </div>
          </div>
        </div>
      </div>

      <button
        id="hug-secret"
        aria-label="secret"
        style="
          position: fixed;
          left: 24px;
          bottom: 24px;
          z-index: 60;
          width: 46px;
          height: 46px;
          border-radius: 999px;
          border: 0;
          background: rgba(255,255,255,0.08);
          color: rgba(245,241,234,0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.28);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          line-height: 1;
          opacity: 0;
          cursor: pointer;
          transition:
            transform 0.2s ease,
            background 0.2s ease,
            opacity 0.2s ease;
        "
      >
        ♡
      </button>
    </main>
  `

  const grid = document.querySelector('#hug-grid')
  const copy = document.querySelector('#hug-copy')
  const top = document.querySelector('#hug-top')
  const title = document.querySelector('#hug-title')
  const subtitle = document.querySelector('#hug-subtitle')
  const line = document.querySelector('#hug-line')
  const hint = document.querySelector('#hug-hint')
  const visual = document.querySelector('#hug-visual')
  const image = document.querySelector('#hug-image')
  const secret = document.querySelector('#hug-secret')

  const isMobile = window.innerWidth <= 768

  if (isMobile) {
    grid.style.gridTemplateColumns = '1fr'
    grid.style.gap = '26px'
    copy.style.textAlign = 'center'
    title.style.maxWidth = '12ch'
    title.style.marginLeft = 'auto'
    title.style.marginRight = 'auto'
    subtitle.style.marginLeft = 'auto'
    subtitle.style.marginRight = 'auto'
  }

  const tl = gsap.timeline()

  tl.to(top, {
    opacity: 0.5,
    y: 0,
    duration: 0.45,
    ease: 'power2.out'
  })
    .to(
      title,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      },
      '+=0.15'
    )
    .to(
      subtitle,
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: 'power2.out'
      },
      '+=0.25'
    )
    .to(
      visual,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.75,
        ease: 'power3.out'
      },
      '+=0.4'
    )
    .to(
      image,
      {
        opacity: 1,
        scale: 1,
        duration: 1.1,
        ease: 'power3.out'
      },
      '-=0.3'
    )
    .to(
      line,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      },
      '+=0.5'
    )
    .to(
      hint,
      {
        opacity: 0.32,
        duration: 0.35,
        ease: 'power2.out'
      },
      '+=0.2'
    )

  let canAdvance = false
  setTimeout(() => {
    canAdvance = true
  }, 1400)

  // Aparece clarito -> brillo -> se apaga casi por completo
  const secretTl = gsap.timeline({ delay: 1.9 })

  secretTl
    .to(secret, {
      opacity: 1,
      scale: 1,
      duration: 0.28,
      ease: 'power2.out'
    })
    .to(secret, {
      scale: 1.12,
      duration: 0.22,
      repeat: 1,
      yoyo: true,
      ease: 'power1.inOut'
    })
    .to(secret, {
      opacity: 0.06,
      duration: 1.2,
      ease: 'power2.out'
    }, '+=0.45')

  // Si busca con el mouse por la zona izquierda inferior, revive
  const revealSecret = () => {
    gsap.to(secret, {
      opacity: 0.9,
      duration: 0.18,
      ease: 'power2.out'
    })
  }

  const hideSecret = () => {
    gsap.to(secret, {
      opacity: 0.08,
      duration: 0.35,
      ease: 'power2.out'
    })
  }

  window.addEventListener('mousemove', handleMouseMove)

  function handleMouseMove(e) {
    if (isMobile) return

    const nearLeft = e.clientX < 160
    const nearBottom = e.clientY > window.innerHeight - 140

    if (nearLeft && nearBottom) {
      revealSecret()
    } else {
      hideSecret()
    }
  }

  secret.addEventListener('mouseenter', () => {
    secret.style.transform = 'scale(1.08)'
    secret.style.background = 'rgba(255,255,255,0.12)'
    revealSecret()
  })

  secret.addEventListener('mouseleave', () => {
    secret.style.transform = 'scale(1)'
    secret.style.background = 'rgba(255,255,255,0.08)'
    hideSecret()
  })

  secret.addEventListener('click', (e) => {
    e.stopPropagation()
    if (!canAdvance) return

    window.removeEventListener('mousemove', handleMouseMove)

    gsap.to([top, title, subtitle, line, visual, hint, secret], {
      opacity: 0,
      duration: 0.3,
      onComplete: () => renderSecret(app, next)
    })
  })

  app.addEventListener(
    'click',
    () => {
      if (!canAdvance) return

      window.removeEventListener('mousemove', handleMouseMove)

      gsap.to([top, title, subtitle, line, visual, hint, secret], {
        opacity: 0,
        duration: 0.3,
        onComplete: next
      })
    },
    { once: true }
  )
}