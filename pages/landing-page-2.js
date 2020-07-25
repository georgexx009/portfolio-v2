import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import TypingEffect from '../components/TypingEffect';
import { useState, useEffect } from 'react';

export default function landingPage2() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, []);

  return (
    <div className="global-container">
      <Head>
        <title>George Portfolio</title>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dtwkxgaag/image/upload/v1593966841/georgeLogo_dtcgvw.png"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
          integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V"
          crossOrigin="anonymous"
        />
      </Head>
      <Navbar />
      <main>
        <div id="landing-page-v2">
          {/* <p className="who-am-i">
            Hello There!
            <br /> <br />
            I’m <b>Emmanuel</b>. I’m a mechatronic engineer by title and{' '}
            <b>Full Stack Developer</b> by working career.
          </p> */}
          {/* <div className="logo-image">
            <img src="https://res.cloudinary.com/dtwkxgaag/image/upload/v1595284773/logo_black_ttawt2.png" />
          </div> */}
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
              <a href="#skills-section">My skills</a>
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
