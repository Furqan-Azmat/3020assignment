// let currentQuestionIndex = 0;
// let timer;
// let timeRemaining = 10;
// let results = [];

// const questionElement = document.getElementById("question");
// const answerInput = document.getElementById("answer-input");
// const timerElement = document.getElementById("timer");
// const resultsContainer = document.getElementById("results-container");
// const resultsList = document.getElementById("results-list");
// const quizContainer = document.getElementById("quiz-container");


// function loadFlashcards() {
//     const storedFlashcards = localStorage.getItem('flashcards');
//     return storedFlashcards ? JSON.parse(storedFlashcards) : [];
// }
// function startQuiz() {
//     displayQuestion();
//     answerInput.addEventListener("keypress", function (event) {
//         if (event.key === "Enter") {
//             checkAnswer();
//         }
//     });
// }

// function displayQuestion() {
//     if (currentQuestionIndex < flashcards.length) {
//         const currentCard = flashcards[currentQuestionIndex];
//         questionElement.textContent = currentCard.question;
//         answerInput.value = "";
//         timeRemaining = 10;
//         timerElement.textContent = `Time Remaining: ${timeRemaining} seconds`;
//         timer = setInterval(countdown, 1000);
//     } else {
//         finishQuiz();
//     }
// }

// function countdown() {
//     timeRemaining--;
//     timerElement.textContent = `Time Remaining: ${timeRemaining} seconds`;
//     if (timeRemaining <= 0) {
//         clearInterval(timer);
//         recordAnswer(false); // Automatically incorrect if time runs out
//         moveToNextQuestion();
//     }
// }

// function checkAnswer() {
//     clearInterval(timer);
//     const userAnswer = answerInput.value.trim().toLowerCase();
//     const correctAnswer = flashcards[currentQuestionIndex].answer.toLowerCase();
//     recordAnswer(userAnswer === correctAnswer);
//     moveToNextQuestion();
// }

// function recordAnswer(isCorrect) {
//     const currentCard = flashcards[currentQuestionIndex];
//     results.push({
//         question: currentCard.question,
//         correctAnswer: currentCard.answer,
//         userAnswer: isCorrect ? currentCard.answer : answerInput.value.trim(),
//         isCorrect,
//     });
// }

// function moveToNextQuestion() {
//     currentQuestionIndex++;
//     displayQuestion();
// }

// function finishQuiz() {
//     quizContainer.style.display = "none";
//     resultsContainer.style.display = "block";
//     results.forEach((result) => {
//         const resultItem = document.createElement("li");
//         resultItem.textContent = `${result.question} - Your Answer: ${result.userAnswer} - ${result.isCorrect ? "Correct" : "Incorrect"}`;
//         resultsList.appendChild(resultItem);
//     });
// }

// function exitTest() {
//     if (confirm("Are you sure you want to exit the test?")) {
//         window.location.href = "index.html";
//     }
// }

// function goToMainMenu() {
//     window.location.href = "index.html";
// }

// // Start the quiz when the page loads
// document.addEventListener("DOMContentLoaded", startQuiz);




// let currentQuestionIndex = 0;
// let timer;
// let timeRemaining = 10;
// let results = [];

// // Function to load flashcards from localStorage
// function loadFlashcards() {
//     const storedFlashcards = localStorage.getItem('flashcards');
//     return storedFlashcards ? JSON.parse(storedFlashcards) : [];
// }

// const questionElement = document.getElementById("question");
// const answerInput = document.getElementById("answer-input");
// const timerElement = document.getElementById("timer");
// const resultsContainer = document.getElementById("results-container");
// const resultsList = document.getElementById("results-list");
// const quizContainer = document.getElementById("quiz-container");

// function startQuiz() {
//     displayQuestion();
//     answerInput.addEventListener("keypress", function (event) {
//         if (event.key === "Enter") {
//             checkAnswer();
//         }
//     });
// }

// function displayQuestion() {
//     if (currentQuestionIndex < flashcards.length) {
//         const currentCard = flashcards[currentQuestionIndex];
//         questionElement.textContent = currentCard.question;
//         answerInput.value = "";
//         timeRemaining = 10;
//         timerElement.textContent = `Time Remaining: ${timeRemaining} seconds`;
//         timer = setInterval(countdown, 1000);
//     } else {
//         finishQuiz();
//     }
// }

// function countdown() {
//     timeRemaining--;
//     timerElement.textContent = `Time Remaining: ${timeRemaining} seconds`;
//     if (timeRemaining <= 0) {
//         clearInterval(timer);
//         recordAnswer(false); // Automatically incorrect if time runs out
//         moveToNextQuestion();
//     }
// }

// function checkAnswer() {
//     clearInterval(timer);
//     const userAnswer = answerInput.value.trim().toLowerCase();
//     const correctAnswer = flashcards[currentQuestionIndex].answer.toLowerCase();
//     recordAnswer(userAnswer === correctAnswer);
//     moveToNextQuestion();
// }

