import gsap from 'gsap'
import { content } from '../../data/content.js'

export function renderMonthThreeHiddenMemory(app, next) {
  const lang = window.__lang || 'es'
  const t = content[lang].monthThreeHiddenMemory

  app.innerHTML = `
    <section class="m3-memory">
      <div class="m3-memory__background" aria-hidden="true">
        <div class="m3-memory__glow m3-memory__glow--one"></div>
        <div class="m3-memory__glow m3-memory__glow--two"></div>
        <div class="m3-memory__grain"></div>
      </div>

      <div class="m3-memory__content">
        <div class="m3-memory__intro">
          <p class="m3-memory__eyebrow">
            ${t.eyebrow}
          </p>

          <h2 class="m3-memory__title">
            ${t.title}
          </h2>

          <p class="m3-memory__instruction">
            ${t.instruction}
          </p>
        </div>

        <div
          class="m3-memory__constellation"
          aria-label="${t.constellationLabel}"
        >
          <span
            class="m3-memory__line m3-memory__line--one"
            aria-hidden="true"
          ></span>

          <span
            class="m3-memory__line m3-memory__line--two"
            aria-hidden="true"
          ></span>

          <span
            class="m3-memory__line m3-memory__line--three"
            aria-hidden="true"
          ></span>

          <button
            class="m3-memory__star m3-memory__star--one"
            type="button"
            tabindex="-1"
            aria-hidden="true"
          ></button>

          <button
            class="m3-memory__star m3-memory__star--two"
            type="button"
            tabindex="-1"
            aria-hidden="true"
          ></button>

          <button
            class="m3-memory__star m3-memory__star--three"
            type="button"
            tabindex="-1"
            aria-hidden="true"
          ></button>

          <button
            class="m3-memory__star m3-memory__star--hidden"
            type="button"
            aria-label="${t.revealLabel}"
          >
            <span class="m3-memory__star-core"></span>
            <span class="m3-memory__star-ring"></span>
          </button>
        </div>

        <p class="m3-memory__hint">
          ${t.hint}
        </p>

        <div class="m3-memory__revealed">
          <p class="m3-memory__revealed-label">
            ${t.revealedLabel}
          </p>

          <p class="m3-memory__revealed-text">
            ${t.memory}
          </p>

          <div class="m3-memory__divider"></div>

          <p class="m3-memory__reflection">
            ${t.reflection}
          </p>

          <button class="m3-memory__button" type="button">
            ${t.button}
          </button>
        </div>
      </div>
    </section>

    <style>
      .m3-memory {
        position: relative;
        width: 100%;
        min-height: 100svh;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 34px 20px;
        box-sizing: border-box;
        color: #ffffff;
        background:
          radial-gradient(
            circle at 50% 38%,
            rgba(209, 180, 156, 0.08),
            transparent 34%
          ),
          linear-gradient(
            145deg,
            #090807 0%,
            #12100e 52%,
            #080808 100%
          );
      }

      .m3-memory__background {
        position: absolute;
        inset: 0;
        overflow: hidden;
        pointer-events: none;
      }

      .m3-memory__glow {
        position: absolute;
        border-radius: 50%;
        filter: blur(125px);
        opacity: 0.12;
      }

      .m3-memory__glow--one {
        width: 390px;
        height: 390px;
        top: -190px;
        right: -130px;
        background: #b88d73;
      }

      .m3-memory__glow--two {
        width: 330px;
        height: 330px;
        bottom: -150px;
        left: -120px;
        background: #6d5144;
      }

      .m3-memory__grain {
        position: absolute;
        inset: 0;
        opacity: 0.15;
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

      .m3-memory__content {
        position: relative;
        z-index: 2;
        width: min(720px, 100%);
        min-height: 650px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .m3-memory__intro {
        text-align: center;
      }

      .m3-memory__eyebrow {
        margin: 0 0 14px;
        color: rgba(224, 190, 167, 0.55);
        font-size: 9px;
        font-weight: 600;
        letter-spacing: 0.28em;
        text-transform: uppercase;
      }

      .m3-memory__title {
        margin: 0;
        color: rgba(255, 255, 255, 0.98);
        font-size: clamp(36px, 8vw, 64px);
        font-weight: 300;
        letter-spacing: -0.03em;
        line-height: 1.08;
        white-space: pre-line;
      }

      .m3-memory__instruction {
        max-width: 470px;
        margin: 22px auto 0;
        color: rgba(255, 255, 255, 0.57);
        font-size: clamp(15px, 3.4vw, 19px);
        font-weight: 300;
        line-height: 1.6;
        white-space: pre-line;
      }

      .m3-memory__constellation {
        position: relative;
        width: min(410px, 88vw);
        height: 245px;
        margin-top: 28px;
      }

      .m3-memory__line {
        position: absolute;
        height: 1px;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(222, 191, 170, 0.22),
          transparent
        );
        transform-origin: left center;
      }

      .m3-memory__line--one {
        width: 145px;
        top: 86px;
        left: 82px;
        transform: rotate(15deg);
      }

      .m3-memory__line--two {
        width: 135px;
        top: 125px;
        left: 200px;
        transform: rotate(-23deg);
      }

      .m3-memory__line--three {
        width: 114px;
        top: 166px;
        left: 120px;
        transform: rotate(-14deg);
      }

      .m3-memory__star {
        position: absolute;
        width: 12px;
        height: 12px;
        padding: 0;
        border: 0;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.34);
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.14);
      }

      .m3-memory__star--one {
        top: 75px;
        left: 72px;
      }

      .m3-memory__star--two {
        top: 109px;
        left: 215px;
      }

      .m3-memory__star--three {
        top: 168px;
        left: 113px;
      }

      .m3-memory__star--hidden {
        top: 73px;
        right: 54px;
        width: 44px;
        height: 44px;
        display: grid;
        place-items: center;
        border: 1px solid rgba(228, 194, 170, 0.18);
        background: rgba(229, 197, 174, 0.04);
        cursor: pointer;
        transition:
          transform 250ms ease,
          border-color 250ms ease,
          background 250ms ease;
      }

      .m3-memory__star--hidden:hover {
        transform: scale(1.08);
        border-color: rgba(235, 204, 182, 0.46);
        background: rgba(229, 197, 174, 0.1);
      }

      .m3-memory__star--hidden:focus-visible {
        outline: 2px solid rgba(235, 204, 182, 0.7);
        outline-offset: 5px;
      }

      .m3-memory__star-core {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #f0d2bd;
        box-shadow:
          0 0 10px rgba(240, 210, 189, 0.75),
          0 0 28px rgba(240, 210, 189, 0.42);
      }

      .m3-memory__star-ring {
        position: absolute;
        inset: -8px;
        border: 1px solid rgba(240, 210, 189, 0.23);
        border-radius: 50%;
      }

      .m3-memory__hint {
        margin: -3px 0 0;
        color: rgba(255, 255, 255, 0.32);
        font-size: 9px;
        font-weight: 500;
        letter-spacing: 0.2em;
        text-align: center;
        text-transform: uppercase;
      }

      .m3-memory__revealed {
        position: absolute;
        width: 100%;
        display: none;
        padding: 24px 12px;
        box-sizing: border-box;
        text-align: center;
      }

      .m3-memory__revealed-label {
        margin: 0 0 20px;
        color: rgba(224, 190, 167, 0.52);
        font-size: 9px;
        font-weight: 600;
        letter-spacing: 0.26em;
        text-transform: uppercase;
      }

      .m3-memory__revealed-text {
        max-width: 600px;
        margin: 0 auto;
        color: rgba(255, 255, 255, 0.96);
        font-size: clamp(26px, 5.8vw, 43px);
        font-weight: 300;
        line-height: 1.35;
        white-space: pre-line;
      }

      .m3-memory__divider {
        width: 46px;
        height: 1px;
        margin: 30px auto;
        background: rgba(226, 192, 169, 0.27);
      }

      .m3-memory__reflection {
        max-width: 540px;
        margin: 0 auto;
        color: rgba(255, 255, 255, 0.6);
        font-size: clamp(17px, 3.7vw, 23px);
        font-weight: 300;
        line-height: 1.6;
        white-space: pre-line;
      }

      .m3-memory__button {
        position: relative;
        z-index: 3;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 165px;
        min-height: 48px;
        margin: 38px auto 0;
        padding: 13px 25px;
        border: 1px solid rgba(229, 197, 174, 0.2);
        border-radius: 999px;
        color: rgba(255, 255, 255, 0.9);
        background: rgba(229, 197, 174, 0.07);
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

      .m3-memory__button:hover {
        transform: translateY(-2px);
        background: rgba(229, 197, 174, 0.13);
        border-color: rgba(229, 197, 174, 0.38);
      }

      .m3-memory__button:disabled,
      .m3-memory__star--hidden:disabled {
        pointer-events: none;
      }

      @media (max-width: 600px) {
        .m3-memory {
          padding: 24px 15px;
        }

        .m3-memory__content {
          min-height: 680px;
        }

        .m3-memory__constellation {
          transform: scale(0.88);
          margin-top: 18px;
        }

        .m3-memory__revealed {
          padding-inline: 8px;
        }
      }
    </style>
  `

  const scene = app.querySelector('.m3-memory')
  const intro = app.querySelector('.m3-memory__intro')
  const introElements = intro.querySelectorAll(
    '.m3-memory__eyebrow, .m3-memory__title, .m3-memory__instruction'
  )

  const constellation = app.querySelector('.m3-memory__constellation')
  const stars = app.querySelectorAll('.m3-memory__star')
  const lines = app.querySelectorAll('.m3-memory__line')
  const hiddenStar = app.querySelector('.m3-memory__star--hidden')
  const starRing = app.querySelector('.m3-memory__star-ring')
  const hint = app.querySelector('.m3-memory__hint')

  const revealed = app.querySelector('.m3-memory__revealed')
  const revealedElements = revealed.querySelectorAll(
    '.m3-memory__revealed-label, ' +
    '.m3-memory__revealed-text, ' +
    '.m3-memory__divider, ' +
    '.m3-memory__reflection'
  )

  const button = app.querySelector('.m3-memory__button')
  const glows = app.querySelectorAll('.m3-memory__glow')

  gsap.set(introElements, {
    autoAlpha: 0,
    y: 14
  })

  gsap.set(stars, {
    autoAlpha: 0,
    scale: 0.3
  })

  gsap.set(lines, {
    autoAlpha: 0,
    scaleX: 0
  })

  gsap.set(hint, {
    autoAlpha: 0,
    y: 8
  })

  gsap.set(revealedElements, {
    autoAlpha: 0,
    y: 14
  })

  gsap.set(button, {
    autoAlpha: 0,
    y: 12
  })

  const introTimeline = gsap.timeline({
    defaults: {
      ease: 'power3.out'
    }
  })

  introTimeline
    .to(introElements, {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.16
    })

    .to(
      stars,
      {
        autoAlpha: 1,
        scale: 1,
        duration: 0.55,
        stagger: 0.13,
        ease: 'back.out(1.7)'
      },
      '-=0.2'
    )

    .to(
      lines,
      {
        autoAlpha: 1,
        scaleX: 1,
        duration: 0.7,
        stagger: 0.12
      },
      '-=0.35'
    )

    .to(hint, {
      autoAlpha: 1,
      y: 0,
      duration: 0.6
    })

  const pulseTween = gsap.to(hiddenStar, {
    scale: 1.1,
    duration: 1.1,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  const ringTween = gsap.to(starRing, {
    scale: 1.4,
    opacity: 0,
    duration: 1.6,
    repeat: -1,
    ease: 'power2.out'
  })

  hiddenStar.addEventListener(
    'click',
    () => {
      hiddenStar.disabled = true
      pulseTween.kill()
      ringTween.kill()

      const revealTimeline = gsap.timeline({
        defaults: {
          ease: 'power3.out'
        }
      })

      revealTimeline
        .to(hiddenStar, {
          scale: 1.35,
          boxShadow: '0 0 65px rgba(240, 210, 189, 0.55)',
          duration: 0.45
        })

        .to(
          [intro, constellation, hint],
          {
            autoAlpha: 0,
            y: -14,
            duration: 0.65,
            stagger: 0.06,
            ease: 'power2.in'
          }
        )

        .set([intro, constellation, hint], {
          display: 'none'
        })

        .set(revealed, {
          display: 'block'
        })

        .to(revealedElements, {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.18
        })

        .to(button, {
          autoAlpha: 1,
          visibility: 'visible',
          y: 0,
          duration: 0.65
        })
    },
    { once: true }
  )

  glows.forEach((glow, index) => {
    gsap.to(glow, {
      x: index === 0 ? -28 : 28,
      y: index === 0 ? 22 : -22,
      duration: 8 + index,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
  })

  button.addEventListener('click', () => {
    button.disabled = true
    introTimeline.kill()

    gsap.to(scene, {
      autoAlpha: 0,
      duration: 0.8,
      ease: 'power2.inOut',
      onComplete: next
    })
  })
}