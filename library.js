// Select DOM elements
const flashcardGrid = document.getElementById('flashcard-grid');
const backToMenuBtn = document.getElementById('back-to-menu-btn');

// Load flashcards from LocalStorage
function loadFlashcards() {
    const storedFlashcards = localStorage.getItem('flashcards');
    return storedFlashcards ? JSON.parse(storedFlashcards) : [];
}

// Display flashcards directly on the page
function displayFlashcards() {
    const flashcards = loadFlashcards();
    flashcardGrid.innerHTML = ''; // Clear existing content

    if (flashcards.length === 0) {
        const noFlashcardsMessage = document.createElement('p');
        noFlashcardsMessage.textContent = "No flashcards available.";
        flashcardGrid.appendChild(noFlashcardsMessage);
    } else {
        flashcards.forEach((flashcard) => {
            const card = document.createElement('div');
            card.classList.add('flashcard');

            // Add content to the card
            card.innerHTML = `
                <div class="flashcard-content">
                    <p><strong>Question:</strong> ${flashcard.question}</p>
                    <p><strong>Answer:</strong> ${flashcard.answer}</p>
                    <p><strong>Category:</strong> ${flashcard.category || 'None'}</p>
                </div>
            `;
            flashcardGrid.appendChild(card);
        });
    }
}

// Event listener for Back to Main Menu button
backToMenuBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
});

// Initialize the library page
displayFlashcards();
