const svgFilter = require('./svg-filter.handlebars');

const loadFilter = (deviation = 20) => {
    let filterContainer = document.querySelector('.image-preload_filter');

    if(filterContainer){
        return;
    }

    filterContainer = document.createElement('DIV');
    filterContainer.classList.add('image-preload_filter');
    filterContainer.innerHTML = svgFilter({
        deviation,
    });
    document.body.appendChild(filterContainer);
}

module.exports = loadFilter;