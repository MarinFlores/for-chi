import gsap from 'gsap'

export function renderLanguage(app, next) {
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
        id="language-stage"
        style="
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
        <div
          id="language-inner"
          style="
            width: min(520px, 86vw);
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            opacity: 0;
            transform: translateY(12px);
          "
        >
          <p
            id="language-top"
            style="
              margin: 0 0 18px 0;
              font-size: 0.78rem;
              letter-spacing: 0.22em;
              text-transform: uppercase;
              opacity: 0.42;
              color: #f5f1ea;
            "
          >
            before we start…
          </p>

          <button class="lang-option" data-lang="es">Español</button>
          <button class="lang-option" data-lang="en">English</button>
          <button class="lang-option" data-lang="ph">Filipino</button>
        </div>
      </div>
    </main>
  `

  const inner = document.querySelector('#language-inner')
  const options = document.querySelectorAll('.lang-option')

  options.forEach((el) => {
    Object.assign(el.style, {
      appearance: 'none',
      border: 'none',
      background: 'transparent',
      padding: '0',
      margin: '0',
      fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: '#f5f1ea',
      opacity: '0.44',
      cursor: 'pointer',
      transition: 'opacity 0.22s ease, transform 0.22s ease, letter-spacing 0.22s ease'
    })

    el.addEventListener('mouseenter', () => {
      el.style.opacity = '1'
      el.style.transform = 'translateY(-1px) scale(1.02)'
      el.style.letterSpacing = '0.2em'
    })

    el.addEventListener('mouseleave', () => {
      el.style.opacity = '0.44'
      el.style.transform = 'translateY(0) scale(1)'
      el.style.letterSpacing = '0.16em'
    })
  })

  gsap.to(inner, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  })

  let leaving = false

  options.forEach((el) => {
    el.addEventListener('click', () => {
      if (leaving) return
      leaving = true

      const lang = el.dataset.lang
      window.__lang = lang

      options.forEach((opt) => {
        opt.style.opacity = opt === el ? '1' : '0.16'
        opt.style.transform = opt === el ? 'scale(1.04)' : 'scale(0.98)'
      })

      gsap.timeline()
        .to(el, {
          letterSpacing: '0.24em',
          duration: 0.2,
          ease: 'power2.out'
        })
        .to('#language-inner', {
          opacity: 0,
          y: -12,
          duration: 0.45,
          ease: 'power2.inOut'
        }, '+=0.15')
        .to('#language-stage', {
          opacity: 0,
          duration: 0.25,
          ease: 'power2.out',
          onComplete: next
        }, '-=0.18')
    })
  })
}