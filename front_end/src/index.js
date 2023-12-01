import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Footer } from "@pmndrs/branding";
import "./index.css";
import App from "./App";
import Login from "./components/SearchBar/Login";
import Signup from "./components/SearchBar/Signup";

function Overlay() {
  const [ready, setReady] = useState(false);

  return (
    <>
      {ready ? (
        <App />
      ) : (
        <div className={`fullscreen bg notready ${ready && "clicked"}`}>
          <div className="stack">
            <button onClick={() => setReady(true)}>Start</button>
          </div>
        </div>
      )}
    </>
  );
}

const rootElement = document.getElementById("root");
createRoot(rootElement).render(<Overlay />);
