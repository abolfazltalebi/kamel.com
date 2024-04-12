import "./App.css";
import Header from "./component/Header/Header";
import Section1 from "./component/Section1/Section1";
import Partners from "./component/Partners/Partners";
import AboutMe from "./component/Aboutme/Aboutme";
import ServicesOur from "./component/ServicesOur/ServicesOur";
import HowToWork from "./component/howToWork/howToWork";
import ContactMe from "./component/ContactMe/ContactMe";
import Teams from "./component/Teams/Teams";
import Blogs from "./component/Blogs/Blogs";
import Consulting from "./component/Consulting/Consulting";
import Footer from "./component/Footer/Footer";
function App() {
  return (
    <div className="font-iran">
      <Header />
      <Section1 />
      <Partners />
      <AboutMe />
      <ServicesOur />
      <HowToWork />
      <ContactMe />
      <Teams />
      <Blogs />
      <Consulting />
      <Footer />
    </div>
  );
}

export default App;
