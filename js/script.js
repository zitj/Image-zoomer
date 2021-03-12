const crosshair = document.querySelector('.crosshair');
const frame = document.querySelector('.frame');
const image = document.querySelector('img');
const body = document.querySelector('body');

let checker = false;

console.log(frame);
console.log(image.height);
console.log(window.screen.height);

const displayCrosshair = (e) => {
    crosshair.style.display = 'block';
    crosshair.style.left = e.pageX + 'px';
    crosshair.style.top = e.pageY + 'px';
    if (
        e.pageX < (window.screen.width - (image.width + 20)) / 2 ||
        e.pageX > window.screen.width / 2 + (image.width + 20) / 2 ||
        e.pageY < window.screen.height / 2 - (image.height + 20) / 2 ||
        e.pageY > window.screen.height / 2 + (image.height + 20) / 2
    ) {
        crosshair.style.display = 'none';
    }
};

const hideCrosshair = (e) => {};

frame.addEventListener('mouseenter', () => {
    document.addEventListener('mousemove', displayCrosshair);
});