// function recordAnswer(isCorrect) {
//     const currentCard = flashcards[currentQuestionIndex];
//     results.push({
//         question: currentCard.question,
//         correctAnswer: currentCard.answer,
//         userAnswer: isCorrect ? currentCard.answer : answerInput.value.trim(),
//         isCorrect,
//     });
// }

// function moveToNextQuestion() {
//     currentQuestionIndex++;
//     displayQuestion();
// }

// function finishQuiz() {
//     quizContainer.style.display = "none";
//     resultsContainer.style.display = "block";
//     results.forEach((result) => {
//         const resultItem = document.createElement("li");
//         resultItem.textContent = `${result.question} - Your Answer: ${result.userAnswer} - ${result.isCorrect ? "Correct" : "Incorrect"}`;
//         resultsList.appendChild(resultItem);
//     });
// }

// function exitTest() {
//     if (confirm("Are you sure you want to exit the test?")) {
//         window.location.href = "index.html";
//     }
// }

// function goToMainMenu() {
//     window.location.href = "index.html";
// }

// // Start the quiz when the page loads
// document.addEventListener("DOMContentLoaded", startQuiz);




// let currentQuestionIndex = 0;
// let timer;
// let timeRemaining = 10;
// let results = [];

// // Function to load flashcards from localStorage
// function loadFlashcards() {
//     const storedFlashcards = localStorage.getItem('flashcards');
//     return storedFlashcards ? JSON.parse(storedFlashcards) : [];
// }

// // // Load flashcards and default to a fallback if none are available
// // const flashcards = loadFlashcards().length > 0 ? loadFlashcards() : [
// //     { question: "What is the capital of France?", answer: "Paris" },
// //     { question: "What is 5 + 3?", answer: "8" },
// //     { question: "What is the color of the sky?", answer: "blue" },
// // ];

// // DOM elements
// const questionElement = document.getElementById("question");
// const answerInput = document.getElementById("answer-input");
// const timerElement = document.getElementById("timer");
// const resultsContainer = document.getElementById("results-container");
// const resultsList = document.getElementById("results-list");
// const quizContainer = document.getElementById("quiz-container");
// const startQuizButton = document.getElementById("start-quiz-btn");
// const backToMenuButton = document.getElementById("back-to-menu-btn");

// // Hide quiz container initially
// quizContainer.style.display = "none";

// // Start Quiz function
// function startQuiz() {
//     // Hide start button and instructions
//     startQuizButton.style.display = "none";
//     backToMenuButton.style.display = "none";

//     // Show quiz container
//     quizContainer.style.display = "block";

//     // Display the first question
//     displayQuestion();

//     // Add event listener for Enter key to submit answers
//     answerInput.addEventListener("keypress", function (event) {
//         if (event.key === "Enter") {
//             checkAnswer();
//         }
//     });
// }

// // Display the current question
// function displayQuestion() {
//     if (currentQuestionIndex < flashcards.length) {
//         const currentCard = flashcards[currentQuestionIndex];
//         questionElement.textContent = currentCard.question;
//         answerInput.value = "";
//         timeRemaining = 10;
//         timerElement.textContent = `Time Remaining: ${timeRemaining} seconds`;
//         timer = setInterval(countdown, 1000);
//     } else {
//         finishQuiz();
//     }
// }

// // Countdown timer for each question
// function countdown() {
//     timeRemaining--;
//     timerElement.textContent = `Time Remaining: ${timeRemaining} seconds`;
//     if (timeRemaining <= 0) {
//         clearInterval(timer);
//         recordAnswer(false); // Automatically incorrect if time runs out
//         moveToNextQuestion();
//     }
// }

// // Check the user's answer
// function checkAnswer() {
//     clearInterval(timer);
//     const userAnswer = answerInput.value.trim().toLowerCase();
//     const correctAnswer = flashcards[currentQuestionIndex].answer.toLowerCase();
//     recordAnswer(userAnswer === correctAnswer);
//     moveToNextQuestion();
// }

// // Record the user's answer
// function recordAnswer(isCorrect) {
//     const currentCard = flashcards[currentQuestionIndex];
//     results.push({
//         question: currentCard.question,
//         correctAnswer: currentCard.answer,
//         userAnswer: isCorrect ? currentCard.answer : answerInput.value.trim(),
//         isCorrect,
//     });
// }

// // Move to the next question
// function moveToNextQuestion() {
//     currentQuestionIndex++;
//     displayQuestion();
// }

// // Finish the quiz and display results
// function finishQuiz() {
//     quizContainer.style.display = "none";
//     resultsContainer.style.display = "block";
//     results.forEach((result) => {
//         const resultItem = document.createElement("li");
//         resultItem.textContent = `${result.question} - Your Answer: ${result.userAnswer} - ${result.isCorrect ? "Correct" : "Incorrect"}`;
//         resultsList.appendChild(resultItem);
//     });
// }

// // Exit the quiz and return to the main menu
// function exitTest() {
//     if (confirm("Are you sure you want to exit the test?")) {
//         window.location.href = "index.html";
//     }
// }

// // Go to the main menu
// function goToMainMenu() {
//     window.location.href = "index.html";
// }

