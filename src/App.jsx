import Home from "./page/Home"
import About from "./page/About";
import Navbar from "./Component/Navbar";
import Skills from "./page/Skills";
import Projects from "./page/Projects";
import Contact from "./page/Contact";
import Footer from "./Component/Footer";
import { useState } from "react";


export default function App(){
 const [active, setActive] = useState("Home");
return(
  <>
  <Navbar setActive={setActive} active={active} />
   {active === "Home" && <Home setActive={setActive} />}
  {active === "About" && <About setActive={setActive} />}
  {active === "Skills" && <Skills setActive={setActive} />}
  {active === "Projects" && <Projects setActive={setActive} />}
  {active === "Contact" && <Contact setActive={setActive} />}
  <Footer />

  </>
)
}