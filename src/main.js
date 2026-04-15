import './style.css'
import { inject } from '@vercel/analytics'

import { renderGate } from './scenes/gate.js'
import { renderBridge } from './scenes/experience.js'
import { renderPeruPhilippines } from './scenes/peruPhilippines.js'
import { renderChat } from './scenes/chat.js'
import { renderPhoto } from './scenes/photo.js'
import { renderConnection } from './scenes/connection.js'
import { renderAudio } from './scenes/audio.js'
import { renderFinal } from './scenes/final.js'
import { renderLanguage } from './scenes/language.js'
import { renderHug } from './scenes/hug.js'
import { renderSongLanguage } from "./scenes/songLanguage";

inject()

window.__lang = 'es'

const music = new Audio('/assets/music.mp3')
music.loop = true
music.volume = 0.12

let isPlaying = false

window.__music = music
window.__musicPlaying = () => isPlaying
window.__toggleMusic = () => {
  if (!isPlaying) {
    music.play()
    isPlaying = true
  } else {
    music.pause()
    isPlaying = false
  }
}

const app = document.querySelector('#app')

const btn = document.createElement('div')
btn.id = 'music-toggle'
btn.innerText = '♪'

document.body.appendChild(btn)

btn.addEventListener('click', () => {
  const music = window.__music

  if (!window.__musicPlaying()) {
    music.volume = 0
    music.play()

    let v = 0
    const fade = setInterval(() => {
      v += 0.01

      if (v >= 0.12) {
        music.volume = 0.12
        clearInterval(fade)
      } else {
        music.volume = v
      }
    }, 80)

    isPlaying = true
    btn.classList.add('active')
  } else {
    music.pause()
    isPlaying = false
    btn.classList.remove('active')
  }
})

let currentScene = 0

const flow = [
  renderGate,
  renderBridge,
  renderPeruPhilippines,
  renderChat,
  renderPhoto,
  renderConnection,
  renderSongLanguage,
  renderAudio,
  renderHug,
  renderFinal
]

function nextScene() {
  currentScene++

  if (currentScene >= flow.length) return

  flow[currentScene](app, nextScene)
}

renderLanguage(app, () => {
  flow[currentScene](app, nextScene)
})