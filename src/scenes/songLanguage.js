import gsap from 'gsap'
import { texts } from '../i18n.js'
import { showSongSecret } from './songSecret.js'

export function renderSongLanguage(app, next) {
  const currentLang = window.__lang || 'es'
  const t = texts[currentLang].songLanguage

  const positions = [
    { top: 12, left: 10, rotate: -10 },
    { top: 16, left: 32, rotate: -4 },
    { top: 12, left: 58, rotate: 6 },
    { top: 18, left: 84, rotate: 10 },

    { top: 46, left: 12, rotate: -8 },
    { top: 76, left: 26, rotate: 6 },
    { top: 74, left: 70, rotate: -6 },
    { top: 58, left: 88, rotate: 8 }
  ]

  const songs = t.songs
    .map((song, index) => {
      const pos = positions[index] || {
        top: 20 + (index % 4) * 12,
        left: 15 + (index % 5) * 16,
        rotate: index % 2 === 0 ? -6 : 6
      }

      const sentLabel =
        song.sent === 'Machy'
          ? (currentLang === 'es' ? 'de Machy' : 'from Machy')
          : song.sent === 'Chi'
            ? (currentLang === 'es' ? 'de Chi' : 'from Chi')
            : ''

      const sentOpacity = song.sent === 'Chi' ? 0.78 : 0.58

      return `
        <div
          class="song-card"
          data-index="${index}"
          data-top="${pos.top}"
          data-left="${pos.left}"
          data-rotate="${pos.rotate}"
          style="
            position: absolute;
            width: min(165px, 20vw);
            aspect-ratio: 1 / 1;
            top: ${pos.top}%;
            left: ${pos.left}%;
            transform: translate(-50%, -50%) rotate(${pos.rotate}deg) scale(0.9);
            opacity: 0;
            border-radius: 24px;
            overflow: hidden;
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.08);
            box-shadow: 0 20px 60px rgba(0,0,0,0.28);
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
            user-select: none;
            -webkit-user-select: none;
            touch-action: none;
            cursor: pointer;
            z-index: 4;
          "
        >
          <div
            style="
              position: absolute;
              inset: 0;
              background:
                linear-gradient(to top, rgba(0,0,0,0.78), rgba(0,0,0,0.12)),
                radial-gradient(circle at 30% 20%, rgba(255,255,255,0.16), transparent 42%),
                ${song.gradient};
            "
          ></div>

          <div
            style="
              position: absolute;
              left: 14px;
              right: 14px;
              bottom: 12px;
              text-align: left;
            "
          >
            <p
              style="
                margin: 0 0 4px 0;
                font-size: 0.66rem;
                letter-spacing: 0.14em;
                text-transform: uppercase;
                opacity: 0.52;
                color: #f5f1ea;
              "
            >
              ${song.platform}
            </p>

            <h3
              style="
                margin: 0;
                font-size: clamp(0.95rem, 1.4vw, 1.05rem);
                line-height: 1.08;
                font-weight: 650;
                letter-spacing: -0.03em;
                color: #f5f1ea;
              "
            >
              ${song.title}
            </h3>

            <p
              style="
                margin: 5px 0 0 0;
                font-size: 0.78rem;
                line-height: 1.2;
                opacity: 0.72;
                color: #f5f1ea;
              "
            >
              ${song.artist}
            </p>

            ${
              sentLabel
                ? `
            <p
              style="
                margin: 7px 0 0 0;
                font-size: 0.64rem;
                letter-spacing: 0.08em;
                text-transform: uppercase;
                opacity: ${sentOpacity};
                color: #f5f1ea;
              "
            >
              ${sentLabel}
            </p>`
                : ''
            }
          </div>
        </div>
      `
    })
    .join('')

  app.innerHTML = `
    <main
      id="song-language-scene"
      style="
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
      "
    >
      <div
        style="
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at center, rgba(255,255,255,0.04), transparent 44%),
            radial-gradient(circle at center, #141414 0%, #080808 55%, #000000 100%);
        "
      ></div>

      <div
        id="songs-overlay"
        style="
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background:
            linear-gradient(to bottom, rgba(0,0,0,0.42), rgba(0,0,0,0.18) 25%, rgba(0,0,0,0.42));
        "
      ></div>

      <div
        id="songs-stage"
        style="
          position: relative;
          z-index: 3;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 24px;
          pointer-events: none;
        "
      >
        <div
          style="
            width: min(680px, 82vw);
            display: flex;
            flex-direction: column;
            align-items: center;
          "
        >
          <p
            id="songs-top"
            style="
              margin: 0 0 18px 0;
              font-size: 0.82rem;
              letter-spacing: 0.22em;
              text-transform: uppercase;
              opacity: 0;
              color: #f5f1ea;
            "
          >
            ${t.top}
          </p>

          <h2
            id="songs-title"
            style="
              margin: 0;
              font-size: clamp(2.7rem, 5.8vw, 5rem);
              line-height: 0.95;
              letter-spacing: -0.06em;
              font-weight: 700;
              color: #f5f1ea;
              opacity: 0;
              transform: translateY(12px);
            "
          >
            ${t.title}
          </h2>

          <p
            id="songs-sub"
            style="
              margin: 18px 0 0 0;
              max-width: 560px;
              font-size: clamp(1rem, 1.8vw, 1.12rem);
              line-height: 1.45;
              opacity: 0;
              color: #f5f1ea;
            "
          >
            ${t.subtitle}
          </p>

          <p
            id="songs-hint"
            style="
              margin: 24px 0 0 0;
              font-size: 0.75rem;
              letter-spacing: 0.18em;
              text-transform: uppercase;
              opacity: 0;
              color: #f5f1ea;
              pointer-events: none;
            "
          >
            ${texts[currentLang].bridge.hint}
          </p>
        </div>
      </div>

      <div
        id="songs-bg"
        style="
          position: absolute;
          inset: 0;
          z-index: 4;
        "
      >
        ${songs}
      </div>
    </main>
  `

  const scene = app.querySelector('#song-language-scene')
  const cards = Array.from(app.querySelectorAll('.song-card'))
  const top = app.querySelector('#songs-top')
  const title = app.querySelector('#songs-title')
  const sub = app.querySelector('#songs-sub')
  const hint = app.querySelector('#songs-hint')

  let finished = false
  let leaving = false
  let secretOpen = false
  let pressTimer = null
  let longPressTriggered = false

  const entrance = gsap.timeline({
    onComplete: () => {
      finished = true
    }
  })

  entrance
    .to(top, {
      opacity: 0.58,
      duration: 0.5,
      ease: 'power2.out'
    })
    .to(title, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out'
    }, '-=0.15')
    .to(sub, {
      opacity: 0.78,
      duration: 0.65,
      ease: 'power2.out'
    }, '-=0.35')
    .to(cards, {
      opacity: 0.82,
      scale: 1,
      duration: 0.65,
      stagger: 0.08,
      ease: 'power3.out'
    }, '-=0.35')
    .to(cards, {
      y: (i) => (i % 2 === 0 ? -6 : 6),
      duration: 1.6,
      stagger: 0.03,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: 1
    }, '-=0.15')
    .to(hint, {
      opacity: 0.28,
      duration: 0.35,
      ease: 'power2.out'
    }, '-=0.3')

  function clearPressTimer() {
    if (pressTimer) {
      clearTimeout(pressTimer)
      pressTimer = null
    }
  }

  cards.forEach(card => {
    const startPress = (e) => {
      e.preventDefault()
      e.stopPropagation()

      if (!finished || leaving || secretOpen) return

      longPressTriggered = false
      clearPressTimer()

      pressTimer = setTimeout(() => {
        longPressTriggered = true
        secretOpen = true

        showSongSecret(
          scene,
          cards,
          [top, title, sub, hint],
          () => {
            secretOpen = false
            setTimeout(() => {
              longPressTriggered = false
            }, 60)
          }
        )
      }, 3000)
    }

    const cancelPress = (e) => {
      e.preventDefault()
      e.stopPropagation()
      clearPressTimer()
    }

    const stopClick = (e) => {
      e.preventDefault()
      e.stopPropagation()
    }

    card.addEventListener('pointerdown', startPress)
    card.addEventListener('pointerup', cancelPress)
    card.addEventListener('pointerleave', cancelPress)
    card.addEventListener('pointercancel', cancelPress)
    card.addEventListener('click', stopClick)
  })

  scene.addEventListener('click', (e) => {
    if (!finished || leaving || secretOpen || longPressTriggered) return

    if (e.target.closest('.song-card')) return

    leaving = true

    gsap.to([top, title, sub, hint, ...cards], {
      opacity: 0,
      y: '-=10',
      duration: 0.38,
      stagger: 0.03,
      ease: 'power2.in',
      onComplete: next
    })
  })
}