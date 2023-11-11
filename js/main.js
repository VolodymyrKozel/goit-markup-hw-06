// Get the link to top
let toTop = document.getElementById("to-top");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    toTop.style.display = "flex";
  } else {
    toTop.style.display = "none";
  }
}
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
function openMobMenu() {
  const closeBtn = document.getElementById("mobile-menu");
  closeBtn.classList.remove("is-close");
}
