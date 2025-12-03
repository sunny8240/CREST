const urlParams = new URLSearchParams(window.location.search);
const eventType = urlParams.get("event");

const eventConfigs = {
  "web-security": {
    title: "Web Security Workshop",
    badge: "Workshop",
    description: "Learn about web vulnerabilities and secure coding practices",
    date: "December 15, 2024",
    time: "6:00 PM - 8:00 PM",
    location: "Lab 301, CS Building",
  },
  "penetration-testing": {
    title: "Penetration Testing Basics",
    badge: "Workshop",
    description: "Introduction to penetration testing tools and methodologies",
    date: "January 12, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Security Lab 205",
  },
  cryptography: {
    title: "Cryptography & Encryption",
    badge: "Workshop",
    description: "Explore encryption algorithms and cryptographic protocols",
    date: "January 19, 2025",
    time: "4:00 PM - 6:00 PM",
    location: "Room 310",
  },
  "cloud-security": {
    title: "Cloud Security Masterclass",
    badge: "Guest Talk",
    description: "AWS security architecture and best practices",
    date: "January 5, 2025",
    time: "5:00 PM - 7:00 PM",
    location: "Main Auditorium",
  },
  hackathon: {
    title: "Security Tools Hackathon",
    badge: "Hackathon",
    description: "48-hour hackathon to build security tools",
    date: "January 26-28, 2025",
    time: "Friday 6PM - Sunday 6PM",
    location: "Innovation Hub",
  },
};

function loadEventDetails() {
  const config = eventConfigs[eventType] || {
    title: "Cybersecurity Event",
    badge: "Event",
    description: "Join us for this exciting event",
    date: "TBD",
    time: "TBD",
    location: "TBD",
  };

  document.getElementById("eventBadge").textContent = config.badge;
  document.getElementById("eventTitle").textContent = config.title;
  document.getElementById("eventDescription").textContent = config.description;
  document.getElementById("eventDate").textContent = config.date;
  document.getElementById("eventTime").textContent = config.time;
  document.getElementById("eventLocation").textContent = config.location;
}

document
  .getElementById("eventRegistrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      institution: document.getElementById("institution").value,
      studentId: document.getElementById("studentId").value,
      experience: document.getElementById("experience").value,
      interests: document.getElementById("interests").value,
      dietary: document.getElementById("dietary").value,
      newsletter: document.getElementById("newsletter").checked,
      event: eventType,
    };

    if (!document.getElementById("agreeTerms").checked) {
      alert("Please agree to the terms and conditions");
      return;
    }

    const confirmationCode = generateConfirmationCode();
    console.log("Registration submitted:", formData);

    const config = eventConfigs[eventType] || { title: "the event" };
    document.getElementById("successEventTitle").textContent = config.title;
    document.getElementById("confirmationCode").textContent = confirmationCode;
    document.getElementById("confirmationEmail").textContent = formData.email;

    document.getElementById("eventRegistrationForm").style.display = "none";
    document.getElementById("successMessage").style.display = "block";

    window.scrollTo(0, 0);
  });

function generateConfirmationCode() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "REG-";
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

loadEventDetails();
