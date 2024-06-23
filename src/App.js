import About from "./component/About";
// import Contact from "./component/Contact";
// import Footer from "./component/Footer";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Project from "./component/Project";
import Services from "./component/Services";
import Skill from "./component/Skill";
// import Testimonials from "./component/Testimonials";
import "./App.css"

function App() {
  return (
    <>
     <Navbar />
      <Header/>
     <About/>
     <Services />
     <Skill />
     <Project />
     {/* <Testimonials /> */}
     {/* <Contact /> */}
     {/* <Footer />  */}
    </>
  );
}

export default App;
