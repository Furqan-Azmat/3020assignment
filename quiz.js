// Select DOM elements
const questionText = document.getElementById('quiz-question-text');
const options = Array.from(document.querySelectorAll('.quiz-option'));
const feedback = document.getElementById('quiz-feedback');
const nextQuestionBtn = document.getElementById('next-question-btn');
const scoreDisplay = document.getElementById('quiz-score');
const backToMenuBtn = document.getElementById('back-to-menu-btn');

// Quiz data
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// Load flashcards from localStorage
function loadFlashcards() {
    const storedFlashcards = localStorage.getItem('flashcards');
    return storedFlashcards ? JSON.parse(storedFlashcards) : [];
}

// Shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Generate multiple-choice options
function generateOptions(correctAnswer, allAnswers) {
    const options = new Set([correctAnswer]);
    while (options.size < 4) {
        const randomAnswer = allAnswers[Math.floor(Math.random() * allAnswers.length)];
        options.add(randomAnswer);
    }
    return shuffle(Array.from(options));
}



// Load a question
function loadQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
        questionText.textContent = "Quiz Complete!";
        feedback.textContent = `Your final score is ${score}/${quizQuestions.length}`;
        options.forEach(option => option.style.display = 'none');
        nextQuestionBtn.style.display = 'none';
        return;
    }

    const question = quizQuestions[currentQuestionIndex];
    const allAnswers = quizQuestions.map(q => q.answer); // Collect all answers for choices
    const choices = generateOptions(question.answer, allAnswers);

    questionText.textContent = question.question;
    options.forEach((option, index) => {
        option.textContent = choices[index];
        option.disabled = false;
        option.style.backgroundColor = '';
    });
    feedback.textContent = '';
    nextQuestionBtn.style.display = 'none';
}

// Check the answer
function checkAnswer(selectedOption) {
    const question = quizQuestions[currentQuestionIndex];
    const correct = selectedOption.textContent === question.answer;

    if (correct) {
        score++;
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
        selectedOption.style.backgroundColor = "green";
    } else {
        feedback.textContent = `Incorrect! The correct answer is "${question.answer}"`;
        feedback.style.color = "red";
        selectedOption.style.backgroundColor = "red";
    }

    options.forEach(option => option.disabled = true);
    scoreDisplay.textContent = `Score: ${score}`;
    nextQuestionBtn.style.display = 'block';
}

// Event listeners
options.forEach(option => {
    option.addEventListener('click', () => checkAnswer(option));
});

nextQuestionBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    loadQuestion();
});

backToMenuBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
});

// Initialize the quiz
quizQuestions = loadFlashcards(); // Load user-created flashcards
shuffle(quizQuestions);
loadQuestion();
