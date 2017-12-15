const loadImage = require('./image-loader');
const loadFilter = require('./filter');
require('./styles.scss');

const preloadImages = function(){
    const containers = document.querySelectorAll('.image-preload');
    loadFilter();
    Array.from(containers).map((container) => {
        
        const width = container.getAttribute('data-width');
        const height = container.getAttribute('data-height');
        const verticalSpacing = document.createElement('DIV');
        
        verticalSpacing.classList.add('image-preload__vertical-spacing');
        verticalSpacing.style.paddingTop = `${height/width*100}%`
        container.appendChild(verticalSpacing);

        const lqImageSrc = container.getAttribute('data-lq');
        const hqImageSrc = container.getAttribute('data-hq');
        let lqImage;
        let hqImage;

        loadImage(lqImageSrc).then((image)=>{
            lqImage = image;
            image.classList.add('image-preload_lq');
            container.appendChild(image);
            setTimeout(()=>{
                lqImage.classList.add('image-preload_lq_loaded');
            }, 0);
        });

        loadImage(hqImageSrc).then((image)=>{
            hqImage = image
            image.classList.add('image-preload_hq');
            container.appendChild(image);
            lqImage.classList.add('image-preload_hq_loaded');
        });
    });
}

module.exports = preloadImages;
