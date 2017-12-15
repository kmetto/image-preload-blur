const loadImage = (src) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload  = () => {
            resolve(image);
        };
        image.onerror  = () => {
            reject(`error loading ${src}`);
        };
        image.src = src;
    });
}

module.exports = loadImage;