import gsap from 'gsap'
import { content } from '../../data/content.js'

export function renderMonthFourIntro(app, next) {
  const lang = window.__lang || 'es'
  const t = content[lang].monthFourIntro

  app.innerHTML = `
    <section class="m4-intro">

      <div class="m4-intro__background" aria-hidden="true">
        <div class="m4-intro__glow m4-intro__glow--one"></div>
        <div class="m4-intro__glow m4-intro__glow--two"></div>

        <div class="m4-intro__route">
          <span class="m4-intro__route-line"></span>

          <span class="m4-intro__point point-1"></span>
          <span class="m4-intro__point point-2"></span>
          <span class="m4-intro__point point-3"></span>
          <span class="m4-intro__point point-4"></span>
          <span class="m4-intro__point point-5"></span>
        </div>

        <span class="m4-intro__star star-1">·</span>
        <span class="m4-intro__star star-2">✦</span>
        <span class="m4-intro__star star-3">·</span>
        <span class="m4-intro__star star-4">✧</span>
      </div>

      <div class="m4-intro__content">

        <div class="m4-intro__chapter">
          <span>${t.chapter}</span>
          <div class="m4-intro__chapter-line"></div>
        </div>

        <p class="m4-intro__month">
          ${t.month}
        </p>

        <h1 class="m4-intro__title">
          ${t.title}
        </h1>

        <div class="m4-intro__story">

          <div class="m4-intro__message m4-intro__message--first">
            <p>${t.firstLine}</p>
            <p>${t.firstHighlight}</p>
          </div>

          <div class="m4-intro__message m4-intro__message--second">
            <p>${t.secondLine}</p>
            <p>${t.secondHighlight}</p>
          </div>

          <div class="m4-intro__message m4-intro__message--final">
            <p>${t.finalLine1}</p>
            <p>${t.finalLine2}</p>
            <p class="m4-intro__final-highlight">
              ${t.finalHighlight}
            </p>
          </div>

        </div>

        <button
          class="m4-intro__button"
          type="button"
        >
          ${t.button}
        </button>

      </div>
    </section>

    <style>
      .m4-intro {
        position: relative;
        width: 100%;
        min-height: 100svh;
        overflow: hidden;

        display: flex;
        align-items: center;
        justify-content: center;

        box-sizing: border-box;
        padding: 48px 24px 64px;

        color: #fff;

        background:
          radial-gradient(
            circle at 50% 18%,
            rgba(207, 180, 151, 0.11),
            transparent 34%
          ),
          radial-gradient(
            circle at 80% 76%,
            rgba(107, 126, 144, 0.09),
            transparent 35%
          ),
          linear-gradient(
            145deg,
            #08090a 0%,
            #11100f 47%,
            #090a0b 100%
          );
      }

      .m4-intro__background {
        position: absolute;
        inset: 0;
        pointer-events: none;
        overflow: hidden;
      }

      .m4-intro__background::before {
        content: "";
        position: absolute;
        inset: 0;

        opacity: 0.12;

        background-image:
          linear-gradient(
            rgba(255, 255, 255, 0.025) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.025) 1px,
            transparent 1px
          );

        background-size: 72px 72px;

        mask-image:
          linear-gradient(
            to bottom,
            transparent 5%,
            black 28%,
            black 72%,
            transparent 96%
          );

        -webkit-mask-image:
          linear-gradient(
            to bottom,
            transparent 5%,
            black 28%,
            black 72%,
            transparent 96%
          );
      }

      .m4-intro__glow {
        position: absolute;
        border-radius: 999px;
        filter: blur(110px);
        opacity: 0.14;
      }

      .m4-intro__glow--one {
        width: 360px;
        height: 360px;

        top: -150px;
        left: -110px;

        background: #c2a68d;
      }

      .m4-intro__glow--two {
        width: 380px;
        height: 380px;

        right: -160px;
        bottom: -160px;

        background: #6c8290;
      }

      /* ruta decorativa */

      .m4-intro__route {
        position: absolute;

        width: min(720px, 78vw);
        height: 120px;

        left: 50%;
        bottom: 8%;

        transform: translateX(-50%);

        opacity: 0.45;
      }

      .m4-intro__route-line {
        position: absolute;

        left: 0;
        top: 58px;

        width: 100%;
        height: 1px;

        transform-origin: left center;

        background:
          linear-gradient(
            90deg,
            transparent,
            rgba(220, 204, 190, 0.12) 8%,
            rgba(220, 204, 190, 0.5) 50%,
            rgba(220, 204, 190, 0.12) 92%,
            transparent
          );
      }

      .m4-intro__point {
        position: absolute;

        top: 54px;

        width: 9px;
        height: 9px;

        border-radius: 50%;

        background: rgba(232, 218, 207, 0.95);

        box-shadow:
          0 0 0 5px rgba(232, 218, 207, 0.05),
          0 0 20px rgba(232, 218, 207, 0.28);
      }

      .point-1 {
        left: 8%;
      }

      .point-2 {
        left: 29%;
      }

      .point-3 {
        left: 50%;
      }

      .point-4 {
        left: 71%;
      }

      .point-5 {
        left: 92%;
      }

      .m4-intro__star {
        position: absolute;

        color: rgba(255, 255, 255, 0.45);

        font-size: 12px;

        text-shadow:
          0 0 14px rgba(255, 255, 255, 0.25);
      }

      .star-1 {
        top: 16%;
        left: 12%;
      }

      .star-2 {
        top: 25%;
        right: 15%;
      }

      .star-3 {
        top: 63%;
        left: 17%;
      }

      .star-4 {
        top: 56%;
        right: 11%;
      }

      /* contenido */

      .m4-intro__content {
        position: relative;
        z-index: 2;

        width: min(720px, 100%);

        text-align: center;
      }

      .m4-intro__chapter {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 14px;

        margin-bottom: 27px;

        color: rgba(255, 255, 255, 0.48);

        font-size: 10px;
        font-weight: 600;

        letter-spacing: 0.32em;
        text-transform: uppercase;
      }

      .m4-intro__chapter-line {
        width: 42px;
        height: 1px;

        background:
          linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.42),
            transparent
          );
      }

      .m4-intro__month {
        margin: 0 0 8px;

        color: rgba(222, 205, 191, 0.82);

        font-size: clamp(12px, 2vw, 14px);

        letter-spacing: 0.34em;
        text-transform: uppercase;
      }

      .m4-intro__title {
        margin: 0;

        color: #fff;

        font-family: inherit;

        font-size: clamp(62px, 13vw, 120px);
        font-weight: 300;

        line-height: 0.95;

        letter-spacing: -0.06em;

        text-shadow:
          0 0 34px rgba(224, 203, 188, 0.07),
          0 14px 50px rgba(0, 0, 0, 0.4);
      }

      /* mensajes */

      .m4-intro__story {
        position: relative;

        min-height: 190px;

        margin-top: 43px;
      }

      .m4-intro__message {
        position: absolute;
        inset: 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        visibility: hidden;
      }

      .m4-intro__message p {
        margin: 0;
      }

      .m4-intro__message--first p:first-child {
        color: rgba(255, 255, 255, 0.64);

        font-size: clamp(15px, 3vw, 18px);
        font-weight: 300;

        line-height: 1.7;
      }

      .m4-intro__message--first p:last-child {
        max-width: 620px;

        margin-top: 8px;

        color: rgba(255, 255, 255, 0.96);

        font-size: clamp(23px, 5vw, 34px);
        font-weight: 300;

        line-height: 1.4;
      }

      .m4-intro__message--second p:first-child {
        color: rgba(255, 255, 255, 0.63);

        font-size: clamp(16px, 3vw, 19px);
        font-weight: 300;

        line-height: 1.7;
      }

      .m4-intro__message--second p:last-child {
        max-width: 650px;

        margin-top: 9px;

        color: rgba(233, 219, 207, 0.96);

        font-size: clamp(24px, 5vw, 36px);
        font-weight: 300;

        line-height: 1.35;
      }

      .m4-intro__message--final {
        gap: 3px;
      }

      .m4-intro__message--final > p:not(.m4-intro__final-highlight) {
        color: rgba(255, 255, 255, 0.67);

        font-size: clamp(17px, 3.4vw, 22px);
        font-weight: 300;

        line-height: 1.6;
      }

      .m4-intro__final-highlight {
        margin-top: 9px !important;

        color: rgba(255, 255, 255, 0.98);

        font-size: clamp(27px, 5vw, 39px);
        font-weight: 300;

        line-height: 1.3;
      }

      /* botón */

      .m4-intro__button {
        display: inline-flex;
        align-items: center;
        justify-content: center;

        min-width: 165px;
        min-height: 48px;

        margin-top: 7px;

        padding: 13px 25px;

        border:
          1px solid rgba(255, 255, 255, 0.15);

        border-radius: 999px;

        color: rgba(255, 255, 255, 0.9);

        background:
          rgba(255, 255, 255, 0.065);

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

      .m4-intro__button:hover {
        color: #fff;

        transform: translateY(-2px);

        background:
          rgba(255, 255, 255, 0.12);

        border-color:
          rgba(255, 255, 255, 0.27);
      }

      .m4-intro__button:active {
        transform: translateY(0);
      }

      .m4-intro__button:disabled {
        pointer-events: none;
        cursor: default;
      }

      @media (max-width: 600px) {
        .m4-intro {
          padding: 42px 21px 58px;
        }

        .m4-intro__chapter {
          margin-bottom: 24px;
        }

        .m4-intro__story {
          min-height: 215px;
          margin-top: 36px;
        }

        .m4-intro__route {
          width: 92vw;
          bottom: 4%;
          opacity: 0.3;
        }

        .m4-intro__message--first p:last-child,
        .m4-intro__message--second p:last-child {
          padding: 0 4px;
        }

        .m4-intro__button {
          margin-top: 1px;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .m4-intro *,
        .m4-intro *::before,
        .m4-intro *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    </style>
  `

  const scene = app.querySelector('.m4-intro')
  const contentElement = app.querySelector('.m4-intro__content')

  const chapter = app.querySelector('.m4-intro__chapter')
  const month = app.querySelector('.m4-intro__month')
  const title = app.querySelector('.m4-intro__title')

  const firstMessage = app.querySelector(
    '.m4-intro__message--first'
  )

  const secondMessage = app.querySelector(
    '.m4-intro__message--second'
  )

  const finalMessage = app.querySelector(
    '.m4-intro__message--final'
  )

  const finalLines = app.querySelectorAll(
    '.m4-intro__message--final p'
  )

  const button = app.querySelector(
    '.m4-intro__button'
  )

  const routeLine = app.querySelector(
    '.m4-intro__route-line'
  )

  const points = app.querySelectorAll(
    '.m4-intro__point'
  )

  const stars = app.querySelectorAll(
    '.m4-intro__star'
  )

  const glows = app.querySelectorAll(
    '.m4-intro__glow'
  )

  gsap.set(
    [firstMessage, secondMessage, finalMessage],
    {
      autoAlpha: 0,
      y: 18
    }
  )

  gsap.set(finalLines, {
    autoAlpha: 0,
    y: 10
  })

  gsap.set(button, {
    autoAlpha: 0,
    y: 12
  })

  gsap.set(routeLine, {
    scaleX: 0
  })

  gsap.set(points, {
    autoAlpha: 0,
    scale: 0
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
        duration: 1.3
      },
      '-=0.45'
    )

    .to(
      routeLine,
      {
        scaleX: 1,
        duration: 2.1,
        ease: 'power2.inOut'
      },
      '-=0.8'
    )

    .to(
      points,
      {
        autoAlpha: 1,
        scale: 1,
        stagger: 0.22,
        duration: 0.45,
        ease: 'back.out(2)'
      },
      '-=1.8'
    )

    .to(
      firstMessage,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.9
      },
      '-=0.7'
    )

    .to(firstMessage, {
      autoAlpha: 0,
      y: -13,
      duration: 0.65,
      delay: 2
    })

    .to(secondMessage, {
      autoAlpha: 1,
      y: 0,
      duration: 0.9
    })

    .to(secondMessage, {
      autoAlpha: 0,
      y: -13,
      duration: 0.65,
      delay: 2.2
    })

    .to(finalMessage, {
      autoAlpha: 1,
      y: 0,
      duration: 0.3
    })

    .to(finalLines[0], {
      autoAlpha: 1,
      y: 0,
      duration: 0.6
    })

    .to(finalLines[1], {
      autoAlpha: 1,
      y: 0,
      duration: 0.6
    })

    .to(finalLines[2], {
      autoAlpha: 1,
      y: 0,
      duration: 0.8
    })

    .to(button, {
      autoAlpha: 1,
      y: 0,
      duration: 0.7
    })

  points.forEach((point, index) => {
    gsap.to(point, {
      boxShadow:
        '0 0 0 7px rgba(232,218,207,0.03), 0 0 28px rgba(232,218,207,0.42)',
      duration: 1.7 + index * 0.12,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
  })

  stars.forEach((star, index) => {
    gsap.to(star, {
      opacity: 0.17,
      scale: 0.7,
      duration: 1.8 + index * 0.2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
  })

  glows.forEach((glow, index) => {
    gsap.to(glow, {
      x: index === 0 ? 35 : -35,
      y: index === 0 ? 22 : -22,
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