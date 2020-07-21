export default function AboutThisPage() {
  return (
    <div className="about-this-page-section">
      <p className="title">About this page</p>
      <hr className="break-line" />
      <div className="text-container">
        <p>
          Today, I’m still working on this page and on my other projects.{' '}
          <b>At first my intention was just to learn and practice.</b> Now since
          I want to show what I'm doing I'm refactoring and cleaning my code to
          show it in my repositories. That's the reason why you might find
          something here from another project, but I'm going to clean it up.
        </p>
        <img
          className="page-structure-image"
          src="https://res.cloudinary.com/dtwkxgaag/image/upload/v1595287139/projects/web_page_structure_ngo3tx.png"
        />
        <p>
          I have a portfolio made in React.js, but since the client side was
          rendering the page, it was really slow. So, this is page is made with{' '}
          <b>React.js and Next.js.</b> I{' '}
          <b>don’t use any framework for styling,</b> I only use SCSS.
        </p>
        <p>
          The server is made with <b>Node.js + Express.js.</b> Use the{' '}
          <b>Mongoose</b>
          Object Modeling Tool to model the data and connect to the database.
          The <b>mongo database</b> is stored in a cloud provided by mLab.
        </p>
        <p>
          For testing i use <b>Jest and Enzyme,</b> before I was using mocha and
          chai but for React, Jest seems to work better.
        </p>
        <p>
          <b>I will never stop learning and practicing.</b>
        </p>
      </div>
    </div>
  );
}
