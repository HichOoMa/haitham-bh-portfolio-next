import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";

// import './footer.scss'
const Footer = () => (
  <footer className="footer">
    <div className="footer-upper">
      <div className="footer-info">
        <h3>HAITHAM BENHAMMOUDA</h3>
        <p>A Full Stack Web developer focused on building simple and complexed web applications on demand</p>
      </div>
      <div className="footer-social">
        <h3 className="footer-social-title">SOCIAL</h3>
        <div className="footer-social-items">
          <a href="https://www.linkedin.com/in/haitham-bh/">
            <LinkedIn className="footer-social-item" />
          </a>
          <a href="https://www.facebook.com/haitham.benhamouda">
            <Facebook className="footer-social-item" />
          </a>
          <a href="https://github.com/HaithamBH">
            <GitHub className="footer-social-item" />
          </a>
          <a href="https://www.instagram.com/haitham.rar/">
            <Instagram className="footer-social-item" />
          </a>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
    © Copyright 2023, Made by <span>Haitham Benhammouda</span>
    </div>
  </footer>
)
export default Footer;