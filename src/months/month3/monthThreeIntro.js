import gsap from 'gsap'
import { content } from '../../data/content.js'

export function renderMonthThreeIntro(app, next) {
  const lang = window.__lang || 'es'
  const t = content[lang].monthThreeIntro

  app.innerHTML = `
    <section class="m3-intro">
      <div class="m3-intro__background" aria-hidden="true">
        <div class="m3-intro__glow m3-intro__glow--one"></div>
        <div class="m3-intro__glow m3-intro__glow--two"></div>

        <span class="m3-intro__star star-1">✦</span>
        <span class="m3-intro__star star-2">·</span>
        <span class="m3-intro__star star-3">✧</span>
        <span class="m3-intro__star star-4">·</span>
        <span class="m3-intro__star star-5">✦</span>
        <span class="m3-intro__star star-6">·</span>
      </div>

      <div class="m3-intro__content">
        <div class="m3-intro__chapter">
          <span>${t.chapter}</span>
          <div class="m3-intro__chapter-line"></div>
        </div>

        <p class="m3-intro__month">${t.month}</p>

        <h1 class="m3-intro__title">${t.title}</h1>

        <div class="m3-intro__messages">
          <div class="m3-intro__message m3-intro__message--first">
            <p>${t.firstLine}</p>
            <p>${t.firstHighlight}</p>
          </div>

          <div class="m3-intro__message m3-intro__message--second">
            <p class="m3-intro__short-line">${t.secondLine1}</p>
            <p class="m3-intro__short-line">${t.secondLine2}</p>

            <div class="m3-intro__final-lines">
              <span>${t.secondLine3}</span>
              <span>${t.secondLine4}</span>
            </div>
          </div>
        </div>

        <button class="m3-intro__button" type="button">
          ${t.button}
        </button>
      </div>
    </section>

    <style>
      .m3-intro {
        position: relative;
        width: 100%;
        min-height: 100svh;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 48px 24px 64px;
        box-sizing: border-box;
        color: #fff;
        background:
          radial-gradient(
            circle at 50% 12%,
            rgba(214, 190, 172, 0.1),
            transparent 38%
          ),
          linear-gradient(
            145deg,
            #080808 0%,
            #11100f 48%,
            #090909 100%
          );
      }

      .m3-intro__background {
        position: absolute;
        inset: 0;
        pointer-events: none;
      }

      .m3-intro__background::before {
        content: "";
        position: absolute;
        inset: 0;
        opacity: 0.16;
        background-image:
          linear-gradient(
            rgba(255, 255, 255, 0.022) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.022) 1px,
            transparent 1px
          );
        background-size: 70px 70px;
        mask-image: linear-gradient(
          to bottom,
          transparent,
          black 30%,
          black 70%,
          transparent
        );
      }

      .m3-intro__glow {
        position: absolute;
        border-radius: 999px;
        filter: blur(100px);
        opacity: 0.13;
      }

      .m3-intro__glow--one {
        width: 340px;
        height: 340px;
        top: -120px;
        left: -100px;
        background: #c4a38e;
      }

      .m3-intro__glow--two {
        width: 300px;
        height: 300px;
        right: -90px;
        bottom: -120px;
        background: #80685c;
      }

      .m3-intro__star {
        position: absolute;
        color: rgba(255, 255, 255, 0.68);
        font-size: 12px;
        text-shadow: 0 0 14px rgba(255, 255, 255, 0.4);
      }

      .star-1 {
        top: 14%;
        left: 12%;
      }

      .star-2 {
        top: 23%;
        right: 18%;
      }

      .star-3 {
        top: 68%;
        left: 16%;
      }

      .star-4 {
        right: 12%;
        bottom: 22%;
      }

      .star-5 {
        top: 42%;
        right: 8%;
      }

      .star-6 {
        bottom: 12%;
        left: 38%;
      }

      .m3-intro__content {
        position: relative;
        z-index: 2;
        width: min(680px, 100%);
        text-align: center;
      }

      .m3-intro__chapter {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 14px;
        margin-bottom: 28px;
        color: rgba(255, 255, 255, 0.5);
        font-size: 10px;
        font-weight: 600;
        letter-spacing: 0.32em;
        text-transform: uppercase;
      }

      .m3-intro__chapter-line {
        width: 42px;
        height: 1px;
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.45),
          transparent
        );
      }

      .m3-intro__month {
        margin: 0 0 8px;
        color: rgba(226, 211, 201, 0.8);
        font-size: clamp(12px, 2vw, 14px);
        letter-spacing: 0.34em;
        text-transform: uppercase;
      }

      .m3-intro__title {
        margin: 0;
        color: #fff;
        font-family: inherit;
        font-size: clamp(62px, 13vw, 120px);
        font-weight: 300;
        line-height: 0.95;
        letter-spacing: -0.06em;
        text-shadow:
          0 0 30px rgba(224, 203, 188, 0.08),
          0 12px 50px rgba(0, 0, 0, 0.38);
      }

      .m3-intro__messages {
        position: relative;
        min-height: 175px;
        margin-top: 42px;
      }

      .m3-intro__message {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        visibility: hidden;
      }

      .m3-intro__message p {
        margin: 0;
      }

      .m3-intro__message--first p:first-child {
        color: rgba(255, 255, 255, 0.62);
        font-size: clamp(15px, 3vw, 18px);
        font-weight: 300;
        line-height: 1.7;
      }

      .m3-intro__message--first p:last-child {
        margin-top: 8px;
        color: rgba(255, 255, 255, 0.94);
        font-family: inherit;
        font-size: clamp(23px, 5vw, 35px);
        font-style: normal;
        font-weight: 300;
        line-height: 1.35;
      }

      .m3-intro__short-line {
        color: rgba(255, 255, 255, 0.82);
        font-size: clamp(18px, 4vw, 28px);
        font-weight: 300;
        line-height: 1.55;
      }

      .m3-intro__final-lines {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        margin-top: 13px;
        color: rgba(255, 255, 255, 0.98);
        font-size: clamp(25px, 5vw, 38px);
        font-weight: 300;
        line-height: 1.3;
      }

      .m3-intro__final-lines span:last-child {
        color: rgba(226, 211, 201, 0.94);
      }

      .m3-intro__button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 165px;
        min-height: 48px;
        margin-top: 8px;
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
        transition:
          transform 250ms ease,
          color 250ms ease,
          background 250ms ease,
          border-color 250ms ease;
      }

      .m3-intro__button:hover {
        color: #fff;
        transform: translateY(-2px);
        background: rgba(255, 255, 255, 0.13);
        border-color: rgba(255, 255, 255, 0.28);
      }

      .m3-intro__button:active {
        transform: translateY(0);
      }

      .m3-intro__button:disabled {
        cursor: default;
        pointer-events: none;
      }

      @media (max-width: 600px) {
        .m3-intro {
          padding: 42px 22px 58px;
        }

        .m3-intro__chapter {
          margin-bottom: 24px;
        }

        .m3-intro__messages {
          min-height: 195px;
          margin-top: 36px;
        }

        .m3-intro__message--first p:last-child {
          padding: 0 6px;
        }

        .m3-intro__final-lines {
          flex-direction: column;
          gap: 0;
        }

        .m3-intro__button {
          margin-top: 3px;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .m3-intro *,
        .m3-intro *::before,
        .m3-intro *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    </style>
  `

  const scene = app.querySelector('.m3-intro')
  const contentElement = app.querySelector('.m3-intro__content')
  const chapter = app.querySelector('.m3-intro__chapter')
  const month = app.querySelector('.m3-intro__month')
  const title = app.querySelector('.m3-intro__title')
  const firstMessage = app.querySelector('.m3-intro__message--first')
  const secondMessage = app.querySelector('.m3-intro__message--second')
  const secondLines = app.querySelectorAll(
    '.m3-intro__message--second .m3-intro__short-line'
  )
  const finalLines = app.querySelectorAll(
    '.m3-intro__final-lines span'
  )
  const button = app.querySelector('.m3-intro__button')
  const stars = app.querySelectorAll('.m3-intro__star')
  const glows = app.querySelectorAll('.m3-intro__glow')

  gsap.set([firstMessage, secondMessage], {
    autoAlpha: 0,
    y: 18
  })

  gsap.set(secondLines, {
    autoAlpha: 0,
    y: 12
  })

  gsap.set(finalLines, {
    autoAlpha: 0,
    y: 12
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
    .from(chapter, {
      autoAlpha: 0,
      y: -10,
      duration: 0.8
    })
    .from(
      month,
      {
        autoAlpha: 0,
        y: 14,
        duration: 0.8
      },
      '-=0.45'
    )
    .from(
      title,
      {
        autoAlpha: 0,
        scale: 0.92,
        filter: 'blur(10px)',
        duration: 1.35
      },
      '-=0.45'
    )
    .to(firstMessage, {
      autoAlpha: 1,
      y: 0,
      duration: 1
    })
    .to(firstMessage, {
      autoAlpha: 0,
      y: -14,
      duration: 0.7,
      delay: 2
    })
    .to(secondMessage, {
      autoAlpha: 1,
      y: 0,
      duration: 0.35
    })
    .to(secondLines[0], {
      autoAlpha: 1,
      y: 0,
      duration: 0.65
    })
    .to(secondLines[1], {
      autoAlpha: 1,
      y: 0,
      duration: 0.65
    })
    .to(finalLines[0], {
      autoAlpha: 1,
      y: 0,
      duration: 0.65
    })
    .to(finalLines[1], {
      autoAlpha: 1,
      y: 0,
      duration: 0.65
    })
    .to(button, {
      autoAlpha: 1,
      y: 0,
      duration: 0.75
    })

  stars.forEach((star, index) => {
    gsap.to(star, {
      opacity: 0.2,
      scale: 0.65,
      duration: 1.5 + index * 0.18,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
  })

  glows.forEach((glow, index) => {
    gsap.to(glow, {
      x: index === 0 ? 30 : -30,
      y: index === 0 ? 20 : -20,
      scale: 1.1,
      duration: 7 + index,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
  })

  button.addEventListener('click', () => {
    button.disabled = true

    gsap.to(contentElement, {
      autoAlpha: 0,
      y: -22,
      duration: 0.65,
      ease: 'power2.in'
    })

    gsap.to(scene, {
      opacity: 0,
      duration: 0.8,
      delay: 0.12,
      ease: 'power2.inOut',
      onComplete: next
    })
  })
}