// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
}

// Typing Animation
const words = ['Deploy', 'Defend', 'Dominate'];
let currentWordIndex = 0;
let currentText = '';
let isTyping = true;

function typeWord() {
    if (currentWordIndex >= words.length) return;
    
    const word = words[currentWordIndex];
    const wordElement = document.getElementById(`word${currentWordIndex + 1}`);
    const cursorElement = document.getElementById(`cursor${currentWordIndex + 1}`);
    
    if (isTyping && currentText.length < word.length) {
        currentText += word[currentText.length];
        wordElement.textContent = currentText;
        setTimeout(typeWord, 100);
    } else if (isTyping && currentText.length === word.length) {
        cursorElement.classList.add('hidden');
        currentText = '';
        isTyping = true;
        currentWordIndex++;
        
        if (currentWordIndex < words.length) {
            const nextCursor = document.getElementById(`cursor${currentWordIndex + 1}`);
            nextCursor.classList.remove('hidden');
            setTimeout(typeWord, 300);
        }
    }
}

// Start typing animation after a delay
setTimeout(() => {
    document.getElementById('cursor1').classList.remove('hidden');
    typeWord();
}, 400);

// Interactive Grid Canvas
const canvas = document.getElementById('gridCanvas');
const ctx = canvas.getContext('2d');
let mouseX = 0;
let mouseY = 0;
let offset = 0;
const gridSize = 40;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.strokeStyle = 'rgba(139, 92, 246, 0.08)';
    ctx.lineWidth = 1;
    
    // Vertical lines
    for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x + offset, 0);
        ctx.lineTo(x + offset, canvas.height);
        ctx.stroke();
    }
    
    // Horizontal lines
    for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y + offset);
        ctx.lineTo(canvas.width, y + offset);
        ctx.stroke();
    }
    
    // Draw glowing points near mouse
    for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
            const dx = mouseX - x;
            const dy = mouseY - y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 200) {
                const opacity = (1 - distance / 200) * 0.8;
                
                // Create gradient
                const gradient = ctx.createRadialGradient(x + offset, y + offset, 0, x + offset, y + offset, 8);
                gradient.addColorStop(0, `rgba(139, 92, 246, ${opacity})`);
                gradient.addColorStop(0.5, `rgba(236, 72, 153, ${opacity * 0.6})`);
                gradient.addColorStop(1, `rgba(6, 182, 212, ${opacity * 0.3})`);
                
                ctx.fillStyle = gradient;
                ctx.shadowBlur = 25;
                ctx.shadowColor = `rgba(139, 92, 246, ${opacity})`;
                ctx.globalAlpha = opacity;
                ctx.beginPath();
                ctx.arc(x + offset, y + offset, 3, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }
    
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
    
    offset = (offset + 0.2) % gridSize;
    requestAnimationFrame(drawGrid);
}

drawGrid();

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll (for future sections)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe stat cards
document.querySelectorAll('.stat-card').forEach((card, index) => {
    card.style.animationDelay = `${3.2 + index * 0.1}s`;
    observer.observe(card);
});
