export const SkillCard = ({ skill }) => {
  console.log(skill)
  return (
    skill &&
    <article className="skill-card">
      <header>
        <h2>{skill.name}</h2>
      </header>
      <p>{skill.description}</p>
      <p>Nivel: {skill.level}</p>
      <p>Dificultad: {skill.difficulty}</p>
    </article>
  );
};
