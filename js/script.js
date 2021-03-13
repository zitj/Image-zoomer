const crosshair = document.querySelector('.crosshair');
const frame = document.querySelector('.frame');
const image = document.getElementById('hero');
const body = document.querySelector('body');

let ratio = 2;

const increaseRatio = () => {
    ratio += 0.5;
    console.log(ratio);
    if (ratio >= 6) {
        ratio = 2;
    }
};

const displayCrosshair = (e) => {
    crosshair.style.display = 'block';
    crosshair.style.left = e.pageX + 'px';
    crosshair.style.top = e.pageY + 'px';
};

const zooming = (e) => {
    let bounds = image.getBoundingClientRect();
    let x = e.pageX - 120 / 4 - bounds.left;
    let y = e.pageY - 120 / 4 - bounds.top;

    displayCrosshair(e);

    if (crosshair.style.display == 'block') {
        crosshair.style.backgroundImage = `url(${image.src})`;
        crosshair.style.backgroundSize =
            image.width * ratio + 'px ' + image.height * ratio + 'px';
        crosshair.style.backgroundRepeat = 'no-repeat';
        crosshair.style.backgroundPosition =
            '-' + x * ratio + 'px -' + y * ratio + 'px';
        crosshair.addEventListener('click', increaseRatio);
        window.onscroll = function (e) {
            console.log(e);
        };
    }

    hideCrosshair(e);
};

const hideCrosshair = (e) => {
    if (
        e.pageX < (window.screen.width - (image.width + 20)) / 2 ||
        e.pageX > window.screen.width / 2 + (image.width + 20) / 2 ||
        e.pageY < window.screen.height / 2 - (image.height + 20) / 2 ||
        e.pageY > window.screen.height / 2 + (image.height + 20) / 2
    ) {
        crosshair.style.display = 'none';
    }
};

frame.addEventListener('mouseenter', () => {
    document.addEventListener('mousemove', zooming);
});
