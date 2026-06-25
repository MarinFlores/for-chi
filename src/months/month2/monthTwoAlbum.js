import gsap from 'gsap'
import { texts } from '../../i18n.js'

export function renderMonthTwoAlbum(app, next) {
  const lang = window.__lang || 'es'
  const t = texts[lang].monthTwoAlbum
  let index = 0

  function showMemory() {
    const memory = t.memories[index]

    document.querySelector('.m2-album-photo').src = memory.image
    document.querySelector('.m2-album-caption').textContent = memory.caption
    document.querySelector('.m2-album-count').textContent = `${index + 1} / ${t.memories.length}`

    gsap.fromTo(
      '.m2-album-polaroid',
      { opacity: 0, y: 24, scale: 0.96, rotate: -2 },
      { opacity: 1, y: 0, scale: 1, rotate: 0, duration: 0.8, ease: 'power3.out' }
    )

    gsap.fromTo(
      '.m2-album-caption',
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.7, delay: 0.15, ease: 'power3.out' }
    )
  }

  app.innerHTML = `
    <section class="m2-album">
      <div class="m2-album-wrap">
        <p class="m2-album-kicker">${t.kicker}</p>

        <div class="m2-album-polaroid">
          <img class="m2-album-photo" src="" alt="video call memory">
        </div>

        <p class="m2-album-caption"></p>

        <div class="m2-album-actions">
          <span class="m2-album-count"></span>
          <button class="m2-album-btn">${t.button}</button>
        </div>
      </div>
    </section>

    <style>
      .m2-album {
        min-height: 100vh;
        display: grid;
        place-items: center;
        padding: 42px 18px;
        background:
          radial-gradient(circle at 70% 18%, rgba(214,185,145,.1), transparent 34%),
          radial-gradient(circle at 15% 82%, rgba(255,255,255,.045), transparent 28%),
          linear-gradient(180deg, #0f0f10 0%, #050505 100%);
        color: rgba(245,241,234,.94);
        overflow: hidden;
      }

      .m2-album-wrap {
        width: min(92vw, 720px);
        text-align: center;
      }

      .m2-album-kicker {
        margin: 0 0 26px;
        font-size: .7rem;
        letter-spacing: .34em;
        text-transform: uppercase;
        color: rgba(245,241,234,.38);
      }

      .m2-album-polaroid {
        margin: auto;
        width: min(88vw, 540px);
        padding: 14px 14px 44px;
        border-radius: 28px;
        background: rgba(238,232,222,.92);
        box-shadow: 0 34px 90px rgba(0,0,0,.48);
      }

      .m2-album-photo {
        width: 100%;
        max-height: 68vh;
        object-fit: contain;
        display: block;
        border-radius: 18px;
        background: rgba(0,0,0,.08);
      }

      .m2-album-caption {
        margin: 28px auto 0;
        max-width: 520px;
        min-height: 58px;
        font-size: 1rem;
        line-height: 1.75;
        color: rgba(245,241,234,.66);
      }

      .m2-album-actions {
        margin-top: 26px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 18px;
      }

      .m2-album-count {
        min-width: 48px;
        font-size: .78rem;
        color: rgba(245,241,234,.36);
      }

      .m2-album-btn {
        padding: 13px 22px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,.09);
        background: rgba(255,255,255,.035);
        color: rgba(245,241,234,.76);
        cursor: pointer;
        font-size: .7rem;
        letter-spacing: .2em;
        text-transform: uppercase;
      }
    </style>
  `

  showMemory()

  document.querySelector('.m2-album-btn').addEventListener('click', () => {
    index += 1

    if (index >= t.memories.length) {
      gsap.to('.m2-album-wrap', {
        opacity: 0,
        y: -18,
        duration: 0.7,
        ease: 'power2.inOut',
        onComplete: next
      })
      return
    }

    gsap.to(['.m2-album-polaroid', '.m2-album-caption'], {
      opacity: 0,
      y: -14,
      duration: 0.35,
      ease: 'power2.in',
      onComplete: showMemory
    })
  })
}