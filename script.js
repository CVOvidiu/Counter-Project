let counter = 0;
const counterElem = document.querySelector('.counter');

const counting = (e) => {
    if(e.target.classList.contains('btn__minus')) counter--;
    else if(e.target.classList.contains('btn__plus')) counter++;
    counterElem.innerHTML = counter;
}

document.querySelector('.btn__minus').addEventListener('click', counting);
document.querySelector('.btn__plus').addEventListener('click', counting);