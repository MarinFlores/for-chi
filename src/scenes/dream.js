import gsap from 'gsap'
import { texts } from '../i18n.js'

export function renderDream(app, returnToStoryHub) {
  const lang = window.__lang || 'es'
  const t = texts[lang].dream

  app.innerHTML = `
    <main class="dream-screen">
      <style>
        .dream-screen {
          min-height: 100vh;

          padding:
            90px
            24px
            120px;

          background:
            radial-gradient(
              circle at 50% 10%,
              rgba(255, 255, 255, 0.025),
              transparent 38%
            ),
            #090909;

          color: rgba(245, 241, 234, 0.94);
        }

        .dream-content {
          width: min(100%, 720px);
          margin: 0 auto;
        }

        .dream-header {
          margin-bottom: 48px;
        }

        .dream-eyebrow {
          margin:
            0
            0
            18px;

          font-size: 0.72rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;

          color: rgba(245, 241, 234, 0.36);
        }

        .dream-title {
          margin: 0;

          font-size: clamp(
            2rem,
            5vw,
            3.5rem
          );

          line-height: 1.05;
          letter-spacing: -0.045em;
          font-weight: 600;

          color: rgba(245, 241, 234, 0.96);
        }

        .dream-audio-section {
          margin-bottom: 64px;

          padding:
            22px
            24px;

          border:
            1px
            solid
            rgba(255, 255, 255, 0.06);

          border-radius: 22px;

          background:
            rgba(255, 255, 255, 0.022);
        }

        .dream-audio-top {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 20px;

          margin-bottom: 16px;
        }

        .dream-audio-note {
          margin: 0;

          font-size: 0.78rem;
          letter-spacing: 0.08em;

          color: rgba(245, 241, 234, 0.42);
        }

        .dream-audio-duration {
          margin: 0;

          font-size: 0.75rem;

          color: rgba(245, 241, 234, 0.28);
        }

        .dream-audio {
          width: 100%;
          height: 42px;

          display: block;
        }

        .dream-transcript {
          font-size: 1.02rem;
          line-height: 1.9;

          color: rgba(245, 241, 234, 0.72);
        }

        .dream-transcript p {
          margin:
            0
            0
            24px;
        }

        .dream-transcript p:first-child {
          color: rgba(245, 241, 234, 0.92);
        }

        .dream-transcript p:last-child {
          margin-bottom: 0;

          color: rgba(245, 241, 234, 0.9);
        }

        .dream-footer {
          margin-top: 76px;

          padding-top: 30px;

          border-top:
            1px
            solid
            rgba(255, 255, 255, 0.05);

          text-align: center;
        }

        .dream-back {
          padding: 10px 0;

          border: 0;
          background: transparent;

          color: rgba(245, 241, 234, 0.38);

          font: inherit;
          font-size: 0.76rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;

          cursor: pointer;

          transition:
            color 0.25s ease,
            opacity 0.25s ease;
        }

        .dream-back:hover {
          color: rgba(245, 241, 234, 0.78);
        }

        @media (max-width: 640px) {
          .dream-screen {
            padding:
              72px
              22px
              96px;
          }

          .dream-header {
            margin-bottom: 36px;
          }

          .dream-audio-section {
            margin-bottom: 48px;

            padding:
              18px
              18px;
          }

          .dream-audio-top {
            align-items: flex-start;
            flex-direction: column;
            gap: 6px;
          }

          .dream-transcript {
            font-size: 1rem;
            line-height: 1.8;
          }

          .dream-transcript p {
            margin-bottom: 21px;
          }

          .dream-footer {
            margin-top: 60px;
            padding-top: 26px;
          }
        }
      </style>

      <section class="dream-content">

        <header class="dream-header">
          <p class="dream-eyebrow">
            ${t.eyebrow}
          </p>

          <h1 class="dream-title">
            ${t.title}
          </h1>
        </header>

        <section class="dream-audio-section">

          <div class="dream-audio-top">
            <p class="dream-audio-note">
              ${t.audioNote}
            </p>

            <p
              class="dream-audio-duration"
              aria-hidden="true"
            ></p>
          </div>

          <audio
            class="dream-audio"
            controls
            preload="metadata"
          >
            <source
              src="/assets/voice-note.m4a"
              type="audio/mp4"
            >

            Tu navegador no puede reproducir este audio.
          </audio>

        </section>

        <article class="dream-transcript">
          ${t.transcript
            .map((paragraph) => `<p>${paragraph}</p>`)
            .join('')}
        </article>

        <footer class="dream-footer">
          <button class="dream-back">
            ${t.back}
          </button>
        </footer>

      </section>
    </main>
  `

  const content = document.querySelector('.dream-content')
  const audio = document.querySelector('.dream-audio')
  const duration = document.querySelector('.dream-audio-duration')
  const backButton = document.querySelector('.dream-back')

  let musicWasPlaying = false

  gsap.from(content, {
    opacity: 0,
    y: 12,
    duration: 0.7,
    ease: 'power2.out'
  })

  audio.addEventListener('loadedmetadata', () => {
    if (!Number.isFinite(audio.duration)) {
      return
    }

    const totalSeconds = Math.round(audio.duration)

    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60

    duration.textContent =
      `${minutes}:${String(seconds).padStart(2, '0')}`
  })

  audio.addEventListener('play', () => {
    const backgroundMusic = window.__music

    if (!backgroundMusic) {
      return
    }

    musicWasPlaying =
      typeof window.__musicPlaying === 'function' &&
      window.__musicPlaying()

    if (musicWasPlaying) {
      backgroundMusic.pause()
    }
  })

  audio.addEventListener('pause', () => {
    if (!musicWasPlaying) {
      return
    }

    const backgroundMusic = window.__music

    if (!backgroundMusic || audio.ended) {
      return
    }

    backgroundMusic.play().catch(() => {})
    musicWasPlaying = false
  })

  audio.addEventListener('ended', () => {
    if (!musicWasPlaying) {
      return
    }

    const backgroundMusic = window.__music

    if (backgroundMusic) {
      backgroundMusic.play().catch(() => {})
    }

    musicWasPlaying = false
  })

  backButton.addEventListener('click', () => {
    gsap.to(content, {
      opacity: 0,
      y: 10,
      duration: 0.35,
      ease: 'power2.inOut',
      onComplete: returnToStoryHub
    })
  })
}