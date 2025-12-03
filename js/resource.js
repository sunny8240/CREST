const learningPaths = [
  {
    id: 1,
    title: "Introduction to Cybersecurity",
    description: "Learn the basics of cybersecurity and offensive security",
    icon: "☣️",
    iconColor: "#22c55e",
    rooms: 12,
    hours: 24,
    progress: 0,
    free: true,
  },
  {
    id: 2,
    title: "Offensive Pentesting",
    description: "Learn penetration testing and red team operations",
    icon: "⚡",
    iconColor: "#f97316",
    rooms: 18,
    hours: 42,
    progress: 33,
    free: false,
  },
  {
    id: 3,
    title: "Complete Beginner",
    description: "Start your hacking journey with zero prerequisites",
    icon: "🏆",
    iconColor: "#06b6d4",
    rooms: 15,
    hours: 30,
    progress: 60,
    free: true,
  },
];

const rooms = [
  {
    id: 1,
    title: "OWASP Top 10",
    description:
      "Learn about the OWASP Top 10 vulnerabilities and how to exploit them",
    category: "web",
    difficulty: "easy",
    type: "free",
    duration: "4 hours",
    enrolled: 15420,
    rating: 4.8,
    points: 100,
    completionRate: 87,
    image: "/assect/resource/owasp.png",
  },
  {
    id: 2,
    title: "Linux Fundamentals",
    description:
      "Master the Linux command line and essential system administration",
    category: "linux",
    difficulty: "easy",
    type: "free",
    duration: "3 hours",
    enrolled: 23410,
    rating: 4.9,
    points: 80,
    completionRate: 92,
    image: "/assect/resource/linux.png",
  },
  {
    id: 3,
    title: "Cryptography Basics",
    description: "Understand encryption, hashing, and cryptographic protocols",
    category: "crypto",
    difficulty: "medium",
    type: "free",
    duration: "5 hours",
    enrolled: 8920,
    rating: 4.7,
    points: 150,
    completionRate: 74,
    image: "/assect/resource/crypo.png",
  },
  {
    id: 4,
    title: "Network Analysis",
    description: "Analyze network traffic using Wireshark and detect anomalies",
    category: "network",
    difficulty: "medium",
    type: "premium",
    duration: "6 hours",
    enrolled: 12563,
    rating: 4.8,
    points: 200,
    completionRate: 68,
    image: "/assect/resource/net.png",
  },
  {
    id: 5,
    title: "Buffer Overflow",
    description: "Learn to exploit stack-based buffer overflows",
    category: "exploit",
    difficulty: "hard",
    type: "premium",
    duration: "8 hours",
    enrolled: 6340,
    rating: 4.9,
    points: 300,
    completionRate: 45,
    image: "/assect/resource/buffer.png",
  },
  {
    id: 6,
    title: "Digital Forensics",
    description: "Investigate digital evidence using industry-standard tools",
    category: "forensics",
    difficulty: "medium",
    type: "free",
    duration: "5 hours",
    enrolled: 11290,
    rating: 4.6,
    points: 180,
    completionRate: 71,
    image: "/assect/resource/dig.png",
  },
  {
    id: 7,
    title: "Reverse Engineering",
    description: "Decompile and analyze binaries with Ghidra",
    category: "reverse",
    difficulty: "hard",
    type: "premium",
    duration: "10 hours",
    enrolled: 7560,
    rating: 4.8,
    points: 350,
    completionRate: 38,
    image: "/assect/resource/rev.png",
  },
  {
    id: 8,
    title: "Metasploit Framework",
    description: "Master penetration testing with Metasploit",
    category: "exploit",
    difficulty: "medium",
    type: "free",
    duration: "6 hours",
    enrolled: 18340,
    rating: 4.9,
    points: 220,
    completionRate: 79,
    image: "/assect/resource/mat.png",
  },
  {
    id: 9,
    title: "SQL Injection",
    description: "Practice SQLi techniques in a safe environment",
    category: "web",
    difficulty: "easy",
    type: "free",
    duration: "3 hours",
    enrolled: 21040,
    rating: 4.7,
    points: 120,
    completionRate: 85,
    image: "/assect/resource/sql.png",
  },
  {
    id: 10,
    title: "Web Application Firewall Bypass",
    description: "Learn advanced techniques to bypass WAFs",
    category: "web",
    difficulty: "hard",
    type: "premium",
    duration: "7 hours",
    enrolled: 5230,
    rating: 4.8,
    points: 280,
    completionRate: 52,
    image: "/assect/resource/waf.png",
  },
  {
    id: 11,
    title: "Privilege Escalation",
    description: "Master Linux and Windows privilege escalation",
    category: "linux",
    difficulty: "medium",
    type: "free",
    duration: "5 hours",
    enrolled: 14560,
    rating: 4.9,
    points: 190,
    completionRate: 76,
    image: "/assect/resource/pe.png",
  },
  {
    id: 12,
    title: "Active Directory Exploitation",
    description: "Compromise Active Directory environments",
    category: "network",
    difficulty: "hard",
    type: "premium",
    duration: "9 hours",
    enrolled: 6780,
    rating: 4.9,
    points: 320,
    completionRate: 41,
    image: "/assect/resource/ad.png",
  },
];

