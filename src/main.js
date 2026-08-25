import './style.css'
import { inject } from '@vercel/analytics'

import { renderGate } from './scenes/gate.js'
import { renderStoryHub } from './scenes/storyHub.js'

import { renderBridge } from './scenes/experience.js'
import { renderPeruPhilippines } from './scenes/peruPhilippines.js'
import { renderChat } from './scenes/chat.js'
import { renderPhoto } from './scenes/photo.js'
import { renderConnection } from './scenes/connection.js'
import { renderAudio } from './scenes/audio.js'
import { renderFinal } from './scenes/final.js'
import { renderLanguage } from './scenes/language.js'
import { renderHug } from './scenes/hug.js'
import { renderSongLanguage } from './scenes/songLanguage.js'
import { renderOfficialDay } from './scenes/officialDay.js'

import { renderMonthOneIntro } from './months/month1/monthOneIntro.js'
import { renderMonthLetter } from './months/month1/monthLetter.js'
import { renderMonthFinal } from './months/month1/monthFinal.js'

import { renderMonthTwoIntro } from './months/month2/monthTwoIntro.js'
import { renderMonthTwoAlbum } from './months/month2/monthTwoAlbum.js'
import { renderMonthTwoBirthday } from './months/month2/monthTwoBirthday.js'
import { renderMonthTwoGallery } from './months/month2/monthTwoGallery.js'
import { renderMonthTwoLetter } from './months/month2/monthTwoLetter.js'
import { renderMonthTwoFinal } from './months/month2/monthTwoFinal.js'

import { renderMonthThreeIntro } from './months/month3/monthThreeIntro.js'
import { renderMonthThreeCalls } from './months/month3/monthThreeCalls.js'
import { renderMonthThreeUnmasked } from './months/month3/monthThreeUnmasked.js'
import { renderMonthThreeGame } from './months/month3/monthThreeGame.js'
import { renderMonthThreeHiddenMemory } from './months/month3/monthThreeHiddenMemory.js'
import { renderMonthThreeLetter } from './months/month3/monthThreeLetter'

import { renderMonthFourIntro } from './months/month4/monthFourIntro.js'
import { renderMonthFourMac } from './months/month4/monthFourMac.js'
import { renderMonthFourJourney } from './months/month4/monthFourJourney.js'
import { renderMonthFourWakeUp } from './months/month4/monthFourWakeUp.js'
import { renderMonthFourLetter } from './months/month4/monthFourLetter.js'

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
let activeFlow = []

const legacyFlow = [
  renderBridge,
  renderPeruPhilippines,
  renderChat,
  renderPhoto,
  renderConnection,
  renderSongLanguage,
  renderAudio,
  renderHug,
  renderOfficialDay,
  renderFinal
]

const monthOneFlow = [
  renderMonthOneIntro,
  renderMonthLetter,
  renderMonthFinal
]

const monthTwoFlow = [
  renderMonthTwoIntro,
  renderMonthTwoAlbum,
  renderMonthTwoBirthday,
  renderMonthTwoGallery,
  renderMonthTwoLetter,
  renderMonthTwoFinal
]

const monthThreeFlow = [
  renderMonthThreeIntro,
  renderMonthThreeCalls,
  renderMonthThreeUnmasked,
  renderMonthThreeGame,
  renderMonthThreeHiddenMemory,
  renderMonthThreeLetter
]

const monthFourFlow = [
  renderMonthFourIntro,
  renderMonthFourMac,
  renderMonthFourJourney,
  renderMonthFourWakeUp,
  renderMonthFourLetter
]

function startFlow(flow) {
  activeFlow = flow
  currentScene = 0

  activeFlow[currentScene](app, nextScene, startExperience, openMonth)
}

function openMonth(id) {
  if (id === 'month-1') {
    startFlow(monthOneFlow)
  }
  if (id === 'month-2') {
    startFlow(monthTwoFlow)
  }
  if (id === 'month-3') {
    startFlow(monthThreeFlow)
  }
  if (id === 'month-4') {
    startFlow(monthFourFlow)
  }
}

function startExperience() {
  startFlow(legacyFlow)
}

function nextScene() {

  currentScene++
  if (currentScene >= activeFlow.length) {
    renderStoryHub(app, openMonth, startExperience)
    return
  }
  activeFlow[currentScene](app, nextScene, startExperience, openMonth)
}

renderLanguage(app, () => {
  renderGate(app, () => {
    renderStoryHub(app, openMonth, startExperience)
  })
})