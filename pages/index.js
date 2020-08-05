import Head from 'next/head';

// components
import Navbar from '../components/navbar';
import Footer from '../components/footer';

// sections
import LandingPage from '../components/LandingPage';
import AboutMe from '../components/aboutMe';
import MySkills from '../components/mySkills';
import AboutThisPage from '../components/aboutThisPage';

// markdown files content
import getContent from '../lib/getContent';

export default function Home({ aboutMeData, aboutThisPage }) {
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
        <LandingPage />
        <AboutMe aboutMeData={aboutMeData} />
        <MySkills />
        <AboutThisPage aboutThisPage={aboutThisPage} />
        <div className="background-image-container">
          <img
            className="background-image"
            src="https://res.cloudinary.com/dtwkxgaag/image/upload/v1593972690/logo_icon_tiluaj.png"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const aboutMeData = await getContent('aboutMe');
  const aboutThisPage = await getContent('aboutThisPage');

  return {
    props: {
      aboutMeData,
      aboutThisPage,
    },
  };
}