let selectedCategory = "all";
let searchQuery = "";
let selectedDifficulties = [];
let selectedTypes = [];

const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".category-btn");
const filterCheckboxes = document.querySelectorAll(".filter-checkbox");
const clearFiltersBtn = document.getElementById("clearFiltersBtn");
const learningPathsContainer = document.getElementById("learningPaths");
const roomsGridContainer = document.getElementById("roomsGrid");
const roomsCountElement = document.getElementById("roomsCount");
const noResultsElement = document.getElementById("noResults");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

document.addEventListener("DOMContentLoaded", () => {
  renderLearningPaths();
  renderRooms();

  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase();
    renderRooms();
  });

  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      categoryButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedCategory = btn.dataset.category;
      renderRooms();
    });
  });

  filterCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      const filterType = e.target.dataset.filter;
      const value = e.target.value;

      if (filterType === "difficulty") {
        if (e.target.checked) {
          selectedDifficulties.push(value);
        } else {
          selectedDifficulties = selectedDifficulties.filter(
            (d) => d !== value
          );
        }
      } else if (filterType === "type") {
        if (e.target.checked) {
          selectedTypes.push(value);
        } else {
          selectedTypes = selectedTypes.filter((t) => t !== value);
        }
      }

      updateClearFiltersBtn();
      renderRooms();
    });
  });

  clearFiltersBtn.addEventListener("click", () => {
    selectedDifficulties = [];
    selectedTypes = [];
    filterCheckboxes.forEach((checkbox) => (checkbox.checked = false));
    updateClearFiltersBtn();
    renderRooms();
  });

  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});

function renderLearningPaths() {
  learningPathsContainer.innerHTML = learningPaths
    .map(
      (path) => `
        <div class="path-card">
            ${
              path.progress > 0
                ? `
                <div class="path-card-progress">
                    <div class="path-card-progress-bar" style="width: ${path.progress}%"></div>
                </div>
            `
                : ""
            }
            <div class="path-card-header">
                <div class="path-icon" style="background-color: ${
                  path.iconColor
                }20;">
                    <span style="font-size: 24px;">${path.icon}</span>
                </div>
                <div class="path-badge ${
                  path.free ? "badge-free" : "badge-premium"
                }">
                    ${
                      !path.free
                        ? `
                        <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                        </svg>
                    `
                        : ""
                    }
                    ${path.free ? "Free" : "Premium"}
                </div>
            </div>
            <h3 class="path-title">${path.title}</h3>
            <p class="path-description">${path.description}</p>
            <div class="path-stats">
                <span>${path.rooms} rooms</span>
                <div class="path-stat-divider"></div>
                <span>${path.hours}h</span>
            </div>
            ${
              path.progress > 0
                ? `
                <div class="path-progress-section">
                    <div class="path-progress-header">
                        <span class="path-progress-label">Progress</span>
                        <span class="path-progress-value">${path.progress}%</span>
                    </div>
                    <div class="path-progress-bar-container">
                        <div class="path-progress-bar" style="width: ${path.progress}%"></div>
                    </div>
                </div>
            `
                : `
                <button class="path-start-btn">
                    <span>Start Path</span>
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                </button>
            `
            }
        </div>
    `
    )
    .join("");
}

