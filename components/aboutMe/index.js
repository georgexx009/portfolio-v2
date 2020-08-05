export default function AboutMe({ aboutMeData }) {
  const {
    contentFormatHtml = 'default-text',
    title = 'default title',
  } = aboutMeData;
  return (
    <section id="about-me-section">
      <p className="title-section">{title}</p>
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
        <div
          className="about-me-text"
          dangerouslySetInnerHTML={{ __html: contentFormatHtml }}
        />
      </div>
    </section>
  );
}
