const SkillCard = ({ title, content }) => {
  return (
    <div className="skill-card">
      <p>{title}</p>
      <hr className="break-line" />
      <p>{content}</p>
    </div>
  );
};

const skills = [
  {
    title: 'Front-end',
    content: 'HTML, CSS, JS (es6) React.js(Hooks, Redux), Webpack, babel',
  },
  {
    title: 'Back-end',
    content: 'Node js, Express, Mongo db, mongoose',
  },
  {
    title: 'Testting',
    content: 'Jest, Enzyme',
  },
  {
    title: 'Data Structures',
    content: 'Python',
  },
  {
    title: 'Currently Learning',
    content: 'GraphQL, Prisma',
  },
  {
    title: 'Extra Tools',
    content: 'Bear Notes, Adobe XD',
  },
];

export default function MySkills() {
  return (
    <div className="my-skills-section" id="skills-section">
      <p className="title-section">Skills</p>
      <hr className="break-line" />
      <div className="skills-container">
        {skills.map((skill, i) => (
          <SkillCard title={skill.title} content={skill.content} key={i} />
        ))}
      </div>
    </div>
  );
}
