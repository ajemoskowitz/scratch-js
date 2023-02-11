setInterval(() => {

    // initialize actors
    document.querySelectorAll('.actor').forEach(actor => {
        actor.style.position = "absolute";
        window[actor.id] = new Actor(actor); 
        window[actor.id].windowY = Number(window[actor.id].element.style.top.match(/\d+/)[0]);
    })

    timer += .01;


}, 10)
