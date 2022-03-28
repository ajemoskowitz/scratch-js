document.querySelectorAll('.actor').forEach(actor => {
    actor.style.position = "absolute";
    window[actor.id] = new Actor(actor); 
    let sizeNode = document.createAttribute('data-size');
    sizeNode.value = '100';
    actor.attributes.setNamedItem(sizeNode);
})

let mouseX;
let mouseY;

document.onmousemove = function (e) {
    mouseX = e.x;
    mouseY = e.y;
}

document.body.style.overflow = "hidden";

const keyConversions = {
    'space': ' ',
    'enter': 'Enter',
    'a': 'a',
    'b': 'b',
    'c': 'c',
    'd': 'd',
    'e': 'e',
    'f': 'f',
    'g': 'g',
    'h': 'h',
    'i': 'i',
    'j': 'j',
    'k': 'k',
    'l': 'l',
    'm': 'm',
    'n': 'n',
    'o': 'o',
    'p': 'p',
    'q': 'q',
    'r': 'r',
    's': 's',
    't': 't',
    'u': 'u',
    'v': 'v',
    'w': 'w',
    'x': 'x',
    'y': 'y',
    'z': 'z',
    '0': '0',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    'right arrow': 'ArrowRight',
    'left arrow': 'ArrowLeft',
    'up arrow': 'ArrowUp',
    'down arrow': 'ArrowDown'
}

const globalMessages = []