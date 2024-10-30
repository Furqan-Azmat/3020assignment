document.querySelectorAll('.flashcard').forEach(card => {
    card.addEventListener('click', () => {
        card.querySelector('.card-content').classList.toggle('flip');
    });
});
