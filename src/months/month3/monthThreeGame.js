import gsap from 'gsap'
import { content } from '../../data/content.js'

export function renderMonthThreeGame(app, next) {
  const lang = window.__lang || 'es'
  const t = content[lang].monthThreeGame

  app.innerHTML = `
    <section class="m3-game">
      <div class="m3-game__background" aria-hidden="true">
        <div class="m3-game__grid"></div>
        <div class="m3-game__glow m3-game__glow--one"></div>
        <div class="m3-game__glow m3-game__glow--two"></div>
        <div class="m3-game__scanline"></div>
      </div>

      <div class="m3-game__content">
        <div class="m3-game__intro">
          <p class="m3-game__eyebrow">JULY SESSION</p>

          <h2 class="m3-game__title">
            ${t.title}
          </h2>

          <p class="m3-game__intro-text">
            ${t.intro}
          </p>
        </div>

        <div class="m3-game__lobby">
          <div class="m3-game__players">
            <article class="m3-game__player">
              <span class="m3-game__player-label">
                ${t.playerOne}
              </span>

              <div class="m3-game__player-avatar">
                M
              </div>

              <span class="m3-game__player-status">
                READY
              </span>
            </article>

            <div class="m3-game__versus">
              VS
            </div>

            <article class="m3-game__player">
              <span class="m3-game__player-label">
                ${t.playerTwo}
              </span>

              <div class="m3-game__player-avatar">
                C
              </div>

              <span class="m3-game__player-status">
                READY
              </span>
            </article>
          </div>

          <div class="m3-game__match-status">
            <span class="m3-game__status-dot"></span>

            <p class="m3-game__status-text">
              ${t.starting}
            </p>
          </div>

          <div class="m3-game__round">
            <span>ROUND</span>
            <strong>01</strong>
          </div>

          <div class="m3-game__messages">
            <p class="m3-game__message">${t.line1}</p>
            <p class="m3-game__message">${t.line2}</p>
            <p class="m3-game__message">${t.line3}</p>
            <p class="m3-game__message">${t.line4}</p>
          </div>
        </div>

        <d<div class="m3-game__reflection">
            <p class="m3-game__reflection-text">
                ${t.reflection1}
            </p>

            <div class="m3-game__divider"></div>

            <p class="m3-game__reflection-text m3-game__reflection-text--final">
                ${t.reflection2}
            </p>

            <button class="m3-game__button" type="button">
                ${t.button}
            </button>
            </div>
        </div>
    </section>

    <style>
      .m3-game {
        position: relative;
        width: 100%;
        min-height: 100svh;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 36px 20px;
        box-sizing: border-box;
        color: #ffffff;
        background:
          radial-gradient(
            circle at 50% 30%,
            rgba(85, 255, 217, 0.06),
            transparent 35%
          ),
          linear-gradient(
            145deg,
            #050706 0%,
            #07100d 50%,
            #040505 100%
          );
      }

      .m3-game__background {
        position: absolute;
        inset: 0;
        overflow: hidden;
        pointer-events: none;
      }

      .m3-game__grid {
        position: absolute;
        inset: 0;
        opacity: 0.12;
        background-image:
          linear-gradient(
            rgba(98, 255, 221, 0.12) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(98, 255, 221, 0.12) 1px,
            transparent 1px
          );
        background-size: 54px 54px;
        mask-image: linear-gradient(
          to bottom,
          transparent,
          black 24%,
          black 76%,
          transparent
        );
      }

      .m3-game__glow {
        position: absolute;
        border-radius: 50%;
        filter: blur(120px);
        opacity: 0.12;
      }

      .m3-game__glow--one {
        width: 380px;
        height: 380px;
        top: -170px;
        right: -120px;
        background: #39d8b1;
      }

      .m3-game__glow--two {
        width: 310px;
        height: 310px;
        bottom: -130px;
        left: -100px;
        background: #227c69;
      }

      .m3-game__scanline {
        position: absolute;
        top: -20%;
        left: 0;
        width: 100%;
        height: 110px;
        opacity: 0.055;
        background: linear-gradient(
          to bottom,
          transparent,
          rgba(95, 255, 221, 0.4),
          transparent
        );
      }

      .m3-game__content {
        position: relative;
        z-index: 2;
        width: min(700px, 100%);
        min-height: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .m3-game__intro,
      .m3-game__lobby,
      .m3-game__reflection {
        display: none;
        padding: 30px 12px;
        box-sizing: border-box;
        text-align: center;
      }

      .m3-game__intro {
        text-align: center;
      }

      .m3-game__eyebrow {
        margin: 0 0 15px;
        color: rgba(107, 255, 224, 0.56);
        font-size: 9px;
        font-weight: 600;
        letter-spacing: 0.28em;
        text-transform: uppercase;
      }

      .m3-game__title {
        margin: 0;
        color: rgba(255, 255, 255, 0.98);
        font-size: clamp(40px, 10vw, 76px);
        font-weight: 500;
        letter-spacing: 0.08em;
        line-height: 1;
      }

      .m3-game__intro-text {
        margin: 30px auto 0;
        max-width: 520px;
        color: rgba(255, 255, 255, 0.66);
        font-size: clamp(17px, 3.6vw, 22px);
        font-weight: 300;
        line-height: 1.65;
        white-space: pre-line;
      }

      .m3-game__lobby {
        display: none;
        padding: 26px;
        border: 1px solid rgba(93, 255, 222, 0.16);
        border-radius: 26px;
        box-sizing: border-box;
        background:
          linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.035),
            rgba(255, 255, 255, 0.012)
          );
        box-shadow:
          0 30px 90px rgba(0, 0, 0, 0.4),
          inset 0 1px rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
      }

      .m3-game__players {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        gap: 24px;
      }

      .m3-game__player {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .m3-game__player-label {
        color: rgba(255, 255, 255, 0.4);
        font-size: 9px;
        font-weight: 600;
        letter-spacing: 0.2em;
      }

      .m3-game__player-avatar {
        width: 88px;
        height: 88px;
        display: grid;
        place-items: center;
        margin: 16px 0 13px;
        border: 1px solid rgba(98, 255, 222, 0.25);
        border-radius: 20px;
        color: rgba(255, 255, 255, 0.95);
        background:
          linear-gradient(
            145deg,
            rgba(98, 255, 222, 0.1),
            rgba(255, 255, 255, 0.02)
          );
        font-size: 31px;
        font-weight: 500;
        box-shadow:
          0 0 30px rgba(72, 255, 218, 0.06),
          inset 0 1px rgba(255, 255, 255, 0.08);
      }

      .m3-game__player-status {
        color: rgba(104, 255, 224, 0.72);
        font-size: 9px;
        font-weight: 600;
        letter-spacing: 0.2em;
      }

      .m3-game__versus {
        color: rgba(255, 255, 255, 0.24);
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.18em;
      }

      .m3-game__match-status {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-top: 32px;
        padding-top: 22px;
        border-top: 1px solid rgba(255, 255, 255, 0.07);
      }

      .m3-game__status-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #66f1ce;
        box-shadow: 0 0 14px rgba(102, 241, 206, 0.7);
      }

      .m3-game__status-text {
        margin: 0;
        color: rgba(255, 255, 255, 0.72);
        font-size: 10px;
        font-weight: 600;
        letter-spacing: 0.21em;
      }

      .m3-game__round {
        display: flex;
        justify-content: center;
        align-items: baseline;
        gap: 10px;
        margin-top: 22px;
        color: rgba(255, 255, 255, 0.34);
        font-size: 9px;
        letter-spacing: 0.18em;
      }

      .m3-game__round strong {
        color: rgba(255, 255, 255, 0.82);
        font-size: 20px;
        font-weight: 400;
      }

      .m3-game__messages {
        position: relative;
        min-height: 110px;
        margin-top: 30px;
      }

      .m3-game__message {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        color: rgba(255, 255, 255, 0.95);
        font-size: clamp(28px, 7vw, 48px);
        font-weight: 500;
        text-align: center;
        visibility: hidden;
      }

      .m3-game__reflection {
        display: none;
        padding: 30px 12px;
        box-sizing: border-box;
        text-align: center;
      }

      .m3-game__reflection-text {
        margin: 0;
        color: rgba(255, 255, 255, 0.66);
        font-size: clamp(20px, 4.5vw, 32px);
        font-weight: 300;
        line-height: 1.55;
        white-space: pre-line;
      }

      .m3-game__reflection-text--final {
        color: rgba(255, 255, 255, 0.98);
        font-size: clamp(28px, 6vw, 46px);
        line-height: 1.3;
      }

      .m3-game__divider {
        width: 46px;
        height: 1px;
        margin: 28px auto;
        background: rgba(99, 255, 222, 0.24);
      }

      .m3-game__button {
        position: relative;
        z-index: 5;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 165px;
        min-height: 48px;
        margin: 42px auto 0;
        padding: 13px 25px;
        border: 1px solid rgba(99, 255, 222, 0.2);
        border-radius: 999px;
        color: rgba(255, 255, 255, 0.9);
        background: rgba(99, 255, 222, 0.065);
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

      .m3-game__button:hover {
        transform: translateY(-2px);
        background: rgba(99, 255, 222, 0.12);
        border-color: rgba(99, 255, 222, 0.36);
      }

      .m3-game__button:disabled {
        pointer-events: none;
      }

      @media (max-width: 600px) {
        .m3-game {
          padding: 22px 14px;
        }

        .m3-game__content {
          min-height: 650px;
        }

        .m3-game__lobby {
          padding: 22px 16px;
        }

        .m3-game__players {
          gap: 12px;
        }

        .m3-game__player-avatar {
          width: 72px;
          height: 72px;
          border-radius: 17px;
        }

        .m3-game__player-label {
          font-size: 7px;
        }
      }
    </style>
  `

  const scene = app.querySelector('.m3-game')
  const intro = app.querySelector('.m3-game__intro')
  const introElements = intro.querySelectorAll(
    '.m3-game__eyebrow, .m3-game__title, .m3-game__intro-text'
  )

  const lobby = app.querySelector('.m3-game__lobby')
  const players = app.querySelectorAll('.m3-game__player')
  const versus = app.querySelector('.m3-game__versus')
  const statusText = app.querySelector('.m3-game__status-text')
  const statusDot = app.querySelector('.m3-game__status-dot')
  const roundNumber = app.querySelector('.m3-game__round strong')
  const messages = app.querySelectorAll('.m3-game__message')

  const reflection = app.querySelector('.m3-game__reflection')
  const reflectionElements = reflection.querySelectorAll(
    '.m3-game__reflection-text, .m3-game__divider'
  )

  const button = app.querySelector('.m3-game__button')
  const glows = app.querySelectorAll('.m3-game__glow')
  const scanline = app.querySelector('.m3-game__scanline')

  gsap.set(introElements, {
    autoAlpha: 0,
    y: 16
  })

  gsap.set(lobby, {
    autoAlpha: 0,
    y: 20,
    scale: 0.98
  })

  gsap.set([...players, versus], {
    autoAlpha: 0,
    y: 14
  })

  gsap.set(messages, {
    autoAlpha: 0,
    scale: 0.82,
    y: 12
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
    .to(introElements, {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.18
    })

    .to({}, {
      duration: 2.8
    })

    .to(introElements, {
      autoAlpha: 0,
      y: -14,
      duration: 0.55,
      stagger: 0.08,
      ease: 'power2.in'
    })

    .set(intro, {
      display: 'none'
    })

    .set(lobby, {
      display: 'block'
    })

    .to(lobby, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: 0.8
    })

    .to(players, {
      autoAlpha: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.15
    })

    .to(
      versus,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.45
      },
      '<0.2'
    )

    .to({}, {
      duration: 1.4
    })

    .to(statusText, {
      autoAlpha: 0,
      y: -6,
      duration: 0.25,
      ease: 'power2.in'
    })

    .add(() => {
      statusText.textContent = t.playing
    })

    .set(statusText, {
      y: 6
    })

    .to(statusText, {
      autoAlpha: 1,
      y: 0,
      duration: 0.35
    })

    .to(messages[0], {
      autoAlpha: 1,
      scale: 1,
      y: 0,
      duration: 0.55,
      ease: 'back.out(1.8)'
    })

    .to({}, {
      duration: 1.25
    })

    .to(messages[0], {
      autoAlpha: 0,
      scale: 0.92,
      y: -8,
      duration: 0.35,
      ease: 'power2.in'
    })

    .add(() => {
      roundNumber.textContent = '02'
    })

    .to(messages[1], {
      autoAlpha: 1,
      scale: 1,
      y: 0,
      duration: 0.55,
      ease: 'back.out(1.8)'
    })

    .to({}, {
      duration: 1.25
    })

    .to(messages[1], {
      autoAlpha: 0,
      scale: 0.92,
      y: -8,
      duration: 0.35,
      ease: 'power2.in'
    })

    .add(() => {
      roundNumber.textContent = '03'
    })

    .to(messages[2], {
      autoAlpha: 1,
      scale: 1,
      y: 0,
      duration: 0.55,
      ease: 'back.out(1.8)'
    })

    .to({}, {
      duration: 1.25
    })

    .to(messages[2], {
      autoAlpha: 0,
      scale: 0.92,
      y: -8,
      duration: 0.35,
      ease: 'power2.in'
    })

    .add(() => {
      roundNumber.textContent = '04'
    })

    .to(messages[3], {
      autoAlpha: 1,
      scale: 1,
      y: 0,
      duration: 0.6,
      ease: 'back.out(1.8)'
    })

    .to({}, {
      duration: 1.7
    })

    .to(messages[3], {
      autoAlpha: 0,
      scale: 0.92,
      y: -8,
      duration: 0.4,
      ease: 'power2.in'
    })

    .to(lobby, {
      autoAlpha: 0,
      y: -18,
      scale: 0.98,
      duration: 0.65,
      ease: 'power2.in'
    })

    .set(lobby, {
      display: 'none'
    })

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
      duration: 0.45
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

  gsap.to(statusDot, {
    opacity: 0.35,
    scale: 0.8,
    duration: 0.75,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  gsap.to(scanline, {
    y: '130vh',
    duration: 5.5,
    repeat: -1,
    ease: 'none'
  })

  glows.forEach((glow, index) => {
    gsap.to(glow, {
      x: index === 0 ? -30 : 30,
      y: index === 0 ? 25 : -25,
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