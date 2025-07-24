// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-active'); // Add a class to trigger animation
            entry.target.style.opacity = '1'; // Ensure it's visible
            entry.target.style.transform = 'translateX(0)'; // Ensure it's in final position
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, observerOptions);

// Apply observer to elements with animation classes
document.querySelectorAll('.animate-slide-in-left').forEach(el => {
    observer.observe(el);
});

// Function to show custom message box
function showMessageBox(title, message) {
    const overlay = document.createElement('div');
    overlay.className = 'message-box-overlay';
    overlay.innerHTML = `
        <div class="message-box-content">
            <h3>${title}</h3>
            <p>${message}</p>
            <button id="messageBoxCloseBtn">OK</button>
        </div>
    `;
    document.body.appendChild(overlay);

    document.getElementById('messageBoxCloseBtn').addEventListener('click', () => {
        overlay.remove();
    });
}

// "Show Day Info" button functionality
document.getElementById('showDayInfoBtn').addEventListener('click', () => {
    const dayInput = document.getElementById('dayInput').value.trim();
    if (dayInput) {
        showMessageBox('Day Information', `You requested information for: ${dayInput}. (Feature to be implemented)`);
    } else {
        showMessageBox('Input Required', 'Please enter a day (e.g., Day 1, Day 2).');
    }
});

// Parallax effect for the title
const mechforgeTitle = document.getElementById('mechforge-title');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    // Adjust the multiplier for more or less parallax effect
    mechforgeTitle.style.transform = `translateY(${scrollY * 0.3}px)`;
});

// FAQ Accordion functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answerId = `faq-answer-${question.dataset.faq}`;
        const answer = document.getElementById(answerId);
        const icon = question.querySelector('.icon');

        // Close all other open FAQs
        document.querySelectorAll('.faq-answer.open').forEach(openAnswer => {
            if (openAnswer.id !== answerId) {
                openAnswer.classList.remove('open');
                openB
                openAnswer.previousElementSibling.classList.remove('active');
            }
        });

        // Toggle the clicked FAQ
        answer.classList.toggle('open');
        question.classList.toggle('active');
    });
});
