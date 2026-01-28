import { useEffect, useState } from "react";
import "../styles/navbar.css";

const sections = ["about", "projects", "contact"];

export default function Navbar({ toggleTheme }) {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(id);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="navbar">
      <h3 className="nav-name">Zeba Puthawala</h3>

      {/* Desktop links */}
      <div className={`nav-links ${open ? "open" : ""}`}>
        {sections.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
        <button className="theme-btn" onClick={toggleTheme}>🌓</button>
      </div>

      {/* Hamburger */}
      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>
    </nav>
  );
}
