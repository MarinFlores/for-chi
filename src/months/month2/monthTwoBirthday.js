import gsap from 'gsap'
import { texts } from '../../i18n.js'

export function renderMonthTwoBirthday(app, next) {
  const lang = window.__lang || 'es'
  const t = texts[lang].monthTwoBirthday

  app.innerHTML = `
    <section class="m2-birthday">
      <div class="m2-birthday-wrap">
        <div class="m2-birthday-copy">
          <p class="m2-birthday-kicker">${t.kicker}</p>
          <h1>${t.title}</h1>
          <p>${t.text}</p>
          <button class="m2-birthday-btn">${t.button}</button>
        </div>

        <div class="m2-birthday-board">
          <div class="m2-birthday-polaroid call">
            <img src="${t.callImage}" alt="birthday video call">
          </div>

          <div class="m2-birthday-polaroid message">
            <img src="${t.messageImage}" alt="birthday message">
          </div>

          <div class="m2-birthday-note">
            ${t.note}
          </div>
        </div>
      </div>
    </section>

    <style>
      .m2-birthday {
        min-height: 100vh;
        position: relative;
        overflow: hidden;
        display: grid;
        place-items: center;
        padding: 48px 18px;
        background:
          radial-gradient(circle at 50% 18%, rgba(214,185,145,.13), transparent 34%),
          radial-gradient(circle at 12% 82%, rgba(255,255,255,.05), transparent 30%),
          linear-gradient(180deg, #101011 0%, #050505 100%);
        color: rgba(245,241,234,.94);
      }

      .m2-birthday-wrap {
        width: min(94vw, 980px);
        display: grid;
        grid-template-columns: .95fr 1.05fr;
        gap: clamp(28px, 5vw, 58px);
        align-items: center;
      }

      .m2-birthday-kicker {
        margin: 0;
        font-size: .72rem;
        letter-spacing: .34em;
        text-transform: uppercase;
        color: rgba(245,241,234,.38);
      }

      .m2-birthday-copy h1 {
        margin: 22px 0 0;
        font-size: clamp(3.4rem, 8vw, 6.6rem);
        line-height: .88;
        letter-spacing: -.065em;
        font-weight: 600;
      }

      .m2-birthday-copy p:not(.m2-birthday-kicker) {
        margin: 30px 0 0;
        max-width: 500px;
        font-size: 1rem;
        line-height: 1.85;
        color: rgba(245,241,234,.62);
      }

      .m2-birthday-btn {
        margin-top: 38px;
        padding: 13px 22px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,.08);
        background: rgba(255,255,255,.035);
        color: rgba(245,241,234,.72);
        cursor: pointer;
        font-size: .7rem;
        letter-spacing: .22em;
        text-transform: uppercase;
      }

      .m2-birthday-board {
        position: relative;
        min-height: 560px;
      }

      .m2-birthday-polaroid {
        position: absolute;
        padding: 12px 12px 42px;
        border-radius: 24px;
        background: rgba(238,232,222,.92);
        box-shadow: 0 30px 90px rgba(0,0,0,.42);
      }

      .m2-birthday-polaroid img {
        width: 100%;
        max-height: 360px;
        object-fit: contain;
        display: block;
        border-radius: 16px;
        background: rgba(0,0,0,.08);
      }

      .m2-birthday-polaroid.call {
        width: min(74vw, 370px);
        right: 10%;
        top: 0;
        transform: rotate(4deg);
      }

      .m2-birthday-polaroid.message {
        width: min(70vw, 310px);
        left: 0;
        bottom: 0;
        transform: rotate(-5deg);
      }

      .m2-birthday-note {
        position: absolute;
        right: 0;
        bottom: 54px;
        width: min(82vw, 360px);
        padding: 20px 22px;
        border-radius: 24px;
        border: 1px solid rgba(255,255,255,.06);
        background: rgba(10,10,10,.72);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        color: rgba(245,241,234,.68);
        line-height: 1.75;
      }

      @media (max-width: 860px) {
        .m2-birthday-wrap {
          grid-template-columns: 1fr;
        }

        .m2-birthday-copy {
          text-align: center;
        }

        .m2-birthday-copy p:not(.m2-birthday-kicker) {
          margin-left: auto;
          margin-right: auto;
        }

        .m2-birthday-board {
          min-height: 650px;
        }

        .m2-birthday-polaroid.call {
          right: 0;
        }

        .m2-birthday-polaroid.message {
          left: 0;
          bottom: 90px;
        }

        .m2-birthday-note {
          left: 50%;
          right: auto;
          bottom: 0;
          transform: translateX(-50%);
          text-align: center;
        }
      }
    </style>
  `

  gsap.from('.m2-birthday-copy', {
    opacity: 0,
    y: 22,
    duration: 1,
    ease: 'power3.out'
  })

  gsap.from('.m2-birthday-polaroid', {
    opacity: 0,
    y: 34,
    scale: 0.94,
    rotate: 0,
    duration: 0.9,
    stagger: 0.12,
    delay: 0.15,
    ease: 'power3.out'
  })

  gsap.from('.m2-birthday-note', {
    opacity: 0,
    y: 16,
    duration: 0.75,
    delay: 0.65,
    ease: 'power3.out'
  })

  document.querySelector('.m2-birthday-btn').addEventListener('click', () => {
    gsap.to('.m2-birthday-wrap', {
      opacity: 0,
      y: -18,
      duration: 0.7,
      ease: 'power2.inOut',
      onComplete: next
    })
  })
}