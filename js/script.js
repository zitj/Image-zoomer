const body = document.querySelector('body');
const crosshair = document.querySelector('.crosshair');
const frame = document.querySelector('.frame');
const image = document.getElementById('hero');
const paragraph = document.querySelector('p');

let ratio = 1.75;

const increaseRatio = () => {
    ratio += 0.5;
    if (ratio >= 4) {
        ratio = 1.75;
    }
};

const displayCrosshair = (e) => {
    crosshair.style.display = 'block';
    crosshair.style.left = e.pageX + 'px';
    crosshair.style.top = e.pageY + 'px';
};

const adjustingCrosshairBackground = (e) => {
    let bounds = image.getBoundingClientRect();
    let x = e.pageX - 120 / 4 - bounds.left;
    let y = e.pageY - 120 / 4 - bounds.top;

    if (crosshair.style.display == 'block') {
        paragraph.style.opacity = '0.9';
        crosshair.style.backgroundImage = `url(${image.src})`;
        crosshair.style.backgroundSize =
            image.width * ratio + 'px ' + image.height * ratio + 'px';
        crosshair.style.backgroundRepeat = 'no-repeat';
        crosshair.style.backgroundPosition =
            '-' + x * ratio + 'px -' + y * ratio + 'px';
        crosshair.addEventListener('click', increaseRatio);
    }
};

const hideCrosshair = (e) => {
    if (
        e.pageX < (window.screen.width - (image.width + 20)) / 2 ||
        e.pageX > window.screen.width / 2 + (image.width + 20) / 2 ||
        e.pageY < window.screen.height / 2 - (image.height + 20) / 2 ||
        e.pageY > window.screen.height / 2 + (image.height + 20) / 2
    ) {
        crosshair.style.display = 'none';
        paragraph.style.opacity = '0';
    }
};

const zooming = (e) => {
    displayCrosshair(e);
    adjustingCrosshairBackground(e);
    hideCrosshair(e);
};

frame.addEventListener('mouseenter', () => {
    document.addEventListener('mousemove', zooming);
});
