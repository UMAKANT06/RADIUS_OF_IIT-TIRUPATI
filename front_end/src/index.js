import { useState } from "react"
import { createRoot } from "react-dom/client"
import { Footer } from "@pmndrs/branding"
import "./index.css"
import App from "./App"
import Login from "./components/SearchBar/Login"
import Signup from "./components/SearchBar/Signup"

function Overlay() {
  const [ready, set] = useState(false)
  return (
    <>
      {/* <App /> */}
      <Login />
      {/* <Signup/> */}
      {/* <div className="dot" /> */}
      {/* <div className={`fullscreen bg ${ready ? "ready" : "notready"} ${ready && "clicked"}`}>
        <div className="stack">
          <button onClick={() => set(true)}>Start</button>
        </div> */}
        {/* <Footer date="16. June" year="2021" /> */}
      {/* </div> */}
    </>
  )
}

createRoot(document.getElementById("root")).render(<Overlay />)
