import gsap from 'gsap'
import { texts } from '../../i18n.js'

export function renderMonthTwoLetter(app, next) {
  const lang = window.__lang || 'es'
  const t = texts[lang].monthTwoLetter

  app.innerHTML = `
    <section class="m2-letter">

      <div class="m2-letter-glow"></div>

      <div class="m2-letter-card">

        <p class="m2-letter-kicker">
          ${t.kicker}
        </p>

        <h2>
          ${t.title}
        </h2>

        <p class="m2-letter-text">
          ${t.text}
        </p>

        <button class="m2-letter-btn">
          ${t.button}
        </button>

      </div>

    </section>

    <style>

      .m2-letter{
        min-height:100vh;
        display:grid;
        place-items:center;
        position:relative;
        overflow:hidden;
        padding:32px;
        background:
        radial-gradient(circle at 50% 15%,rgba(214,185,145,.10),transparent 34%),
        linear-gradient(180deg,#101010,#050505);
      }

      .m2-letter-glow{
        position:absolute;
        width:420px;
        height:420px;
        border-radius:999px;
        background:rgba(214,185,145,.08);
        filter:blur(50px);
      }

      .m2-letter-card{

        position:relative;
        z-index:2;

        width:min(760px,92vw);

        padding:54px;

        border-radius:34px;

        border:1px solid rgba(255,255,255,.06);

        background:rgba(255,255,255,.03);

        backdrop-filter:blur(14px);

        color:#F5F1EA;

      }

      .m2-letter-kicker{

        margin:0;

        letter-spacing:.35em;

        text-transform:uppercase;

        font-size:.72rem;

        color:rgba(245,241,234,.42);

      }

      .m2-letter-card h2{

        margin:22px 0;

        font-size:clamp(2.8rem,7vw,5.4rem);

        line-height:.92;

        letter-spacing:-.06em;

      }

      .m2-letter-text{

        margin:0;

        font-size:1rem;

        line-height:2;

        color:rgba(245,241,234,.68);

        white-space:pre-line;

      }

      .m2-letter-btn{

        margin-top:42px;

        padding:13px 24px;

        border-radius:999px;

        border:1px solid rgba(255,255,255,.08);

        background:rgba(255,255,255,.04);

        color:white;

        cursor:pointer;

        letter-spacing:.22em;

        text-transform:uppercase;

        font-size:.7rem;

      }

    </style>

  `

  gsap.from('.m2-letter-card',{
    opacity:0,
    y:30,
    duration:1,
    ease:'power3.out'
  })

  gsap.to('.m2-letter-glow',{
    scale:1.15,
    duration:3,
    repeat:-1,
    yoyo:true,
    ease:'sine.inOut'
  })

  document.querySelector('.m2-letter-btn').onclick=()=>{

    gsap.to('.m2-letter-card',{

      opacity:0,

      y:-20,

      duration:.7,

      ease:'power2.inOut',

      onComplete:next

    })

  }

}