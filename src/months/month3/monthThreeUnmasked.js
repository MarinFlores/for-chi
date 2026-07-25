import gsap from 'gsap'
import { content } from '../../data/content.js'

export function renderMonthThreeUnmasked(app, next) {
  const lang = window.__lang || 'es'
  const t = content[lang].monthThreeUnmasked

  app.innerHTML = `
    <section class="m3-unmasked">
      <div class="m3-unmasked__background" aria-hidden="true">
        <div class="m3-unmasked__glow m3-unmasked__glow--one"></div>
        <div class="m3-unmasked__glow m3-unmasked__glow--two"></div>
        <div class="m3-unmasked__grain"></div>
      </div>

      <div class="m3-unmasked__content">
        <div class="m3-unmasked__opening">
          <p class="m3-unmasked__opening-line">
            ${t.opening1}
          </p>

          <p class="m3-unmasked__opening-line">
            ${t.opening2}
          </p>

          <p class="m3-unmasked__opening-line m3-unmasked__opening-line--main">
            ${t.opening3}
          </p>
        </div>

        <div class="m3-unmasked__memories">
          <p class="m3-unmasked__memory">${t.memory1}</p>
          <p class="m3-unmasked__memory">${t.memory2}</p>
          <p class="m3-unmasked__memory">${t.memory3}</p>
          <p class="m3-unmasked__memory">${t.memory4}</p>
          <p class="m3-unmasked__memory m3-unmasked__memory--final">
            ${t.memory5}
          </p>
        </div>

        <div class="m3-unmasked__reflection">
          <p class="m3-unmasked__reflection-line">
            ${t.reflection1}
          </p>

          <div class="m3-unmasked__divider"></div>

          <p class="m3-unmasked__reflection-line m3-unmasked__reflection-line--highlight">
            ${t.reflection2}
          </p>
        </div>

        <button class="m3-unmasked__button" type="button">
          ${t.button}
        </button>
      </div>
    </section>

    <style>
      .m3-unmasked {
        position: relative;
        width: 100%;
        min-height: 100svh;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px 22px;
        box-sizing: border-box;
        color: #ffffff;
        background:
          radial-gradient(
            circle at 50% 45%,
            rgba(193, 160, 140, 0.07),
            transparent 38%
          ),
          linear-gradient(
            145deg,
            #080808 0%,
            #11100f 52%,
            #090909 100%
          );
      }

      .m3-unmasked__background {
        position: absolute;
        inset: 0;
        overflow: hidden;
        pointer-events: none;
      }

      .m3-unmasked__glow {
        position: absolute;
        border-radius: 50%;
        filter: blur(120px);
        opacity: 0.12;
      }

      .m3-unmasked__glow--one {
        width: 380px;
        height: 380px;
        top: -180px;
        left: -120px;
        background: #b99b89;
      }

      .m3-unmasked__glow--two {
        width: 320px;
        height: 320px;
        right: -130px;
        bottom: -140px;
        background: #715b51;
      }

      .m3-unmasked__grain {
        position: absolute;
        inset: 0;
        opacity: 0.16;
        background-image:
          linear-gradient(
            rgba(255, 255, 255, 0.015) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.015) 1px,
            transparent 1px
          );
        background-size: 52px 52px;
      }

      .m3-unmasked__content {
        position: relative;
        z-index: 2;
        width: min(760px, 100%);
        min-height: 520px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
      }

      .m3-unmasked__opening,
      .m3-unmasked__memories,
      .m3-unmasked__reflection {
        position: absolute;
        width: 100%;
      }

      .m3-unmasked__opening-line,
      .m3-unmasked__memory,
      .m3-unmasked__reflection-line {
        margin: 0;
      }

      .m3-unmasked__opening-line {
        color: rgba(255, 255, 255, 0.68);
        font-size: clamp(21px, 4.5vw, 34px);
        font-weight: 300;
        line-height: 1.45;
        visibility: hidden;
      }

      .m3-unmasked__opening-line--main {
        color: rgba(255, 255, 255, 0.96);
        font-size: clamp(31px, 7vw, 54px);
        line-height: 1.2;
      }

      .m3-unmasked__memory {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgba(255, 255, 255, 0.72);
        font-size: clamp(23px, 5vw, 39px);
        font-weight: 300;
        line-height: 1.4;
        visibility: hidden;
      }

      .m3-unmasked__memory--final {
        color: rgba(255, 255, 255, 0.98);
        font-size: clamp(29px, 6vw, 48px);
      }

      .m3-unmasked__reflection {
        display: none;
      }

      .m3-unmasked__reflection-line {
        color: rgba(255, 255, 255, 0.66);
        font-size: clamp(21px, 4.5vw, 34px);
        font-weight: 300;
        line-height: 1.5;
        white-space: pre-line;
      }

      .m3-unmasked__reflection-line--highlight {
        color: rgba(255, 255, 255, 0.98);
        font-size: clamp(29px, 6vw, 48px);
        line-height: 1.3;
      }

      .m3-unmasked__divider {
        width: 46px;
        height: 1px;
        margin: 28px auto;
        background: rgba(255, 255, 255, 0.2);
      }

      .m3-unmasked__button {
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 165px;
        min-height: 48px;
        padding: 13px 25px;
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 999px;
        color: rgba(255, 255, 255, 0.9);
        background: rgba(255, 255, 255, 0.07);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        font: inherit;
        font-size: 11px;
        font-weight: 500;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition:
          transform 250ms ease,
          background 250ms ease,
          border-color 250ms ease;
      }

      .m3-unmasked__button:hover {
        transform: translateY(-2px);
        background: rgba(255, 255, 255, 0.13);
        border-color: rgba(255, 255, 255, 0.28);
      }

      .m3-unmasked__button:disabled {
        pointer-events: none;
      }

      @media (max-width: 600px) {
        .m3-unmasked {
          padding: 26px 18px;
        }

        .m3-unmasked__content {
          min-height: 560px;
        }

        .m3-unmasked__reflection-line {
          padding: 0 8px;
        }
      }
    </style>
  `

  const scene = app.querySelector('.m3-unmasked')
  const opening = app.querySelector('.m3-unmasked__opening')
  const openingLines = app.querySelectorAll('.m3-unmasked__opening-line')
  const memoriesContainer = app.querySelector('.m3-unmasked__memories')
  const memories = app.querySelectorAll('.m3-unmasked__memory')
  const reflection = app.querySelector('.m3-unmasked__reflection')
  const reflectionElements = reflection.querySelectorAll(
    '.m3-unmasked__reflection-line, .m3-unmasked__divider'
  )
  const button = app.querySelector('.m3-unmasked__button')
  const glows = app.querySelectorAll('.m3-unmasked__glow')

  gsap.set(openingLines, {
    autoAlpha: 0,
    y: 14
  })

  gsap.set(memories, {
    autoAlpha: 0,
    y: 14
  })

  gsap.set(reflectionElements, {
    autoAlpha: 0,
    y: 14
  })

  gsap.set(button, {
    autoAlpha: 0,
    y: 12
  })

  const timeline = gsap.timeline({
    defaults: {
      ease: 'power3.out'
    }
  })

  timeline
    // Poco a poco...
    .to(openingLines[0], {
      autoAlpha: 1,
      y: 0,
      duration: 0.8
    })
    .to({}, {
      duration: 1.5
    })
    .to(openingLines[0], {
      autoAlpha: 0,
      y: -12,
      duration: 0.55,
      ease: 'power2.in'
    })

    // Dejamos de intentar ser perfectos.
    .to(openingLines[1], {
      autoAlpha: 1,
      y: 0,
      duration: 0.8
    })
    .to({}, {
      duration: 1.8
    })
    .to(openingLines[1], {
      autoAlpha: 0,
      y: -12,
      duration: 0.55,
      ease: 'power2.in'
    })

    // Empezamos a ser nosotros.
    .to(openingLines[2], {
      autoAlpha: 1,
      y: 0,
      duration: 0.9
    })
    .to({}, {
      duration: 2
    })
    .to(openingLines[2], {
      autoAlpha: 0,
      y: -12,
      duration: 0.6,
      ease: 'power2.in'
    })
    .set(opening, {
      display: 'none'
    })

    // Recuerdos.
    .to(memories[0], {
      autoAlpha: 1,
      y: 0,
      duration: 0.75
    })
    .to({}, {
      duration: 1.4
    })
    .to(memories[0], {
      autoAlpha: 0,
      y: -10,
      duration: 0.45,
      ease: 'power2.in'
    })

    .to(memories[1], {
      autoAlpha: 1,
      y: 0,
      duration: 0.75
    })
    .to({}, {
      duration: 1.4
    })
    .to(memories[1], {
      autoAlpha: 0,
      y: -10,
      duration: 0.45,
      ease: 'power2.in'
    })

    .to(memories[2], {
      autoAlpha: 1,
      y: 0,
      duration: 0.75
    })
    .to({}, {
      duration: 1.4
    })
    .to(memories[2], {
      autoAlpha: 0,
      y: -10,
      duration: 0.45,
      ease: 'power2.in'
    })

    .to(memories[3], {
      autoAlpha: 1,
      y: 0,
      duration: 0.75
    })
    .to({}, {
      duration: 1.4
    })
    .to(memories[3], {
      autoAlpha: 0,
      y: -10,
      duration: 0.45,
      ease: 'power2.in'
    })

    .to(memories[4], {
      autoAlpha: 1,
      y: 0,
      duration: 0.9
    })
    .to({}, {
      duration: 2.2
    })
    .to(memories[4], {
      autoAlpha: 0,
      y: -12,
      duration: 0.6,
      ease: 'power2.in'
    })
    .set(memoriesContainer, {
      display: 'none'
    })

    // Reflexión final.
    .set(reflection, {
      display: 'block'
    })
    .to(reflectionElements[0], {
      autoAlpha: 1,
      y: 0,
      duration: 0.85
    })
    .to(reflectionElements[1], {
      autoAlpha: 1,
      y: 0,
      duration: 0.5
    })
    .to(reflectionElements[2], {
      autoAlpha: 1,
      y: 0,
      duration: 0.9
    })
    .to(button, {
      autoAlpha: 1,
      visibility: 'visible',
      y: 0,
      duration: 0.7
    })

  glows.forEach((glow, index) => {
    gsap.to(glow, {
      x: index === 0 ? 30 : -30,
      y: index === 0 ? 20 : -20,
      duration: 8 + index,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
  })

  button.addEventListener('click', () => {
    button.disabled = true
    timeline.kill()

    gsap.to(scene, {
      autoAlpha: 0,
      duration: 0.8,
      ease: 'power2.inOut',
      onComplete: next
    })
  })
}