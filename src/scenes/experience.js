import { texts } from '../i18n.js'
import gsap from 'gsap'

export function renderBridge(app, next) {
  const currentLang = window.__lang || 'es'
  app.innerHTML = `
    <main class="screen bridge-screen">
      <div class="content bridge-content">
        <p class="eyebrow bridge-eyebrow">${texts[currentLang].bridge.eyebrow}</p>
        <h1 class="main-text bridge-title">${texts[currentLang].bridge.title}</h1>
        <p class="hint-text bridge-hint">${texts[currentLang].bridge.hint}</p>
      </div>
    </main>
  `

  const timeline = gsap.timeline()

  timeline
    .from('.bridge-content', {
      opacity: 0,
      scale: 0.985,
      duration: 0.2
    })
    .from('.bridge-eyebrow', {
      opacity: 0,
      y: 12,
      duration: 0.5,
      ease: 'power2.out'
    })
    .from('.bridge-title', {
      opacity: 0,
      y: 24,
      filter: 'blur(10px)',
      duration: 0.95,
      ease: 'power3.out'
    }, '-=0.15')
    .from('.bridge-hint', {
      opacity: 0,
      y: 10,
      duration: 0.45,
      ease: 'power2.out'
    }, '-=0.2')

  app.addEventListener(
    'click',
    () => {
      gsap.to('.bridge-content', {
        opacity: 0,
        y: -16,
        duration: 0.45,
        ease: 'power2.in',
        onComplete: next
      })
    },
    { once: true }
  )
}