const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  const mobileLinks = mobileMenu.querySelectorAll(".mobile-link");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
}

const canvas = document.getElementById("gridCanvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  let mouseX = 0;
  let mouseY = 0;
  let offset = 0;
  const gridSize = 40;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "rgba(139, 92, 246, 0.08)";
    ctx.lineWidth = 1;

    for (let x = 0; x < canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x + offset, 0);
      ctx.lineTo(x + offset, canvas.height);
      ctx.stroke();
    }

    for (let y = 0; y < canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y + offset);
      ctx.lineTo(canvas.width, y + offset);
      ctx.stroke();
    }

    for (let x = 0; x < canvas.width; x += gridSize) {
      for (let y = 0; y < canvas.height; y += gridSize) {
        const dx = mouseX - x;
        const dy = mouseY - y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          const opacity = (1 - distance / 200) * 0.8;

          const gradient = ctx.createRadialGradient(
            x + offset,
            y + offset,
            0,
            x + offset,
            y + offset,
            8
          );
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

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

const cards = document.querySelectorAll(
  ".story-card, .mission-card, .activity-card, .benefit-item"
);
cards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
  observer.observe(card);
});

const terminalCommands = document.querySelectorAll(".command");
terminalCommands.forEach((cmd, index) => {
  const text = cmd.textContent;
  cmd.textContent = "";

  setTimeout(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        cmd.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);
  }, 2000 + index * 1500);
});

window.addEventListener("mousemove", (e) => {
  const orbs = document.querySelectorAll(".glow-orb");
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;

  orbs.forEach((orb, index) => {
    const speed = (index + 1) * 20;
    const x = (mouseX - 0.5) * speed;
    const y = (mouseY - 0.5) * speed;
    orb.style.transform = `translate(${x}px, ${y}px)`;
  });
});

function animateCounter(element, target) {
  let current = 0;
  const increment = target / 100;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 20);
}

const cards2 = document.querySelectorAll(".activity-card, .mission-card");
cards2.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
  });
});
