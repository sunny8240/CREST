// Clean homepage interactions: mobile menu, typing + glitch, navbar scroll state
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }

    // Typing + Glitch for hero words
    const words = ['Deploy', 'Defend', 'Dominate'];
    const typedFlags = [false, false, false];

    function typeWord(index) {
        const wordNum = index + 1;
        const span = document.getElementById(`word${wordNum}`);
        const container = document.getElementById(`wordText${wordNum}`);
        const cursor = document.getElementById(`cursor${wordNum}`);
        
        if (!span) {
            console.warn(`Element word${wordNum} not found`);
            return;
        }
        if (!container) {
            console.warn(`Element wordText${wordNum} not found`);
            return;
        }
        
        const word = words[index];
        let i = 0;

        function step() {
            if (i <= word.length) {
                span.textContent = word.slice(0, i);
                i++;
                setTimeout(step, 80 + Math.random() * 50);
            } else {
                typedFlags[index] = true;
                // Show cursor and keep it visible briefly then hide for subsequent words
                if (cursor) {
                    cursor.classList.remove('hidden');
                    setTimeout(() => cursor.classList.add('hidden'), 800);
                }
            }
        }
        
        // Show cursor when typing starts
        if (cursor) {
            cursor.classList.remove('hidden');
        }
        step();
    }

    function typeAllWords() {
        // stagger typing of the three word blocks
        typeWord(0);
        setTimeout(() => typeWord(1), 1200);
        setTimeout(() => typeWord(2), 2400);
    }

    // Trigger a brief CSS glitch effect on the word container
    function triggerGlitch(wordIndex) {
        const container = document.getElementById(`wordText${wordIndex+1}`);
        if (!container) return;
        container.classList.add('glitch');
        setTimeout(() => container.classList.remove('glitch'), 420 + Math.random() * 260);
    }

    // Periodically trigger small random glitches on completed words
    setInterval(() => {
        const ready = typedFlags.map((v, i) => v ? i : -1).filter(i => i >= 0);
        if (ready.length === 0) return;
        if (Math.random() < 0.35) {
            const pick = ready[Math.floor(Math.random() * ready.length)];
            triggerGlitch(pick);
        }
    }, 1500 + Math.random() * 800);

    // Start typing on load
    typeAllWords();

    // Interactive Grid Canvas with mouse-over effect
    const canvas = document.getElementById('gridCanvas');
    if (canvas) {
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
    }

    // Navbar scroll state
    const navbar = document.getElementById('navbar');
    if (navbar) {
        function updateNavScroll() {
            if (window.scrollY > 24) navbar.classList.add('scrolled');
            else navbar.classList.remove('scrolled');
        }
        updateNavScroll();
        window.addEventListener('scroll', updateNavScroll);
    }
});
