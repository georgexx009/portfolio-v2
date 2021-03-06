import { useState, useEffect } from 'react';
import Link from 'next/link';

const LandingPage = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, []);

  return (
    <section id="landing-page-v2">
      <div className="who-i-am">
        <div className="wrapper">
          <div
            className={
              show
                ? 'none-border typing-demo length-one'
                : 'typing-demo length-one'
            }
          >
            Hello There! I am Emmanuel
          </div>
        </div>
        {show && (
          <div className="wrapper">
            <div className="typing-demo length-two">
              I am a Full Stack Developer
            </div>
          </div>
        )}
      </div>

      <div className="links-section">
        <div className="links-container">
          <a
            href="#"
            onClick={() =>
              window.open(
                'https://res.cloudinary.com/dtwkxgaag/image/upload/v1599764919/Emmanuel_Galindo_CV_pou0a7.pdf'
              )
            }
          >
            My Resume
          </a>
          <a href="#about-me-section">About me</a>
          <Link href="/projects">
            <a
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Portfolio
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
