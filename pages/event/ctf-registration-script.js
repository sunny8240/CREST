let currentStep = 1;
let teamSize = 0;

function nextStep(step) {
  if (!validateStep(step)) {
    return;
  }

  document.getElementById(`step${step}`).classList.remove("active");
  document.getElementById(`step${step + 1}`).classList.add("active");

  updateProgress(step + 1);

  if (step === 1) {
    generateMemberFields();
  }

  if (step === 2) {
    showSummary();
  }

  currentStep = step + 1;
  window.scrollTo(0, 0);
}

function previousStep(step) {
  document.getElementById(`step${step}`).classList.remove("active");
  document.getElementById(`step${step - 1}`).classList.add("active");

  updateProgress(step - 1);

  currentStep = step - 1;
  window.scrollTo(0, 0);
}

function updateProgress(step) {
  document.querySelectorAll(".progress-step").forEach((el, index) => {
    if (index < step) {
      el.classList.add("completed");
      el.classList.add("active");
    } else if (index === step - 1) {
      el.classList.add("active");
      el.classList.remove("completed");
    } else {
      el.classList.remove("active");
      el.classList.remove("completed");
    }
  });

  const progressLines = document.querySelectorAll(".progress-line-fill");
  progressLines.forEach((line, index) => {
    if (index < step - 1) {
      line.classList.add("filled");
    } else {
      line.classList.remove("filled");
    }
  });
}

