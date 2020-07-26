export default function Footer() {
  return (
    <footer className="main-footer">
      <hr className="break-line" />
      <div className="footer-container">
        <p>Emmanuel Galindo</p>
        <img src="https://res.cloudinary.com/dtwkxgaag/image/upload/w_80,h_80/v1593972690/logo_icon_tiluaj.png" />
        <div className="links-icons">
          <i
            onClick={() => window.open('https://twitter.com/george00920')}
            className="fab fa-twitter"
          ></i>
          <i
            onClick={() => window.open('https://github.com/georgexx009')}
            className="fab fa-github"
          ></i>
        </div>
      </div>
    </footer>
  );
}
