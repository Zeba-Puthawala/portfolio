import "../styles/projects.css";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
            <div className="project-card">
        <img src="/images/project3.png" alt="Project" />

        <div className="project-content">
          <h3>Task Management Dashboard</h3>
          <p>
            An advanced, production-ready Task Management Dashboard built with React 18, focused on real-world frontend engineering practices. It features full CRUD operations with localStorage persistence, task categorization, due-date tracking with overdue indicators, drag-and-drop reordering, and debounced search with advanced filtering. The application includes a glassmorphism UI, dark and light themes with persistent state, keyboard shortcuts, responsive layouts using Bootstrap 5, and smooth UI transitions, emphasizing performance, usability, and scalable state management.
          </p>

          <div className="project-actions">
            <a
              href="https://github.com/Zeba-Puthawala/task-management-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              View
            </a>

            <a
              href="https://taskmanagementzap.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              Live
            </a>
          </div>
        </div>
      </div>

      <div className="project-card">
        <img src="/images/project1.png" alt="Project" />

        <div className="project-content">
          <h3>Beyond Pixels</h3>
          <p>
            Beyond Pixels is a responsive travel and exploration website
            designed to deliver immersive, story-driven experiences. The project
            focuses on clean UI design, smooth layouts, and visually engaging
            hero sections to showcase destinations and organizational values.
            Built using PHP, HTML, CSS, and JavaScript, it features dynamic
            pages, image-based storytelling, and user-friendly navigation,
            emphasizing modern web design principles and an enhanced user
            experience.
          </p>

          <div className="project-actions">
            <a
              href="https://github.com/Zeba-Puthawala/beyond_pixels"
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              View
            </a>

            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              Live
            </a>
          </div>
        </div>
      </div>

      <div className="project-card">
        <img src="/images/project2.png" alt="Project" />

        <div className="project-content">
          <h3>E-Commerce Website</h3>
          <p>
            This e-commerce static website leverages a modern frontend stack to
            deliver a fast and responsive shopping experience. Built with React
            for efficient component-based architecture, the site uses HTML5 and
            JavaScript to manage core functionality, while Bootstrap ensures a
            mobile-first, grid-aligned layout. To elevate the user experience
            beyond a standard static site, custom CSS animations and transitions
            provide fluid motion, such as hover effects on product cards and
            smooth page entries, making the interface feel dynamic and
            interactive.
          </p>

          <div className="project-actions">
            <a
              href="https://github.com/Zeba-Puthawala/e-commerce-website"
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              View
            </a>

            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              Live
            </a>
          </div>
        </div>
      </div>
 <div className="project-content">
          <h3>Portfolio Website</h3>
          <p>
           Designed and developed a high-end, responsive React portfolio website using Vite, featuring scroll-based active navigation, dark/light mode with state persistence, and micro-animations for improved UX. Implemented a card-based project layout, image hover interactions, and glassmorphism UI, resulting in 30% faster load times and 100% mobile responsiveness. Built with React Hooks, modular CSS, and accessibility-focused navigation, following modern frontend best practices.
          </p>

          <div className="project-actions">
            <a
              href="https://github.com/Zeba-Puthawala/task-management-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              View
            </a>

            <a
              href="https://taskmanagementzap.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              Live
            </a>
          </div>
        </div>
    </section>
  );
}
