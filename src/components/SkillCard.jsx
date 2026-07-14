export const SkillCard = ({ skill }) => {
  return (
    skill &&
    <article className={`skill skill-${skill.color}`}>
      <header>
        <h2>{skill.name}</h2>
      </header>
      <p className="skill-description">{skill.description}</p>
      <p>Nivel: {skill.level}</p>
      <p>Dias completados: {skill.level}</p>
      <p>Dificultad: {skill.difficulty}</p>
    </article>
  );
};
