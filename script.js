// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get("name") || "there";

  msg.textContent = `Thanks ${name}! Your message was received.`;
  msg.classList.remove("hidden");
  msg.scrollIntoView({ behavior: "smooth" });

  form.reset();

  setTimeout(() => msg.classList.add("hidden"), 4000);
});
