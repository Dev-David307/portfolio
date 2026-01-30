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
    image: "./images/WhatsApp Image 2025-11-13 at 15.33.47_c2fd478d.jpg",
  },
  {
    image:
      "./images/david.jpg",
  },
  {
    image:
      "https://images.unsplash.com/photo-1533227268884-1be32fe00fcd?w=400&h=600&fit=crop",
  },
];

let currentSlide = 0;
let autoSlideInterval;

const carouselImage = document.getElementById("carouselImage");
const dotsContainer = document.getElementById("dots");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

// Create dots
videos.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");

  dot.addEventListener("click", () => {
    goToSlide(i);
    resetAutoSlide();
  });

  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

// Animate + render slide
function renderSlide() {
  carouselImage.style.opacity = "0";
  carouselImage.style.transform = "scale(1.05)";

  setTimeout(() => {
    carouselImage.src = videos[currentSlide].image;
    carouselImage.style.opacity = "1";
    carouselImage.style.transform = "scale(1)";
  }, 300);

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

// Auto slide every 5 seconds
function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

// Button events
nextBtn.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

// Init
renderSlide();
startAutoSlide();


  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('active');
  });