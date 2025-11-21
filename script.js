// Set year automatically
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form demo message
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get("name");
  msg.textContent = `Thanks ${name || ""}! Your message was received.`;
  msg.classList.remove("hidden");
  form.reset();
  setTimeout(() => msg.classList.add("hidden"), 4000);
});

// Project link demo
// document.querySelectorAll(".project-link").forEach((a) => {
//   a.addEventListener("click", (e) => {
//     e.preventDefault();
//     alert("This is a demo. Replace this link with your actual project URL.");
//   });
// });

// Auto update footer year dynamically
document.getElementById("year").textContent = new Date().getFullYear();

