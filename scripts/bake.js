document.querySelectorAll('.actor').forEach(actor => {
    actor.style.position = "relative";
    window[actor.id] = new Actor(actor); 
})

document.body.style.overflow = "hidden";

const keyConversions = {
    'space': ' ',
    'enter': 'Enter',
    'a': 'a',
    'right arrow': 'ArrowRight',
    'left arrow': 'ArrowLeft',
    'up arrow': 'ArrowUp',
    'down arrow': 'ArrowDown'
}

const globalMessages = []