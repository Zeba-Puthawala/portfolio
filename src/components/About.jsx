import "../styles/about.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>

      <p className="about-intro">
        I’m <span className="highlight">Zeba Puthawala</span>, a Cloud and
        Application Development student at Gujarat University with a strong
        interest in frontend development and interface design.
      </p>

      <p className="about-text">
        I enjoy building clean, responsive web interfaces that balance
        performance with thoughtful design. My work focuses on translating ideas
        into elegant digital experiences using modern web technologies.
      </p>

      <div className="about-grid">
        {/* Education */}
        <div className="about-card">
          <h3>Education</h3>
          <p>
            <strong>B.Sc. Cloud & Application Development</strong>
            <br />
            Gujarat University
            <br />
            <span className="muted">2023 – Present</span>
            <br />
            <span className="muted">Current GPA: 8.5/10</span>         
          </p>
        </div>

        {/* Learning */}
        <div className="about-card">
          <h3>Currently Learning</h3>
          <ul>
            <li>UI/UX Design Principles</li>
            <li>Responsive Layouts & Micro-interactions</li>
            <li>AWS & Azure Cloud Concepts & Deployment</li>
            <li>Advanced React & Component Architecture</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
