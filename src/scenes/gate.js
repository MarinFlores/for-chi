import { texts } from '../i18n.js'
import gsap from 'gsap'

export function renderGate(app, next) {
  const currentLang = window.__lang || 'es'
  app.innerHTML = `
    <main class="screen">
      <div class="content gate-card gate-animated">
        <div class="gate-glow"></div>

        <p class="eyebrow">${texts[currentLang].gate.eyebrow}</p>
        <h1 class="main-text gate-title">${texts[currentLang].gate.title}</h1>
        <p class="sub-text">${texts[currentLang].gate.subtitle}</p>

        <form id="form" class="gate-form">
          <input
            id="input"
            class="secret-input"
            placeholder=${texts[currentLang].gate.placeholder}
            autocomplete="off"
          />
          <button type="submit" class="enter-button gate-button">
            ${texts[currentLang].gate.button}
          </button>
        </form>

        <p id="error" class="feedback"></p>
      </div>
    </main>
  `

  const valid = ['mymachy', 'my machy', 'machy']
  const form = document.querySelector('#form')
  const input = document.querySelector('#input')
  const error = document.querySelector('#error')
  const card = document.querySelector('.gate-animated')

  gsap.from(card, {
    opacity: 0,
    y: 26,
    scale: 0.985,
    duration: 1,
    ease: 'power2.out'
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const value = input.value.trim().toLowerCase()

    if (valid.includes(value)) {
      gsap.to(card, {
        opacity: 0,
        y: -18,
        duration: 0.45,
        ease: 'power2.in',
        onComplete: next
      })
      return
    }

    error.textContent = texts[currentLang].gate.error

    gsap.fromTo(
      card,
      { x: -6 },
      {
        x: 6,
        duration: 0.08,
        repeat: 3,
        yoyo: true,
        ease: 'power1.inOut',
        clearProps: 'x'
      }
    )
  })
}