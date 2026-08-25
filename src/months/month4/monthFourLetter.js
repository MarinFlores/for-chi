import gsap from 'gsap'
import { content } from '../../data/content.js'

export function renderMonthFourLetter(app, next) {
  const lang = window.__lang || 'es'
  const t = content[lang].monthFourLetter

  app.innerHTML = `
    <section class="m4-letter">

      <div class="m4-letter__glow"></div>

      <div class="m4-letter__card">

        <span class="m4-letter__eyebrow">
          ${t.eyebrow}
        </span>

        <h1>
          ${t.title}
        </h1>

        <div class="m4-letter__body">
          <p>${t.line1}</p>
          <p>${t.line2}</p>
          <p>${t.line3}</p>
        </div>

        <div class="m4-letter__signature">
          <span>${t.signature}</span>
          <strong>${t.name}</strong>
        </div>

        <button
          class="m4-letter__continue"
          type="button"
        >
          ${t.button}
        </button>

      </div>

    </section>

    <style>

      .m4-letter {
        position: relative;

        width: 100%;
        height: 100svh;

        display: flex;
        align-items: center;
        justify-content: center;

        box-sizing: border-box;

        padding: 32px;

        overflow: hidden;

        color: #fff;

        background:
          linear-gradient(
            180deg,
            #070809 0%,
            #040505 100%
          );
      }

      .m4-letter__glow {
        position: absolute;

        width: 600px;
        height: 600px;

        top: 50%;
        left: 50%;

        transform:
          translate(-50%, -50%);

        border-radius: 50%;

        background:
          radial-gradient(
            circle,
            rgba(155, 174, 186, 0.10),
            rgba(110, 130, 145, 0.035) 40%,
            transparent 70%
          );

        filter: blur(20px);

        pointer-events: none;
      }

      .m4-letter__card {
        position: relative;
        z-index: 2;

        width:
          min(640px, 100%);

        box-sizing: border-box;

        padding:
          clamp(34px, 6vw, 58px);

        border:
          1px solid
          rgba(255, 255, 255, 0.09);

        border-radius: 24px;

        background:
          rgba(255, 255, 255, 0.025);

        box-shadow:
          0 30px 90px
          rgba(0, 0, 0, 0.35);

        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);

        text-align: center;
      }

      .m4-letter__eyebrow {
        display: block;

        margin-bottom: 16px;

        color:
          rgba(255, 255, 255, 0.34);

        font-size: 9px;
        font-weight: 600;

        letter-spacing: 0.32em;

        text-transform: uppercase;
      }

      .m4-letter h1 {
        margin: 0;

        color:
          rgba(255, 255, 255, 0.97);

        font-size:
          clamp(35px, 7vw, 58px);

        font-weight: 300;

        line-height: 1.05;

        letter-spacing: -0.05em;
      }

      .m4-letter__body {
        max-width: 520px;

        margin:
          30px auto 0;
      }

      .m4-letter__body p {
        margin:
          0 0 17px;

        color:
          rgba(255, 255, 255, 0.62);

        font-size:
          clamp(15px, 2.3vw, 18px);

        font-weight: 300;

        line-height: 1.75;
      }

      .m4-letter__body p:last-child {
        margin-bottom: 0;

        color:
          rgba(255, 255, 255, 0.88);
      }

      .m4-letter__signature {
        display: flex;
        flex-direction: column;

        gap: 4px;

        margin-top: 29px;
      }

      .m4-letter__signature span {
        color:
          rgba(255, 255, 255, 0.33);

        font-size: 10px;

        letter-spacing: 0.08em;
      }

      .m4-letter__signature strong {
        color:
          rgba(255, 255, 255, 0.87);

        font-size: 17px;

        font-weight: 400;
      }

      .m4-letter__continue {
        min-width: 165px;
        min-height: 44px;

        margin-top: 34px;

        padding:
          11px 24px;

        border:
          1px solid
          rgba(255, 255, 255, 0.14);

        border-radius: 999px;

        color:
          rgba(255, 255, 255, 0.88);

        background:
          rgba(255, 255, 255, 0.05);

        font: inherit;

        font-size: 9px;
        font-weight: 600;

        letter-spacing: 0.18em;

        text-transform: uppercase;

        cursor: pointer;

        opacity: 0;
        visibility: hidden;

        transition:
          transform 180ms ease,
          background 180ms ease,
          border-color 180ms ease;
      }

      .m4-letter__continue:hover {
        transform:
          translateY(-2px);

        background:
          rgba(255, 255, 255, 0.09);

        border-color:
          rgba(255, 255, 255, 0.24);
      }

      @media (max-width: 600px) {

        .m4-letter {
          padding: 20px;
        }

        .m4-letter__card {
          padding:
            36px 24px;
        }

        .m4-letter__body {
          margin-top: 25px;
        }

      }

      @media (prefers-reduced-motion: reduce) {

        .m4-letter *,
        .m4-letter *::before,
        .m4-letter *::after {
          transition-duration:
            0.01ms !important;
        }

      }

    </style>
  `

  const scene =
    app.querySelector('.m4-letter')

  const card =
    app.querySelector('.m4-letter__card')

  const eyebrow =
    app.querySelector('.m4-letter__eyebrow')

  const title =
    app.querySelector('.m4-letter h1')

  const lines =
    app.querySelectorAll('.m4-letter__body p')

  const signature =
    app.querySelector('.m4-letter__signature')

  const button =
    app.querySelector('.m4-letter__continue')

  gsap.set(card, {
    autoAlpha: 0,
    y: 18
  })

  gsap.set(
    [eyebrow, title, lines, signature],
    {
      autoAlpha: 0,
      y: 12
    }
  )

  const tl = gsap.timeline({
    defaults: {
      ease: 'power3.out'
    }
  })

  tl
    .to(card, {
      autoAlpha: 1,
      y: 0,
      duration: 1
    })

    .to(
      eyebrow,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.6
      },
      '-=0.35'
    )

    .to(
      title,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.9
      },
      '-=0.25'
    )

    .to(
      lines,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.65
      },
      '+=0.4'
    )

    .to(
      signature,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.7
      },
      '+=0.5'
    )

    .to(
      button,
      {
        autoAlpha: 1,
        duration: 0.6
      },
      '+=0.65'
    )

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