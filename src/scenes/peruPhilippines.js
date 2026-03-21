import { texts } from '../i18n.js'
import gsap from 'gsap'

export function renderPeruPhilippines(app, next) {
  const currentLang = window.__lang || 'es'
  const {
    leftLabel,
    rightLabel,
    leftText,
    rightText,
    finalTop,
    finalBottom
  } = texts[currentLang].peru

  const finalWords = finalBottom
    .split(' ')
    .map(
      (word) => `
        <span
          class="pp-word"
          style="
            display: inline-block;
            opacity: 0;
            transform: translateY(18px);
            will-change: transform, opacity;
          "
        >
          ${word}&nbsp;
        </span>
      `
    )
    .join('')

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
        id="pp-left"
        style="
          position: absolute;
          left: 7vw;
          top: 34%;
          transform: translateY(-50%);
          max-width: 420px;
          text-align: left;
        "
      >
        <p
          style="
            margin: 0 0 12px 0;
            font-size: 0.85rem;
            letter-spacing: 0.22em;
            text-transform: uppercase;
            opacity: 0.45;
          "
        >
          ${leftLabel}
        </p>

        <h2
          style="
            margin: 0;
            max-width: 10ch;
            font-size: clamp(2.2rem, 3.5vw, 3.6rem);
            line-height: 1;
            letter-spacing: -0.045em;
            font-weight: 600;
            color: #f5f1ea;
          "
        >
          ${leftText}
        </h2>
      </div>

      <div
        id="pp-right"
        style="
          position: absolute;
          right: 7vw;
          top: 54%;
          transform: translateY(-50%);
          max-width: 420px;
          text-align: right;
        "
      >
        <p
          style="
            margin: 0 0 12px 0;
            font-size: 0.85rem;
            letter-spacing: 0.22em;
            text-transform: uppercase;
            opacity: 0.45;
          "
        >
          ${rightLabel}
        </p>

        <h2
          style="
            margin: 0;
            max-width: 10ch;
            margin-left: auto;
            font-size: clamp(2.2rem, 3.5vw, 3.6rem);
            line-height: 1;
            letter-spacing: -0.045em;
            font-weight: 600;
            color: #f5f1ea;
          "
        >
          ${rightText}
        </h2>
      </div>

      <div
        id="pp-bottom"
        style="
          position: absolute;
          left: 50%;
          bottom: 12%;
          transform: translateX(-50%);
          text-align: center;
          width: min(90vw, 900px);
          opacity: 0;
        "
      >
        <p
          id="pp-top"
          style="
            margin: 0 0 12px 0;
            font-size: 0.9rem;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            opacity: 0;
          "
        >
          ${finalTop}
        </p>

        <h1
          id="pp-final-title"
          style="
            margin: 0;
            max-width: 12ch;
            margin-left: auto;
            margin-right: auto;
            font-size: clamp(2.6rem, 5vw, 4.2rem);
            line-height: 1;
            letter-spacing: -0.04em;
            font-weight: 700;
            color: #f5f1ea;
          "
        >
          ${finalWords}
        </h1>

        <p
          id="pp-hint"
          style="
            margin: 18px 0 0 0;
            font-size: 0.75rem;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            opacity: 0;
          "
        >
          ${texts[currentLang].bridge.hint}
        </p>
      </div>
    </main>
  `

  const left = document.querySelector('#pp-left')
  const right = document.querySelector('#pp-right')
  const bottom = document.querySelector('#pp-bottom')
  const top = document.querySelector('#pp-top')
  const hint = document.querySelector('#pp-hint')
  const words = document.querySelectorAll('.pp-word')

  gsap.set(left, { opacity: 0, y: 14 })
  gsap.set(right, { opacity: 0, y: 14 })

  const tl = gsap.timeline()

  tl
    .to(left, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
    .to(right, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '+=0.1')
    .to(bottom, {
      opacity: 1,
      duration: 0.35,
      ease: 'power2.out'
    }, '+=0.18')
    .to(top, {
      opacity: 0.5,
      duration: 0.35,
      ease: 'power2.out'
    }, '<')
    .to(
      words,
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: 'power3.out',
        stagger: 0.09
      },
      '-=0.1'
    )
    .to(hint, {
      opacity: 0.35,
      duration: 0.3,
      ease: 'power2.out'
    }, '-=0.1')

  app.addEventListener(
    'click',
    () => {
      gsap.to([left, right, bottom], {
        opacity: 0,
        y: -12,
        duration: 0.35,
        ease: 'power2.in',
        stagger: 0.03,
        onComplete: next
      })
    },
    { once: true }
  )
}