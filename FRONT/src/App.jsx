import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Portrait from "./components/Portrait/Portrait";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills"
import Portfolio from "./components/Portfolio/Portfolio"
import Contact from "./components/Contact/Contact"
import "./App.module.css"

function App() {
  return (
    <div className={`d-flex flex-column bg-main mh-100 w-100`}>
      <Header/>
      <Intro></Intro>
      <Portrait></Portrait>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer />
    </div>
  );
}
export default App;
