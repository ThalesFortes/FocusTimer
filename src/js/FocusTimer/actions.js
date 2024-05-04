import state  from "./state.js"
import * as timer from "./timer.js"
import * as elements from "./elements.js"

export function toggleRunning(){
  state.isRunning = document.documentElement.classList.toggle("running")
  timer.countdown()
}

export function reset(){
  state.isRunning = false
  state.isRunning = document.documentElement.classList.remove("running")
  timer.updateDisplay()
}

export function toggleMusic(){
  state.isMute = document.documentElement.classList.toggle("music-on")
}

export function set(){
  elements.minutes.setAttribute('contenteditable', true)
  elements.minutes.focus()
}