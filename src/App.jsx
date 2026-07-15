import { useState } from "react";
import "./App.css";
import { SkillCard } from "./components/SkillCard.jsx";

function App() {
  const [skills, setSkill] = useState([
    {
      name: "Disciplina 1",
      color: "naranja",
      description:
        "Descripción de la disciplina, podria ser mitivaciones que lo empujan a realizarlo dia tras dia",
      level: 5,
      r: 5,
      difficulty: "Media",
    },
    {
      name: "Disciplina 2",
      color: "defecto",
      description:
        "Descripción de la disciplina, podria ser mitivaciones que lo empujan a realizarlo dia tras dia",
      level: 5,
      difficulty: "Media",
    },
    {
      name: "Disciplina 3",
      color: {
        hsl: "hsl(236, 80%, 22%)",
        h: 236,
        s: 80,
        l: 22,
      },
      description:
        "Descripción de la disciplina, podria ser mitivaciones que lo empujan a realizarlo dia tras dia",
      level: 5,
      difficulty: "Media",
    },
    {
      name: "Disciplina 4",
      color: {
        hsl: "hsl(112, 80%, 22%)",
        h: 112,
        s: 80,
        l: 22,
      },
      description:
        "Descripción de la disciplina, podria ser mitivaciones que lo empujan a realizarlo dia tras dia",
      level: 5,
      difficulty: "Media",
    },
  ]);

  return (
    <>
      <h1>Discipline Farming RPG</h1>
      <section className="skills-container">
        <SkillCard skill={skills[0]} />
        <SkillCard skill={skills[1]} />
        <SkillCard skill={skills[2]} />
        <SkillCard skill={skills[3]} />
      </section>
    </>
  );
}

export default App;
