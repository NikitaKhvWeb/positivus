const burgerButton = document.querySelector('.burger-button');
const mobileOverlay = document.querySelector('#mobileOverlay');

burgerButton.addEventListener('click', () => {
  mobileOverlay.showModal();
});
