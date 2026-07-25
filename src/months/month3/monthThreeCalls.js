import gsap from 'gsap'
import { content } from '../../data/content.js'

export function renderMonthThreeCalls(app, next) {
  const lang = window.__lang || 'es'
  const t = content[lang].monthThreeCalls

  app.innerHTML = `
    <section class="m3-calls">
      <div class="m3-calls__background" aria-hidden="true">
        <div class="m3-calls__glow m3-calls__glow--one"></div>
        <div class="m3-calls__glow m3-calls__glow--two"></div>
      </div>

      <div class="m3-calls__interface">
        <header class="m3-calls__header">
          <div class="m3-calls__connection">
            <span class="m3-calls__connection-dot"></span>
            <span>${t.connected}</span>
          </div>

          <span class="m3-calls__type">${t.callType}</span>
        </header>

        <div class="m3-calls__call">
          <div class="m3-calls__avatar">
            <div class="m3-calls__avatar-ring"></div>
            <span>C</span>
          </div>

          <p class="m3-calls__name">My Chiii</p>

          <p class="m3-calls__timer" aria-live="polite">
            00:00:01
          </p>

          <div class="m3-calls__messages">
            <p class="m3-calls__message">${t.message1}</p>
            <p class="m3-calls__message">${t.message2}</p>
            <p class="m3-calls__message">${t.message3}</p>
            <p class="m3-calls__message">${t.message4}</p>
          </div>
        </div>

        <div class="m3-calls__reflection">
          <p class="m3-calls__distance-label">
            ${t.distanceLabel}
          </p>

          <p class="m3-calls__distance">
            ${t.distance}
          </p>

          <div class="m3-calls__divider"></div>

          <p class="m3-calls__feeling-label">
            ${t.feelingLabel}
          </p>

          <p class="m3-calls__feeling">
            ${t.feeling}
          </p>
        </div>

        <button class="m3-calls__button" type="button">
          ${t.button}
        </button>
      </div>
    </section>

    <style>
      .m3-calls {
        position: relative;
        width: 100%;
        min-height: 100svh;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 38px 22px;
        box-sizing: border-box;
        color: #fff;
        background:
          radial-gradient(
            circle at 50% 18%,
            rgba(210, 188, 171, 0.08),
            transparent 36%
          ),
          linear-gradient(
            145deg,
            #080808 0%,
            #11100f 48%,
            #090909 100%
          );
      }

      .m3-calls__background {
        position: absolute;
        inset: 0;
        pointer-events: none;
      }

      .m3-calls__background::after {
        content: "";
        position: absolute;
        inset: 0;
        opacity: 0.18;
        background-image:
          linear-gradient(
            rgba(255, 255, 255, 0.018) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.018) 1px,
            transparent 1px
          );
        background-size: 64px 64px;
      }

      .m3-calls__glow {
        position: absolute;
        border-radius: 999px;
        filter: blur(110px);
        opacity: 0.13;
      }

      .m3-calls__glow--one {
        width: 350px;
        height: 350px;
        top: -140px;
        right: -100px;
        background: #c3a28c;
      }

      .m3-calls__glow--two {
        width: 280px;
        height: 280px;
        bottom: -120px;
        left: -80px;
        background: #755f54;
      }

      .m3-calls__interface {
        position: relative;
        z-index: 2;
        width: min(520px, 100%);
        padding: 24px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 28px;
        background: rgba(255, 255, 255, 0.035);
        box-shadow:
          0 30px 90px rgba(0, 0, 0, 0.38),
          inset 0 1px rgba(255, 255, 255, 0.045);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
      }

      .m3-calls__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 20px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      }

      .m3-calls__connection {
        display: flex;
        align-items: center;
        gap: 9px;
        color: rgba(255, 255, 255, 0.58);
        font-size: 9px;
        font-weight: 600;
        letter-spacing: 0.2em;
        text-transform: uppercase;
      }

      .m3-calls__connection-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #a5c7a3;
        box-shadow: 0 0 12px rgba(165, 199, 163, 0.65);
      }

      .m3-calls__type {
        color: rgba(255, 255, 255, 0.3);
        font-size: 9px;
        letter-spacing: 0.18em;
        text-transform: uppercase;
      }

      .m3-calls__call {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 410px;
        padding: 42px 12px 28px;
      }

      .m3-calls__avatar {
        position: relative;
        width: 92px;
        height: 92px;
        display: grid;
        place-items: center;
        border-radius: 50%;
        color: rgba(255, 255, 255, 0.9);
        background:
          linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.13),
            rgba(255, 255, 255, 0.035)
          );
        font-size: 30px;
        font-weight: 300;
        box-shadow:
          0 15px 50px rgba(0, 0, 0, 0.3),
          inset 0 1px rgba(255, 255, 255, 0.1);
      }

      .m3-calls__avatar-ring {
        position: absolute;
        inset: -8px;
        border: 1px solid rgba(226, 211, 201, 0.18);
        border-radius: 50%;
      }

      .m3-calls__name {
        margin: 18px 0 0;
        color: rgba(255, 255, 255, 0.78);
        font-size: 13px;
        letter-spacing: 0.18em;
        text-transform: uppercase;
      }

      .m3-calls__timer {
        margin: 13px 0 0;
        color: rgba(255, 255, 255, 0.96);
        font-size: clamp(30px, 8vw, 48px);
        font-weight: 200;
        letter-spacing: 0.05em;
        font-variant-numeric: tabular-nums;
        will-change: opacity, transform;
      }

      .m3-calls__messages {
        position: relative;
        width: 100%;
        min-height: 110px;
        margin-top: 34px;
        text-align: center;
      }

      .m3-calls__message {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        margin: 0;
        color: rgba(255, 255, 255, 0.68);
        font-size: clamp(16px, 3.4vw, 20px);
        font-weight: 300;
        line-height: 1.6;
        visibility: hidden;
      }

      .m3-calls__reflection {
        display: none;
        text-align: center;
        padding: 36px 10px 20px;
      }

      .m3-calls__distance-label,
      .m3-calls__feeling-label {
        margin: 0;
        color: rgba(255, 255, 255, 0.34);
        font-size: 9px;
        font-weight: 600;
        letter-spacing: 0.23em;
        text-transform: uppercase;
      }

      .m3-calls__distance {
        margin: 10px 0 0;
        color: rgba(255, 255, 255, 0.62);
        font-size: clamp(20px, 5vw, 30px);
        font-weight: 300;
      }

      .m3-calls__divider {
        width: 44px;
        height: 1px;
        margin: 27px auto;
        background: rgba(255, 255, 255, 0.17);
      }

      .m3-calls__feeling {
        margin: 10px 0 0;
        color: rgba(255, 255, 255, 0.96);
        font-size: clamp(27px, 6vw, 39px);
        font-weight: 300;
        line-height: 1.25;
      }

      .m3-calls__button {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 165px;
        min-height: 48px;
        margin: 4px auto 0;
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

      .m3-calls__button:hover {
        transform: translateY(-2px);
        background: rgba(255, 255, 255, 0.13);
        border-color: rgba(255, 255, 255, 0.28);
      }

      .m3-calls__button:disabled {
        pointer-events: none;
      }

      @media (max-width: 600px) {
        .m3-calls {
          padding: 18px 14px;
        }

        .m3-calls__interface {
          padding: 20px 18px;
          border-radius: 24px;
        }

        .m3-calls__call {
          min-height: 390px;
          padding-top: 38px;
        }

        .m3-calls__messages {
          min-height: 125px;
        }
      }
    </style>
  `

  const scene = app.querySelector('.m3-calls')
  const interfaceElement = app.querySelector('.m3-calls__interface')
  const call = app.querySelector('.m3-calls__call')
  const timer = app.querySelector('.m3-calls__timer')
  const avatarRing = app.querySelector('.m3-calls__avatar-ring')
  const messages = app.querySelectorAll('.m3-calls__message')
  const reflection = app.querySelector('.m3-calls__reflection')
  const reflectionElements = reflection.querySelectorAll('p, div')
  const button = app.querySelector('.m3-calls__button')
  const connectionDot = app.querySelector('.m3-calls__connection-dot')
  const glows = app.querySelectorAll('.m3-calls__glow')

  const timerValues = [
    '00:00:01',
    '00:42:18',
    '03:48:17',
    '06:21:54'
  ]

  timer.textContent = timerValues[0]

  gsap.set(interfaceElement, {
    autoAlpha: 0,
    y: 24,
    scale: 0.98
  })

  gsap.set(timer, {
    autoAlpha: 1,
    y: 0
  })

  gsap.set(messages, {
    autoAlpha: 0,
    y: 12
  })

  gsap.set(reflectionElements, {
    autoAlpha: 0,
    y: 13
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
    .to(interfaceElement, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: 1
    })

    .to(messages[0], {
      autoAlpha: 1,
      y: 0,
      duration: 0.7
    })

    .to({}, {
      duration: 2.2
    })

    .to(
      messages[0],
      {
        autoAlpha: 0,
        y: -10,
        duration: 0.4,
        ease: 'power2.in'
      }
    )

    .to(
      timer,
      {
        autoAlpha: 0,
        y: -6,
        duration: 0.25,
        ease: 'power2.in'
      },
      '<'
    )

    .add(() => {
      timer.textContent = timerValues[1]
    })

    .set(timer, {
      y: 6
    })

    .set(messages[1], {
      autoAlpha: 0,
      y: 12
    })

    .to(
      timer,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.35
      }
    )

    .to(
      messages[1],
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.65
      },
      '<'
    )

    .to({}, {
      duration: 2.2
    })

    .to(
      messages[1],
      {
        autoAlpha: 0,
        y: -10,
        duration: 0.4,
        ease: 'power2.in'
      }
    )

    .to(
      timer,
      {
        autoAlpha: 0,
        y: -6,
        duration: 0.25,
        ease: 'power2.in'
      },
      '<'
    )

    .add(() => {
      timer.textContent = timerValues[2]
    })

    .set(timer, {
      y: 6
    })

    .set(messages[2], {
      autoAlpha: 0,
      y: 12
    })

    .to(
      timer,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.35
      }
    )

    .to(
      messages[2],
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.65
      },
      '<'
    )

    .to({}, {
      duration: 2.2
    })

    .to(
      messages[2],
      {
        autoAlpha: 0,
        y: -10,
        duration: 0.4,
        ease: 'power2.in'
      }
    )

    .to(
      timer,
      {
        autoAlpha: 0,
        y: -6,
        duration: 0.25,
        ease: 'power2.in'
      },
      '<'
    )

    .add(() => {
      timer.textContent = timerValues[3]
    })

    .set(timer, {
      y: 6
    })

    .set(messages[3], {
      autoAlpha: 0,
      y: 12
    })

    .to(
      timer,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.35
      }
    )

    .to(
      messages[3],
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.65
      },
      '<'
    )

    .to({}, {
      duration: 2.5
    })

    .to(
      messages[3],
      {
        autoAlpha: 0,
        y: -10,
        duration: 0.45,
        ease: 'power2.in'
      }
    )

    .to(
      timer,
      {
        autoAlpha: 0,
        y: -6,
        duration: 0.3,
        ease: 'power2.in'
      },
      '<'
    )

    .to(call, {
      autoAlpha: 0,
      y: -18,
      duration: 0.65
    })

    .set(call, {
      display: 'none'
    })

    .set(reflection, {
      display: 'block'
    })

    .to(reflectionElements, {
      autoAlpha: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.18
    })

    .to(button, {
      autoAlpha: 1,
      visibility: 'visible',
      y: 0,
      duration: 0.7
    })

  gsap.to(avatarRing, {
    scale: 1.12,
    opacity: 0.35,
    duration: 1.7,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  gsap.to(connectionDot, {
    opacity: 0.35,
    duration: 1.1,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  glows.forEach((glow, index) => {
    gsap.to(glow, {
      x: index === 0 ? -25 : 25,
      y: index === 0 ? 18 : -18,
      duration: 7 + index,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
  })

  button.addEventListener('click', () => {
    button.disabled = true

    timeline.kill()

    gsap.to(interfaceElement, {
      autoAlpha: 0,
      y: -20,
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