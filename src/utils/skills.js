export function getSkillHistory(history, skillId) {
  let dates = [];

  for (const day of history) {
    if (day.completedSkills.includes(skillId)) {
      dates.push(day.date);
    }
  }
  return dates;
}

export function getSkillStreak(history, skillId) {
  let streak = 0;

  for (let i = history.length - 1; i >= 0; i--) {
    const day = history[i];

    if (day.completedSkills.includes(skillId)) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}
