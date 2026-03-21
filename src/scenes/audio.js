import gsap from 'gsap'
import { texts } from '../i18n.js'

export function renderAudio(app, next) {
  const t = texts.audio

  app.innerHTML = `
    <main
      style="
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
      "
    >
      <div
        style="
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
        <div
          id="audio-stage"
          style="
            width: min(980px, 92vw);
            display: flex;
            flex-direction: column;
            align-items: center;
          "
        >
          <p
            id="audio-intro"
            style="
              margin: 0 0 38px 0;
              font-size: 0.95rem;
              opacity: 0;
              color: #f5f1ea;
              letter-spacing: 0.04em;
              text-align: center;
            "
          >
            ${t.intro}
          </p>

          <div
            id="audio-cards"
            style="
              width: 100%;
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 60px;
              opacity: 0;
            "
          >
            <div
              id="audio-card-chi"
              style="
                background: rgba(255,255,255,0.04);
                border: 1px solid rgba(255,255,255,0.06);
                border-radius: 22px;
                padding: 22px 22px 18px;
                backdrop-filter: blur(6px);
                -webkit-backdrop-filter: blur(6px);
                opacity: 0;
                transform: translateY(14px);
                align-self: flex-start;
                transform: translateY(10px);
              "
            >
              <p
                class="audio-label"
                style="
                  margin: 0 0 12px 0;
                  font-size: 0.75rem;
                  letter-spacing: 0.2em;
                  text-transform: uppercase;
                  opacity: 0.5;
                  color: #f5f1ea;
                "
              >
                ${t.chiLabel}
              </p>

              <audio
                id="chi-audio"
                controls
                preload="metadata"
                style="
                  width: 100%;
                  opacity: 0.92;
                "
              >
                <source src="/assets/chi-audio.mp3" type="audio/mpeg" />
              </audio>
            </div>

            <div
              id="audio-card-machy"
              style="
                background: rgba(255,255,255,0.04);
                border: 1px solid rgba(255,255,255,0.06);
                border-radius: 22px;
                padding: 22px 22px 18px;
                backdrop-filter: blur(6px);
                -webkit-backdrop-filter: blur(6px);
                opacity: 0;
                transform: translateY(14px);
                align-self: flex-end;
                transform: translateY(-10px);
              "
            >
              <p
                class="audio-label"
                style="
                  margin: 0 0 12px 0;
                  font-size: 0.75rem;
                  letter-spacing: 0.2em;
                  text-transform: uppercase;
                  opacity: 0.5;
                  color: #f5f1ea;
                "
              >
                ${t.machyLabel}
              </p>

              <audio
                id="machy-audio"
                controls
                preload="metadata"
                style="
                  width: 100%;
                  opacity: 0.92;
                "
              >
                <source src="/assets/machy-audio.mp3" type="audio/mpeg" />
              </audio>
            </div>
          </div>

          <div
            id="audio-copy"
            style="
              margin-top: 40px;
              text-align: center;
              opacity: 0;
              transform: translateY(12px);
            "
          >
            <p
              style="
                margin: 0 0 10px 0;
                font-size: 0.95rem;
                opacity: 0.72;
                color: #f5f1ea;
              "
            >
              ${t.finalTop}
            </p>

            <h2
              style="
                margin: 0;
                font-size: clamp(2.5rem, 4vw, 3.5rem);
                line-height: 1.08;
                letter-spacing: -0.04em;
                font-weight: 700;
                color: #f5f1ea;
              "
            >
              ${t.finalBottom}
            </h2>

            <p
              id="audio-hint"
              style="
                margin: 18px 0 0 0;
                font-size: 0.75rem;
                letter-spacing: 0.18em;
                text-transform: uppercase;
                opacity: 0.18;
                color: #f5f1ea;
              "
            >
              ${texts.bridge.hint}
            </p>
          </div>
        </div>
      </div>
    </main>
  `

  const intro = document.querySelector('#audio-intro')
  const cards = document.querySelector('#audio-cards')
  const chiCard = document.querySelector('#audio-card-chi')
  const machyCard = document.querySelector('#audio-card-machy')
  const copy = document.querySelector('#audio-copy')
  const hint = document.querySelector('#audio-hint')

  const chiAudio = document.querySelector('#chi-audio')
  const machyAudio = document.querySelector('#machy-audio')

  const music = window.__music
  const normalMusicVolume = 0.12
  const duckedMusicVolume = 0.05

  let musicFadeInterval = null

  function fadeMusic(target, duration = 400) {
    if (!music || !window.__musicPlaying || !window.__musicPlaying()) return

    if (musicFadeInterval) {
      clearInterval(musicFadeInterval)
      musicFadeInterval = null
    }

    const start = music.volume
    const diff = target - start
    const steps = Math.max(1, Math.round(duration / 50))
    let current = 0

    musicFadeInterval = setInterval(() => {
      current += 1
      const progress = current / steps
      music.volume = start + diff * progress

      if (current >= steps) {
        music.volume = target
        clearInterval(musicFadeInterval)
        musicFadeInterval = null
      }
    }, 50)
  }

  ;[chiAudio, machyAudio].forEach(audio => {
    audio.addEventListener('play', () => {
      ;[chiAudio, machyAudio].forEach(other => {
        if (other !== audio) other.pause()
      })

      audio.currentTime = audio.currentTime || 0
      fadeMusic(duckedMusicVolume, 450)
    })

    audio.addEventListener('pause', () => {
      const anyStillPlaying = [chiAudio, machyAudio].some(a => !a.paused && !a.ended)
      if (!anyStillPlaying) {
        fadeMusic(normalMusicVolume, 500)
      }
    })

    audio.addEventListener('ended', () => {
      const anyStillPlaying = [chiAudio, machyAudio].some(a => !a.paused && !a.ended)
      if (!anyStillPlaying) {
        fadeMusic(normalMusicVolume, 500)
      }
    })
  })

  let finished = false

  const tl = gsap.timeline({
    onComplete: () => {
      finished = true
    }
  })

  tl
    .to(intro, {
      opacity: 0.72,
      duration: 0.45,
      ease: 'power2.out'
    })
    .to(cards, {
      opacity: 1,
      duration: 0.2,
      ease: 'power2.out'
    }, '-=0.1')
    .fromTo(
      '.audio-label',
      {
        opacity: 0,
        y: -10
      },
      {
        opacity: 0.5,
        y: 0,
        duration: 0.45,
        stagger: 0.15,
        ease: 'power2.out'
      },
      '-=0.05'
    )
    .to(chiCard, {
      opacity: 1,
      y: 0,
      duration: 0.55,
      ease: 'power3.out'
    }, '-=0.15')
    .to(machyCard, {
      opacity: 1,
      y: 0,
      duration: 0.55,
      ease: 'power3.out'
    }, '-=0.3')
    .to({}, { duration: 0.7 })
    .to([chiCard, machyCard], {
      opacity: 0.2,
      duration: 0.48,
      ease: 'power2.out'
    })
    .to(copy, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.2')
    .to(hint, {
      opacity: 0.28,
      duration: 0.25,
      ease: 'power2.out'
    }, '-=0.1')

  app.addEventListener(
    'click',
    () => {
      if (!finished) return

      chiAudio.pause()
      machyAudio.pause()
      fadeMusic(normalMusicVolume, 500)

      gsap.to([intro, cards, copy], {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: 'power2.in',
        stagger: 0.03,
        onComplete: next
      })
    },
    { once: true }
  )
}