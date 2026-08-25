import gsap from 'gsap'
import { content } from '../../data/content.js'

export function renderMonthFourJourney(app, next) {
  const lang = window.__lang || 'es'
  const t = content[lang].monthFourJourney

  app.innerHTML = `
    <section class="m4-journey">

      <div class="m4-journey__stage">

        <!-- INTRO -->
        <div class="m4-journey__intro">
          <span class="m4-journey__eyebrow">
            ${t.eyebrow}
          </span>

          <h1>${t.title}</h1>

          <p>${t.intro}</p>
        </div>


        <!-- GUATEMALA -->
        <article class="m4-journey__moment" data-moment="guatemala">

          <img
            class="m4-journey__photo"
            src="/assets/month4/guatemala-city.png"
            alt="Guatemala City"
          />

          <div class="m4-journey__shade"></div>

          <div class="m4-journey__place m4-journey__place--bottom">
            <span>${t.guatemala.country}</span>
            <h2>${t.guatemala.place}</h2>

            <p class="m4-journey__place-line">
              ${t.guatemala.line1}
            </p>

            <p class="m4-journey__place-line m4-journey__place-line--second">
              ${t.guatemala.line2}
            </p>
          </div>

          <div class="m4-journey__whatsapp">
            <div class="m4-journey__whatsapp-icon">
              ↗
            </div>

            <div class="m4-journey__whatsapp-copy">
              <strong>${t.send.sending}</strong>
              <span>${t.send.recipient}</span>
            </div>
          </div>

        </article>


        <!-- PANAJACHEL -->
        <article class="m4-journey__moment" data-moment="panajachel">

          <img
            class="m4-journey__photo"
            src="/assets/month4/panajachel.png"
            alt="Panajachel"
          />

          <div class="m4-journey__shade m4-journey__shade--soft"></div>

          <div class="m4-journey__place m4-journey__place--center">
            <span>${t.panajachel.country}</span>

            <h2>${t.panajachel.place}</h2>

            <p class="m4-journey__wish">
              ${t.panajachel.line1}
            </p>

            <div class="m4-journey__future">
              <p>${t.panajachel.line2}</p>
              <strong>${t.panajachel.line3}</strong>
            </div>
          </div>

          <div class="m4-journey__whatsapp">
            <div class="m4-journey__whatsapp-icon">
              ✓✓
            </div>

            <div class="m4-journey__whatsapp-copy">
              <strong>${t.send.delivered}</strong>
              <span>${t.send.recipient}</span>
            </div>
          </div>

        </article>


        <!-- PANAMÁ -->
        <article class="m4-journey__moment" data-moment="panama">

          <img
            class="m4-journey__photo"
            src="/assets/month4/panama-city.png"
            alt="Panama City"
          />

          <div class="m4-journey__shade"></div>

          <div class="m4-journey__place m4-journey__place--bottom">

            <span>${t.panama.country}</span>

            <h2>${t.panama.place}</h2>

            <p class="m4-journey__place-line">
              ${t.panama.line1}
            </p>

            <p class="m4-journey__place-line m4-journey__place-line--second">
              ${t.panama.line2}
            </p>

          </div>

          <div class="m4-journey__whatsapp">
            <div class="m4-journey__whatsapp-icon">
              ✓✓
            </div>

            <div class="m4-journey__whatsapp-copy">
              <strong>${t.send.delivered}</strong>
              <span>${t.send.recipient}</span>
            </div>
          </div>

        </article>


        <!-- CIERRE -->
        <div class="m4-journey__ending">

          <div class="m4-journey__ending-copy">

            <p class="m4-journey__ending-first">
              ${t.ending.line1}
            </p>

            <p class="m4-journey__ending-second">
              ${t.ending.line2}
            </p>

            <div class="m4-journey__ending-recipient">
              <span>✓✓</span>
              <strong>My Chi</strong>
            </div>

            <button
              class="m4-journey__continue"
              type="button"
            >
              ${t.button}
            </button>

          </div>

        </div>

      </div>


      <div class="m4-journey__progress" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </section>


    <style>

      /* ==========================================
         BASE
      ========================================== */

      .m4-journey {
        position: relative;

        width: 100%;
        height: 100svh;

        overflow: hidden;

        color: #fff;

        background: #050607;
      }

      .m4-journey__stage {
        position: absolute;
        inset: 0;
      }


      /* ==========================================
         INTRO
      ========================================== */

      .m4-journey__intro {
        position: absolute;
        z-index: 30;

        inset: 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        box-sizing: border-box;

        padding: 32px;

        text-align: center;

        background:
          radial-gradient(
            circle at 50% 42%,
            rgba(120, 137, 150, 0.10),
            transparent 33%
          ),
          #060708;
      }

      .m4-journey__eyebrow {
        margin-bottom: 15px;

        color:
          rgba(255, 255, 255, 0.37);

        font-size: 9px;
        font-weight: 600;

        letter-spacing: 0.34em;

        text-transform: uppercase;
      }

      .m4-journey__intro h1 {
        margin: 0;

        color:
          rgba(255, 255, 255, 0.97);

        font-size:
          clamp(46px, 8vw, 82px);

        font-weight: 300;

        line-height: 1;

        letter-spacing: -0.055em;
      }

      .m4-journey__intro p {
        max-width: 520px;

        margin:
          21px auto 0;

        color:
          rgba(255, 255, 255, 0.52);

        font-size:
          clamp(14px, 2vw, 17px);

        font-weight: 300;

        line-height: 1.7;
      }


      /* ==========================================
         MOMENTOS / FOTOS
      ========================================== */

      .m4-journey__moment {
        position: absolute;

        inset: 0;

        overflow: hidden;

        opacity: 0;
        visibility: hidden;
      }

      .m4-journey__photo {
        position: absolute;

        width: 100%;
        height: 100%;

        object-fit: cover;

        transform: scale(1.06);

        filter:
          saturate(0.93)
          contrast(1.02);
      }

      .m4-journey__shade {
        position: absolute;
        inset: 0;

        background:
          linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.16) 0%,
            rgba(0, 0, 0, 0.04) 34%,
            rgba(0, 0, 0, 0.13) 56%,
            rgba(0, 0, 0, 0.78) 100%
          );
      }

      .m4-journey__shade--soft {
        background:
          linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.14),
            rgba(0, 0, 0, 0.04) 45%,
            rgba(0, 0, 0, 0.52)
          );
      }


      /* ==========================================
         LUGAR
      ========================================== */

      .m4-journey__place {
        position: absolute;
        z-index: 3;

        box-sizing: border-box;

        width:
          min(700px, calc(100% - 44px));

        left: 50%;

        transform:
          translateX(-50%);

        text-align: center;
      }

      .m4-journey__place--bottom {
        bottom:
          clamp(80px, 12vh, 125px);
      }

      .m4-journey__place--center {
        top: 50%;

        transform:
          translate(-50%, -50%);
      }

      .m4-journey__place > span {
        display: block;

        margin-bottom: 7px;

        color:
          rgba(255, 255, 255, 0.62);

        font-size: 9px;
        font-weight: 600;

        letter-spacing: 0.32em;

        text-transform: uppercase;
      }

      .m4-journey__place h2 {
        margin: 0;

        color: #fff;

        font-size:
          clamp(40px, 8vw, 76px);

        font-weight: 300;

        line-height: 1;

        letter-spacing: -0.055em;

        text-shadow:
          0 5px 35px
          rgba(0, 0, 0, 0.34);
      }

      .m4-journey__place-line {
        margin:
          19px 0 0;

        color:
          rgba(255, 255, 255, 0.74);

        font-size:
          clamp(14px, 2vw, 17px);

        font-weight: 300;

        line-height: 1.55;

        text-shadow:
          0 3px 18px
          rgba(0, 0, 0, 0.65);
      }

      .m4-journey__place-line--second {
        margin-top: 3px;

        color:
          rgba(255, 255, 255, 0.94);

        font-size:
          clamp(18px, 3vw, 26px);
      }


      /* ==========================================
         PANAJACHEL
      ========================================== */

      .m4-journey__wish {
        margin:
          22px 0 0;

        color:
          rgba(255, 255, 255, 0.90);

        font-size:
          clamp(17px, 3vw, 24px);

        font-weight: 300;

        line-height: 1.5;

        text-shadow:
          0 4px 25px
          rgba(0, 0, 0, 0.65);
      }

      .m4-journey__future {
        margin-top: 22px;
      }

      .m4-journey__future p {
        margin: 0;

        color:
          rgba(255, 255, 255, 0.66);

        font-size:
          clamp(14px, 2vw, 17px);

        font-weight: 300;
      }

      .m4-journey__future strong {
        display: block;

        margin-top: 4px;

        color:
          rgba(255, 255, 255, 0.98);

        font-size:
          clamp(24px, 4.4vw, 39px);

        font-weight: 300;

        letter-spacing: -0.03em;
      }


      /* ==========================================
         WHATSAPP / ENVÍO
      ========================================== */

      .m4-journey__whatsapp {
        position: absolute;
        z-index: 10;

        top: 26px;
        right: 26px;

        display: flex;
        align-items: center;

        gap: 11px;

        box-sizing: border-box;

        padding:
          10px 14px 10px 10px;

        border:
          1px solid
          rgba(255, 255, 255, 0.15);

        border-radius: 14px;

        background:
          rgba(14, 17, 18, 0.58);

        box-shadow:
          0 10px 35px
          rgba(0, 0, 0, 0.23);

        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);

        opacity: 0;
        visibility: hidden;
      }

      .m4-journey__whatsapp-icon {
        width: 31px;
        height: 31px;

        display: grid;
        place-items: center;

        flex: 0 0 31px;

        border-radius: 50%;

        color: #c8f5d5;

        background:
          rgba(66, 190, 104, 0.17);

        font-size: 10px;
        font-weight: 600;
      }

      .m4-journey__whatsapp-copy {
        display: flex;
        flex-direction: column;

        gap: 2px;

        text-align: left;
      }

      .m4-journey__whatsapp-copy strong {
        color:
          rgba(255, 255, 255, 0.92);

        font-size: 10px;
        font-weight: 500;
      }

      .m4-journey__whatsapp-copy span {
        color:
          rgba(255, 255, 255, 0.48);

        font-size: 9px;
      }


      /* ==========================================
         FINAL
      ========================================== */

      .m4-journey__ending {
        position: absolute;
        z-index: 40;

        inset: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        box-sizing: border-box;

        padding: 32px;

        text-align: center;

        background:
          radial-gradient(
            circle at 50% 44%,
            rgba(125, 143, 151, 0.08),
            transparent 30%
          ),
          #050607;

        opacity: 0;
        visibility: hidden;
      }

      .m4-journey__ending-copy {
        width:
          min(760px, 100%);
      }

      .m4-journey__ending-first,
      .m4-journey__ending-second {
        margin: 0;
      }

      .m4-journey__ending-first {
        color:
          rgba(255, 255, 255, 0.55);

        font-size:
          clamp(17px, 3vw, 23px);

        font-weight: 300;

        line-height: 1.55;
      }

      .m4-journey__ending-second {
        max-width: 680px;

        margin:
          16px auto 0;

        color:
          rgba(255, 255, 255, 0.97);

        font-size:
          clamp(29px, 5.5vw, 51px);

        font-weight: 300;

        line-height: 1.25;

        letter-spacing: -0.04em;
      }

      .m4-journey__ending-recipient {
        display: inline-flex;
        align-items: center;

        gap: 7px;

        margin-top: 28px;

        color:
          rgba(255, 255, 255, 0.43);

        font-size: 10px;

        letter-spacing: 0.04em;
      }

      .m4-journey__ending-recipient span {
        color: #73c88c;
      }

      .m4-journey__ending-recipient strong {
        color:
          rgba(255, 255, 255, 0.66);

        font-weight: 500;
      }

      .m4-journey__continue {
        display: block;

        min-width: 155px;
        min-height: 44px;

        margin:
          31px auto 0;

        padding:
          11px 24px;

        border:
          1px solid
          rgba(255, 255, 255, 0.15);

        border-radius: 999px;

        color:
          rgba(255, 255, 255, 0.90);

        background:
          rgba(255, 255, 255, 0.055);

        font: inherit;

        font-size: 9px;
        font-weight: 600;

        letter-spacing: 0.19em;

        text-transform: uppercase;

        cursor: pointer;

        opacity: 0;
        visibility: hidden;

        transition:
          transform 180ms ease,
          border-color 180ms ease,
          background 180ms ease;
      }

      .m4-journey__continue:hover {
        transform:
          translateY(-2px);

        border-color:
          rgba(255, 255, 255, 0.26);

        background:
          rgba(255, 255, 255, 0.10);
      }


      /* ==========================================
         PROGRESO
      ========================================== */

      .m4-journey__progress {
        position: absolute;
        z-index: 60;

        left: 50%;
        bottom: 23px;

        display: flex;

        gap: 7px;

        transform:
          translateX(-50%);

        opacity: 0;
      }

      .m4-journey__progress span {
        width: 18px;
        height: 2px;

        border-radius: 99px;

        background:
          rgba(255, 255, 255, 0.23);

        transition:
          width 300ms ease,
          background 300ms ease;
      }

      .m4-journey__progress span.active {
        width: 32px;

        background:
          rgba(255, 255, 255, 0.80);
      }


      /* ==========================================
         MOBILE
      ========================================== */

      @media (max-width: 600px) {

        .m4-journey__place {
          width:
            calc(100% - 34px);
        }

        .m4-journey__place--bottom {
          bottom: 95px;
        }

        .m4-journey__whatsapp {
          top: 18px;
          right: 17px;

          max-width:
            calc(100% - 34px);
        }

        .m4-journey__place h2 {
          font-size:
            clamp(38px, 14vw, 62px);
        }

        .m4-journey__future strong {
          font-size:
            clamp(25px, 8vw, 34px);
        }

        .m4-journey__ending {
          padding: 26px 22px;
        }

      }


      @media (prefers-reduced-motion: reduce) {

        .m4-journey *,
        .m4-journey *::before,
        .m4-journey *::after {
          transition-duration:
            0.01ms !important;
        }

      }

    </style>
  `


  /* ==========================================
     ELEMENTOS
  ========================================== */

  const scene =
    app.querySelector('.m4-journey')

  const intro =
    app.querySelector('.m4-journey__intro')

  const guatemala =
    app.querySelector('[data-moment="guatemala"]')

  const panajachel =
    app.querySelector('[data-moment="panajachel"]')

  const panama =
    app.querySelector('[data-moment="panama"]')

  const ending =
    app.querySelector('.m4-journey__ending')

  const continueButton =
    app.querySelector('.m4-journey__continue')

  const progress =
    app.querySelector('.m4-journey__progress')

  const progressDots =
    app.querySelectorAll('.m4-journey__progress span')


  function activateProgress(index) {
    progressDots.forEach(
      (dot, dotIndex) => {
        dot.classList.toggle(
          'active',
          dotIndex === index
        )
      }
    )
  }


  /* ==========================================
     ESTADO INICIAL
  ========================================== */

  gsap.set(
    [guatemala, panajachel, panama, ending],
    {
      autoAlpha: 0
    }
  )

  gsap.set(
    '.m4-journey__place > *',
    {
      autoAlpha: 0,
      y: 13
    }
  )

  gsap.set(
    '.m4-journey__whatsapp',
    {
      autoAlpha: 0,
      y: -8,
      scale: 0.97
    }
  )

  gsap.set(
    '.m4-journey__ending-first',
    {
      autoAlpha: 0,
      y: 13
    }
  )

  gsap.set(
    '.m4-journey__ending-second',
    {
      autoAlpha: 0,
      y: 16
    }
  )

  gsap.set(
    '.m4-journey__ending-recipient',
    {
      autoAlpha: 0,
      y: 8
    }
  )


  /* ==========================================
     TIMELINE PRINCIPAL
  ========================================== */

  const tl = gsap.timeline({
    defaults: {
      ease: 'power3.out'
    }
  })


  /* INTRO */

  tl
    .from(
      '.m4-journey__eyebrow',
      {
        autoAlpha: 0,
        y: -8,
        duration: 0.7
      }
    )

    .from(
      '.m4-journey__intro h1',
      {
        autoAlpha: 0,
        y: 17,
        duration: 1
      },
      '-=0.35'
    )

    .from(
      '.m4-journey__intro p',
      {
        autoAlpha: 0,
        y: 12,
        duration: 0.8
      },
      '-=0.45'
    )

    .to(
      {},
      {
        duration: 1.4
      }
    )

    .to(
      intro,
      {
        autoAlpha: 0,
        duration: 1
      }
    )


  /* ==========================================
     GUATEMALA
  ========================================== */

    .call(() => {
      activateProgress(0)
    })

    .to(
      progress,
      {
        autoAlpha: 1,
        duration: 0.5
      }
    )

    .to(
      guatemala,
      {
        autoAlpha: 1,
        duration: 1.1
      },
      '<'
    )

    .to(
      guatemala.querySelector(
        '.m4-journey__photo'
      ),
      {
        scale: 1,
        duration: 7,
        ease: 'sine.out'
      },
      '<'
    )

    .to(
      guatemala.querySelectorAll(
        '.m4-journey__place > *'
      ),
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.45,
        duration: 0.7
      },
      '-=0.2'
    )

    .to(
      guatemala.querySelector(
        '.m4-journey__whatsapp'
      ),
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.6
      },
      '+=0.55'
    )

    .to(
      {},
      {
        duration: 1.25
      }
    )

    .to(
      guatemala,
      {
        autoAlpha: 0,
        duration: 1
      }
    )


  /* ==========================================
     PANAJACHEL
  ========================================== */

    .call(() => {
      activateProgress(1)
    })

    .to(
      panajachel,
      {
        autoAlpha: 1,
        duration: 1.1
      }
    )

    .to(
      panajachel.querySelector(
        '.m4-journey__photo'
      ),
      {
        scale: 1,
        duration: 9,
        ease: 'sine.out'
      },
      '<'
    )

    .to(
      panajachel.querySelector(
        '.m4-journey__place > span'
      ),
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.65
      },
      '-=0.15'
    )

    .to(
      panajachel.querySelector(
        '.m4-journey__place h2'
      ),
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8
      },
      '-=0.25'
    )

    .to(
      panajachel.querySelector(
        '.m4-journey__wish'
      ),
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.75
      },
      '+=0.5'
    )

    .to(
      panajachel.querySelector(
        '.m4-journey__future p'
      ),
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.7
      },
      '+=0.8'
    )

    .to(
      panajachel.querySelector(
        '.m4-journey__future strong'
      ),
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.9
      },
      '+=0.1'
    )

    .to(
      panajachel.querySelector(
        '.m4-journey__whatsapp'
      ),
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.6
      },
      '+=0.55'
    )

    .to(
      {},
      {
        duration: 1.35
      }
    )

    .to(
      panajachel,
      {
        autoAlpha: 0,
        duration: 1
      }
    )


  /* ==========================================
     PANAMÁ
  ========================================== */

    .call(() => {
      activateProgress(2)
    })

    .to(
      panama,
      {
        autoAlpha: 1,
        duration: 1.1
      }
    )

    .to(
      panama.querySelector(
        '.m4-journey__photo'
      ),
      {
        scale: 1,
        duration: 7,
        ease: 'sine.out'
      },
      '<'
    )

    .to(
      panama.querySelectorAll(
        '.m4-journey__place > *'
      ),
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.55,
        duration: 0.8
      },
      '-=0.15'
    )

    .to(
      panama.querySelector(
        '.m4-journey__whatsapp'
      ),
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.6
      },
      '+=0.55'
    )

    .to(
      {},
      {
        duration: 1.5
      }
    )

    .to(
      progress,
      {
        autoAlpha: 0,
        duration: 0.45
      }
    )

    .to(
      panama,
      {
        autoAlpha: 0,
        duration: 1.1
      },
      '<'
    )

    .to(
      ending,
      {
        autoAlpha: 1,
        duration: 1
      }
    )

    .to(
      '.m4-journey__ending-first',
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.9
      },
      '+=0.35'
    )

    .to(
      {},
      {
        duration: 1.2
      }
    )

    .to(
      '.m4-journey__ending-second',
      {
        autoAlpha: 1,
        y: 0,
        duration: 1
      }
    )

    .to(
      '.m4-journey__ending-recipient',
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.65
      },
      '+=0.55'
    )

    .to(
      continueButton,
      {
        autoAlpha: 1,
        duration: 0.65
      },
      '+=0.7'
    )


  /* ==========================================
     CONTINUAR
  ========================================== */

  continueButton.addEventListener(
    'click',
    () => {

      continueButton.disabled = true

      gsap.to(
        scene,
        {
          autoAlpha: 0,
          duration: 0.8,
          ease: 'power2.inOut',
          onComplete: next
        }
      )
    }
  )
}