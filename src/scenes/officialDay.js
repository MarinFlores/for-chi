import gsap from 'gsap'
import { texts } from '../i18n.js'

function getSinceDate() {
  return new Date('2026-04-26T00:00:00')
}

function getElapsedParts() {
  const now = new Date()
  const start = getSinceDate()
  const diff = Math.max(0, now - start)

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24
  const minutes = Math.floor(diff / (1000 * 60)) % 60
  const seconds = Math.floor(diff / 1000) % 60

  return { days, hours, minutes, seconds }
}

export function renderOfficialDay(app, next) {
  const currentLang = window.__lang || 'es'
  const t = texts[currentLang].officialDay

  app.innerHTML = `
    <main
      style="
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      "
    >
      <div
        id="official-bg"
        style="
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 50% 30%, rgba(255,255,255,0.08), transparent 34%),
            radial-gradient(circle at 20% 80%, rgba(255,180,150,0.08), transparent 28%);
          opacity: 0;
        "
      ></div>

      <section
        id="official-card"
        style="
          position: relative;
          width: min(760px, 88vw);
          padding: 34px 24px;
          opacity: 0;
          transform: translateY(18px) scale(0.98);
        "
      >
        <p
          style="
            margin: 0 0 16px;
            font-size: 0.78rem;
            letter-spacing: 0.24em;
            text-transform: uppercase;
            opacity: 0.52;
            color: #f5f1ea;
          "
        >
          ${t.top}
        </p>

        <h1
          style="
            margin: 0;
            font-size: clamp(2.8rem, 7vw, 6rem);
            line-height: 0.95;
            letter-spacing: -0.06em;
            color: #f5f1ea;
          "
        >
          ${t.title}
        </h1>

        <p
          style="
            margin: 18px auto 30px;
            max-width: 28ch;
            font-size: clamp(1rem, 2vw, 1.28rem);
            line-height: 1.45;
            opacity: 0.72;
            color: #f5f1ea;
          "
        >
          ${t.subtitle}
        </p>

        <div
          id="official-calendar"
          style="
            width: min(330px, 86vw);
            margin: 0 auto;
            padding: 20px;
            border: 1px solid rgba(255,255,255,0.13);
            border-radius: 28px;
            background: rgba(255,255,255,0.045);
            backdrop-filter: blur(12px);
            box-shadow: 0 24px 80px rgba(0,0,0,0.18);
          "
        >
          <p
            style="
              margin: 0 0 18px;
              font-size: 0.8rem;
              letter-spacing: 0.18em;
              text-transform: uppercase;
              opacity: 0.55;
              color: #f5f1ea;
            "
          >
            ${t.month}
          </p>

          <div
            style="
              display: grid;
              grid-template-columns: repeat(7, 1fr);
              gap: 8px;
              color: #f5f1ea;
              font-size: 0.72rem;
              opacity: 0.44;
              margin-bottom: 10px;
            "
          >
            ${t.weekdays.map(day => `<span>${day}</span>`).join('')}
          </div>

          <div
            style="
              display: grid;
              grid-template-columns: repeat(7, 1fr);
              gap: 8px;
              color: #f5f1ea;
              font-size: 0.9rem;
            "
          >
            ${Array.from({ length: 30 }, (_, i) => {
              const day = i + 1
              const isSpecial = day === 26

              return `
                <span
                  style="
                    height: 34px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 999px;
                    opacity: ${isSpecial ? '1' : '0.42'};
                    background: ${isSpecial ? 'rgba(255,255,255,0.16)' : 'transparent'};
                    box-shadow: ${isSpecial ? '0 0 28px rgba(255,255,255,0.16)' : 'none'};
                    transform: ${isSpecial ? 'scale(1.08)' : 'scale(1)'};
                  "
                >
                  ${day}
                </span>
              `
            }).join('')}
          </div>
        </div>

        <div
          id="official-counter"
          style="
            margin-top: 28px;
            color: #f5f1ea;
          "
        >
          <p
            style="
              margin: 0 0 10px;
              font-size: 0.72rem;
              letter-spacing: 0.2em;
              text-transform: uppercase;
              opacity: 0.44;
            "
          >
            ${t.counterLabel}
          </p>

          <p
            id="counter-value"
            style="
              margin: 0;
              font-size: clamp(1.25rem, 3vw, 2rem);
              opacity: 0.86;
            "
          ></p>
        </div>

        <p
          id="official-line"
          style="
            margin: 30px auto 0;
            max-width: 28ch;
            font-size: clamp(1rem, 2vw, 1.24rem);
            line-height: 1.45;
            opacity: 0;
            color: #f5f1ea;
          "
        >
          ${t.line}
        </p>

        <p
          id="official-hint"
          style="
            margin-top: 32px;
            font-size: 0.74rem;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            opacity: 0;
            color: #f5f1ea;
          "
        >
          ${t.hint}
        </p>
      </section>
    </main>
  `

  const bg = document.querySelector('#official-bg')
  const card = document.querySelector('#official-card')
  const line = document.querySelector('#official-line')
  const hint = document.querySelector('#official-hint')
  const counterValue = document.querySelector('#counter-value')

  function updateCounter() {
    const { days, hours, minutes, seconds } = getElapsedParts()
    counterValue.textContent = `${days} ${t.days}, ${hours} ${t.hours}, ${minutes} ${t.minutes}, ${seconds} ${t.seconds}`
  }

  updateCounter()
  const interval = setInterval(updateCounter, 1000)

  const tl = gsap.timeline()

  tl
    .to(bg, {
      opacity: 1,
      duration: 1.2,
      ease: 'power2.out'
    })
    .to(card, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.9,
      ease: 'power3.out'
    }, '-=0.7')
    .to(line, {
      opacity: 0.78,
      duration: 0.7,
      ease: 'power2.out'
    }, '+=0.15')
    .to(hint, {
      opacity: 0.28,
      duration: 0.45,
      ease: 'power2.out'
    }, '-=0.1')

  app.addEventListener('click', () => {
    clearInterval(interval)

    gsap.to(card, {
      opacity: 0,
      y: -12,
      duration: 0.45,
      ease: 'power2.in',
      onComplete: next
    })
  }, { once: true })
}