function validateStep(step) {
  if (step === 1) {
    const teamName = document.getElementById("teamName").value.trim();
    const teamSizeValue = document.getElementById("teamSize").value;
    const institution = document.getElementById("institution").value.trim();
    const skillLevel = document.getElementById("skillLevel").value;

    if (!teamName) {
      showError("Please enter a team name");
      return false;
    }

    if (!teamSizeValue) {
      showError("Please select team size");
      return false;
    }

    if (!institution) {
      showError("Please enter your institution name");
      return false;
    }

    if (!skillLevel) {
      showError("Please select skill level");
      return false;
    }

    teamSize = parseInt(teamSizeValue);
    return true;
  }

  if (step === 2) {
    const member1Name = document.getElementById("member1Name").value.trim();
    const member1Email = document.getElementById("member1Email").value.trim();
    const member1Phone = document.getElementById("member1Phone").value.trim();

    if (!member1Name || !member1Email || !member1Phone) {
      showError("Please fill in all required fields for the team captain");
      return false;
    }

    if (!validateEmail(member1Email)) {
      showError("Please enter a valid email address for the team captain");
      return false;
    }

    for (let i = 2; i <= teamSize; i++) {
      const nameField = document.getElementById(`member${i}Name`);
      const emailField = document.getElementById(`member${i}Email`);

      if (nameField && emailField) {
        const name = nameField.value.trim();
        const email = emailField.value.trim();

        if (!name || !email) {
          showError(`Please fill in required fields for Member ${i}`);
          return false;
        }

        if (!validateEmail(email)) {
          showError(`Please enter a valid email for Member ${i}`);
          return false;
        }
      }
    }

    return true;
  }

  return true;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showError(message) {
  alert(message); //this is just for example not for actual website
}

function generateMemberFields() {
  const container = document.getElementById("membersContainer");
  const existingMembers = container.querySelectorAll(".member-card").length;

  const additionalMembers = container.querySelectorAll(
    ".member-card:not(:first-child)"
  );
  additionalMembers.forEach((member) => member.remove());

  for (let i = 2; i <= teamSize; i++) {
    const memberCard = createMemberCard(i);
    container.insertAdjacentHTML("beforeend", memberCard);
  }
}

function createMemberCard(index) {
  return `
        <div class="member-card">
            <div class="member-header">
                <h4>Member ${index}</h4>
                <span class="required-badge">Required</span>
            </div>
            
            <div class="form-row">
                <div class="form-group">
                    <label for="member${index}Name">Full Name *</label>
                    <input type="text" id="member${index}Name" name="member${index}Name" required placeholder="Full name">
                </div>
                <div class="form-group">
                    <label for="member${index}Email">Email *</label>
                    <input type="email" id="member${index}Email" name="member${index}Email" required placeholder="email@example.com">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="member${index}Phone">Phone Number</label>
                    <input type="tel" id="member${index}Phone" name="member${index}Phone" placeholder="+1 (555) 000-0000">
                </div>
                <div class="form-group">
                    <label for="member${index}Discord">Discord Username</label>
                    <input type="text" id="member${index}Discord" name="member${index}Discord" placeholder="username#0000">
                </div>
            </div>

            <div class="form-group">
                <label for="member${index}Specialty">CTF Specialty</label>
                <select id="member${index}Specialty" name="member${index}Specialty">
                    <option value="">Select specialty</option>
                    <option value="web">Web Exploitation</option>
                    <option value="crypto">Cryptography</option>
                    <option value="forensics">Forensics</option>
                    <option value="reversing">Reverse Engineering</option>
                    <option value="pwn">Binary Exploitation (PWN)</option>
                    <option value="osint">OSINT</option>
                    <option value="misc">Miscellaneous</option>
                </select>
            </div>
        </div>
    `;
}

function showSummary() {
  const teamName = document.getElementById("teamName").value;
  const teamSizeValue = document.getElementById("teamSize").value;
  const institution = document.getElementById("institution").value;
  const skillLevel = document.getElementById("skillLevel").value;

  const skillLevelText = {
    beginner: "Beginner (New to CTFs)",
    intermediate: "Intermediate (Some CTF experience)",
    advanced: "Advanced (Experienced CTF players)",
  };

  const teamSummaryHTML = `
        <div class="summary-item">
            <span class="summary-label">Team Name:</span>
            <span class="summary-value">${teamName}</span>
        </div>
        <div class="summary-item">
            <span class="summary-label">Team Size:</span>
            <span class="summary-value">${teamSizeValue} member(s)</span>
        </div>
        <div class="summary-item">
            <span class="summary-label">Institution:</span>
            <span class="summary-value">${institution}</span>
        </div>
        <div class="summary-item">
            <span class="summary-label">Skill Level:</span>
            <span class="summary-value">${skillLevelText[skillLevel]}</span>
        </div>
    `;

  document.getElementById("teamSummary").innerHTML = teamSummaryHTML;

  let membersSummaryHTML = "";

  for (let i = 1; i <= teamSize; i++) {
    const name = document.getElementById(`member${i}Name`).value;
    const email = document.getElementById(`member${i}Email`).value;
    const phone =
      document.getElementById(`member${i}Phone`)?.value || "Not provided";
    const discord =
      document.getElementById(`member${i}Discord`)?.value || "Not provided";
    const specialty =
      document.getElementById(`member${i}Specialty`)?.value || "Not specified";

    const specialtyText = {
      web: "Web Exploitation",
      crypto: "Cryptography",
      forensics: "Forensics",
      reversing: "Reverse Engineering",
      pwn: "Binary Exploitation (PWN)",
      osint: "OSINT",
      misc: "Miscellaneous",
      "": "Not specified",
    };

    const role = i === 1 ? "Team Captain" : `Member ${i}`;

    membersSummaryHTML += `
            <div class="member-summary-item">
                <h4>${role}</h4>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Discord:</strong> ${discord}</p>
                <p><strong>Specialty:</strong> ${specialtyText[specialty]}</p>
            </div>
        `;
  }

  document.getElementById("membersSummary").innerHTML = membersSummaryHTML;
}

document
  .getElementById("ctfRegistrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const agreeTerms = document.getElementById("agreeTerms").checked;
    const agreeRules = document.getElementById("agreeRules").checked;

    if (!agreeTerms || !agreeRules) {
      showError("Please agree to the terms and conditions");
      return;
    }

    const confirmationCode = generateConfirmationCode();
    const formData = collectFormData();

    console.log("Form submitted:", formData);

    document.getElementById("confirmationCode").textContent = confirmationCode;
    document.querySelector(".registration-form").style.display = "none";
    document.getElementById("successMessage").style.display = "block";

    window.scrollTo(0, 0);
  });

function collectFormData() {
  const data = {
    team: {
      name: document.getElementById("teamName").value,
      size: document.getElementById("teamSize").value,
      institution: document.getElementById("institution").value,
      skillLevel: document.getElementById("skillLevel").value,
    },
    members: [],
  };

  for (let i = 1; i <= teamSize; i++) {
    data.members.push({
      name: document.getElementById(`member${i}Name`).value,
      email: document.getElementById(`member${i}Email`).value,
      phone: document.getElementById(`member${i}Phone`)?.value || "",
      discord: document.getElementById(`member${i}Discord`)?.value || "",
      specialty: document.getElementById(`member${i}Specialty`)?.value || "",
    });
  }

  return data;
}

function generateConfirmationCode() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "CTF-";
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}
