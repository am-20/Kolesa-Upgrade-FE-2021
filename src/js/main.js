import '../css/style.css';

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

const colorRadioBtn = document.querySelectorAll('.color_input');
const colorBlock = document.querySelectorAll('.colors_radio_btn');

const sizeRadioBtn = document.querySelectorAll('.size_input');
const sizeBlock = document.querySelectorAll('.sizes_radio_btn');

for (let i = 0; i < colorRadioBtn.length; i += 1) {
    if (colorRadioBtn[i].checked === true) {
        colorBlock[i].style.background = '#d6ecfb';
    }
}

for (let i = 0; i < sizeRadioBtn.length; i += 1) {
    if (sizeRadioBtn[i].checked === true) {
        sizeBlock[i].style.background = '#d6ecfb';
    }
}
