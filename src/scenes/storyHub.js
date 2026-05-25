import gsap from 'gsap'
import { texts } from '../i18n.js'

export function renderStoryHub(app, openMonth, startExperience) {
  const lang = window.__lang || 'es'
  const t = texts[lang].storyHub

  const monthsHTML = t.months.map((month) => {
    const lockedClass = month.unlocked ? 'unlocked' : 'locked'

    return `
      <button 
        class="month-card ${lockedClass}" 
        data-unlocked="${month.unlocked}"
        data-id="${month.id}"
      >
        <span class="month-number">${month.number}</span>
        <span class="month-name">${month.name}</span>
        <span class="month-title">${month.title}</span>
        <span class="month-status">${month.status}</span>
      </button>
    `
  }).join('')

  app.innerHTML = `
    <main class="story-hub-screen">
      <div class="story-hub-bg"></div>

      <section class="story-hub-content">
        <p class="story-hub-eyebrow">${t.eyebrow}</p>

        <h1 class="story-hub-title">${t.title}</h1>

        <p class="story-hub-subtitle">${t.subtitle}</p>

        <div class="months-grid">
          ${monthsHTML}
        </div>

        <button class="story-legacy-card">
          <span class="story-legacy-label">
            ${t.legacy.title}
          </span>

          <span class="story-legacy-description">
            ${t.legacy.description}
          </span>
        </button>

        <p id="locked-message" class="locked-message"></p>
      </section>
    </main>
  `

  const content = document.querySelector('.story-hub-content')
  const cards = document.querySelectorAll('.month-card')
  const legacyCard = document.querySelector('.story-legacy-card')
  const lockedMessage = document.querySelector('#locked-message')

  gsap.from(content, {
    opacity: 0,
    y: 20,
    duration: 0.9,
    ease: 'power3.out'
  })

  gsap.fromTo(
    cards,
    {
      opacity: 0,
      y: 18,
      scale: 0.96
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.65,
      stagger: 0.07,
      delay: 0.25,
      ease: 'power3.out',
      clearProps: 'transform'
    }
  )

  gsap.fromTo(
    legacyCard,
    {
      opacity: 0,
      y: 16
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.65,
      delay: 0.75,
      ease: 'power3.out'
    }
  )

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      const isUnlocked = card.dataset.unlocked === 'true'
      const monthId = card.dataset.id

      if (!isUnlocked) {
        lockedMessage.textContent = t.lockedMessage

        gsap.fromTo(
          lockedMessage,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.35 }
        )

        return
      }

      gsap.to(content, {
        opacity: 0,
        y: -18,
        duration: 0.55,
        ease: 'power2.inOut',
        onComplete: () => openMonth(monthId)
      })
    })
  })

  legacyCard.addEventListener('click', () => {
    gsap.to(content, {
      opacity: 0,
      y: -18,
      duration: 0.55,
      ease: 'power2.inOut',
      onComplete: () => startExperience()
    })
  })
}