import Head from 'next/head';
import s from '../styles/components/landingPage.module.scss';
import Navbar from '../components/navbar';
import AboutMe from '../components/aboutMe';
import MySkills from '../components/mySkills';
import AboutThisPage from '../components/aboutThisPage';
import Footer from '../components/footer';

export default function Home() {
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
        <div id="landing-page">
          <p className={s.whoAmI}>
            Hello There!
            <br /> <br />
            I’m <b>Emmanuel</b>. I’m a mechatronic engineer by title and{' '}
            <b>Full Stack Developer</b> by working career.
          </p>
          <img
            className={s.logoImage}
            src="https://res.cloudinary.com/dtwkxgaag/image/upload/v1595284773/logo_black_ttawt2.png"
          />
          <div className="scroll-down-pointer">
            <span>About me</span>
            <a href="#about-me-section">
              <i className="fas fa-chevron-down"></i>
            </a>
          </div>
        </div>
        <AboutMe />
        <MySkills />
        <AboutThisPage />
      </main>
      <Footer />
    </div>
  );
}
