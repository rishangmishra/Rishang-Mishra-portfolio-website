


const typingElement = document.getElementById('typing');
const strings = ["Web Developer", "Web Designer", "Freelancer"];
let currentStringIndex = 0;
let currentCharIndex = 0;
let typingSpeed = 150; // Speed in milliseconds
let deletingSpeed = 75; // Speed in milliseconds
let isDeleting = false;

function type() {
    const currentString = strings[currentStringIndex];
    if (isDeleting) {
        typingElement.textContent = currentString.substring(0, currentCharIndex--);
        if (currentCharIndex < 0) {
            isDeleting = false;
            currentStringIndex = (currentStringIndex + 1) % strings.length;
            setTimeout(type, 500); // Pause before starting to type the next string
        } else {
            setTimeout(type, deletingSpeed);
        }
    } else {
        typingElement.textContent = currentString.substring(0, currentCharIndex++);
        if (currentCharIndex > currentString.length) {
            isDeleting = true;
            setTimeout(type, 2000); // Pause before starting to delete
        } else {
            setTimeout(type, typingSpeed);
        }
    }
}

type();
