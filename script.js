// ================================
// Smooth scroll til menu-links
// ================================

const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        // tjekker at det er et internt link
        if (targetId.startsWith('#')) {
            e.preventDefault();

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});


// ================================
// Aktivt nav-link mens man scroller
// ================================

const sections = document.querySelectorAll('section[id]');

function setActiveLink() {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');

        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);


// ================================
// Fade-in animation når sektioner kommer frem
// ================================

const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2
});

revealElements.forEach(element => {
    observer.observe(element);
});






// ================================
// CHANGING TEXT (dynamic text)
// ================================

const words = [
    "UX Designer",
    "Creative thinker",
    "Web Designer",
    "Branding lover",
    "Digital creator"
];

let wordIndex = 0;

function changeText() {
    const textElement = document.getElementById("changing-text");

    if (!textElement) return;

    textElement.style.opacity = 0;

    setTimeout(() => {
        textElement.textContent = words[wordIndex];

        wordIndex = (wordIndex + 1) % words.length;

        textElement.style.opacity = 1;
    }, 300);
}

// start første ord
window.addEventListener("load", () => {
    changeText();
    setInterval(changeText, 2000);
});




//kirsebær på resumee side



const cherry = document.getElementById("cherry");

let angle = 0;
let direction = 1;

function swingCherry() {

    angle += 0.3 * direction;

    if (angle > 8 || angle < -8) {
        direction *= -1; // skifter retning
    }

    cherry.style.transform = `rotate(${angle}deg)`;

    requestAnimationFrame(swingCherry);
}

swingCherry();


//resumee titel animation

