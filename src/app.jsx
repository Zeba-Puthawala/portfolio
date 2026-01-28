import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./app.css";

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Navbar toggleTheme={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      } />

      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
