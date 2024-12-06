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