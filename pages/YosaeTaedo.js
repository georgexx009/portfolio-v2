import Head from 'next/head';
import ReactPlayer from 'react-player';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default function Yosae() {
  return (
    <>
      <Head>
        <title>Experience at Yosae Taedo</title>
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
      <div className="yosae-section">
        <p className="title-section">Working at Yosae Taedo</p>
        <hr className="break-line" />
        <div className="video-container">
          <ReactPlayer
            controls
            width="100%"
            height="100%"
            url="https://res.cloudinary.com/dtwkxgaag/video/upload/w_900,h_500/v1593650944/projects/yosae2_gp0del.mp4"
          />
        </div>
        <div className="text-section">
          <p>
            My career at Yosae Taedo started in the middle of University and it
            was my first formal job. I was hired to{' '}
            <b>
              develop a training system to perform multiple pre-established
              metric tests to measure and improve athletes' skills through
              electronic devices and an application
            </b>
            .
          </p>
          <p>
            The project involves electronics, mechanical modeling, embedded
            system programming, and mobile / desktop applications. A lot of
            research, testing, flaws, and more testing were required, until we
            found the best option for each part of the entire project.
          </p>
          <p>
            As a product lead, I was in charge of{' '}
            <b>ensuring that the product followed customer expectations</b> and
            coordinating teams from electronics, software and mechanical design.
            As an engineer I developed the modules for{' '}
            <b>
              wireless communication between the electronic devices and the
              application,
            </b>{' '}
            this involved the use of Python and JavaScript. Then I moved to
            application development, started{' '}
            <b>
              coding in React.js to establish the behavior of the various metric
              tests and make sure the wireless communication was reliable;
            </b>{' '}
            so that later another team adapts it to React Native.
          </p>
          <p>
            As I was at the beginning of the project, I developed the first
            version of the main electronic prototype. I established the wireless
            communication protocol between electronic devices and the
            application. The team began to grow, developers and mechatronics
            joined the team, so I had the responsibility to maintain the focus
            of the project and coordinate the teams because in the end, the
            project involves the union of different engineering areas.
          </p>
          <p>
            <b>Here I discovered that my true passion was programming.</b>
          </p>
        </div>
        <div className="footer-images">
          <img
            className="app-view-image"
            src={
              'https://res.cloudinary.com/dtwkxgaag/image/upload/v1593793092/projects/App_view_1_tstalh.png'
            }
          />
          <img
            className="app-view-image"
            src={
              'https://res.cloudinary.com/dtwkxgaag/image/upload/v1593793091/projects/app_view_2_ehcdur.png'
            }
          />
        </div>
        <p className="footer-images-about">Examples from the application</p>
        <hr className="break-line" />
        <p className="footer-privacy">
          I am only able to show few information about the project for privacy
          reasons
        </p>
      </div>
      <Footer />
    </>
  );
}
