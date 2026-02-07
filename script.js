const scenes = document.querySelectorAll(".scene");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.2 }
);

scenes.forEach(scene => observer.observe(scene));

document.getElementById("viewProjectsBtn").addEventListener("click", () => {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
});

