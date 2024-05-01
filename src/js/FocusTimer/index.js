import state from "./state.js";
import { registerControls } from "./events.js";

export function start(minutes,seconds){
 state.minutes = minutes
 state.seconds = seconds

 registerControls()
}