// // Attach startQuiz function to the Start Quiz button
// startQuizButton.addEventListener("click", startQuiz);


// // Select DOM elements
// const quizContainer = document.getElementById('quiz-container');
// const questionElement = document.getElementById('question');
// const answerInput = document.getElementById('answer-input');
// const timerElement = document.getElementById('timer');
// const startQuizBtn = document.getElementById('start-quiz-btn');
// const exitBtn = document.getElementById('exit-button');
// const resultsContainer = document.getElementById('results-container');
// const resultsList = document.getElementById('results-list');
// const backToMenuBtn = document.getElementById('back-to-menu-btn');

// // Variables
// let flashcards = [];
// let currentQuestionIndex = 0;
// let timer;
// let timeRemaining = 10;
// let results = [];

// // Load flashcards from LocalStorage
// function loadFlashcards() {
//     const storedFlashcards = localStorage.getItem('flashcards');
//     return storedFlashcards ? JSON.parse(storedFlashcards) : [];
// }

// // Initialize Quiz Mode
// function initializeQuiz() {
//     flashcards = loadFlashcards();

//     if (flashcards.length === 0) {
//         alert("No flashcards available. Please add some first.");
//         window.location.href = 'index.html';
//         return;
//     }

//     resetQuiz();
// }

// // Start Quiz
// function startQuiz() {
//     startQuizBtn.style.display = 'none'; // Hide the start button
//     quizContainer.style.display = 'block'; // Show the quiz container
//     displayQuestion();
// }

// // Display the current question
// function displayQuestion() {
//     if (currentQuestionIndex < flashcards.length) {
//         const currentCard = flashcards[currentQuestionIndex];
//         questionElement.textContent = currentCard.question;
//         answerInput.value = '';
//         timeRemaining = 10;
//         updateTimer();
//         timer = setInterval(countdown, 1000);
//     } else {
//         finishQuiz();
//     }
// }

// // Countdown timer for each question
// function countdown() {
//     timeRemaining--;
//     updateTimer();
//     if (timeRemaining <= 0) {
//         clearInterval(timer);
//         recordAnswer(false); // Automatically mark as incorrect if time runs out
//         moveToNextQuestion();
//     }
// }

// // Update timer display
// function updateTimer() {
//     timerElement.textContent = `Time Remaining: ${timeRemaining} seconds`;
// }

// // Check the user's answer
// function checkAnswer() {
//     clearInterval(timer);
//     const userAnswer = answerInput.value.trim().toLowerCase();
//     const correctAnswer = flashcards[currentQuestionIndex].answer.toLowerCase();
//     recordAnswer(userAnswer === correctAnswer);
//     moveToNextQuestion();
// }

// // Record the user's answer
// function recordAnswer(isCorrect) {
//     const currentCard = flashcards[currentQuestionIndex];
//     results.push({
//         question: currentCard.question,
//         correctAnswer: currentCard.answer,
//         userAnswer: isCorrect ? currentCard.answer : answerInput.value.trim(),
//         isCorrect,
//     });
// }

// // Move to the next question
// function moveToNextQuestion() {
//     currentQuestionIndex++;
//     displayQuestion();
// }

// // Finish the quiz and display results
// function finishQuiz() {
//     quizContainer.style.display = 'none';
//     resultsContainer.style.display = 'block';
//     results.forEach((result) => {
//         const resultItem = document.createElement('li');
//         resultItem.textContent = `${result.question} - Your Answer: ${result.userAnswer} - ${result.isCorrect ? "Correct" : "Incorrect"}`;
//         resultsList.appendChild(resultItem);
//     });
// }

// // Reset quiz state
// function resetQuiz() {
//     currentQuestionIndex = 0;
//     results = [];
//     resultsList.innerHTML = '';
//     quizContainer.style.display = 'none';
//     resultsContainer.style.display = 'none';
//     startQuizBtn.style.display = 'block';
// }

// // Exit quiz and return to main menu
// function exitQuiz() {
//     if (confirm("Are you sure you want to exit the quiz?")) {
//         window.location.href = 'index.html';
//     }
// }

// // Event Listeners
// startQuizBtn.addEventListener('click', startQuiz);
// answerInput.addEventListener('keypress', (event) => {
//     if (event.key === 'Enter') {
//         checkAnswer();
//     }
// });
// exitBtn.addEventListener('click', exitQuiz);
// backToMenuBtn.addEventListener('click', () => window.location.href = 'index.html');

// // Initialize Quiz Mode
// initializeQuiz();




// // Select DOM elements
// const quizContainer = document.getElementById('quiz-container');
// const questionElement = document.getElementById('question');
// const answerInput = document.getElementById('answer-input');
// const timerElement = document.getElementById('timer');
// const startQuizBtn = document.getElementById('start-quiz-btn');
// const exitBtn = document.getElementById('exit-button');
// const resultsContainer = document.getElementById('results-container');
// const resultsList = document.getElementById('results-list');
// const backToMenuBtn = document.getElementById('back-to-menu-btn');

// // Variables
// let flashcards = [];
// let currentQuestionIndex = 0;
// let timer;
// let timeRemaining = 10;
// let results = [];

