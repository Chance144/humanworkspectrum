// Main JavaScript file for interactivity

document.addEventListener('DOMContentLoaded', () => {
    console.log('Human Work Spectrum website loaded.');

    // Donation Modal Logic
    const donateBtn = document.getElementById('donate-btn');
    const modal = document.getElementById('donation-modal');
    const closeBtn = document.querySelector('.close-modal');

    function openModal() {
        modal.classList.remove('hidden');
    }

    function closeModal() {
        modal.classList.add('hidden');
    }

    // Close modal when clicking outside content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    if (donateBtn) donateBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
});
