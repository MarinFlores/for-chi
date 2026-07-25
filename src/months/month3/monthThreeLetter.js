import gsap from 'gsap'
import { content } from '../../data/content.js'

export function renderMonthThreeLetter(app, next) {
  const lang = window.__lang || 'es'
  const t = content[lang].monthThreeLetter

  const paragraphHTML = t.paragraphs
    .map(
      paragraph => `
        <p class="m3-letter__paragraph">
          ${paragraph}
        </p>
      `
    )
    .join('')

  app.innerHTML = `
    <section class="m3-letter">
      <div class="m3-letter__background" aria-hidden="true">
        <div class="m3-letter__glow m3-letter__glow--one"></div>
        <div class="m3-letter__glow m3-letter__glow--two"></div>
        <div class="m3-letter__grain"></div>
      </div>

      <article class="m3-letter__paper">
        <header class="m3-letter__header">
          <span class="m3-letter__month">
            ${t.month}
          </span>

          <span class="m3-letter__line"></span>

          <span class="m3-letter__label">
            ${t.label}
          </span>
        </header>

        <div class="m3-letter__content">
          <p class="m3-letter__greeting">
            ${t.greeting}
          </p>

          <div class="m3-letter__paragraphs">
            ${paragraphHTML}
          </div>

          <footer class="m3-letter__signature">
            <span>${t.closing}</span>
            <strong>${t.signature}</strong>
          </footer>
        </div>
      </article>

      <button class="m3-letter__button" type="button">
        ${t.button}
      </button>
    </section>

    <style>
      .m3-letter {
        position: relative;
        width: 100%;
        min-height: 100svh;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: 28px 22px;
        color: #ffffff;
        background:
          radial-gradient(
            circle at 50% 30%,
            rgba(213, 178, 155, 0.08),
            transparent 38%
          ),
          linear-gradient(
            155deg,
            #090807 0%,
            #15110f 52%,
            #080808 100%
          );
      }

      .m3-letter__background {
        position: fixed;
        inset: 0;
        overflow: hidden;
        pointer-events: none;
      }

      .m3-letter__glow {
        position: absolute;
        border-radius: 50%;
        filter: blur(120px);
        opacity: 0.12;
      }

      .m3-letter__glow--one {
        width: 400px;
        height: 400px;
        top: -190px;
        right: -120px;
        background: #d2a88e;
      }

      .m3-letter__glow--two {
        width: 350px;
        height: 350px;
        bottom: -170px;
        left: -120px;
        background: #775447;
      }

      .m3-letter__grain {
        position: absolute;
        inset: 0;
        opacity: 0.13;
        background-image:
          linear-gradient(
            rgba(255, 255, 255, 0.014) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.014) 1px,
            transparent 1px
          );
        background-size: 58px 58px;
      }

      .m3-letter__paper {
        position: relative;
        z-index: 2;
        width: min(1080px, 100%);
        box-sizing: border-box;
        padding: clamp(28px, 4vw, 50px);
        border: 1px solid rgba(255, 255, 255, 0.09);
        border-radius: 30px;
        background:
          linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.075),
            rgba(255, 255, 255, 0.025)
          );
        box-shadow:
          0 32px 90px rgba(0, 0, 0, 0.36),
          inset 0 1px rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
      }

      .m3-letter__header {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 28px;
      }

      .m3-letter__month,
      .m3-letter__label {
        flex: 0 0 auto;
        color: rgba(226, 194, 173, 0.58);
        font-size: 9px;
        font-weight: 600;
        letter-spacing: 0.25em;
        text-transform: uppercase;
      }

      .m3-letter__line {
        width: 48px;
        height: 1px;
        background: rgba(226, 194, 173, 0.22);
      }

      .m3-letter__content {
        width: 100%;
      }

      .m3-letter__greeting {
        margin: 0 0 22px;
        color: rgba(255, 255, 255, 0.98);
        font-size: clamp(24px, 3vw, 34px);
        font-weight: 400;
        line-height: 1.2;
      }

      .m3-letter__paragraphs {
        column-count: 2;
        column-gap: clamp(36px, 6vw, 74px);
        column-rule: 1px solid rgba(255, 255, 255, 0.055);
      }

      .m3-letter__paragraph {
        break-inside: avoid;
        margin: 0 0 18px;
        color: rgba(255, 255, 255, 0.78);
        font-size: clamp(15px, 1.5vw, 18px);
        font-weight: 300;
        line-height: 1.75;
      }

      .m3-letter__paragraph:first-child {
        color: rgba(255, 255, 255, 0.92);
      }

      .m3-letter__paragraph:last-child {
        color: rgba(255, 255, 255, 0.94);
      }

      .m3-letter__signature {
        display: flex;
        flex-direction: column;
        gap: 7px;
        margin-top: 28px;
        padding-top: 23px;
        border-top: 1px solid rgba(255, 255, 255, 0.07);
        color: rgba(255, 255, 255, 0.6);
        font-size: 14px;
        line-height: 1.4;
      }

      .m3-letter__signature strong {
        color: rgba(255, 255, 255, 0.96);
        font-size: 19px;
        font-weight: 400;
      }

      .m3-letter__button {
        position: relative;
        z-index: 3;
        min-width: 165px;
        min-height: 48px;
        margin-top: 24px;
        padding: 13px 26px;
        border: 1px solid rgba(225, 193, 172, 0.23);
        border-radius: 999px;
        color: rgba(255, 255, 255, 0.92);
        background: rgba(225, 193, 172, 0.08);
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

      .m3-letter__button:hover {
        transform: translateY(-2px);
        border-color: rgba(225, 193, 172, 0.4);
        background: rgba(225, 193, 172, 0.14);
      }

      .m3-letter__button:disabled {
        pointer-events: none;
      }

      @media (max-width: 760px) {
        .m3-letter {
          justify-content: flex-start;
          padding: 18px 14px 28px;
        }

        .m3-letter__paper {
          padding: 26px 21px;
          border-radius: 24px;
        }

        .m3-letter__header {
          gap: 10px;
          margin-bottom: 22px;
        }

        .m3-letter__line {
          width: 28px;
        }

        .m3-letter__paragraphs {
          column-count: 1;
          column-rule: 0;
        }

        .m3-letter__paragraph {
          margin-bottom: 16px;
          font-size: 16px;
          line-height: 1.65;
        }
      }

      @media (min-width: 761px) and (max-height: 780px) {
        .m3-letter {
          justify-content: flex-start;
          padding-top: 22px;
        }

        .m3-letter__paper {
          padding-block: 30px;
        }

        .m3-letter__header {
          margin-bottom: 20px;
        }

        .m3-letter__greeting {
          margin-bottom: 16px;
        }

        .m3-letter__paragraph {
          margin-bottom: 13px;
          font-size: 15px;
          line-height: 1.58;
        }

        .m3-letter__signature {
          margin-top: 18px;
          padding-top: 17px;
        }
      }
    </style>
  `

  const scene = app.querySelector('.m3-letter')
  const paper = app.querySelector('.m3-letter__paper')

  const headerItems = app.querySelectorAll(
    '.m3-letter__month, .m3-letter__line, .m3-letter__label'
  )

  const greeting = app.querySelector('.m3-letter__greeting')

  const paragraphElements = app.querySelectorAll(
    '.m3-letter__paragraph'
  )

  const signature = app.querySelector('.m3-letter__signature')
  const button = app.querySelector('.m3-letter__button')
  const glows = app.querySelectorAll('.m3-letter__glow')

  gsap.set(paper, {
    autoAlpha: 0,
    y: 24,
    scale: 0.985
  })

  gsap.set(headerItems, {
    autoAlpha: 0,
    y: 7
  })

  gsap.set([greeting, signature], {
    autoAlpha: 0,
    y: 10
  })

  gsap.set(paragraphElements, {
    autoAlpha: 0,
    y: 8
  })

  gsap.set(button, {
    autoAlpha: 0,
    y: 10
  })

  const timeline = gsap.timeline({
    defaults: {
      ease: 'power3.out'
    }
  })

  timeline
    .to(paper, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: 0.8
    })

    .to(
      headerItems,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.09
      },
      '-=0.35'
    )

    .to(
      greeting,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.55
      },
      '-=0.15'
    )

    .to(paragraphElements, {
      autoAlpha: 1,
      y: 0,
      duration: 0.55,
      stagger: 0.08
    })

    .to(
      signature,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.55
      },
      '-=0.15'
    )

    .to(button, {
      autoAlpha: 1,
      visibility: 'visible',
      y: 0,
      duration: 0.55
    })

  glows.forEach((glow, index) => {
    gsap.to(glow, {
      x: index === 0 ? -24 : 24,
      y: index === 0 ? 18 : -18,
      duration: 8 + index,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
  })

  button.addEventListener('click', () => {
    button.disabled = true

    gsap.to(scene, {
      autoAlpha: 0,
      duration: 0.8,
      ease: 'power2.inOut',
      onComplete: next
    })
  })
}