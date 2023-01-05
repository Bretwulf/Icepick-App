import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import SentenceProvider from "./contexts/sentenceContext/sentenceContext";
import ModalProvider from "./contexts/modalContext/modalContext";
import UserProvider from "./contexts/userContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ToastContainer />
    <UserProvider>
      <ModalProvider>
        <SentenceProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SentenceProvider>
      </ModalProvider>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
