// Dummy exercise data
const exerciseData = {
  "Push Ups": { type: "Strength", muscle: "Chest, Triceps, Shoulders", level: "Beginner" },
  "Squats": { type: "Strength", muscle: "Legs, Glutes", level: "Beginner" },
  "Plank": { type: "Core", muscle: "Abs, Back", level: "Intermediate" },
  "Burpees": { type: "Full Body", muscle: "Chest, Legs, Arms", level: "Advanced" },
  "Lunges": { type: "Strength", muscle: "Legs, Glutes", level: "Beginner" },
  "Pull Ups": { type: "Strength", muscle: "Back, Biceps", level: "Intermediate" },
  "Jumping Jacks": { type: "Cardio", muscle: "Full Body", level: "Beginner" },
  "Deadlift": { type: "Strength", muscle: "Back, Legs", level: "Advanced" },
  "Bench Press": { type: "Strength", muscle: "Chest, Triceps", level: "Intermediate" },
  "Mountain Climbers": { type: "Cardio/Core", muscle: "Abs, Legs", level: "Intermediate" }
};

// Default list
const defaultExercises = Object.keys(exerciseData);

// Render card
function renderExerciseCard(name, data) {
  return `
    <div class="exercise-card">
      <h3>💪 ${name}</h3>
      <p>🏷 Type: ${data.type}</p>
      <p>🦵 Muscles: ${data.muscle}</p>
      <p>⭐ Level: ${data.level}</p>
    </div>
  `;
}

// Load default exercises
function loadDefaultExercises() {
  const container = document.getElementById("defaultExercises");
  container.innerHTML = "";
  for (const ex of defaultExercises) {
    const data = exerciseData[ex];
    container.innerHTML += renderExerciseCard(ex, data);
  }
}

// Search exercise
function getExercise() {
  const ex = document.getElementById("exerciseInput").value.trim();
  const resultDiv = document.getElementById("exerciseResult");

  if (ex === "") {
    resultDiv.innerHTML = "⚠ Please enter an exercise!";
    return;
  }

  const data = exerciseData[ex];
  if (!data) {
    resultDiv.innerHTML = "❌ Exercise not found in offline data!";
  } else {
    resultDiv.innerHTML = renderExerciseCard(ex, data);
  }
}

// Run on load
window.onload = loadDefaultExercises;
