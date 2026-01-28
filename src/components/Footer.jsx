import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="footer-name">Zeba Puthawala</span>
      </p>
    </footer>
  );
}
