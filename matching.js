// Select DOM elements
const questionsColumn = document.getElementById('questions-column');
const answersColumn = document.getElementById('answers-column');
const checkMatchesBtn = document.getElementById('check-matches-btn');
const result = document.getElementById('result');
const backToMenuBtn = document.getElementById('back-to-menu-btn');

// Variables
let flashcards = [];
let shuffledAnswers = [];
let selectedPairs = {};

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

// Initialize Matching Mode
function initializeGame() {
    flashcards = loadFlashcards();
    shuffledAnswers = shuffleArray([...flashcards.map(flashcard => flashcard.answer)]);

    if (flashcards.length === 0) {
        alert("No flashcards available. Please add some first.");
        window.location.href = 'index.html';
        return;
    }

    displayQuestions();
    displayAnswers();
}

// Display questions
function displayQuestions() {
    flashcards.forEach((flashcard, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.textContent = flashcard.question;
        questionDiv.dataset.index = index;
        questionDiv.addEventListener('click', () => selectItem('question', index, questionDiv));
        questionsColumn.appendChild(questionDiv);
    });
}

// Display answers
function displayAnswers() {
    shuffledAnswers.forEach((answer, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.classList.add('answer');
        answerDiv.textContent = answer;
        answerDiv.dataset.index = index;
        answerDiv.addEventListener('click', () => selectItem('answer', index, answerDiv));
        answersColumn.appendChild(answerDiv);
    });
}

// Handle selection
let selectedQuestion = null;
let selectedAnswer = null;

function selectItem(type, index, element) {
    if (type === 'question') {
        selectedQuestion = { index, element };
    } else if (type === 'answer') {
        selectedAnswer = { index, element };
    }

    // If both question and answer are selected
    if (selectedQuestion && selectedAnswer) {
        selectedPairs[selectedQuestion.index] = shuffledAnswers[selectedAnswer.index];
        selectedQuestion.element.classList.add('matched');
        selectedAnswer.element.classList.add('matched');
        selectedQuestion = null;
        selectedAnswer = null;

        // Enable Check Matches button if all questions are matched
        if (Object.keys(selectedPairs).length === flashcards.length) {
            checkMatchesBtn.disabled = false;
        }
    }
}


// Check matches
function checkMatches() {
    let correctMatches = 0;

    flashcards.forEach((flashcard, index) => {
        // Find the question element
        const questionElement = document.querySelector(`.question[data-index="${index}"]`);
        const matchedAnswer = selectedPairs[index];
        const correctAnswer = flashcard.answer;

        // If a match exists
        if (matchedAnswer) {
            // Find the corresponding answer element
            const answerElement = [...answersColumn.children].find(
                (el) => el.textContent.trim() === matchedAnswer.trim()
            );

            if (matchedAnswer === correctAnswer) {
                // Correct match
                questionElement.classList.add('correct');
                answerElement.classList.add('correct');
                correctMatches++;
            } else {
                // Incorrect match
                questionElement.classList.add('incorrect');
                if (answerElement) {
                    answerElement.classList.add('incorrect');
                }
            }
        }
    });

    // Display the result
    result.textContent = `You matched ${correctMatches} out of ${flashcards.length} correctly!`;

    // Disable further interaction
    checkMatchesBtn.disabled = true;
}

// Event listeners
checkMatchesBtn.addEventListener('click', checkMatches);
backToMenuBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
});

function resetGame() {
    selectedPairs = {}; // Clear selected pairs
    selectedQuestion = null;
    selectedAnswer = null;
    result.textContent = ''; // Clear result text
    checkMatchesBtn.disabled = true; // Disable Check Matches button

    // Clear and reset the columns
    questionsColumn.innerHTML = '';
    answersColumn.innerHTML = '';
    shuffledAnswers = shuffleArray([...flashcards.map(flashcard => flashcard.answer)]);

    // Redisplay questions and answers
    displayQuestions();
    displayAnswers();
}

const resetGameBtn = document.getElementById('reset-game-btn');
resetGameBtn.addEventListener('click', resetGame);


// Initialize Matching Mode
initializeGame();
