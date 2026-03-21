import gsap from 'gsap'
import { texts } from '../i18n.js'

export function renderConnection(app, next) {
  const currentLang = window.__lang || 'es'
  const t = texts[currentLang].connection

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
        style="
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
        <div
          id="connection-stage"
          style="
            width: min(860px, 88vw);
            height: 100vh;
            position: relative;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          "
        >
          <div
            class="connection-block"
            id="c1"
            style="
              position: absolute;
              width: min(760px, 86vw);
              opacity: 0;
              transform: translateY(18px) scale(1);
              pointer-events: none;
            "
          >
            <p
              class="line overline"
              style="
                margin: 0 0 18px 0;
                font-size: 0.95rem;
                letter-spacing: 0.08em;
                opacity: 0.65;
                color: #f5f1ea;
              "
            >
              ${t.part1[0]}
            </p>

            <h2
              class="line main"
              style="
                margin: 0;
                font-size: clamp(2.7rem, 6vw, 5rem);
                line-height: 0.95;
                letter-spacing: -0.06em;
                font-weight: 700;
                color: #f5f1ea;
              "
            >
              ${t.part1[1]}
            </h2>

            <p
              class="line sub"
              style="
                margin: 16px 0 0 0;
                font-size: clamp(1rem, 1.8vw, 1.18rem);
                line-height: 1.4;
                opacity: 0.78;
                color: #f5f1ea;
              "
            >
              ${t.part1[2]}
            </p>
          </div>

          <div
            class="connection-block"
            id="c2"
            style="
              position: absolute;
              width: min(760px, 86vw);
              opacity: 0;
              transform: translateY(18px) scale(1);
              pointer-events: none;
            "
          >
            <p
              class="line overline"
              style="
                margin: 0 0 18px 0;
                font-size: 0.95rem;
                letter-spacing: 0.08em;
                opacity: 0.65;
                color: #f5f1ea;
              "
            >
              ${t.part2[0]}
            </p>

            <h2
              class="line main"
              style="
                margin: 0;
                font-size: clamp(2.7rem, 6vw, 5rem);
                line-height: 0.95;
                letter-spacing: -0.06em;
                font-weight: 700;
                color: #f5f1ea;
              "
            >
              ${t.part2[1]}
            </h2>

            <p
              class="line sub"
              style="
                margin: 16px 0 0 0;
                font-size: clamp(1rem, 1.8vw, 1.18rem);
                line-height: 1.4;
                opacity: 0.78;
                color: #f5f1ea;
              "
            >
              ${t.part2[2]}
            </p>
          </div>

          <div
            class="connection-block"
            id="c3"
            style="
              position: absolute;
              width: min(760px, 86vw);
              opacity: 0;
              transform: translateY(18px) scale(1);
              pointer-events: none;
            "
          >
            <p
              class="line overline"
              style="
                margin: 0 0 18px 0;
                font-size: 0.95rem;
                letter-spacing: 0.08em;
                opacity: 0.65;
                color: #f5f1ea;
              "
            >
              ${t.part3[0]}
            </p>

            <h2
              class="line main"
              style="
                margin: 0;
                font-size: clamp(2.7rem, 6vw, 5rem);
                line-height: 0.95;
                letter-spacing: -0.06em;
                font-weight: 700;
                color: #f5f1ea;
              "
            >
              ${t.part3[1]}
            </h2>

            <p
              class="line sub"
              style="
                margin: 16px 0 0 0;
                font-size: clamp(1rem, 1.8vw, 1.18rem);
                line-height: 1.4;
                opacity: 0.78;
                color: #f5f1ea;
              "
            >
              ${t.part3[2]}
            </p>
          </div>

          <p
            id="connection-hint"
            style="
              position: absolute;
              bottom: 12vh;
              margin: 0;
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
    </main>
  `

  const c1 = document.querySelector('#c1')
  const c2 = document.querySelector('#c2')
  const c3 = document.querySelector('#c3')
  const hint = document.querySelector('#connection-hint')

  let finished = false
  let leaving = false

  const revealBlock = (selector) => {
    const lines = document.querySelectorAll(`${selector} .line`)

    return gsap.timeline()
      .to(selector, {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: 'power2.out'
      })
      .fromTo(
        lines,
        {
          opacity: 0,
          y: 16
        },
        {
          opacity: (_, target) => {
            if (target.classList.contains('main')) return 1
            if (target.classList.contains('sub')) return 0.78
            return 0.65
          },
          y: 0,
          duration: 0.5,
          stagger: 0.16,
          ease: 'power3.out'
        },
        '-=0.15'
      )
  }

  const parkBlock = (selector, y, opacity, scale = 0.96) => {
    return gsap.timeline()
      .to(selector, {
        y,
        opacity,
        scale,
        duration: 0.7,
        ease: 'power2.inOut'
      })
  }

  const tl = gsap.timeline({
    onComplete: () => {
      finished = true
    }
  })

  tl
    .add(revealBlock('#c1'))
    .to({}, { duration: 0.8 })
    .add(parkBlock('#c1', -360, 0.1, 0.72))

    .add(revealBlock('#c2'))
    .to({}, { duration: 0.9 })
    .add(parkBlock('#c2', -170, 0.16, 0.82))

    .add(revealBlock('#c3'))
    .to('#c3', {
      y: 120,
      duration: 0.7,
      ease: 'power2.out'
    })
    .to({}, { duration: 0.9 })
    .to(hint, {
      opacity: 0.28,
      duration: 0.35,
      ease: 'power2.out'
    }, '-=0.15')

  app.addEventListener('click', () => {
    if (!finished || leaving) return

    leaving = true

    gsap.to([c1, c2, c3, hint], {
      opacity: 0,
      y: '-=10',
      duration: 0.35,
      ease: 'power2.in',
      stagger: 0.04,
      onComplete: next
    })
  })
}