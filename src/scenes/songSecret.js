import gsap from 'gsap'
import { texts } from '../i18n.js'

export function showSongSecret(sceneRoot, cards, textNodes, onDone) {
  const currentLang = window.__lang || 'es'
  const secret = texts[currentLang].songLanguage.secret

  const overlay = document.createElement('div')
  overlay.id = 'song-secret-overlay'
  overlay.innerHTML = `
    <div
      style="
        position: absolute;
        inset: 0;
        z-index: 30;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
      "
    >
      <div
        style="
          position: relative;
          width: min(760px, 88vw);
          height: min(520px, 70vh);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        "
      >
        <div
          id="song-secret-copy"
          style="
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #f5f1ea;
            padding: 20px;
          "
        >
          <p
            id="song-secret-line1"
            style="
              margin: 0;
              font-size: clamp(1.8rem, 4vw, 3.2rem);
              line-height: 0.95;
              letter-spacing: -0.04em;
              font-weight: 600;
              opacity: 0;
              transform: translateY(18px);
              text-shadow: 0 8px 30px rgba(0,0,0,0.35);
            "
          >
            ${secret.line1}
          </p>

          <p
            id="song-secret-line2"
            style="
              margin: 10px 0 0 0;
              font-size: clamp(0.95rem, 1.6vw, 1.1rem);
              line-height: 1.3;
              letter-spacing: 0.02em;
              opacity: 0;
              transform: translateY(12px);
              color: rgba(245,241,234,0.82);
            "
          >
            ${secret.line2}
          </p>

          <p
            id="song-secret-sign"
            style="
              margin: 18px 0 0 0;
              font-size: 0.92rem;
              letter-spacing: 0.38em;
              opacity: 0;
              color: rgba(245,241,234,0.62);
            "
          >
            ${secret.sign}
          </p>

          <p
            id="song-secret-heart"
            style="
              margin: 10px 0 0 0;
              font-size: 1.15rem;
              opacity: 0;
              color: rgba(245,241,234,0.50);
              transform: scale(0.85);
            "
          >
            ${secret.symbol || '♡'}
          </p>
        </div>
      </div>
    </div>
  `

  sceneRoot.appendChild(overlay)

  const line1 = overlay.querySelector('#song-secret-line1')
  const line2 = overlay.querySelector('#song-secret-line2')
  const sign = overlay.querySelector('#song-secret-sign')
  const heart = overlay.querySelector('#song-secret-heart')

  gsap.to(cards, {
    opacity: 0.16,
    scale: 0.92,
    filter: 'blur(4px)',
    duration: 0.7,
    ease: 'power2.out'
  })

  gsap.to(textNodes, {
    opacity: 0.08,
    filter: 'blur(4px)',
    duration: 0.6,
    ease: 'power2.out'
  })

  const tl = gsap.timeline()

  tl.to(cards, {
    left: (i) => `calc(50% + ${(i % 2 === 0 ? -1 : 1) * (30 + i * 8)}px)`,
    top: (i) => `calc(50% + ${(-60 + i * 18)}px)`,
    rotation: (i) => `${(i % 2 === 0 ? -1 : 1) * (4 + i)}deg`,
    opacity: 0.2,
    scale: 0.9,
    duration: 1,
    stagger: 0.04,
    ease: 'power3.inOut'
  })
    .to(line1, {
      opacity: 1,
      y: 0,
      duration: 0.75,
      ease: 'power3.out'
    }, '-=0.25')
    .to(line2, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out'
    }, '-=0.4')
    .to(sign, {
      opacity: 1,
      duration: 0.55,
      ease: 'power2.out'
    }, '-=0.2')
    .to(heart, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.2')

  setTimeout(() => {
    gsap.to(overlay, {
      opacity: 0,
      duration: 0.7,
      ease: 'power2.out',
      onComplete: () => {
        overlay.remove()
      }
    })

    gsap.to(cards, {
      left: (i) => `${cards[i].dataset.left}%`,
      top: (i) => `${cards[i].dataset.top}%`,
      rotation: (i) => `${cards[i].dataset.rotate}deg`,
      scale: 1,
      opacity: 0.82,
      filter: 'blur(0px)',
      duration: 0.9,
      stagger: 0.03,
      ease: 'power3.inOut'
    })

    gsap.to(textNodes, {
      opacity: (i, el) => {
        if (el.id === 'songs-top') return 0.58
        if (el.id === 'songs-title') return 1
        if (el.id === 'songs-sub') return 0.78
        return 0.28
      },
      filter: 'blur(0px)',
      duration: 0.65,
      ease: 'power2.out'
    })

    if (onDone) {
      setTimeout(onDone, 900)
    }
  }, 3400)
}