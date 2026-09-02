import gsap from 'gsap'
import { texts } from '../i18n.js'

export function renderDreamIntro(app, nextScene) {
  const lang = window.__lang || 'es'
  const t = texts[lang].dreamIntro

  app.innerHTML = `
    <main class="dream-intro-screen">
      <style>
        .dream-intro-screen {
          min-height: 100vh;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 48px 24px;

          background:
            radial-gradient(
              circle at center,
              rgba(255,255,255,0.025),
              transparent 52%
            ),
            #090909;

          color: rgba(245,241,234,0.94);
        }

        .dream-intro-content {
          width: min(100%, 620px);
        }

        .dream-intro-eyebrow {
          margin: 0 0 34px;

          font-size: 0.72rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;

          color: rgba(245,241,234,0.38);
        }

        .dream-intro-text {
          font-size: clamp(1.05rem, 2vw, 1.2rem);
          line-height: 1.8;

          color: rgba(245,241,234,0.82);
        }

        .dream-intro-text p {
          margin:
            0
            0
            22px;
        }

        .dream-intro-text p:first-child {
          color: rgba(245,241,234,0.96);
        }

        .dream-intro-continue {
          margin-top: 26px;

          padding: 12px 0;

          border: 0;
          background: transparent;

          color: rgba(245,241,234,0.56);

          font: inherit;
          font-size: 0.82rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;

          cursor: pointer;

          transition:
            color 0.25s ease,
            opacity 0.25s ease;
        }

        .dream-intro-continue:hover {
          color: rgba(245,241,234,0.9);
        }

        @media (max-width: 640px) {
          .dream-intro-screen {
            align-items: flex-start;

            padding:
              18vh
              24px
              64px;
          }

          .dream-intro-content {
            width: 100%;
          }

          .dream-intro-text {
            font-size: 1rem;
            line-height: 1.75;
          }

          .dream-intro-text p {
            margin-bottom: 18px;
          }
        }
      </style>

      <section class="dream-intro-content">

        <p class="dream-intro-eyebrow">
          ${t.eyebrow}
        </p>

        <div class="dream-intro-text">
          ${t.paragraphs
            .map((paragraph) => `<p>${paragraph}</p>`)
            .join('')}
        </div>

        <button class="dream-intro-continue">
          ${t.continue}
        </button>

      </section>
    </main>
  `

  const content = document.querySelector('.dream-intro-content')
  const continueButton = document.querySelector('.dream-intro-continue')

  gsap.from(content, {
    opacity: 0,
    y: 12,
    duration: 0.7,
    ease: 'power2.out'
  })

  continueButton.addEventListener('click', () => {
    gsap.to(content, {
      opacity: 0,
      y: -10,
      duration: 0.4,
      ease: 'power2.inOut',
      onComplete: nextScene
    })
  })
}