// // Load flashcards from LocalStorage
// function loadFlashcards() {
//     const storedFlashcards = localStorage.getItem('flashcards');
//     return storedFlashcards ? JSON.parse(storedFlashcards) : [];
// }

// // Initialize Quiz Mode
// function initializeQuiz() {
//     flashcards = loadFlashcards();

//     if (flashcards.length === 0) {
//         alert("No flashcards available. Please add some first.");
//         window.location.href = 'index.html';
//         return;
//     }

//     resetQuiz();
// }

// // Start Quiz
// function startQuiz() {
//     startQuizBtn.style.display = 'none'; // Hide the start button
//     quizContainer.style.display = 'block'; // Show the quiz container
//     displayQuestion();
// }

// // Display the current question
// function displayQuestion() {
//     if (currentQuestionIndex < flashcards.length) {
//         const currentCard = flashcards[currentQuestionIndex];
//         questionElement.textContent = currentCard.question;
//         answerInput.value = '';
//         timeRemaining = 10;
//         updateTimer();
//         timer = setInterval(countdown, 1000);
//     } else {
//         finishQuiz();
//     }
// }

// // Countdown timer for each question
// function countdown() {
//     timeRemaining--;
//     updateTimer();
//     if (timeRemaining <= 0) {
//         clearInterval(timer);
//         recordAnswer(false); // Automatically mark as incorrect if time runs out
//         moveToNextQuestion();
//     }
// }

// // Update timer display
// function updateTimer() {
//     timerElement.textContent = `Time Remaining: ${timeRemaining} seconds`;
// }

// // Check the user's answer
// function checkAnswer() {
//     clearInterval(timer);
//     const userAnswer = answerInput.value.trim().toLowerCase();
//     const correctAnswer = flashcards[currentQuestionIndex].answer.toLowerCase();
//     recordAnswer(userAnswer === correctAnswer);
//     moveToNextQuestion();
// }

// // Record the user's answer
// function recordAnswer(isCorrect) {
//     const currentCard = flashcards[currentQuestionIndex];
//     results.push({
//         question: currentCard.question,
//         correctAnswer: currentCard.answer,
//         userAnswer: isCorrect ? currentCard.answer : answerInput.value.trim(),
//         isCorrect,
//     });
// }

// // Move to the next question
// function moveToNextQuestion() {
//     currentQuestionIndex++;
//     displayQuestion();
// }

// // Finish the quiz and display results
// function finishQuiz() {
//     clearInterval(timer); // Stop the timer if active
//     quizContainer.style.display = 'none';
//     resultsContainer.style.display = 'block';
//     resultsList.innerHTML = ''; // Clear previous results
//     results.forEach((result) => {
//         const resultItem = document.createElement('li');
//         resultItem.textContent = `${result.question} - Your Answer: ${result.userAnswer} - ${result.isCorrect ? "Correct" : "Incorrect"}`;
//         resultsList.appendChild(resultItem);
//     });
// }

// // Exit the quiz and show results
// function exitQuiz() {
//     if (confirm("Are you sure you want to exit the quiz?")) {
//         finishQuiz(); // Stop and show results
//     }
// }

// // Restart the quiz
// function restartQuiz() {
//     resetQuiz(); // Reset the state
//     startQuiz(); // Start the quiz again
// }

// // Reset quiz state
// function resetQuiz() {
//     clearInterval(timer); // Stop any active timer
//     currentQuestionIndex = 0;
//     results = [];
//     resultsList.innerHTML = ''; // Clear the results list
//     quizContainer.style.display = 'none';
//     resultsContainer.style.display = 'none';
//     startQuizBtn.style.display = 'block';
// }

// // Event Listeners
// startQuizBtn.addEventListener('click', startQuiz);
// answerInput.addEventListener('keypress', (event) => {
//     if (event.key === 'Enter') {
//         checkAnswer();
//     }
// });
// exitBtn.addEventListener('click', exitQuiz);
// backToMenuBtn.addEventListener('click', () => window.location.href = 'index.html');
// document.getElementById('restart-quiz-btn').addEventListener('click', restartQuiz);

// // Initialize Quiz Mode
// initializeQuiz();




// // Select DOM elements
// const quizContainer = document.getElementById('quiz-container');
// const questionElement = document.getElementById('question');
// const answerInput = document.getElementById('answer-input');
// const timerElement = document.getElementById('timer');
// const nextButton = document.getElementById('next-button');
// const startQuizBtn = document.getElementById('start-quiz-btn');
// const exitBtn = document.getElementById('exit-button');
// const resultsContainer = document.getElementById('results-container');
// const resultsList = document.getElementById('results-list');
// const backToMenuBtn = document.getElementById('back-to-menu-btn');

// // Variables
// let flashcards = [];
// let currentQuestionIndex = 0;
// let timer;
// let timeRemaining = 10;
// let results = [];

// // Load flashcards from LocalStorage
// function loadFlashcards() {
//     const storedFlashcards = localStorage.getItem('flashcards');
//     return storedFlashcards ? JSON.parse(storedFlashcards) : [];
// }

