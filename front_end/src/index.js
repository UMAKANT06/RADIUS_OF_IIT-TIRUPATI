import React, { useState } from "react"
import { createRoot } from "react-dom/client"
import { Footer } from "@pmndrs/branding"
import "./index.css"
import App from "./App"
import Login from "./components/SearchBar/Login"
import Signup from "./components/SearchBar/Signup"

// function Overlay() {
//   const [ready, set] = useState(false)
//   return (
//     <>
//       {/* <App /> */}
//       <Signup />
//       {/* <Login /> */}
//       {/* <div className="dot" /> */}
//       {/* <div className={`fullscreen bg ${ready ? "ready" : "notready"} ${ready && "clicked"}`}>
//         <div className="stack">
//           <button onClick={() => set(true)}>Start</button>
//         </div> */}
//         {/* <Footer date="16. June" year="2021" /> */}
//       {/* </div> */}
//     </>
//   )
// }

function Overlay() {
  const [currentPage, setCurrentPage] = useState('app');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login onSignupClick={() => handlePageChange('signup')} onLoginSuccess={() => handlePageChange('app')} />;
      case 'signup':
        return <Signup onLoginClick={() => handlePageChange('login')} onSignupSuccess={() => handlePageChange('app')} />;
      case 'app':
        return <App />;
      default:
        return null;
    }
  };

  return (
    <>
      {renderPage()}
    </>
  );
}

createRoot(document.getElementById("root")).render(<Overlay />)
