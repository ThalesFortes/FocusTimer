import state from "./state.js";
import { registerControls, setMinutes } from "./events.js";
import * as timer from "./timer.js";

export function start(minutes,seconds){
 state.minutes = minutes
 state.seconds = seconds

 timer.updateDisplay(minutes,seconds)

 
 registerControls()
 setMinutes()
}