// // Initialize Quiz Mode
// function initializeQuiz() {
//     flashcards = loadFlashcards();

//     if (flashcards.length === 0) {
//         alert("No flashcards available. Please add some first.");
//         window.location.href = 'index.html';
//         return;
//     }

//     resetQuiz();
// }

// // Start Quiz
// function startQuiz() {
//     startQuizBtn.style.display = 'none'; // Hide the start button
//     quizContainer.style.display = 'block'; // Show the quiz container
//     displayQuestion();
// }

// // Display the current question
// function displayQuestion() {
//     if (currentQuestionIndex < flashcards.length) {
//         const currentCard = flashcards[currentQuestionIndex];
//         questionElement.textContent = currentCard.question;
//         answerInput.value = '';
//         nextButton.style.display = 'none'; // Hide next button until answer is submitted
//         timeRemaining = 10;
//         updateTimer();
//         timer = setInterval(countdown, 1000);
//     } else {
//         finishQuiz();
//     }
// }

// // Countdown timer for each question
// function countdown() {
//     timeRemaining--;
//     updateTimer();
//     if (timeRemaining <= 0) {
//         clearInterval(timer);
//         recordAnswer(false); // Automatically mark as incorrect if time runs out
//         nextButton.style.display = 'block'; // Show next button
//     }
// }

// // Update timer display
// function updateTimer() {
//     timerElement.textContent = `Time Remaining: ${timeRemaining} seconds`;
// }

// // Check the user's answer
// function checkAnswer() {
//     clearInterval(timer);
//     const userAnswer = answerInput.value.trim().toLowerCase();
//     const correctAnswer = flashcards[currentQuestionIndex].answer.toLowerCase();
//     recordAnswer(userAnswer === correctAnswer);
//     nextButton.style.display = 'block'; // Show next button after answer is submitted
// }

// // Record the user's answer
// function recordAnswer(isCorrect) {
//     const currentCard = flashcards[currentQuestionIndex];
//     results.push({
//         question: currentCard.question,
//         correctAnswer: currentCard.answer,
//         userAnswer: isCorrect ? currentCard.answer : answerInput.value.trim(),
//         isCorrect,
//     });
// }

// // Move to the next question
// function moveToNextQuestion() {
//     currentQuestionIndex++;
//     displayQuestion();
// }

// // Finish the quiz and display results
// function finishQuiz() {
//     clearInterval(timer); // Stop the timer if active
//     quizContainer.style.display = 'none';
//     resultsContainer.style.display = 'block';
//     resultsList.innerHTML = ''; // Clear previous results
//     results.forEach((result) => {
//         const resultItem = document.createElement('li');
//         resultItem.textContent = `${result.question} - Your Answer: ${result.userAnswer} - ${result.isCorrect ? "Correct" : "Incorrect"}`;
//         resultsList.appendChild(resultItem);
//     });
// }

// // Exit the quiz and show results
// function exitQuiz() {
//     if (confirm("Are you sure you want to exit the quiz?")) {
//         finishQuiz(); // Stop and show results
//     }
// }

// // Restart the quiz
// function restartQuiz() {
//     resetQuiz(); // Reset the state
//     startQuiz(); // Start the quiz again
// }

// // Reset quiz state
// function resetQuiz() {
//     clearInterval(timer); // Stop any active timer
//     currentQuestionIndex = 0;
//     results = [];
//     resultsList.innerHTML = ''; // Clear the results list
//     quizContainer.style.display = 'none';
//     resultsContainer.style.display = 'none';
//     startQuizBtn.style.display = 'block';
// }

// // Event Listeners
// startQuizBtn.addEventListener('click', startQuiz);
// answerInput.addEventListener('keypress', (event) => {
//     if (event.key === 'Enter') {
//         checkAnswer();
//     }
// });
// nextButton.addEventListener('click', moveToNextQuestion); // Next button listener
// exitBtn.addEventListener('click', exitQuiz);
// backToMenuBtn.addEventListener('click', () => window.location.href = 'index.html');

// // Initialize Quiz Mode
// initializeQuiz();




// // Select DOM elements
// const quizContainer = document.getElementById('quiz-container');
// const questionElement = document.getElementById('question');
// const answerInput = document.getElementById('answer-input');
// const timerElement = document.getElementById('timer');
// const nextButton = document.getElementById('next-button');
// const startQuizBtn = document.getElementById('start-quiz-btn');
// const exitBtn = document.getElementById('exit-button');
// const resultsContainer = document.getElementById('results-container');
// const resultsList = document.getElementById('results-list');
// const restartQuizBtn = document.getElementById('restart-quiz-btn');
// const backToMenuBtn = document.getElementById('back-to-menu-btn');
// const backTOMenuBtn2 = document.getElementById('back-to-menu-btn2');

// // Variables
// let flashcards = [];
// let currentQuestionIndex = 0;
// let timer;
// let timeRemaining = 10;
// let results = [];

// // Load flashcards from LocalStorage
// function loadFlashcards() {
//     const storedFlashcards = localStorage.getItem('flashcards');
//     return storedFlashcards ? JSON.parse(storedFlashcards) : [];
// }

