export const SkillCard = ({ skill }) => {
  const lightColor = skill.color.hsl;
  const darkColor = `hsl(${skill.color.h}, ${skill.color.s + 20}%, ${skill.color.l - 10}%)`;
  return (
    skill && (
      <article
        className={`skill skill-${skill.color}`}
        style={{
          background: `linear-gradient(0deg, ${darkColor} 0%, ${lightColor} 100%)`,
        }}
      >
        <header>
          <h2>{skill.name}</h2>
        </header>
        <p className="skill-description">{skill.description}</p>
        <p>Nivel: {skill.level}</p>
        <p>Dias completados: {skill.level}</p>
        <p>Dificultad: {skill.difficulty}</p>
      </article>
    )
  );
};