function renderRooms() {
  const filteredRooms = rooms.filter((room) => {
    const matchesCategory =
      selectedCategory === "all" || room.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      room.title.toLowerCase().includes(searchQuery) ||
      room.description.toLowerCase().includes(searchQuery);
    const matchesDifficulty =
      selectedDifficulties.length === 0 ||
      selectedDifficulties.includes(room.difficulty);
    const matchesType =
      selectedTypes.length === 0 || selectedTypes.includes(room.type);

    return matchesCategory && matchesSearch && matchesDifficulty && matchesType;
  });

  roomsCountElement.textContent = `${filteredRooms.length} room${
    filteredRooms.length !== 1 ? "s" : ""
  }`;

  if (filteredRooms.length === 0) {
    roomsGridContainer.innerHTML = "";
    noResultsElement.classList.remove("hidden");
  } else {
    noResultsElement.classList.add("hidden");
    roomsGridContainer.innerHTML = filteredRooms
      .map(
        (room) => `
            <div class="room-card">
                <div class="room-image">
                    <img src="${room.image}" alt="${room.title}" loading="lazy">
                    <div class="room-badges">
                        <div class="difficulty-badge difficulty-${
                          room.difficulty
                        }">${room.difficulty}</div>
                        ${
                          room.type === "premium"
                            ? '<div class="type-badge">Premium</div>'
                            : ""
                        }
                    </div>
                    <div class="room-play-overlay">
                        <div class="play-btn">
                            <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="room-content">
                    <h3 class="room-title">${room.title}</h3>
                    <p class="room-description">${room.description}</p>
                    <div class="room-stats">
                        <div class="room-stat">
                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                            </svg>
                            <span style="color: #eab308;">${room.points}</span>
                        </div>
                        <div class="room-stat-divider"></div>
                        <div class="room-stat">
                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <span>${room.duration}</span>
                        </div>
                        <div class="room-stat-divider"></div>
                        <div class="room-stat">
                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                            </svg>
                            <span>${(room.enrolled / 1000).toFixed(1)}k</span>
                        </div>
                    </div>
                    <div class="room-completion">
                        <div class="room-completion-header">
                            <span class="room-completion-label">Completion Rate</span>
                            <span class="room-completion-value">${
                              room.completionRate
                            }%</span>
                        </div>
                        <div class="room-completion-bar">
                            <div class="room-completion-bar-fill" style="width: ${
                              room.completionRate
                            }%"></div>
                        </div>
                    </div>
                    <div class="room-rating">
                        <div class="room-stars">
                            ${generateStars(room.rating)}
                        </div>
                        <span class="room-rating-value">${room.rating}</span>
                    </div>
                </div>
            </div>
        `
      )
      .join("");
  }
}

function generateStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars += `
                <svg class="star-icon filled" width="16" height="16" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
            `;
    } else {
      stars += `
                <svg class="star-icon" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                </svg>
            `;
    }
  }
  return stars;
}

function updateClearFiltersBtn() {
  if (selectedDifficulties.length > 0 || selectedTypes.length > 0) {
    clearFiltersBtn.classList.remove("hidden");
  } else {
    clearFiltersBtn.classList.add("hidden");
  }
}