// // Initialize Quiz Mode
// function initializeQuiz() {
//     flashcards = loadFlashcards();

//     if (flashcards.length === 0) {
//         alert("No flashcards available. Please add some first.");
//         window.location.href = 'index.html';
//         return;
//     }

//     resetQuiz();
// }

// // Start Quiz
// function startQuiz() {
//     startQuizBtn.style.display = 'none'; // Hide the start button
//     quizContainer.style.display = 'block'; // Show the quiz container
//     displayQuestion();
// }

// // Display the current question
// function displayQuestion() {
//     if (currentQuestionIndex < flashcards.length) {
//         const currentCard = flashcards[currentQuestionIndex];
//         questionElement.textContent = currentCard.question;
//         answerInput.value = '';
//         nextButton.style.display = 'none'; // Hide next button until answer is submitted
//         timeRemaining = 10;
//         updateTimer();
//         timer = setInterval(countdown, 1000);
//     } else {
//         finishQuiz();
//     }
// }

// // Countdown timer for each question
// function countdown() {
//     timeRemaining--;
//     updateTimer();
//     if (timeRemaining <= 0) {
//         clearInterval(timer);
//         recordAnswer(false); // Automatically mark as incorrect if time runs out
//         nextButton.style.display = 'block'; // Show next button
//     }
// }

// // Update timer display
// function updateTimer() {
//     timerElement.textContent = `Time Remaining: ${timeRemaining} seconds`;
// }

// // Check the user's answer
// function checkAnswer() {
//     clearInterval(timer); // Stop the timer
//     const userAnswer = answerInput.value.trim().toLowerCase();
//     const correctAnswer = flashcards[currentQuestionIndex].answer.toLowerCase();
//     recordAnswer(userAnswer === correctAnswer);
//     nextButton.style.display = 'block'; // Show next button after answer is submitted
//     answerInput.disabled = true; // Disable input to prevent further edits
// }

// // Record the user's answer
// function recordAnswer(isCorrect) {
//     const currentCard = flashcards[currentQuestionIndex];
//     results.push({
//         question: currentCard.question,
//         correctAnswer: currentCard.answer,
//         userAnswer: isCorrect ? currentCard.answer : answerInput.value.trim(),
//         isCorrect,
//     });
// }

// // Move to the next question
// function moveToNextQuestion() {
//     answerInput.disabled = false; // Re-enable input for the next question
//     currentQuestionIndex++;
//     displayQuestion();
// }

// // Finish the quiz and display results
// function finishQuiz() {
//     clearInterval(timer); // Stop the timer if active
//     quizContainer.style.display = 'none';
//     resultsContainer.style.display = 'block';
//     resultsList.innerHTML = ''; // Clear previous results
//     results.forEach((result) => {
//         const resultItem = document.createElement('li');
//         resultItem.textContent = `${result.question} - Your Answer: ${result.userAnswer} - ${result.isCorrect ? "Correct" : "Incorrect"}`;
//         resultsList.appendChild(resultItem);
//     });
// }

// // Exit the quiz and show results
// function exitQuiz() {
//     if (confirm("Are you sure you want to exit the quiz?")) {
//         finishQuiz(); // Stop and show results
//     }
// }

// // Restart the quiz
// function restartQuiz() {
//     resetQuiz(); // Reset the state
//     startQuiz(); // Start the quiz again
// }

// // Reset quiz state
// function resetQuiz() {
//     clearInterval(timer); // Stop any active timer
//     currentQuestionIndex = 0;
//     results = [];
//     resultsList.innerHTML = ''; // Clear the results list
//     quizContainer.style.display = 'none';
//     resultsContainer.style.display = 'none';
//     startQuizBtn.style.display = 'block';
//     answerInput.disabled = false; // Ensure input is enabled for the next round
// }

// // Event Listeners
// startQuizBtn.addEventListener('click', startQuiz);
// answerInput.addEventListener('keypress', (event) => {
//     if (event.key === 'Enter') {
//         checkAnswer();
//     }
// });
// nextButton.addEventListener('click', moveToNextQuestion); // Next button listener
// exitBtn.addEventListener('click', exitQuiz);
// restartQuizBtn.addEventListener('click', restartQuiz); // Restart quiz button listener
// backToMenuBtn.addEventListener('click', () => window.location.href = 'index.html');
// backTOMenuBtn2.addEventListener('click', () => window.location.href = 'index.html');

// // Initialize Quiz Mode
// initializeQuiz();



// // Select DOM elements
// const quizContainer = document.getElementById('quiz-container');
// const questionElement = document.getElementById('question');
// const answerInput = document.getElementById('answer-input');
// const timerElement = document.getElementById('timer');
// const nextButton = document.getElementById('next-button');
// const startQuizBtn = document.getElementById('start-quiz-btn');
// const exitBtn = document.getElementById('exit-button');
// const resultsContainer = document.getElementById('results-container');
// const resultsList = document.getElementById('results-list');
// const restartQuizBtn = document.getElementById('restart-quiz-btn');
// const backToMenuBtn = document.getElementById('back-to-menu-btn');
// const backTOMenuBtn2 = document.getElementById('back-to-menu-btn2');

