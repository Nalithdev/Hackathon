document.addEventListener('DOMContentLoaded', function () {
    const textElements = document.querySelectorAll('p');
    let isZoomEnabled = false;

    function toggleZoom() {
        isZoomEnabled = !isZoomEnabled;
    }

    textElements.forEach(text => {
        text.addEventListener('mouseover', () => {
            if (isZoomEnabled) {
                text.classList.add('zoomed');
            }
        });

        text.addEventListener('mouseout', () => {
            text.classList.remove('zoomed');
        });
    });

    const toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', toggleZoom);
});

function dys(){

    let div = document.querySelectorAll('div')
    let p = document.querySelectorAll('p')
    document.querySelector('header').classList.add('dys')
    document.querySelector('body').classList.add('dys')
    document.querySelector('a').classList.add('dys')
    div.forEach(element => {
        element.classList.add('dys')
    });

    p.forEach(element => {
        element.classList.add('dys')
    });

    
}