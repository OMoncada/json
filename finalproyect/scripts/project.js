/* Final Project */

/* Declare and initialize global variables */
const exerciseElement = document.querySelector("#exercise");
let exerciseList = [];

/* async displayExercise Function */
const displayExercise = (exercise) => {
  exerciseElement.innerHTML = ''; // Clear the existing content

  exercise.forEach((exercise) => {
    let article = document.createElement("article");
    article.classList.add("exercise-item"); // Add a class for styling
    let h3 = document.createElement("h3");
    h3.textContent = exercise.exerciseName;
    let img = document.createElement("img");
    img.setAttribute("src", exercise.imageUrl);
    img.setAttribute("alt", exercise.exerciseName);
    let description = document.createElement("p");
    description.textContent = exercise.description;

    article.appendChild(h3);
    article.appendChild(img);
    article.appendChild(description);
    exerciseElement.appendChild(article);
  });
};

/* async getExercise Function using fetch() */
const getExercise = async () => {
  const response = await fetch("excercises.json"); // Cambia la URL a la ubicación correcta de tu archivo JSON
  exerciseList = await response.json();
  displayExercise(exerciseList);
};

/* reset Function */
const reset = () => {
  exerciseElement.innerHTML = "";
};

/* sortBy Function */
const filterExercises = (category) => {
  reset();
  const filteredExercises = exerciseList.filter((exercise) =>
    exercise.location.includes(category)
  );
  displayExercise(filteredExercises);
};

getExercise();

/* Event Listeners for the filter button */
document.getElementById("button").addEventListener("change", (event) => {
  const selectedCategory = event.target.value;
  filterExercises(selectedCategory);
});
