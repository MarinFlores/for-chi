import gsap from 'gsap'
import { texts } from '../../i18n.js'

export function renderMonthOneIntro(app, next) {
  const lang = window.__lang || 'es'
  const t = texts[lang].monthOneIntro

  app.innerHTML = `
    <style>
      .month-intro-screen {
        position: relative;
        min-height: 100vh;

        display: grid;
        place-items: center;

        overflow: hidden;

        background:
          radial-gradient(circle at top, rgba(255,255,255,0.05), transparent 38%),
          linear-gradient(180deg, #0d0d0f 0%, #040404 100%);

        color: rgba(245,241,234,0.92);
      }

      .month-intro-content {
        position: relative;
        z-index: 2;

        text-align: center;

        padding: 24px;
      }

      .month-intro-label {
        font-size: 0.72rem;

        letter-spacing: 0.32em;
        text-transform: uppercase;

        opacity: 0.34;
      }

      .month-intro-title {
        margin-top: 20px;

        font-size: clamp(4rem, 10vw, 8rem);

        line-height: 0.9;

        letter-spacing: -0.06em;

        font-weight: 600;

        opacity: 0.96;
      }

      .month-intro-subtitle {
        margin-top: 26px;

        font-size: 0.98rem;

        letter-spacing: -0.01em;

        color: rgba(245,241,234,0.56);
      }

      .month-intro-button {
        margin-top: 48px;

        padding: 13px 22px;

        border-radius: 999px;

        border: 1px solid rgba(255,255,255,0.08);

        background: rgba(255,255,255,0.035);

        color: rgba(245,241,234,0.72);

        cursor: pointer;

        font-size: 0.7rem;
        letter-spacing: 0.22em;
        text-transform: uppercase;

        transition:
          transform 0.25s ease,
          border-color 0.25s ease,
          background 0.25s ease,
          opacity 0.25s ease;
      }

      .month-intro-button:hover {
        transform: translateY(-2px);

        border-color: rgba(255,255,255,0.14);

        background: rgba(255,255,255,0.05);

        opacity: 1;
      }
    </style>

    <section class="month-intro-screen">

      <div class="month-intro-content">

        <p class="month-intro-label">
          ${t.label}
        </p>

        <h1 class="month-intro-title">
          ${t.title}
        </h1>

        <p class="month-intro-subtitle">
          ${t.subtitle}
        </p>

        <button class="month-intro-button">
          ${t.button}
        </button>

      </div>

    </section>
  `

  gsap.from('.month-intro-content', {
    opacity: 0,
    y: 22,
    duration: 1.1,
    ease: 'power3.out'
  })

  document.querySelector('.month-intro-button')
    .addEventListener('click', () => {
      gsap.to('.month-intro-content', {
        opacity: 0,
        y: -20,
        duration: 0.7,
        ease: 'power2.inOut',
        onComplete: next
      })
    })
}