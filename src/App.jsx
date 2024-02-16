import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactForm from "./components/ContactUs/ContactForm";
import VisitUs from "./components/ContactUs/VisitUs";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Luxurious from "./components/Luxurious/Luxurious";
import SubFooter from "./components/SubFooter/SubFooter";

function App() {
  return (
    <>
      <Home />
      <AboutUs />
      <Luxurious />
      <div className="contactUs">
        <VisitUs />
        <ContactForm />
      </div>
      <div className="footerSection">
        <SubFooter />
        <Footer />
      </div>
    </>
  );
}

export default App;
