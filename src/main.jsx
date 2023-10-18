import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import HotelsProvider from "./context/HotelsProvider.jsx";
import axios from "axios";

axios.defaults.baseURL = "https://fake-data-eight.vercel.app";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <HotelsProvider>
        <App />
      </HotelsProvider>
    </React.StrictMode>
  </BrowserRouter>
);
