import { Route, Router, Routes } from "react-router-dom";
import Footer from "./body/composants/Footer.jsx";
import NavBar from "./head/NavBar.jsx"
import TeamPage from "./body/autres/TeamPage.jsx";
import HomePage from "./body/autres/HomePage.jsx";
import Contact from "./body/autres/Contact.jsx";
import About from "./body/autres/About.jsx";
import Menu from "./body/autres/Menu.jsx";


function App() {

  return (
    <>
        <NavBar /> {/* La barre de navigation visible partout */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
        <Footer /> {/* Le footer visible partout */}
    </>
  );
}

export default App
