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
            If I could describe my self in one word, would be <b>passionate</b>.
            I love technology and I’m passionate about learning how things work
            and how to create things to provide elegant solutions. I like to
            read about programming languages, about new technologies coming up,
            listening to other developers talk about their experiences. When I
            solve a problem or create something, either through code or some
            other means,{' '}
            <b>
              I found a feeling of happiness and satisfaction that only helps me
              confirm why I love this so much.
            </b>
          </p>
          <p>
            Time ago, my way of thinking was that I will sleep when I’m dead,
            trying to do everything, learning everything. I forgot why I
            started, I forgot to have fun and enjoy what I was doing. Until I
            got burn. So I started to look for a better way of managing my life.{' '}
            <br />
            <br />I found <b>Minimalism and Essentialism</b>, these two though
            me how to live a meaningful life and focus on the important things.
            Currently, I’m working on improving my habits and my time
            management. Focusing on what really matters. I don't just apply
            these principles to my life, I realized that if I also apply them to
            my career, I could get better results.
          </p>
        </div>
      </div>
    </div>
  );
}
