document.querySelector('#app').innerHTML = `
  <h1>Hello, Fatima!</h1>
`;

const openModal = document.querySelector('.open-modal');
const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.modal-backdrop');
const closeModal = document.querySelector('.close');

openModal.addEventListener('click', () => {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
});
