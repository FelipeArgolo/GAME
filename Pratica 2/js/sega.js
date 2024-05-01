const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const pulo = () => {

    mario.classList.add('pulo');

    setTimeout(() => {
        mario.classList.remove('pulo');

    }, 700);
}




const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/morrendo.gif';
        mario.style.width = '200px'
        mario.style.marginLeft = '-41px'


        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', pulo);