// // Variables
// let flashcards = [];
// let currentQuestionIndex = 0;
// let timer;
// let timeRemaining = 10;
// let results = [];

// // Load flashcards from LocalStorage
// function loadFlashcards() {
//     const storedFlashcards = localStorage.getItem('flashcards');
//     return storedFlashcards ? JSON.parse(storedFlashcards) : [];
// }

// // Shuffle an array
// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

// // Initialize Quiz Mode
// function initializeQuiz() {
//     flashcards = loadFlashcards();
//     if (flashcards.length === 0) {
//         alert("No flashcards available. Please add some first.");
//         window.location.href = 'index.html';
//         return;
//     }

//     flashcards = shuffleArray(flashcards); // Shuffle flashcards initially
//     resetQuiz();
// }

// // Start Quiz
// function startQuiz() {
//     startQuizBtn.style.display = 'none'; // Hide the start button
//     quizContainer.style.display = 'block'; // Show the quiz container
//     displayQuestion();
// }

// // Display the current question
// function displayQuestion() {
//     if (currentQuestionIndex < flashcards.length) {
//         const currentCard = flashcards[currentQuestionIndex];
//         questionElement.textContent = currentCard.question;
//         answerInput.value = '';
//         nextButton.style.display = 'none'; // Hide next button until answer is submitted
//         timeRemaining = 10;
//         updateTimer();
//         timer = setInterval(countdown, 1000);
//     } else {
//         finishQuiz();
//     }
// }

// // Countdown timer for each question
// function countdown() {
//     timeRemaining--;
//     updateTimer();
//     if (timeRemaining <= 0) {
//         clearInterval(timer);
//         recordAnswer(false); // Automatically mark as incorrect if time runs out
//         nextButton.style.display = 'block'; // Show next button
//     }
// }

// // Update timer display
// function updateTimer() {
//     timerElement.textContent = `Time Remaining: ${timeRemaining} seconds`;
// }

// // Check the user's answer
// function checkAnswer() {
//     clearInterval(timer); // Stop the timer
//     const userAnswer = answerInput.value.trim().toLowerCase();
//     const correctAnswer = flashcards[currentQuestionIndex].answer.toLowerCase();
//     recordAnswer(userAnswer === correctAnswer);
//     nextButton.style.display = 'block'; // Show next button after answer is submitted
//     answerInput.disabled = true; // Disable input to prevent further edits
// }

// // Record the user's answer
// function recordAnswer(isCorrect) {
//     const currentCard = flashcards[currentQuestionIndex];
//     results.push({
//         question: currentCard.question,
//         correctAnswer: currentCard.answer,
//         userAnswer: isCorrect ? currentCard.answer : answerInput.value.trim(),
//         isCorrect,
//     });
// }

// // Move to the next question
// function moveToNextQuestion() {
//     answerInput.disabled = false; // Re-enable input for the next question
//     currentQuestionIndex++;
//     displayQuestion();
// }

// // Finish the quiz and display results
// function finishQuiz() {
//     clearInterval(timer); // Stop the timer if active
//     quizContainer.style.display = 'none';
//     resultsContainer.style.display = 'block';
//     resultsList.innerHTML = ''; // Clear previous results
//     results.forEach((result) => {
//         const resultItem = document.createElement('li');
//         resultItem.textContent = `${result.question} - Your Answer: ${result.userAnswer} - ${result.isCorrect ? "Correct" : "Incorrect"}`;
//         resultsList.appendChild(resultItem);
//     });
// }

// // Exit the quiz and show results
// function exitQuiz() {
//     if (confirm("Are you sure you want to exit the quiz?")) {
//         finishQuiz(); // Stop and show results
//     }
// }

// // Restart the quiz
// function restartQuiz() {
//     flashcards = shuffleArray(flashcards); // Shuffle flashcards on restart
//     resetQuiz(); // Reset the state
//     startQuiz(); // Start the quiz again
// }

// // Reset quiz state
// function resetQuiz() {
//     clearInterval(timer); // Stop any active timer
//     currentQuestionIndex = 0;
//     results = [];
//     resultsList.innerHTML = ''; // Clear the results list
//     quizContainer.style.display = 'none';
//     resultsContainer.style.display = 'none';
//     startQuizBtn.style.display = 'block';
//     answerInput.disabled = false; // Ensure input is enabled for the next round
// }

// // Event Listeners
// startQuizBtn.addEventListener('click', startQuiz);
// answerInput.addEventListener('keypress', (event) => {
//     if (event.key === 'Enter') {
//         checkAnswer();
//     }
// });
// nextButton.addEventListener('click', moveToNextQuestion); // Next button listener
// exitBtn.addEventListener('click', exitQuiz);
// restartQuizBtn.addEventListener('click', restartQuiz); // Restart quiz button listener
// backToMenuBtn.addEventListener('click', () => window.location.href = 'index.html');
// backTOMenuBtn2.addEventListener('click', () => window.location.href = 'index.html');

