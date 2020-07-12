import Button from '../button';

const githubBtnStyle = {
  backgroundColor: 'white',
  border: '1px solid black',
  borderRadious: '10px',
  color: 'black',
};

const ProjectCard = ({ title, summary, urlImg, github, webPage }) => {
  return (
    <div className="project-card">
      <img className="project-image" src={urlImg} />
      <p className="project-title">{title}</p>
      <p className="project-summary">{summary}</p>
      <div className="footer">
        {github && (
          <Button
            style={githubBtnStyle}
            handleClick={() => window.open(github)}
            lbl="Github"
          />
        )}
        {webPage && (
          <Button handleClick={() => window.open(webPage)} lbl="web page" />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
