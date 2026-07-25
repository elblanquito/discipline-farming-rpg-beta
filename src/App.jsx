import { useState } from "react";
import "./App.css";
import { SkillCard } from "./components/SkillCard.jsx";
import { skillsData } from "./database/data.js";

function App() {
  const [skills] = useState(skillsData);
  const date = new Date(2026, 6);
  // mes:
  //console.log(date.toLocaleDateString("es-ES", { month: "long", year: "numeric" }));

  // Porque el día 0 del siguiente mes es el último día del mes actual.
  const days = new Date(2026, 7, 0).getDate();
  console.log("cuantos dias tiene el mes:", days);

  //  0 Domingo
  //  1 Lunes
  //  2 Martes
  //  3 Miércoles
  const firstDay = new Date(2026, 6, 1).getDay();
  console.log(firstDay);
  const weeksNames = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const weeks = [
    [null, null, null, 1, 2, 3, 4],
    [5, 6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30, 31, null],
  ];

  const Day = ({ day }) => {
    return <button className="calendary-day">{day && day}</button>;
  };

  return (
    <>
      <h1>Discipline Farming RPG</h1>
      <div className="calendary">
        <div className="calendary-week-name-cont">
          {weeksNames.map((weekName) => (
            <>
              <div className="calendary-week-name">{weekName}</div>
              <div className="calendary-week-name-small">{weekName.split("",2)}</div>
            </>
          ))}
        </div>
        <div className="calendary-week-cont">
          {weeks.map((week) => (
            <div className="calendary-week">
              {week.map((day) => (
                <Day day={day} />
              ))}
            </div>
          ))}
        </div>
      </div>

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
