// script.js

let flashcards = [];
let currentCard = 0;
let isEditing = false;
let editingIndex = null;

// Select DOM elements
const cardContent = document.querySelector('.card-content');
const cardFront = document.querySelector('.card-front p');
const cardBack = document.querySelector('.card-back p');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const cardCounter = document.getElementById('card-counter');
const addNewBtn = document.getElementById('add-new-btn');
const flashcardForm = document.getElementById('flashcard-form');
const flashcardFormContainer = document.querySelector('.flashcard-form');
const questionInput = document.getElementById('question');
const answerInput = document.getElementById('answer');
const saveBtn = document.getElementById('save-btn');
const cancelBtn = document.getElementById('cancel-btn');
const editBtn = document.getElementById('edit-btn');
const deleteBtn = document.getElementById('delete-btn');

// Load flashcards from Local Storage
function loadFlashcards() {
    const storedFlashcards = localStorage.getItem('flashcards');
    if (storedFlashcards) {
        flashcards = JSON.parse(storedFlashcards);
    } else {
        flashcards = [];
    }
}

// Save flashcards to Local Storage
function saveFlashcards() {
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
}

// Initialize the flashcard content
function loadFlashcard(index) {
    if (flashcards.length === 0) {
        cardFront.textContent = 'No flashcards available.';
        cardBack.textContent = 'Please add new flashcards.';
        cardContent.classList.remove('flip');
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        editBtn.disabled = true;
        deleteBtn.disabled = true;
        cardCounter.textContent = '0 / 0';
        return;
    }

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
    editBtn.disabled = false;
    deleteBtn.disabled = false;
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

// Event listener for Add New Flashcard button
addNewBtn.addEventListener('click', () => {
    isEditing = false;
    editingIndex = null;
    questionInput.value = '';
    answerInput.value = '';
    flashcardFormContainer.style.display = 'block';
    addNewBtn.style.display = 'none';
});

// Event listener for Cancel button in form
cancelBtn.addEventListener('click', () => {
    flashcardFormContainer.style.display = 'none';
    addNewBtn.style.display = 'block';
});

// Event listener for Save Flashcard button
flashcardForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const question = questionInput.value.trim();
    const answer = answerInput.value.trim();

    if (question && answer) {
        if (isEditing && editingIndex !== null) {
            // Update existing flashcard
            flashcards[editingIndex] = { question, answer };
            isEditing = false;
            editingIndex = null;
        } else {
            // Add new flashcard
            flashcards.push({ question, answer });
            currentCard = flashcards.length - 1;
        }
        saveFlashcards();
        loadFlashcard(currentCard);
        flashcardForm.reset();
        flashcardFormContainer.style.display = 'none';
        addNewBtn.style.display = 'block';
    }
});

// Event listener for Edit button
editBtn.addEventListener('click', () => {
    isEditing = true;
    editingIndex = currentCard;
    const flashcard = flashcards[currentCard];
    questionInput.value = flashcard.question;
    answerInput.value = flashcard.answer;
    flashcardFormContainer.style.display = 'block';
    addNewBtn.style.display = 'none';
});

// Event listener for Delete button
deleteBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to delete this flashcard?')) {
        flashcards.splice(currentCard, 1);
        if (currentCard > 0) {
            currentCard--;
        }
        saveFlashcards();
        loadFlashcard(currentCard);
    }
});

// Initial setup
loadFlashcards();
loadFlashcard(currentCard);
