import { useState } from "react";
import "./App.css";
import { SkillCard } from "./components/SkillCard.jsx";




function App() {
  const [skills, setSkill] = useState([{
    name: "Disciplina 2",
    description:
      "Descripción de la disciplina, podria ser mitivaciones que lo empujan a realizarlo dia tras dia",
    level: 5,
    difficulty: "Media",
  }]);

  
  return (
    <>
      <section>
        <SkillCard skill = {skills[0]}/>
      </section>
      <article className="skill-card">
        <header>
          <h2>Carta de disiplina</h2>
        </header>
        <p>
          Descripción de la disciplina, podria ser mitivaciones que lo empujan a
          realizarlo dia tras dia
        </p>
        <p>Nivel: 5</p>
        <p>Dificultad: Media</p>
        <footer></footer>
      </article>
    </>
  );
}

export default App;
