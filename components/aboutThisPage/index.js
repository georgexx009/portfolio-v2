export default function AboutThisPage() {
  return (
    <section className="about-this-page-section">
      <p className="title">About my projects</p>
      <hr className="break-line" />
      <div className="text-container">
        <p>
          Currently, I'm still working on my projects and putting into practice
          new things that I'm learning.
          <b> At first my intention was just to learn and practice.</b> Now
          since I want to show what I'm doing I'm refactoring and cleaning my
          code to show it in my repositories. That is the reason why you may
          find some things that are incomplete.
        </p>
        <img
          className="page-structure-image"
          src="https://res.cloudinary.com/dtwkxgaag/image/upload/v1595986747/projects/my_stack_olcrpy.png"
        />
        <p>
          I have a portfolio made in React.js and Webpack, but since the client
          side was rendering the page it was really slow. So, I made this
          webpage with <b>React.js and Next.js to improve page load.</b>
        </p>
        <p>
          To style my projects, <b>I don't use any framework,</b> I just use
          SCSS. I found this way to keep practicing CSS really useful.
        </p>
        <p>
          I made a REST API web server to provide a back end to my projects. The
          server is made with <b>Node.js + Express.js.</b> Use the{' '}
          <b>Mongoose Object Modeling Tool</b> to model the data and connect to
          the database. The <b>mongo database</b> is stored in a cloud provided
          by mLab.
        </p>
        <p>
          For testing i use <b>Jest and Enzyme,</b> before I was using mocha and
          chai but for React, Jest seems to work better.
        </p>
      </div>
    </section>
  );
}
