import gsap from 'gsap'
import { texts } from '../i18n.js'

export function renderPhoto(app, next) {
  const t = texts.photo

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
          id="photo-stage"
          style="
            position: relative;
            width: min(920px, 90vw);
            height: min(520px, 70vh);
          "
        >
          <div
            id="photo-chi-wrap"
            style="
              position: absolute;
              left: 8%;
              top: 50%;
              transform: translateY(-50%);
              width: min(300px, 32vw);
              aspect-ratio: 4 / 5;
              border-radius: 22px;
              overflow: hidden;
              background: rgba(255,255,255,0.04);
              border: 1px solid rgba(255,255,255,0.06);
              box-shadow: 0 20px 60px rgba(0,0,0,0.35);
              opacity: 0;
            "
          >
            <img
              id="photo-chi"
              src="/assets/chi.jpeg"
              alt=""
              style="
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
              "
            />
          </div>

          <div
            id="photo-machy-wrap"
            style="
              position: absolute;
              right: 8%;
              top: 50%;
              transform: translateY(-50%);
              width: min(300px, 32vw);
              aspect-ratio: 4 / 5;
              border-radius: 22px;
              overflow: hidden;
              background: rgba(255,255,255,0.04);
              border: 1px solid rgba(255,255,255,0.06);
              box-shadow: 0 20px 60px rgba(0,0,0,0.35);
              opacity: 0;
            "
          >
            <img
              id="photo-machy"
              src="/assets/machy.jpeg"
              alt=""
              style="
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
              "
            />
          </div>

          <div
            id="photo-text"
            style="
              position: absolute;
              left: 50%;
              top: 62%;
              transform: translate(-50%, -50%);
              width: min(560px, 72vw);
              text-align: center;
              opacity: 0;
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
              ${t.top}
            </p>

            <h2
              style="
                margin: 0;
                font-size: clamp(2.1rem, 4.2vw, 3.4rem);
                line-height: 1.06;
                letter-spacing: -0.04em;
                font-weight: 700;
                color: #f5f1ea;
              "
            >
              ${t.bottom}
            </h2>

            <p
              id="photo-hint"
              style="
                margin: 16px 0 0 0;
                font-size: 0.75rem;
                letter-spacing: 0.18em;
                text-transform: uppercase;
                opacity: 0;
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

  const chiWrap = document.querySelector('#photo-chi-wrap')
  const machyWrap = document.querySelector('#photo-machy-wrap')
  const text = document.querySelector('#photo-text')
  const hint = document.querySelector('#photo-hint')

  let finished = false

  const tl = gsap.timeline({
    onComplete: () => {
      finished = true
    }
  })

  tl
    .fromTo(
      chiWrap,
      {
        opacity: 0,
        x: -24,
        scale: 0.97
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.7,
        ease: 'power3.out'
      }
    )
    .fromTo(
      machyWrap,
      {
        opacity: 0,
        x: 24,
        scale: 0.97
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.7,
        ease: 'power3.out'
      },
      '-=0.35'
    )
    .to({}, { duration: 0.9 })
    .to(
      [chiWrap, machyWrap],
      {
        opacity: 0.24,
        duration: 0.55,
        ease: 'power2.out'
      }
    )
    .to(
      text,
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: 'power2.out'
      },
      '-=0.18'
    )
    .to(
      hint,
      {
        opacity: 0.28,
        duration: 0.25,
        ease: 'power2.out'
      },
      '-=0.1'
    )

  app.addEventListener(
    'click',
    () => {
      if (!finished) return

      gsap.to([chiWrap, machyWrap, text], {
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