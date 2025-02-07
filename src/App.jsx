import Download from "./components/Download";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Hero
        title="A Simple Bookmark Manager"
        subtitle="A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites
        load instantly. Try it for free."
      ></Hero>
      <Features></Features>
      <Download></Download>
      <Faq></Faq>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </>
  );
}

export default App;
