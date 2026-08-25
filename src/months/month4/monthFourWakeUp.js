// ./months/month4/monthFourWakeUp.js

import gsap from 'gsap'
import { content } from '../../data/content.js'

export function renderMonthFourWakeUp(app, next) {
  const lang = window.__lang || 'es'
  const t = content[lang].monthFourWakeUp

  app.innerHTML = `
    <section class="m4-wakeup">

      <div class="m4-wakeup__ambient"></div>

      <div class="m4-wakeup__stage">

        <!-- INTRO -->
        <div class="m4-wakeup__intro">
          <span class="m4-wakeup__eyebrow">
            ${t.eyebrow}
          </span>

          <p class="m4-wakeup__intro-copy">
            ${t.intro}
          </p>
        </div>


        <!-- FIRST CALL -->
        <div class="m4-wakeup__call m4-wakeup__call--first">

          <div class="m4-wakeup__location">
            <span>${t.guateLocation}</span>
            <strong>${t.firstTime}</strong>
          </div>

          <div class="m4-wakeup__phone">

            <span class="m4-wakeup__status">
              ${t.incoming}
            </span>

            <div class="m4-wakeup__avatar">
              M
            </div>

            <h2>${t.name}</h2>

            <p class="m4-wakeup__distance">
              ${t.philippinesTime}
            </p>

            <div class="m4-wakeup__call-actions">

              <div class="m4-wakeup__call-action m4-wakeup__call-action--decline">
                ×
              </div>

              <div class="m4-wakeup__call-action m4-wakeup__call-action--accept">
                ↗
              </div>

            </div>

          </div>

        </div>


        <!-- FIRST MESSAGE -->
        <div class="m4-wakeup__conversation m4-wakeup__conversation--first">

          <span class="m4-wakeup__conversation-time">
            ${t.firstTime}
          </span>

          <p>
            “${t.firstLine}”
          </p>

        </div>


        <!-- SLEEP -->
        <div class="m4-wakeup__sleep">

          <span>
            ${t.sleeping}
          </span>

          <div class="m4-wakeup__sleep-dots">
            <i></i>
            <i></i>
            <i></i>
          </div>

        </div>


        <!-- SECOND CALL -->
        <div class="m4-wakeup__call m4-wakeup__call--second">

          <div class="m4-wakeup__location">
            <span>${t.guateLocation}</span>
            <strong>${t.secondTime}</strong>
          </div>

          <div class="m4-wakeup__phone">

            <span class="m4-wakeup__status">
              ${t.incomingAgain}
            </span>

            <div class="m4-wakeup__avatar">
              M
            </div>

            <h2>${t.name}</h2>

            <p class="m4-wakeup__distance">
              ${t.philippinesTimeLater}
            </p>

            <div class="m4-wakeup__call-actions">

              <div class="m4-wakeup__call-action m4-wakeup__call-action--decline">
                ×
              </div>

              <div class="m4-wakeup__call-action m4-wakeup__call-action--accept">
                ↗
              </div>

            </div>

          </div>

        </div>


        <!-- SECOND MESSAGE -->
        <div class="m4-wakeup__conversation m4-wakeup__conversation--second">

          <span class="m4-wakeup__conversation-time">
            ${t.secondTime}
          </span>

          <p>
            “${t.secondLine}”
          </p>

          <small>
            ${t.reply}
          </small>

        </div>


        <!-- ENDING -->
        <div class="m4-wakeup__ending">

          <div class="m4-wakeup__ending-copy">

            <p class="m4-wakeup__ending-line">
              ${t.ending.line1}
            </p>

            <p class="m4-wakeup__ending-line">
              ${t.ending.line2}
            </p>

            <p class="m4-wakeup__ending-line m4-wakeup__ending-line--strong">
              ${t.ending.line3}
            </p>

            <button
              class="m4-wakeup__continue"
              type="button"
            >
              ${t.button}
            </button>

          </div>

        </div>

      </div>

    </section>

    <style>

      /* ==========================================
         BASE
      ========================================== */

      .m4-wakeup {
        position: relative;

        width: 100%;
        height: 100svh;

        overflow: hidden;

        color: #fff;

        background:
          linear-gradient(
            180deg,
            #050607 0%,
            #07090b 55%,
            #040505 100%
          );
      }

      .m4-wakeup__stage {
        position: absolute;
        inset: 0;
      }

      .m4-wakeup__ambient {
        position: absolute;

        width: 720px;
        height: 720px;

        top: 48%;
        left: 50%;

        transform:
          translate(-50%, -50%);

        border-radius: 50%;

        background:
          radial-gradient(
            circle,
            rgba(92, 121, 144, 0.11),
            rgba(44, 59, 70, 0.04) 42%,
            transparent 70%
          );

        filter: blur(25px);

        pointer-events: none;
      }


      /* ==========================================
         INTRO
      ========================================== */

      .m4-wakeup__intro {
        position: absolute;
        z-index: 20;

        inset: 0;

        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;

        box-sizing: border-box;

        padding: 32px;

        text-align: center;
      }

      .m4-wakeup__eyebrow {
        margin-bottom: 16px;

        color:
          rgba(255, 255, 255, 0.34);

        font-size: 9px;
        font-weight: 600;

        letter-spacing: 0.33em;

        text-transform: uppercase;
      }

      .m4-wakeup__intro-copy {
        width:
          min(520px, 100%);

        margin: 0;

        color:
          rgba(255, 255, 255, 0.82);

        font-size:
          clamp(21px, 4vw, 34px);

        font-weight: 300;

        line-height: 1.45;

        letter-spacing: -0.025em;
      }


      /* ==========================================
         CALL SCREEN
      ========================================== */

      .m4-wakeup__call {
        position: absolute;
        z-index: 15;

        inset: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        box-sizing: border-box;

        padding: 28px;

        opacity: 0;
        visibility: hidden;
      }

      .m4-wakeup__location {
        position: absolute;

        top: 27px;
        left: 50%;

        display: flex;
        align-items: baseline;

        gap: 10px;

        transform:
          translateX(-50%);

        white-space: nowrap;
      }

      .m4-wakeup__location span {
        color:
          rgba(255, 255, 255, 0.35);

        font-size: 9px;
        font-weight: 600;

        letter-spacing: 0.20em;

        text-transform: uppercase;
      }

      .m4-wakeup__location strong {
        color:
          rgba(255, 255, 255, 0.85);

        font-size: 11px;
        font-weight: 500;

        letter-spacing: 0.05em;
      }

      .m4-wakeup__phone {
        display: flex;
        flex-direction: column;

        align-items: center;

        width:
          min(390px, 100%);

        box-sizing: border-box;

        padding:
          42px 30px 30px;

        border:
          1px solid
          rgba(255, 255, 255, 0.09);

        border-radius: 34px;

        background:
          rgba(255, 255, 255, 0.026);

        box-shadow:
          0 30px 100px
          rgba(0, 0, 0, 0.42);

        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
      }

      .m4-wakeup__status {
        margin-bottom: 26px;

        color:
          rgba(255, 255, 255, 0.38);

        font-size: 9px;
        font-weight: 600;

        letter-spacing: 0.20em;

        text-transform: uppercase;
      }

      .m4-wakeup__avatar {
        width: 86px;
        height: 86px;

        display: grid;
        place-items: center;

        border:
          1px solid
          rgba(255, 255, 255, 0.12);

        border-radius: 50%;

        color:
          rgba(255, 255, 255, 0.82);

        background:
          linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.09),
            rgba(255, 255, 255, 0.025)
          );

        font-size: 27px;
        font-weight: 300;

        box-shadow:
          0 15px 55px
          rgba(0, 0, 0, 0.25);
      }

      .m4-wakeup__phone h2 {
        margin:
          20px 0 0;

        color:
          rgba(255, 255, 255, 0.97);

        font-size:
          clamp(31px, 6vw, 44px);

        font-weight: 300;

        line-height: 1;

        letter-spacing: -0.045em;
      }

      .m4-wakeup__distance {
        margin:
          9px 0 0;

        color:
          rgba(255, 255, 255, 0.39);

        font-size: 10px;
        font-weight: 400;
      }

      .m4-wakeup__call-actions {
        display: flex;

        gap: 44px;

        margin-top: 44px;
      }

      .m4-wakeup__call-action {
        width: 54px;
        height: 54px;

        display: grid;
        place-items: center;

        border-radius: 50%;

        font-size: 20px;
        font-weight: 300;
      }

      .m4-wakeup__call-action--decline {
        color:
          rgba(255, 255, 255, 0.83);

        background:
          rgba(190, 63, 63, 0.24);
      }

      .m4-wakeup__call-action--accept {
        color: #d7f8df;

        background:
          rgba(68, 184, 101, 0.24);
      }


      /* ==========================================
         CONVERSATION
      ========================================== */

      .m4-wakeup__conversation {
        position: absolute;
        z-index: 18;

        top: 50%;
        left: 50%;

        width:
          min(590px, calc(100% - 42px));

        transform:
          translate(-50%, -50%);

        text-align: center;

        opacity: 0;
        visibility: hidden;
      }

      .m4-wakeup__conversation-time {
        display: block;

        margin-bottom: 15px;

        color:
          rgba(255, 255, 255, 0.31);

        font-size: 9px;
        font-weight: 600;

        letter-spacing: 0.20em;
      }

      .m4-wakeup__conversation p {
        margin: 0;

        color:
          rgba(255, 255, 255, 0.93);

        font-size:
          clamp(25px, 5vw, 43px);

        font-weight: 300;

        line-height: 1.35;

        letter-spacing: -0.035em;
      }

      .m4-wakeup__conversation small {
        display: block;

        margin-top: 25px;

        color:
          rgba(255, 255, 255, 0.38);

        font-size:
          clamp(13px, 2vw, 15px);

        font-weight: 300;
      }


      /* ==========================================
         SLEEP
      ========================================== */

      .m4-wakeup__sleep {
        position: absolute;

        top: 50%;
        left: 50%;

        display: flex;
        flex-direction: column;

        align-items: center;

        gap: 12px;

        transform:
          translate(-50%, -50%);

        opacity: 0;
        visibility: hidden;
      }

      .m4-wakeup__sleep span {
        color:
          rgba(255, 255, 255, 0.32);

        font-size: 10px;
        font-weight: 500;

        letter-spacing: 0.16em;

        text-transform: uppercase;
      }

      .m4-wakeup__sleep-dots {
        display: flex;

        gap: 6px;
      }

      .m4-wakeup__sleep-dots i {
        width: 4px;
        height: 4px;

        border-radius: 50%;

        background:
          rgba(255, 255, 255, 0.24);
      }


      /* ==========================================
         ENDING
      ========================================== */

      .m4-wakeup__ending {
        position: absolute;
        z-index: 30;

        inset: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        box-sizing: border-box;

        padding: 32px;

        text-align: center;

        opacity: 0;
        visibility: hidden;
      }

      .m4-wakeup__ending-copy {
        width:
          min(650px, 100%);
      }

      .m4-wakeup__ending-line {
        margin: 0;

        color:
          rgba(255, 255, 255, 0.53);

        font-size:
          clamp(17px, 3vw, 23px);

        font-weight: 300;

        line-height: 1.6;
      }

      .m4-wakeup__ending-line + .m4-wakeup__ending-line {
        margin-top: 8px;
      }

      .m4-wakeup__ending-line--strong {
        margin-top: 23px !important;

        color:
          rgba(255, 255, 255, 0.95);

        font-size:
          clamp(25px, 4.7vw, 39px);

        line-height: 1.35;

        letter-spacing: -0.035em;
      }

      .m4-wakeup__continue {
        min-width: 155px;
        min-height: 44px;

        margin-top: 36px;

        padding:
          11px 24px;

        border:
          1px solid
          rgba(255, 255, 255, 0.14);

        border-radius: 999px;

        color:
          rgba(255, 255, 255, 0.88);

        background:
          rgba(255, 255, 255, 0.05);

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

      .m4-wakeup__continue:hover {
        transform:
          translateY(-2px);

        border-color:
          rgba(255, 255, 255, 0.25);

        background:
          rgba(255, 255, 255, 0.09);
      }


      /* ==========================================
         MOBILE
      ========================================== */

      @media (max-width: 600px) {

        .m4-wakeup__call {
          padding:
            24px 20px;
        }

        .m4-wakeup__phone {
          padding:
            38px 24px 28px;
        }

        .m4-wakeup__location {
          top: 22px;
        }

        .m4-wakeup__ending {
          padding:
            28px 22px;
        }

      }


      @media (prefers-reduced-motion: reduce) {

        .m4-wakeup *,
        .m4-wakeup *::before,
        .m4-wakeup *::after {
          transition-duration:
            0.01ms !important;
        }

      }

    </style>
  `


  /* ==========================================
     ELEMENTS
  ========================================== */

  const scene =
    app.querySelector('.m4-wakeup')

  const intro =
    app.querySelector('.m4-wakeup__intro')

  const firstCall =
    app.querySelector('.m4-wakeup__call--first')

  const firstConversation =
    app.querySelector('.m4-wakeup__conversation--first')

  const sleep =
    app.querySelector('.m4-wakeup__sleep')

  const secondCall =
    app.querySelector('.m4-wakeup__call--second')

  const secondConversation =
    app.querySelector('.m4-wakeup__conversation--second')

  const ending =
    app.querySelector('.m4-wakeup__ending')

  const endingLines =
    app.querySelectorAll('.m4-wakeup__ending-line')

  const button =
    app.querySelector('.m4-wakeup__continue')


  /* ==========================================
     INITIAL STATE
  ========================================== */

  gsap.set(
    [
      firstCall,
      firstConversation,
      sleep,
      secondCall,
      secondConversation,
      ending
    ],
    {
      autoAlpha: 0
    }
  )

  gsap.set(
    '.m4-wakeup__intro > *',
    {
      autoAlpha: 0,
      y: 12
    }
  )

  gsap.set(
    '.m4-wakeup__phone',
    {
      scale: 0.96,
      y: 12
    }
  )

  gsap.set(
    endingLines,
    {
      autoAlpha: 0,
      y: 13
    }
  )


  /* ==========================================
     TIMELINE
  ========================================== */

  const tl = gsap.timeline({
    defaults: {
      ease: 'power3.out'
    }
  })


  /* INTRO */

  tl
    .to(
      '.m4-wakeup__eyebrow',
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.65
      }
    )

    .to(
      '.m4-wakeup__intro-copy',
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.9
      },
      '-=0.3'
    )

    .to(
      {},
      {
        duration: 1.2
      }
    )

    .to(
      intro,
      {
        autoAlpha: 0,
        duration: 0.8
      }
    )


  /* FIRST CALL */

    .to(
      firstCall,
      {
        autoAlpha: 1,
        duration: 0.6
      }
    )

    .to(
      firstCall.querySelector('.m4-wakeup__phone'),
      {
        scale: 1,
        y: 0,
        duration: 0.75
      },
      '<'
    )

    .to(
      firstCall.querySelector('.m4-wakeup__phone'),
      {
        x: -3,
        duration: 0.08,
        repeat: 5,
        yoyo: true,
        ease: 'none'
      },
      '+=0.4'
    )

    .to(
      {},
      {
        duration: 1.1
      }
    )

    .to(
      firstCall,
      {
        autoAlpha: 0,
        duration: 0.55
      }
    )


  /* FIRST LINE */

    .to(
      firstConversation,
      {
        autoAlpha: 1,
        duration: 0.7
      }
    )

    .fromTo(
      firstConversation.querySelector('p'),
      {
        autoAlpha: 0,
        y: 14
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8
      },
      '<'
    )

    .to(
      {},
      {
        duration: 1.65
      }
    )

    .to(
      firstConversation,
      {
        autoAlpha: 0,
        duration: 0.65
      }
    )


  /* FALLING ASLEEP AGAIN */

    .to(
      sleep,
      {
        autoAlpha: 1,
        duration: 0.7
      }
    )

    .to(
      '.m4-wakeup__sleep-dots i',
      {
        autoAlpha: 0.2,
        duration: 0.55,
        stagger: {
          each: 0.18,
          repeat: 2,
          yoyo: true
        }
      }
    )

    .to(
      {},
      {
        duration: 0.8
      }
    )

    .to(
      sleep,
      {
        autoAlpha: 0,
        duration: 0.6
      }
    )


  /* SECOND CALL */

    .to(
      secondCall,
      {
        autoAlpha: 1,
        duration: 0.55
      }
    )

    .to(
      secondCall.querySelector('.m4-wakeup__phone'),
      {
        scale: 1,
        y: 0,
        duration: 0.7
      },
      '<'
    )

    .to(
      secondCall.querySelector('.m4-wakeup__phone'),
      {
        x: -4,
        duration: 0.075,
        repeat: 7,
        yoyo: true,
        ease: 'none'
      },
      '+=0.25'
    )

    .to(
      {},
      {
        duration: 1
      }
    )

    .to(
      secondCall,
      {
        autoAlpha: 0,
        duration: 0.55
      }
    )


  /* SECOND LINE */

    .to(
      secondConversation,
      {
        autoAlpha: 1,
        duration: 0.7
      }
    )

    .fromTo(
      secondConversation.querySelector('p'),
      {
        autoAlpha: 0,
        y: 14
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.85
      },
      '<'
    )

    .fromTo(
      secondConversation.querySelector('small'),
      {
        autoAlpha: 0,
        y: 8
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.65
      },
      '+=0.65'
    )

    .to(
      {},
      {
        duration: 1.6
      }
    )

    .to(
      secondConversation,
      {
        autoAlpha: 0,
        duration: 0.8
      }
    )


  /* ENDING */

    .to(
      ending,
      {
        autoAlpha: 1,
        duration: 0.8
      }
    )

    .to(
      endingLines,
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.85,
        duration: 0.85
      },
      '+=0.25'
    )

    .to(
      button,
      {
        autoAlpha: 1,
        duration: 0.65
      },
      '+=0.85'
    )


  /* ==========================================
     CONTINUE
  ========================================== */

  button.addEventListener(
    'click',
    () => {

      button.disabled = true

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