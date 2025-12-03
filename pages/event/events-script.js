const categoryTabs = document.querySelectorAll(".category-tab");
const eventCards = document.querySelectorAll(".event-card-detailed");
const eventSearch = document.getElementById("eventSearch");

function getActiveCategory() {
  const active = document.querySelector(".category-tab.active");
  return active ? active.dataset.category : "all";
}

function filterEvents() {
  const category = getActiveCategory();
  const query = eventSearch ? eventSearch.value.trim().toLowerCase() : "";

  eventCards.forEach((card, idx) => {
    card.setAttribute("role", "article");

    const titleElem = card.querySelector("h3");
    const descElem =
      card.querySelector(".event-info p") || card.querySelector("p");

    if (titleElem) {
      if (!titleElem.id) titleElem.id = `event-title-${idx}`;
      card.setAttribute("aria-labelledby", titleElem.id);
    }
    if (descElem) {
      if (!descElem.id) descElem.id = `event-desc-${idx}`;
      card.setAttribute("aria-describedby", descElem.id);
    }

    const matchesCategory =
      category === "all" || card.dataset.category.includes(category);

    const titleText = titleElem ? titleElem.textContent.toLowerCase() : "";
    const descText = descElem ? descElem.textContent.toLowerCase() : "";
    const matchesSearch =
      query === "" || titleText.includes(query) || descText.includes(query);

    if (matchesCategory && matchesSearch) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

categoryTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    categoryTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    filterEvents();
  });
});

if (eventSearch) {
  eventSearch.addEventListener("input", filterEvents);
}

if (eventCards.length) filterEvents();

const galleryFilters = document.querySelectorAll(".gallery-filter");
const galleryItems = document.querySelectorAll(".gallery-item");

galleryFilters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const category = filter.dataset.filter;

    galleryFilters.forEach((f) => f.classList.remove("active"));
    filter.classList.add("active");

    galleryItems.forEach((item) => {
      if (category === "all" || item.dataset.category === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

function updateCountdown() {
  const eventDate = new Date("2024-12-22T09:00:00").getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(
      2,
      "0"
    );
    document.getElementById("minutes").textContent = String(minutes).padStart(
      2,
      "0"
    );
    document.getElementById("seconds").textContent = String(seconds).padStart(
      2,
      "0"
    );
  } else {
    document.getElementById("ctfCountdown").innerHTML =
      '<div class="countdown-item"><span class="countdown-value">Event Started!</span></div>';
  }
}

if (document.getElementById("ctfCountdown")) {
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const imgSrc = item.querySelector("img").src;
    const title = item.querySelector("h4").textContent;
    const description = item.querySelector("p").textContent;

    console.log("Gallery item clicked:", { imgSrc, title, description });
  });
});
