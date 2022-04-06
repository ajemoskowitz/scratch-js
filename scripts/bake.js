// these two lines prevent elements from being dragged when clicked
document.body.ondragstart = function() { return false; }
document.body.ondrop = function() { return false; }

document.querySelectorAll('.actor').forEach(actor => {
    actor.style.position = "absolute";
    actor.style.top = "0px";
    actor.style.left = "0px";
    window[actor.id] = new Actor(actor); 
    
    let sizeNode = document.createAttribute('data-size');
    sizeNode.value = '100';

    let angleNode = document.createAttribute('data-angle');
    angleNode.value = '90';

    let scaleXNode = document.createAttribute('data-scale-x');
    scaleXNode.value = '1';

    let glideNode = document.createAttribute('data-glide');
    glideNode.value = 'false';

    let brightnessNode = document.createAttribute('data-brightness');
    brightnessNode.value = '0';

    actor.attributes.setNamedItem(sizeNode);
    actor.attributes.setNamedItem(angleNode);
    actor.attributes.setNamedItem(scaleXNode);
    actor.attributes.setNamedItem(glideNode);
    actor.attributes.setNamedItem(brightnessNode);
})

let timer = 0;
let mouseDown = false;
let mouseX;
let mouseY;

document.onmousemove = function (e) {
    mouseX = e.x - (window.innerWidth / 2);
    mouseY = (window.innerHeight / 2) - e.y;
}

document.onmousedown = function () { mouseDown = true }
document.onmouseup = function () { mouseDown = false }

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