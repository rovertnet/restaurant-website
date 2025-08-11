import { Route, Routes } from "react-router-dom";
import Footer from "./body/composants/Footer.jsx";
import NavBar from "./head/NavBar.jsx"
import TeamPage from "./body/autres/TeamPage.jsx";
import HomePage from "./body/autres/HomePage.jsx";
import Contact from "./body/autres/Contact.jsx";
import About from "./body/autres/About.jsx";
import CartPage from "./body/autres/CartPage.jsx";
import CheckoutPage from "./body/autres/CheckoutPage.jsx";
import Menu from "./body/autres/MenuPage.jsx";
import WishlistPage from "./body/autres/WishlistPage.jsx";
import MonCompte from "./body/autres/MonCompte.jsx";
import Login from "./body/autres/Login.jsx";
import SignUp from "./body/autres/SignUp.jsx";
import Preloader from "./body/composants/Preloader.jsx";
import CategorieDetail from "./body/composants/CategorieDetail.jsx";

function App() {

  return (
    <>
      <Preloader /> {/* La barre de navigation visible partout */}
      <NavBar /> {/* La barre de navigation visible partout */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menupage" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/compte" element={<MonCompte />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/categorie/:id" element={<CategorieDetail />} />
        {/* Ajoutez d'autres routes ici si nécessaire */}
        <Route
          path="*"
          element={
            <h1>
              Page Not Found 404
              <br />
              <span className="text-red-500">Cette page n'existe pas</span>
              <br />
              <span className="text-blue-500">Veuillez vérifier l'URL</span>
            </h1>
          }
        />
      </Routes>
      <Footer /> {/* Le footer visible partout */}
    </>
  );
}

export default App
