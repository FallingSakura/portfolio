import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "./styles/globals/card.css";
import App from "./App.tsx";
import { Profiler } from "react";

function onRenderCallback() {
  // id: string,
  // phase: string,
  // actualDuration: number,
  // baseDuration: number,
  // startTime: number,
  // commitTime: number
  // console.log(
  //   id,
  //   phase,
  //   actualDuration.toFixed(2),
  //   baseDuration.toFixed(2),
  //   startTime.toFixed(0),
  //   commitTime.toFixed(0)
  // )
}

createRoot(document.getElementById("root")!).render(
  <Profiler id="App" onRender={onRenderCallback}>
    <App />
  </Profiler>,
);
