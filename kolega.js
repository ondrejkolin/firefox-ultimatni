function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const els = document.querySelectorAll("body *");

const colorInterval = setInterval(() => {
    //let prvek = els[Math.floor(Math.random() * els.length)];
    //prvek.style = 'background-color:' + getRandomColor();
    //console.log('color', prvek);
}, 1);

const interval = setInterval(() => {
    const prvky = document.querySelectorAll("body *");
    if (!prvky.length) {
        clearInterval(interval);
        clearInterval(colorInterval);
        const body = document.querySelectorAll("body")[0];
        body.className = 'warning';
        setTimeout(function () {
            body.className = 'blinking';
        }, 3000);
    }
    let prvek = prvky[Math.floor(Math.random() * prvky.length)];
    console.log(prvek);
    prvek.remove();
}, 100);
