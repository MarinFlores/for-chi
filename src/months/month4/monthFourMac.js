import gsap from 'gsap'
import { content } from '../../data/content.js'

export function renderMonthFourMac(app, next) {
  const lang = window.__lang || 'es'
  const t = content[lang].monthFourMac

  let currentLesson = 0
  let transitionTimeout = null

  app.innerHTML = `
    <section class="m4-mac">

      <div class="m4-mac__ambient" aria-hidden="true">
        <div class="m4-mac__glow m4-mac__glow--1"></div>
        <div class="m4-mac__glow m4-mac__glow--2"></div>
      </div>

      <div class="m4-mac__content">

        <!-- HEADER -->
        <header class="m4-mac__header">

          <div class="m4-mac__eyebrow">
            ${t.eyebrow}
          </div>

          <h1 class="m4-mac__title">
            ${t.title}
          </h1>

          <p class="m4-mac__subtitle">
            ${t.subtitle}
          </p>

        </header>

        <!-- VIDEOLLAMADA -->
        <div class="m4-mac__call">

          <div class="m4-mac__call-bar">

            <div class="m4-mac__call-left">
              <span class="m4-mac__call-dot"></span>

              <span class="m4-mac__call-label">
                ${t.callLabel}
              </span>
            </div>

            <div class="m4-mac__call-status">
              <span></span>
              ${t.connected}
            </div>

          </div>

          <div class="m4-mac__workspace">

            <!-- PANTALLA COMPARTIDA -->
            <div class="m4-mac__screen">

              <div class="m4-mac__desktop">

                <div class="m4-mac__menu-bar">

                  <div class="m4-mac__menu-left">
                    <span class="m4-mac__apple">●</span>
                    <strong>Finder</strong>
                  </div>

                  <div class="m4-mac__menu-right">
                    <span>⌁</span>
                    <span>◉</span>
                    <span class="m4-mac__clock">10:41 PM</span>
                  </div>

                </div>

                <div class="m4-mac__wallpaper">
                  <div class="m4-mac__wallpaper-orb"></div>
                  <div class="m4-mac__wallpaper-orb-2"></div>
                </div>

                <!-- LECCIÓN -->
                <div class="m4-mac__lesson-card">

                  <span class="m4-mac__lesson-number">
                    ${t.lesson}
                    <span id="m4LessonNumber">
                      01
                    </span>
                  </span>

                  <h2 id="m4LessonTitle">
                    ${t.lessons[0].title}
                  </h2>

                  <p id="m4LessonText">
                    ${t.lessons[0].text}
                  </p>

                  <div
                    class="m4-mac__shortcut"
                    id="m4Shortcut"
                  >
                    ${t.lessons[0].shortcut}
                  </div>

                  <div
                    class="m4-mac__options"
                    id="m4Options"
                  ></div>

                  <div
                    class="m4-mac__feedback"
                    id="m4Feedback"
                    aria-live="polite"
                  ></div>

                </div>

                <!-- DOCK -->
                <div
                  class="m4-mac__dock"
                  aria-hidden="true"
                >
                  <div class="m4-mac__dock-item">☺</div>
                  <div class="m4-mac__dock-item">◎</div>
                  <div class="m4-mac__dock-item">✉</div>
                  <div class="m4-mac__dock-item">♫</div>
                  <div class="m4-mac__dock-item">⚙</div>
                </div>

              </div>

            </div>

            <!-- CHI -->
            <aside class="m4-mac__person-card">

              <div class="m4-mac__person-avatar">
                C
              </div>

              <div class="m4-mac__person-info">
                <strong>My Chi</strong>
                <span>${t.learning}</span>
              </div>

              <div
                class="m4-mac__person-heart"
                aria-hidden="true"
              >
                ♡
              </div>

            </aside>

          </div>

          <!-- CONTROLES VIDEOLLAMADA -->
          <div
            class="m4-mac__controls"
            aria-hidden="true"
          >
            <span>◉</span>
            <span>⌁</span>
            <span>⋯</span>
          </div>

        </div>

        <!-- CIERRE -->
        <div class="m4-mac__closing">

          <p class="m4-mac__closing-small">
            ${t.closingSmall}
          </p>

          <p class="m4-mac__closing-main">
            ${t.closingMain}
          </p>

          <button
            class="m4-mac__continue"
            type="button"
          >
            ${t.button}
          </button>

        </div>

      </div>

    </section>

    <style>

      /* =========================
         ESCENA
      ========================== */

      .m4-mac {
        position: relative;

        width: 100%;
        min-height: 100svh;

        box-sizing: border-box;

        display: flex;
        align-items: center;
        justify-content: center;

        overflow: hidden;

        padding:
          clamp(24px, 3.5vh, 42px)
          20px
          clamp(28px, 4vh, 46px);

        color: #fff;

        background:
          radial-gradient(
            circle at 20% 20%,
            rgba(105, 125, 148, 0.12),
            transparent 34%
          ),
          radial-gradient(
            circle at 85% 82%,
            rgba(181, 153, 130, 0.10),
            transparent 33%
          ),
          linear-gradient(
            145deg,
            #090a0c 0%,
            #101113 50%,
            #090a0b 100%
          );
      }


      /* =========================
         AMBIENTE
      ========================== */

      .m4-mac__ambient {
        position: absolute;
        inset: 0;

        overflow: hidden;

        pointer-events: none;
      }

      .m4-mac__glow {
        position: absolute;

        width: 360px;
        height: 360px;

        border-radius: 50%;

        filter: blur(110px);

        opacity: 0.13;
      }

      .m4-mac__glow--1 {
        top: 4%;
        left: -150px;

        background: #8092a7;
      }

      .m4-mac__glow--2 {
        right: -150px;
        bottom: 3%;

        background: #a78e7a;
      }


      /* =========================
         CONTENIDO GENERAL
      ========================== */

      .m4-mac__content {
        position: relative;
        z-index: 2;

        width: min(900px, 100%);

        margin: 0 auto;

        text-align: center;
      }


      /* =========================
         HEADER
      ========================== */

      .m4-mac__header {
        margin-bottom: clamp(18px, 2.6vh, 27px);
      }

      .m4-mac__eyebrow {
        margin-bottom: 9px;

        color:
          rgba(255, 255, 255, 0.42);

        font-size: 9px;
        font-weight: 600;

        letter-spacing: 0.33em;

        text-transform: uppercase;
      }

      .m4-mac__title {
        margin: 0;

        color:
          rgba(255, 255, 255, 0.98);

        font-size:
          clamp(40px, 6vw, 64px);

        font-weight: 300;

        line-height: 1;

        letter-spacing: -0.052em;
      }

      .m4-mac__subtitle {
        max-width: 570px;

        margin:
          14px auto 0;

        color:
          rgba(255, 255, 255, 0.56);

        font-size:
          clamp(13px, 1.6vw, 16px);

        line-height: 1.55;
      }


      /* =========================
         VENTANA VIDEOLLAMADA
      ========================== */

      .m4-mac__call {
        position: relative;

        width: min(760px, 100%);

        margin: 0 auto;

        overflow: hidden;

        border:
          1px solid
          rgba(255, 255, 255, 0.10);

        border-radius: 19px;

        background:
          rgba(11, 12, 14, 0.78);

        box-shadow:
          0 25px 75px
          rgba(0, 0, 0, 0.34);

        backdrop-filter: blur(22px);
        -webkit-backdrop-filter: blur(22px);
      }


      /* =========================
         BARRA SUPERIOR
      ========================== */

      .m4-mac__call-bar {
        height: 45px;

        box-sizing: border-box;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0 16px;

        border-bottom:
          1px solid
          rgba(255, 255, 255, 0.065);

        font-size: 10px;
      }

      .m4-mac__call-left,
      .m4-mac__call-status {
        display: flex;
        align-items: center;
      }

      .m4-mac__call-left {
        gap: 9px;

        color:
          rgba(255, 255, 255, 0.68);
      }

      .m4-mac__call-status {
        gap: 7px;

        color:
          rgba(255, 255, 255, 0.40);
      }

      .m4-mac__call-dot {
        width: 7px;
        height: 7px;

        border-radius: 50%;

        background: #8ec69b;

        box-shadow:
          0 0 12px
          rgba(142, 198, 155, 0.5);
      }

      .m4-mac__call-status > span {
        width: 5px;
        height: 5px;

        border-radius: 50%;

        background: #8ec69b;
      }


      /* =========================
         WORKSPACE
      ========================== */

      .m4-mac__workspace {
        display: grid;

        grid-template-columns:
          minmax(0, 1fr)
          145px;

        gap: 10px;

        padding: 12px;
      }


      /* =========================
         DESKTOP
      ========================== */

      .m4-mac__screen {
        min-width: 0;

        overflow: hidden;

        border:
          1px solid
          rgba(255, 255, 255, 0.075);

        border-radius: 14px;

        background: #17191d;
      }

      .m4-mac__desktop {
        position: relative;

        height: clamp(
          330px,
          46vh,
          410px
        );

        min-height: 330px;

        overflow: hidden;

        background:
          linear-gradient(
            135deg,
            #45566a 0%,
            #30394a 43%,
            #77645f 100%
          );
      }


      /* =========================
         MENÚ macOS
      ========================== */

      .m4-mac__menu-bar {
        position: relative;
        z-index: 5;

        height: 27px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        box-sizing: border-box;

        padding: 0 11px;

        color:
          rgba(255, 255, 255, 0.84);

        background:
          rgba(12, 14, 18, 0.34);

        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);

        font-size: 8px;
      }

      .m4-mac__menu-left,
      .m4-mac__menu-right {
        display: flex;
        align-items: center;

        gap: 9px;
      }

      .m4-mac__menu-left strong {
        font-weight: 500;
      }

      .m4-mac__apple {
        font-size: 7px;
      }


      /* =========================
         WALLPAPER
      ========================== */

      .m4-mac__wallpaper {
        position: absolute;

        inset: 27px 0 0;

        overflow: hidden;
      }

      .m4-mac__wallpaper-orb {
        position: absolute;

        width: 390px;
        height: 390px;

        right: -95px;
        bottom: -185px;

        border-radius:
          45% 55% 60% 40%;

        transform:
          rotate(23deg);

        background:
          linear-gradient(
            135deg,
            rgba(218, 186, 168, 0.58),
            rgba(121, 129, 160, 0.18)
          );
      }

      .m4-mac__wallpaper-orb-2 {
        position: absolute;

        width: 300px;
        height: 300px;

        left: -120px;
        top: -130px;

        border-radius: 50%;

        background:
          radial-gradient(
            circle,
            rgba(120, 150, 180, 0.22),
            transparent 68%
          );
      }


      /* =========================
         TARJETA LECCIÓN
      ========================== */

      .m4-mac__lesson-card {
        position: absolute;
        z-index: 10;

        left: 50%;
        top: 44%;

        width:
          min(
            390px,
            calc(100% - 34px)
          );

        box-sizing: border-box;

        transform:
          translate(-50%, -50%);

        padding:
          22px 21px 20px;

        border:
          1px solid
          rgba(255, 255, 255, 0.14);

        border-radius: 17px;

        background:
          rgba(18, 20, 24, 0.82);

        box-shadow:
          0 22px 60px
          rgba(0, 0, 0, 0.31);

        backdrop-filter: blur(21px);
        -webkit-backdrop-filter: blur(21px);
      }

      .m4-mac__lesson-number {
        display: block;

        margin-bottom: 9px;

        color:
          rgba(255, 255, 255, 0.37);

        font-size: 8px;
        font-weight: 600;

        letter-spacing: 0.24em;

        text-transform: uppercase;
      }

      .m4-mac__lesson-card h2 {
        margin: 0;

        color:
          rgba(255, 255, 255, 0.95);

        font-size:
          clamp(20px, 3vw, 27px);

        font-weight: 400;

        line-height: 1.15;

        letter-spacing: -0.035em;
      }

      .m4-mac__lesson-card > p {
        max-width: 340px;

        margin:
          9px auto 14px;

        color:
          rgba(255, 255, 255, 0.55);

        font-size: 11px;

        line-height: 1.5;
      }


      /* =========================
         SHORTCUT
      ========================== */

      .m4-mac__shortcut {
        display: inline-flex;

        align-items: center;
        justify-content: center;

        min-height: 43px;

        box-sizing: border-box;

        margin-bottom: 16px;

        padding: 0 16px;

        border:
          1px solid
          rgba(255, 255, 255, 0.13);

        border-radius: 10px;

        color:
          rgba(255, 255, 255, 0.94);

        background:
          rgba(255, 255, 255, 0.065);

        box-shadow:
          inset 0 -3px 0
          rgba(0, 0, 0, 0.18);

        font-size: 18px;

        letter-spacing: 0.05em;
      }


      /* =========================
         OPCIONES
      ========================== */

      .m4-mac__options {
        display: flex;
        flex-wrap: wrap;

        justify-content: center;

        gap: 7px;
      }

      .m4-mac__option {
        min-height: 34px;

        box-sizing: border-box;

        padding: 8px 11px;

        border:
          1px solid
          rgba(255, 255, 255, 0.11);

        border-radius: 9px;

        color:
          rgba(255, 255, 255, 0.68);

        background:
          rgba(255, 255, 255, 0.045);

        font: inherit;
        font-size: 9px;

        cursor: pointer;

        transition:
          transform 180ms ease,
          background 180ms ease,
          border-color 180ms ease,
          color 180ms ease,
          opacity 180ms ease;
      }

      .m4-mac__option:hover:not(:disabled) {
        transform:
          translateY(-1px);

        color: #fff;

        border-color:
          rgba(255, 255, 255, 0.22);

        background:
          rgba(255, 255, 255, 0.09);
      }

      .m4-mac__option:disabled {
        cursor: default;
      }

      .m4-mac__option--correct {
        color: #b9e1c2;

        border-color:
          rgba(142, 198, 155, 0.42);

        background:
          rgba(142, 198, 155, 0.11);
      }

      .m4-mac__option--wrong {
        opacity: 0.32;
      }

      .m4-mac__feedback {
        min-height: 15px;

        margin-top: 11px;

        color:
          rgba(255, 255, 255, 0.50);

        font-size: 9px;

        line-height: 1.4;
      }


      /* =========================
         DOCK
      ========================== */

      .m4-mac__dock {
        position: absolute;
        z-index: 6;

        left: 50%;
        bottom: 10px;

        transform:
          translateX(-50%);

        display: flex;

        gap: 5px;

        padding: 5px 7px;

        border:
          1px solid
          rgba(255, 255, 255, 0.13);

        border-radius: 10px;

        background:
          rgba(255, 255, 255, 0.10);

        backdrop-filter: blur(13px);
        -webkit-backdrop-filter: blur(13px);
      }

      .m4-mac__dock-item {
        width: 25px;
        height: 25px;

        display: grid;
        place-items: center;

        border-radius: 6px;

        color:
          rgba(255, 255, 255, 0.86);

        background:
          rgba(255, 255, 255, 0.12);

        font-size: 10px;
      }


      /* =========================
         PERSONA
      ========================== */

      .m4-mac__person-card {
        position: relative;

        min-width: 0;

        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;

        padding: 14px;

        border:
          1px solid
          rgba(255, 255, 255, 0.07);

        border-radius: 14px;

        background:
          linear-gradient(
            145deg,
            rgba(43, 46, 52, 0.86),
            rgba(23, 25, 29, 0.92)
          );
      }

      .m4-mac__person-avatar {
        width: 58px;
        height: 58px;

        display: grid;
        place-items: center;

        margin-bottom: 10px;

        border-radius: 50%;

        color:
          rgba(255, 255, 255, 0.95);

        background:
          linear-gradient(
            145deg,
            #738697,
            #aa8f7d
          );

        box-shadow:
          0 10px 28px
          rgba(0, 0, 0, 0.24);

        font-size: 23px;
        font-weight: 300;
      }

      .m4-mac__person-info {
        display: flex;
        flex-direction: column;

        gap: 3px;
      }

      .m4-mac__person-info strong {
        font-size: 12px;
        font-weight: 500;
      }

      .m4-mac__person-info span {
        color:
          rgba(255, 255, 255, 0.40);

        font-size: 8px;
      }

      .m4-mac__person-heart {
        position: absolute;

        right: 8px;
        bottom: 8px;

        width: 26px;
        height: 26px;

        display: grid;
        place-items: center;

        border-radius: 50%;

        color:
          rgba(255, 255, 255, 0.62);

        background:
          rgba(255, 255, 255, 0.065);

        font-size: 10px;
      }


      /* =========================
         CONTROLES
      ========================== */

      .m4-mac__controls {
        height: 50px;

        display: flex;

        align-items: center;
        justify-content: center;

        gap: 8px;

        border-top:
          1px solid
          rgba(255, 255, 255, 0.06);
      }

      .m4-mac__controls span {
        width: 32px;
        height: 32px;

        display: grid;
        place-items: center;

        border-radius: 50%;

        color:
          rgba(255, 255, 255, 0.42);

        background:
          rgba(255, 255, 255, 0.065);

        font-size: 9px;
      }


      /* =========================
         CIERRE
      ========================== */

      .m4-mac__closing {
        max-width: 700px;

        margin: 24px auto 0;

        opacity: 0;
        visibility: hidden;

        transform:
          translateY(12px);
      }

      .m4-mac__closing-small {
        margin: 0 0 7px;

        color:
          rgba(255, 255, 255, 0.49);

        font-size:
          clamp(12px, 1.5vw, 14px);

        line-height: 1.5;
      }

      .m4-mac__closing-main {
        max-width: 670px;

        margin: 0 auto;

        color:
          rgba(255, 255, 255, 0.94);

        font-size:
          clamp(20px, 3vw, 29px);

        font-weight: 300;

        line-height: 1.38;

        letter-spacing: -0.02em;
      }

      .m4-mac__continue {
        min-width: 150px;
        min-height: 43px;

        box-sizing: border-box;

        margin-top: 19px;

        padding: 11px 22px;

        border:
          1px solid
          rgba(255, 255, 255, 0.14);

        border-radius: 999px;

        color:
          rgba(255, 255, 255, 0.91);

        background:
          rgba(255, 255, 255, 0.06);

        font: inherit;

        font-size: 9px;
        font-weight: 600;

        letter-spacing: 0.19em;

        text-transform: uppercase;

        cursor: pointer;

        transition:
          transform 200ms ease,
          background 200ms ease,
          border-color 200ms ease;
      }

      .m4-mac__continue:hover {
        transform:
          translateY(-2px);

        border-color:
          rgba(255, 255, 255, 0.24);

        background:
          rgba(255, 255, 255, 0.11);
      }


      /* =========================
         PANTALLAS BAJAS
      ========================== */

      @media (max-height: 850px) and (min-width: 741px) {

        .m4-mac {
          padding:
            20px 20px 24px;
        }

        .m4-mac__header {
          margin-bottom: 17px;
        }

        .m4-mac__eyebrow {
          margin-bottom: 6px;
        }

        .m4-mac__title {
          font-size:
            clamp(38px, 5vw, 52px);
        }

        .m4-mac__subtitle {
          margin-top: 10px;
        }

        .m4-mac__desktop {
          height: 335px;
          min-height: 335px;
        }

        .m4-mac__lesson-card {
          top: 44%;

          padding:
            18px 18px 16px;
        }

        .m4-mac__call-bar {
          height: 40px;
        }

        .m4-mac__controls {
          height: 43px;
        }

        .m4-mac__closing {
          margin-top: 17px;
        }

        .m4-mac__continue {
          margin-top: 14px;
        }
      }


      /* =========================
         TABLET / MOBILE
      ========================== */

      @media (max-width: 740px) {

        .m4-mac {
          min-height: 100svh;

          overflow-y: auto;

          align-items: flex-start;

          padding:
            36px 14px 45px;
        }

        .m4-mac__content {
          width: 100%;
        }

        .m4-mac__header {
          margin-bottom: 21px;
        }

        .m4-mac__title {
          font-size:
            clamp(38px, 12vw, 55px);
        }

        .m4-mac__subtitle {
          max-width: 430px;

          font-size: 13px;
        }

        .m4-mac__workspace {
          grid-template-columns: 1fr;

          gap: 9px;

          padding: 10px;
        }

        .m4-mac__desktop {
          height: 390px;
          min-height: 390px;
        }

        .m4-mac__person-card {
          min-height: 72px;

          box-sizing: border-box;

          flex-direction: row;

          justify-content: flex-start;

          gap: 10px;

          padding: 11px 13px;
        }

        .m4-mac__person-avatar {
          width: 43px;
          height: 43px;

          flex: 0 0 43px;

          margin: 0;

          font-size: 17px;
        }

        .m4-mac__person-info {
          text-align: left;
        }

        .m4-mac__lesson-card {
          top: 44%;

          width:
            calc(100% - 26px);

          padding:
            20px 14px 17px;
        }

        .m4-mac__clock {
          display: none;
        }

        .m4-mac__closing {
          margin-top: 25px;
        }

        .m4-mac__closing-main {
          font-size:
            clamp(20px, 6vw, 26px);
        }
      }


      @media (max-width: 430px) {

        .m4-mac__call-label {
          max-width: 190px;

          overflow: hidden;

          white-space: nowrap;

          text-overflow: ellipsis;
        }

        .m4-mac__call-status {
          font-size: 0;
        }

        .m4-mac__desktop {
          height: 410px;
          min-height: 410px;
        }

        .m4-mac__options {
          flex-direction: column;
        }

        .m4-mac__option {
          width: 100%;
        }

        .m4-mac__dock-item {
          width: 23px;
          height: 23px;
        }
      }


      @media (prefers-reduced-motion: reduce) {

        .m4-mac *,
        .m4-mac *::before,
        .m4-mac *::after {
          animation-duration:
            0.01ms !important;

          animation-iteration-count:
            1 !important;

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
    app.querySelector('.m4-mac')

  const contentElement =
    app.querySelector('.m4-mac__content')

  const lessonCard =
    app.querySelector('.m4-mac__lesson-card')

  const lessonNumber =
    app.querySelector('#m4LessonNumber')

  const lessonTitle =
    app.querySelector('#m4LessonTitle')

  const lessonText =
    app.querySelector('#m4LessonText')

  const shortcut =
    app.querySelector('#m4Shortcut')

  const optionsContainer =
    app.querySelector('#m4Options')

  const feedback =
    app.querySelector('#m4Feedback')

  const closing =
    app.querySelector('.m4-mac__closing')

  const continueButton =
    app.querySelector('.m4-mac__continue')

  const personAvatar =
    app.querySelector('.m4-mac__person-avatar')

  const dockItems =
    app.querySelectorAll('.m4-mac__dock-item')


  /* ==========================================
     LECCIONES
  ========================================== */

  function renderLesson() {
    const lesson =
      t.lessons[currentLesson]

    lessonNumber.textContent =
      String(currentLesson + 1)
        .padStart(2, '0')

    lessonTitle.textContent =
      lesson.title

    lessonText.textContent =
      lesson.text

    shortcut.textContent =
      lesson.shortcut

    feedback.textContent = ''

    optionsContainer.innerHTML = ''

    lesson.options.forEach(
      (option, index) => {

        const button =
          document.createElement('button')

        button.type = 'button'

        button.className =
          'm4-mac__option'

        button.textContent =
          option

        button.addEventListener(
          'click',
          () => checkAnswer(index)
        )

        optionsContainer.appendChild(
          button
        )
      }
    )

    gsap.fromTo(
      lessonCard,
      {
        autoAlpha: 0,
        y: 13
      },
      {
        autoAlpha: 1,
        y: 0,

        duration: 0.45,

        ease: 'power2.out'
      }
    )
  }


  /* ==========================================
     RESPUESTAS
  ========================================== */

  function checkAnswer(index) {
    const lesson =
      t.lessons[currentLesson]

    const buttons =
      optionsContainer.querySelectorAll(
        '.m4-mac__option'
      )

    if (index !== lesson.correct) {

      buttons[index]
        .classList.add(
          'm4-mac__option--wrong'
        )

      feedback.textContent =
        lesson.wrong

      gsap.fromTo(
        lessonCard,
        {
          x: -4
        },
        {
          x: 0,

          duration: 0.32,

          ease:
            'elastic.out(1, 0.35)'
        }
      )

      return
    }


    buttons.forEach(
      (button, buttonIndex) => {

        button.disabled = true

        if (buttonIndex === index) {
          button.classList.add(
            'm4-mac__option--correct'
          )
        }
      }
    )

    feedback.textContent =
      lesson.correctText


    gsap.to(shortcut, {
      scale: 1.055,

      duration: 0.18,

      repeat: 1,
      yoyo: true,

      ease: 'power2.out'
    })


    gsap.to(
      dockItems[currentLesson % dockItems.length],
      {
        y: -5,

        duration: 0.18,

        repeat: 1,
        yoyo: true,

        ease: 'power2.out'
      }
    )


    transitionTimeout =
      window.setTimeout(
        () => {

          if (
            currentLesson <
            t.lessons.length - 1
          ) {

            gsap.to(
              lessonCard,
              {
                autoAlpha: 0,
                y: -11,

                duration: 0.32,

                ease: 'power2.in',

                onComplete: () => {
                  currentLesson++
                  renderLesson()
                }
              }
            )

            return
          }

          finishLessons()

        },
        900
      )
  }


  /* ==========================================
     FINAL DE LA ESCENA
  ========================================== */

  function finishLessons() {

    gsap.to(
      lessonCard,
      {
        autoAlpha: 0,
        y: -12,

        duration: 0.45,

        ease: 'power2.in'
      }
    )


    gsap.to(
      '.m4-mac__person-card',
      {
        borderColor:
          'rgba(255,255,255,0.16)',

        duration: 0.7,

        delay: 0.25,

        ease: 'power2.out'
      }
    )


    gsap.to(
      personAvatar,
      {
        scale: 1.06,

        duration: 0.35,

        delay: 0.35,

        repeat: 1,
        yoyo: true,

        ease: 'sine.inOut'
      }
    )


    gsap.to(
      closing,
      {
        autoAlpha: 1,
        y: 0,

        duration: 0.8,

        delay: 0.45,

        ease: 'power3.out'
      }
    )
  }


  /* ==========================================
     ANIMACIÓN DE ENTRADA
  ========================================== */

  const introTimeline =
    gsap.timeline({
      defaults: {
        ease: 'power3.out'
      }
    })


  introTimeline

    .from(
      '.m4-mac__eyebrow',
      {
        autoAlpha: 0,
        y: -7,

        duration: 0.6
      }
    )

    .from(
      '.m4-mac__title',
      {
        autoAlpha: 0,
        y: 13,

        duration: 0.8
      },
      '-=0.3'
    )

    .from(
      '.m4-mac__subtitle',
      {
        autoAlpha: 0,
        y: 10,

        duration: 0.65
      },
      '-=0.38'
    )

    .from(
      '.m4-mac__call',
      {
        autoAlpha: 0,

        y: 19,

        scale: 0.985,

        duration: 0.9
      },
      '-=0.25'
    )

    .from(
      personAvatar,
      {
        autoAlpha: 0,
        scale: 0.72,

        duration: 0.55,

        ease: 'back.out(1.7)'
      },
      '-=0.42'
    )


  /* ==========================================
     AMBIENTE
  ========================================== */

  gsap.to(
    '.m4-mac__glow--1',
    {
      x: 35,
      y: 18,

      duration: 8,

      repeat: -1,
      yoyo: true,

      ease: 'sine.inOut'
    }
  )


  gsap.to(
    '.m4-mac__glow--2',
    {
      x: -35,
      y: -20,

      duration: 9,

      repeat: -1,
      yoyo: true,

      ease: 'sine.inOut'
    }
  )


  gsap.to(
    '.m4-mac__wallpaper-orb',
    {
      x: -10,
      y: -7,

      rotation: 27,

      duration: 7,

      repeat: -1,
      yoyo: true,

      ease: 'sine.inOut'
    }
  )


  /* ==========================================
     CONTINUAR
  ========================================== */

  continueButton.addEventListener(
    'click',
    () => {

      continueButton.disabled = true

      if (transitionTimeout) {
        clearTimeout(
          transitionTimeout
        )
      }

      gsap.to(
        contentElement,
        {
          autoAlpha: 0,
          y: -18,

          duration: 0.55,

          ease: 'power2.in'
        }
      )

      gsap.to(
        scene,
        {
          opacity: 0,

          duration: 0.7,

          delay: 0.08,

          ease: 'power2.inOut',

          onComplete: next
        }
      )
    }
  )

  renderLesson()
}