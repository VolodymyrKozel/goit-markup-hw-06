const heroBtn = document.querySelector(".hero-btn");
const closeBtn = document.getElementById("mobile-menu");

function closeMobMenu() {
  const closeBtn = document.getElementById("mobile-menu");
  closeBtn.classList.add("is-close");
}
function openModal() {
  const modalWindow = document.getElementById("modalWindow");
  modalWindow.classList.remove("is-close");
}
function closeModal() {
  const modalWindow = document.getElementById("modalWindow");
  modalWindow.classList.add("is-close");
}
