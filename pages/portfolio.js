import Head from 'next/head';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { projectsData } from '../constants/projectsData';
import ProjectCard from '../components/ProjectCard';

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
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
        <div className="portfolio-section">
          <div className="card-container">
            {projectsData.map((data, i) => (
              <ProjectCard
                urlImg={data.urlImg}
                title={data.title}
                summary={data.summary}
                github={data.github}
                webPage={data.webPage}
                key={i}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
