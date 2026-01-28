import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Frontend
          <br />
          <span>Developer</span>
        </h1>

        <p>
          HTML • CSS • JavaScript • React.js • UI/UX • MySql   
          </p>

        <a href="/resume.pdf" className="hero-btn">
          Download Resume
        </a>
      </div>

      <div className="hero-right">
        <img src="/images/hero.jpg" alt="Hero visual" />
      </div>
    </section>
  );
}
