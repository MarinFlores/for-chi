import gsap from 'gsap'
import { texts } from '../../i18n.js'

export function renderMonthTwoGallery(app, next) {
  const lang = window.__lang || 'es'
  const t = texts[lang].monthTwoGallery

  app.innerHTML = `
    <section class="m2-gallery">
      <div class="m2-gallery-photos">
        ${t.images.map((image) => `
          <div class="m2-gallery-photo">
            <img src="${image}" alt="saved memory">
          </div>
        `).join('')}
      </div>

      <div class="m2-gallery-content">
        <p class="m2-gallery-kicker">${t.kicker}</p>
        <h2>${t.title}</h2>
        <p>${t.text}</p>
        <button class="m2-gallery-btn">${t.button}</button>
      </div>
    </section>

    <style>
      .m2-gallery {
        min-height: 100vh;
        position: relative;
        overflow: hidden;
        display: grid;
        place-items: center;
        padding: 42px 18px;
        background:
          radial-gradient(circle at 50% 50%, rgba(214,185,145,.08), transparent 38%),
          radial-gradient(circle at 14% 85%, rgba(255,255,255,.045), transparent 30%),
          linear-gradient(180deg, #111111 0%, #050505 100%);
        color: rgba(245,241,234,.94);
      }

      .m2-gallery-content {
        position: relative;
        z-index: 4;
        width: min(92vw, 720px);
        text-align: center;
        padding: 34px 24px;
        border-radius: 34px;
        background: rgba(5,5,5,.42);
        border: 1px solid rgba(255,255,255,.055);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
      }

      .m2-gallery-kicker {
        margin: 0 0 22px;
        font-size: .7rem;
        letter-spacing: .34em;
        text-transform: uppercase;
        color: rgba(245,241,234,.38);
      }

      .m2-gallery-content h2 {
        margin: 0;
        font-size: clamp(2.8rem, 8vw, 6rem);
        line-height: .92;
        letter-spacing: -.06em;
        font-weight: 600;
      }

      .m2-gallery-content p:not(.m2-gallery-kicker) {
        margin: 28px auto 0;
        max-width: 520px;
        line-height: 1.8;
        color: rgba(245,241,234,.62);
      }

      .m2-gallery-btn {
        margin-top: 34px;
        padding: 13px 22px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,.09);
        background: rgba(255,255,255,.035);
        color: rgba(245,241,234,.76);
        cursor: pointer;
        font-size: .7rem;
        letter-spacing: .22em;
        text-transform: uppercase;
      }

      .m2-gallery-photo {
        position: absolute;
        z-index: 2;
        width: clamp(120px, 18vw, 220px);
        padding: 8px 8px 26px;
        border-radius: 18px;
        background: rgba(238,232,222,.9);
        box-shadow: 0 26px 70px rgba(0,0,0,.42);
      }

      .m2-gallery-photo img {
        width: 100%;
        max-height: 230px;
        object-fit: contain;
        display: block;
        border-radius: 12px;
        background: rgba(0,0,0,.08);
      }

      .m2-gallery-photo:nth-child(1) {
        top: 8%;
        left: 8%;
        transform: rotate(-8deg);
      }

      .m2-gallery-photo:nth-child(2) {
        top: 10%;
        right: 9%;
        transform: rotate(7deg);
      }

      .m2-gallery-photo:nth-child(3) {
        bottom: 8%;
        left: 12%;
        transform: rotate(5deg);
      }

      .m2-gallery-photo:nth-child(4) {
        bottom: 7%;
        right: 12%;
        transform: rotate(-6deg);
      }

      @media (max-width: 760px) {
        .m2-gallery-photo {
          width: 132px;
          opacity: .42;
        }

        .m2-gallery-photo:nth-child(1) {
          top: 6%;
          left: 2%;
        }

        .m2-gallery-photo:nth-child(2) {
          top: 7%;
          right: 2%;
        }

        .m2-gallery-photo:nth-child(3) {
          bottom: 8%;
          left: 4%;
        }

        .m2-gallery-photo:nth-child(4) {
          bottom: 7%;
          right: 4%;
        }
      }
    </style>
  `

  gsap.from('.m2-gallery-content', {
    opacity: 0,
    y: 24,
    duration: 1,
    ease: 'power3.out'
  })

  gsap.from('.m2-gallery-photo', {
    opacity: 0,
    y: 30,
    scale: 0.92,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out'
  })

  gsap.to('.m2-gallery-photo', {
    y: '+=14',
    duration: 3,
    stagger: 0.2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  document.querySelector('.m2-gallery-btn').addEventListener('click', () => {
    gsap.to('.m2-gallery', {
      opacity: 0,
      duration: 0.7,
      ease: 'power2.inOut',
      onComplete: next
    })
  })
}