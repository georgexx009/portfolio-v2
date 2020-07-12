export default function AboutMe() {
  return (
    <div id="about-me-section">
      <p className="title-section">About me</p>
      <hr className="break-line" />

      <div className="about-me-container">
        <img
          id="profile-photo"
          src="https://res.cloudinary.com/dtwkxgaag/image/upload/v1594076938/me_profile_uof4pk.png"
        />

        <p className="profile-text">
          I’m a 24 year old mechatronic engineer by title and{' '}
          <b>Full Stack Developer</b> by working career. Despite my title, most
          of my working career is as a Web Developer.
        </p>
        <hr className="break-line" />
        <div className="about-me-text">
          <p>
            Time ago, my way of thinking was that I will sleep when I’m dead,
            trying to do everything, learning everything. I forgot why I
            started, I forgot to have fun and enjoy what I’m doing. Until I got
            burn. So I started to looking for a better way of manage my life. I
            found
            <b>Minimalism and Essentialism</b>, these two tough me how to leave
            a meaningful life and focus on the important things. Currently,{' '}
            <b>
              I’m working on improve my habits and my time management. Focusing
              in what really matters.
            </b>{' '}
          </p>
          <p>
            I don't just apply these principles to my life, I realized that if I
            also apply it to my programmer career, I could get better results.{' '}
          </p>
          <p>
            <b>Currently, I focus on learning three things.</b>
            <ul>
              <li>Learning one new technology for web development</li>
              <li>Data Structures and Algorithms</li>
              <li>Develop a personal project</li>
            </ul>
          </p>
          <p>
            I consider important to learn about Data Structures and Algorithms
            for understanding <b>how programming languages work,</b> it gives
            you a different perspective of situations. Having a project where I
            could keep practicing what I’m learning make me go out of my comfort
            zone and make me improve even more.
          </p>
        </div>
        <div className="links-container">
          <a href="#skills-section">My skills</a>
          <a
            onClick={() => {
              history.push('/portfolio');
              window.scrollTo(0, 0);
            }}
          >
            Portfolio
          </a>
          <a
            onClick={() => {
              history.push('/MyNotes');
              window.scrollTo(0, 0);
            }}
          >
            Notes
          </a>
        </div>
      </div>
    </div>
  );
}