// // Initialize Quiz Mode
// initializeQuiz();



// Select DOM elements
const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answer-input');
const timerElement = document.getElementById('timer');
const nextButton = document.getElementById('next-button');
const startQuizBtn = document.getElementById('start-quiz-btn');
const exitBtn = document.getElementById('exit-button');
const resultsContainer = document.getElementById('results-container');
const resultsList = document.getElementById('results-list');
const restartQuizBtn = document.getElementById('restart-quiz-btn');
const backToMenuBtn = document.getElementById('back-to-menu-btn');
const backTOMenuBtn2 = document.getElementById('back-to-menu-btn2');

// Variables
let flashcards = [];
let currentQuestionIndex = 0;
let timer;
let timeRemaining = 10;
let results = [];

// Load flashcards from LocalStorage
function loadFlashcards() {
    const storedFlashcards = localStorage.getItem('flashcards');
    return storedFlashcards ? JSON.parse(storedFlashcards) : [];
}

// Shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Initialize Quiz Mode
function initializeQuiz() {
    flashcards = loadFlashcards();
    if (flashcards.length === 0) {
        alert("No flashcards available. Please add some first.");
        window.location.href = 'index.html';
        return;
    }

    flashcards = shuffleArray(flashcards); // Shuffle flashcards initially
    resetQuiz();
}

// Start Quiz
function startQuiz() {
    startQuizBtn.style.display = 'none'; // Hide the start button
    quizContainer.style.display = 'block'; // Show the quiz container
    displayQuestion();
}

// Display the current question
function displayQuestion() {
    if (currentQuestionIndex < flashcards.length) {
        const currentCard = flashcards[currentQuestionIndex];
        questionElement.textContent = currentCard.question;
        answerInput.value = '';
        answerInput.disabled = false; // Enable input
        nextButton.style.display = 'none'; // Hide next button until required
        timeRemaining = 10;
        updateTimer();
        timer = setInterval(countdown, 1000);
    } else {
        finishQuiz();
    }
}

// Countdown timer for each question
function countdown() {
    timeRemaining--;
    updateTimer();
    if (timeRemaining <= 0) {
        clearInterval(timer);
        recordAnswer(false); // Automatically mark as incorrect if time runs out
        nextButton.style.display = 'block'; // Show next button
        answerInput.disabled = true; // Disable input
    }
}

// Update timer display
function updateTimer() {
    timerElement.textContent = `Time Remaining: ${timeRemaining} seconds`;
}

// Check the user's answer
function checkAnswer() {
    clearInterval(timer); // Stop the timer
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = flashcards[currentQuestionIndex].answer.toLowerCase();
    recordAnswer(userAnswer === correctAnswer);
    nextButton.style.display = 'block'; // Show next button after answer is submitted
    answerInput.disabled = true; // Disable input to prevent further edits
}

// Record the user's answer
function recordAnswer(isCorrect) {
    const currentCard = flashcards[currentQuestionIndex];
    results.push({
        question: currentCard.question,
        correctAnswer: currentCard.answer,
        userAnswer: isCorrect ? currentCard.answer : answerInput.value.trim(),
        isCorrect,
    });
}

// Move to the next question
function moveToNextQuestion() {
    answerInput.disabled = false; // Re-enable input for the next question
    currentQuestionIndex++;
    displayQuestion();
}

// Finish the quiz and display results
function finishQuiz() {
    clearInterval(timer); // Stop the timer if active
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    resultsList.innerHTML = ''; // Clear previous results
    results.forEach((result) => {
        const resultItem = document.createElement('li');
        resultItem.textContent = `${result.question} - Your Answer: ${result.userAnswer} - ${result.isCorrect ? "Correct" : "Incorrect"}`;
        resultsList.appendChild(resultItem);
    });
}

// Exit the quiz and show results
function exitQuiz() {
    if (confirm("Are you sure you want to exit the quiz?")) {
        finishQuiz(); // Stop and show results
    }
}

// Restart the quiz
function restartQuiz() {
    flashcards = shuffleArray(flashcards); // Shuffle flashcards on restart
    resetQuiz(); // Reset the state
    startQuiz(); // Start the quiz again
}

// Reset quiz state
function resetQuiz() {
    clearInterval(timer); // Stop any active timer
    currentQuestionIndex = 0;
    results = [];
    resultsList.innerHTML = ''; // Clear the results list
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'none';
    startQuizBtn.style.display = 'block';
    answerInput.disabled = false; // Ensure input is enabled for the next round
}

// Event Listeners
startQuizBtn.addEventListener('click', startQuiz);
answerInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});
nextButton.addEventListener('click', moveToNextQuestion); // Next button listener
exitBtn.addEventListener('click', exitQuiz);
restartQuizBtn.addEventListener('click', restartQuiz); // Restart quiz button listener
backToMenuBtn.addEventListener('click', () => window.location.href = 'index.html');
backTOMenuBtn2.addEventListener('click', () => window.location.href = 'index.html');

// Initialize Quiz Mode
initializeQuiz();