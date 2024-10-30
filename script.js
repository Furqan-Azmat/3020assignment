// script.js

const flashcards = [
    {
        question: 'What is the capital of France?',
        answer: 'Paris'
    },
    {
        question: 'What is the largest planet in our Solar System?',
        answer: 'Jupiter'
    },
    {
        question: 'Who wrote "Romeo and Juliet"?',
        answer: 'William Shakespeare'
    }
    // Add more flashcards as needed
];

let currentCard = 0;

const cardContent = document.querySelector('.card-content');
const cardFront = document.querySelector('.card-front p');
const cardBack = document.querySelector('.card-back p');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const cardCounter = document.getElementById('card-counter');

// Initialize the flashcard content
function loadFlashcard(index) {
    const flashcard = flashcards[index];
    cardFront.textContent = flashcard.question;
    cardBack.textContent = flashcard.answer;
    cardContent.classList.remove('flip');
    updateControls();
    updateCounter();
}

// Update the navigation buttons
function updateControls() {
    prevBtn.disabled = currentCard === 0;
    nextBtn.disabled = currentCard === flashcards.length - 1;
}

// Update the card counter
function updateCounter() {
    cardCounter.textContent = `${currentCard + 1} / ${flashcards.length}`;
}

// Event listeners for navigation buttons
prevBtn.addEventListener('click', () => {
    if (currentCard > 0) {
        currentCard--;
        loadFlashcard(currentCard);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentCard < flashcards.length - 1) {
        currentCard++;
        loadFlashcard(currentCard);
    }
});

// Event listener for flipping the card
cardContent.addEventListener('click', () => {
    cardContent.classList.toggle('flip');
});

// Load the first flashcard on page load
loadFlashcard(currentCard);
