const interval = setInterval(() => {
    const prvky = document.querySelectorAll("body *");
    if (!prvky.length) {
        clearInterval(interval);
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