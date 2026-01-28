import "../styles/sections.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>

      <p>Interested in working together or just want to say hello?</p>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=zebaputhawala11@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Zeba,%0A%0AI%20visited%20your%20portfolio..."
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn"
      >
        Find Me Here!
      </a>
    </section>
  );
}
