// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");

  themeToggle.innerHTML = body.classList.contains("dark")
    ? '<i data-lucide="sun"></i>'
    : '<i data-lucide="moon"></i>';

  lucide.createIcons();
});

// CAROUSEL
const videos = [
  {
    image:
      "./images/WhatsApp Image 2025-11-13 at 15.33.47_c2fd478d.jpg",
  },
  {
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=600&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1533227268884-1be32fe00fcd?w=400&h=600&fit=crop",
  },
];

let currentSlide = 0;

const carouselImage = document.getElementById("carouselImage");
const dotsContainer = document.getElementById("dots");

// Create dots
videos.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function renderSlide() {
  carouselImage.src = videos[currentSlide].image;

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % videos.length;
  renderSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + videos.length) % videos.length;
  renderSlide();
}

function goToSlide(i) {
  currentSlide = i;
  renderSlide();
}

document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", prevSlide);

renderSlide();

function updateSlide() {
  const img = document.getElementById("carouselImage");
  img.style.opacity = "0";
  img.style.transform = "scale(1.05)";

  setTimeout(() => {
    img.src = videos[currentSlide].image;
    img.style.opacity = "1";
    img.style.transform = "scale(1)";
  }, 300);

  updateDots();
}

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('active');
  });