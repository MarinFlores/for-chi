import gsap from 'gsap'
import { texts } from '../../i18n.js'

export function renderMonthLetter(app, next) {
  const lang = window.__lang || 'es'
  const t = texts[lang].monthOneLetter

  app.innerHTML = `
    <style>
      .letter-screen {
        min-height: 100vh;

        display: flex;
        justify-content: center;

        padding:
          60px
          22px;

        background:
          radial-gradient(circle at top, rgba(255,255,255,0.03), transparent 40%),
          linear-gradient(180deg, #111111 0%, #070707 100%);

        color: #ece7df;
      }

      .letter-paper {
        width: min(92vw, 980px);

        padding:
          clamp(34px, 5vw, 68px);

        border-radius: 34px;

        background:
          linear-gradient(
            180deg,
            rgba(255,255,255,0.03) 0%,
            rgba(255,255,255,0.015) 100%
          );

        border: 1px solid rgba(255,255,255,0.045);

        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);

        box-shadow:
          0 10px 60px rgba(0,0,0,0.24);
      }

      .letter-date {
        font-size: 0.72rem;

        letter-spacing: 0.24em;
        text-transform: uppercase;

        color: rgba(236,231,223,0.34);
      }

      .letter-title {
        margin-top: 18px;

        font-size: clamp(2.6rem, 6vw, 5rem);

        line-height: 0.95;

        letter-spacing: -0.07em;

        font-weight: 500;

        color: rgba(236,231,223,0.96);

        max-width: 720px;
      }

      .letter-body {
        margin-top: 54px;
      }

      .letter-row {
        display: grid;

        grid-template-columns:
          minmax(0, 1fr)
          320px;

        gap: 54px;

        align-items: center;
      }

      .letter-text {
        font-size: 1.06rem;

        line-height: 1.95;

        letter-spacing: -0.01em;

        color: rgba(236,231,223,0.74);

        white-space: pre-line;
      }

      .letter-image {
        position: sticky;

        top: 40px;

        margin-top: 180px;
      }

      .letter-image img {
        width: 100%;

        border-radius: 22px;

        display: block;

        opacity: 0.96;
      }

      .letter-sign {
        margin-top: 46px;

        font-size: 1rem;

        line-height: 1.9;

        color: rgba(236,231,223,0.62);
      }

      .letter-next {
        margin-top: 52px;

        display: flex;
        justify-content: center;
      }

      .letter-button {
        padding:
          12px
          22px;

        border-radius: 999px;

        border: 1px solid rgba(255,255,255,0.06);

        background: rgba(255,255,255,0.03);

        color: rgba(236,231,223,0.64);

        font-size: 0.7rem;

        letter-spacing: 0.22em;
        text-transform: uppercase;

        cursor: pointer;

        transition:
          transform 0.25s ease,
          border-color 0.25s ease,
          background 0.25s ease;
      }

      .letter-button:hover {
        transform: translateY(-2px);

        border-color: rgba(255,255,255,0.12);

        background: rgba(255,255,255,0.045);
      }

      @media (max-width: 900px) {
        .letter-row {
          grid-template-columns: 1fr;

          gap: 28px;
        }

        .letter-image {
          position: relative;

          top: 0;

          margin-top: 10px;
        }

        .letter-image img {
          max-width: 320px;
        }
      }

      @media (max-width: 768px) {
        .letter-screen {
          padding:
            22px
            14px;
        }

        .letter-paper {
          border-radius: 28px;

          padding:
            26px
            22px;
        }

        .letter-title {
          font-size: 3rem;
        }

        .letter-text {
          font-size: 1rem;

          line-height: 1.85;
        }
      }
    </style>

    <section class="letter-screen">

      <div class="letter-paper">

        <div class="letter-date">
          ${t.label}
        </div>

        <div class="letter-title">
          ${t.topTitle}
        </div>

        <div class="letter-body">

          <div class="letter-row">

            <div class="letter-text">
              ${t.full.replace(/\n/g, '<br>')}
            </div>

            <div class="letter-image">
              <img src="/assets/first-call.jpeg" alt="">
            </div>

          </div>

        </div>

        <div class="letter-sign">
          ${t.sign}
        </div>

        <div class="letter-next">

          <button class="letter-button">
            ${t.continue}
          </button>

        </div>

      </div>

    </section>
  `

  gsap.from('.letter-paper', {
    opacity: 0,
    y: 18,
    duration: 1,
    ease: 'power3.out'
  })

  document.querySelector('.letter-button')
    .addEventListener('click', () => {

      gsap.to('.letter-paper', {
        opacity: 0,
        y: -18,
        duration: 0.7,
        ease: 'power2.inOut',
        onComplete: next
      })

    })
}