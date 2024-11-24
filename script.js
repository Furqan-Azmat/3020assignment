// script.js

let flashcards = [];
let currentCard = 0;
let isEditing = false;
let editingIndex = null;
let filterStatus = 'all'; // 'all', 'mastered', 'review'

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
const masteredBtn = document.getElementById('mastered-btn');
const reviewBtn = document.getElementById('review-btn');
const masteredCount = document.getElementById('mastered-count');
const reviewCount = document.getElementById('review-count');
const filterBtn = document.getElementById('filter-btn');
const flashcardElement = document.querySelector('.flashcard');

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
    const filteredFlashcards = getFilteredFlashcards();

    if (filteredFlashcards.length === 0) {
        cardFront.textContent = 'No flashcards available.';
        cardBack.textContent = 'Please add new flashcards.';
        cardContent.classList.remove('flip');
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        editBtn.disabled = true;
        deleteBtn.disabled = true;
        masteredBtn.disabled = true;
        reviewBtn.disabled = true;
        cardCounter.textContent = '0 / 0';
        flashcardElement.classList.remove('mastered', 'review');
        return;
    }

    if (index >= filteredFlashcards.length) {
        currentCard = filteredFlashcards.length - 1;
        index = currentCard;
    }

    const flashcard = filteredFlashcards[index];
    cardFront.textContent = flashcard.question;
    cardBack.textContent = flashcard.answer;
    cardContent.classList.remove('flip');
    updateControls(filteredFlashcards.length);
    updateCounter(index + 1, filteredFlashcards.length);
    updateFlashcardStatus(flashcard.status);
}

// Update the navigation buttons
function updateControls(totalCards) {
    prevBtn.disabled = currentCard === 0;
    nextBtn.disabled = currentCard >= totalCards - 1;
    editBtn.disabled = false;
    deleteBtn.disabled = false;
    masteredBtn.disabled = false;
    reviewBtn.disabled = false;
}

// Update the card counter
function updateCounter(current, total) {
    cardCounter.textContent = `${current} / ${total}`;
}

// Update the visual status of the flashcard
function updateFlashcardStatus(status) {
    flashcardElement.classList.remove('mastered', 'review');
    if (status === 'mastered') {
        flashcardElement.classList.add('mastered');
    } else if (status === 'review') {
        flashcardElement.classList.add('review');
    }
}

// Get flashcards based on filter
function getFilteredFlashcards() {
    if (filterStatus === 'all') {
        return flashcards;
    } else {
        return flashcards.filter(card => card.status === filterStatus);
    }
}

// Update progress counts
function updateProgressCounts() {
    const mastered = flashcards.filter(card => card.status === 'mastered').length;
    const review = flashcards.filter(card => card.status === 'review').length;
    masteredCount.textContent = `Mastered: ${mastered}`;
    reviewCount.textContent = `Needs Review: ${review}`;
}

// Event listeners for navigation buttons
prevBtn.addEventListener('click', () => {
    if (currentCard > 0) {
        currentCard--;
        loadFlashcard(currentCard);
    }
});

nextBtn.addEventListener('click', () => {
    const filteredFlashcards = getFilteredFlashcards();
    if (currentCard < filteredFlashcards.length - 1) {
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
            flashcards[editingIndex].question = question;
            flashcards[editingIndex].answer = answer;
        } else {
            // Add new flashcard
            flashcards.push({ question, answer, status: 'review' });
            currentCard = getFilteredFlashcards().length - 1;
        }
        saveFlashcards();
        updateProgressCounts();
        flashcardForm.reset();
        flashcardFormContainer.style.display = 'none';
        addNewBtn.style.display = 'block';
        loadFlashcard(currentCard);
    }
});

// Event listener for Edit button
editBtn.addEventListener('click', () => {
    isEditing = true;
    const filteredFlashcards = getFilteredFlashcards();
    const flashcard = filteredFlashcards[currentCard];
    editingIndex = flashcards.findIndex(card => card.question === flashcard.question && card.answer === flashcard.answer && card.status === flashcard.status);
    questionInput.value = flashcard.question;
    answerInput.value = flashcard.answer;
    flashcardFormContainer.style.display = 'block';
    addNewBtn.style.display = 'none';
});

// Event listener for Delete button
deleteBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to delete this flashcard?')) {
        const filteredFlashcards = getFilteredFlashcards();
        const flashcard = filteredFlashcards[currentCard];
        const index = flashcards.findIndex(card => card.question === flashcard.question && card.answer === flashcard.answer && card.status === flashcard.status);
        flashcards.splice(index, 1);
        saveFlashcards();
        updateProgressCounts();
        if (currentCard > 0) {
            currentCard--;
        }
        loadFlashcard(currentCard);
    }
});

// Event listener for Mark as Mastered button
masteredBtn.addEventListener('click', () => {
    const filteredFlashcards = getFilteredFlashcards();
    const flashcard = filteredFlashcards[currentCard];
    const index = flashcards.findIndex(card => card.question === flashcard.question && card.answer === flashcard.answer && card.status === flashcard.status);
    flashcards[index].status = 'mastered';
    saveFlashcards();
    updateProgressCounts();
    updateFlashcardStatus('mastered');
});

// Event listener for Mark as Needs Review button
reviewBtn.addEventListener('click', () => {
    const filteredFlashcards = getFilteredFlashcards();
    const flashcard = filteredFlashcards[currentCard];
    const index = flashcards.findIndex(card => card.question === flashcard.question && card.answer === flashcard.answer && card.status === flashcard.status);
    flashcards[index].status = 'review';
    saveFlashcards();
    updateProgressCounts();
    updateFlashcardStatus('review');
});

// Event listener for Filter button
filterBtn.addEventListener('click', () => {
    if (filterStatus === 'all') {
        filterStatus = 'review';
        filterBtn.textContent = 'Filter: Needs Review';
    } else if (filterStatus === 'review') {
        filterStatus = 'mastered';
        filterBtn.textContent = 'Filter: Mastered';
    } else {
        filterStatus = 'all';
        filterBtn.textContent = 'Filter: All';
    }
    currentCard = 0;
    loadFlashcard(currentCard);
});

// Select the Back to Main Menu button
const backToMenuBtn = document.getElementById('back-to-menu-btn');

// Event listener for Back to Main Menu button
backToMenuBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
});

// Initial setup
loadFlashcards();
updateProgressCounts();
loadFlashcard(currentCard);
