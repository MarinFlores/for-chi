import gsap from 'gsap'
import { texts } from '../../i18n.js'
import { renderStoryHub } from '../../scenes/storyHub.js'

export function renderMonthFinal(app, nextScene, startExperience, openMonth) {
  const lang = window.__lang || 'es'
  const t = texts[lang].monthOneFinal

  app.innerHTML = `
    <style>
      .month-final-screen {
        min-height: 100vh;
        display: grid;
        place-items: center;
        background:
          radial-gradient(circle at top, rgba(255,255,255,0.05), transparent 38%),
          linear-gradient(180deg, #0d0d0f 0%, #040404 100%);
        color: rgba(245,241,234,0.92);
        padding: 24px;
      }

      .month-final-content {
        text-align: center;
        max-width: 820px;
      }

      .month-final-line {
        font-size: clamp(3rem, 8vw, 6rem);
        line-height: 0.92;
        letter-spacing: -0.06em;
        font-weight: 600;
        margin: 0;
      }

      .month-final-end {
        margin-top: 36px;
        font-size: 0.78rem;
        letter-spacing: 0.24em;
        text-transform: uppercase;
        color: rgba(245,241,234,0.46);
      }

      .month-final-button {
        margin-top: 46px;
        padding: 13px 22px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.08);
        background: rgba(255,255,255,0.035);
        color: rgba(245,241,234,0.72);
        cursor: pointer;
        font-size: 0.7rem;
        letter-spacing: 0.22em;
        text-transform: uppercase;
      }
    </style>

    <section class="month-final-screen">
      <div class="month-final-content">
        <h1 class="month-final-line">${t.line}</h1>
        <p class="month-final-end">${t.end}</p>

        <button class="month-final-button">
          ${t.button}
        </button>
      </div>
    </section>
  `

  gsap.from('.month-final-content', {
    opacity: 0,
    y: 22,
    duration: 1,
    ease: 'power3.out'
  })

  document.querySelector('.month-final-button').addEventListener('click', () => {
    gsap.to('.month-final-content', {
      opacity: 0,
      y: -18,
      duration: 0.7,
      ease: 'power2.inOut',
      onComplete: () => {
        renderStoryHub(app, openMonth, startExperience)
      }
    })
  })
}