import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { WishlistProvider } from "./context/WishlistContext.jsx";
import Preloader from "./body/composants/Preloader.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <WishlistProvider>
        <Preloader>
          <App /> {/* ou ton composant d'accueil */}
        </Preloader>
      </WishlistProvider>
    </BrowserRouter>
  </React.StrictMode>
);
