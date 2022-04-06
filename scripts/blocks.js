class Actor {
    constructor(element) {
        this.element = element;
        this.width = element.width;
        this.direction = Number(this.element.dataset.angle);
        this.size = Number(this.element.dataset.size);
        this.scaleX = Number(this.element.dataset.scaleX);
        this.xPosition = Math.round((element.getBoundingClientRect().x + element.getBoundingClientRect().width / 2) - (window.innerWidth / 2));
        this.yPosition = Math.round(((element.getBoundingClientRect().y + element.getBoundingClientRect().height / 2) - (window.innerHeight / 2)) * -1);
        this.element.style.transform = `scale(${this.size / 100}) rotate(${this.direction - 90}deg) scaleX(${this.scaleX})`;
    }

    move(steps=10) {
        let newX = this.xPosition + (steps * Math.sin(this.direction * (Math.PI / 180)));
        let newY = this.yPosition + (steps * Math.cos(this.direction * (Math.PI / 180)));
        this.goTo(newX, newY);
    }

    flip() {
        this.element.dataset.scaleX = Number(this.element.dataset.scaleX) * -1;
    }

    turnClockwise(degrees=15) {
        this.element.dataset.angle = Number(this.element.dataset.angle) + degrees;
    }

    turnCounterClockwise(degrees=15) {
        this.element.dataset.angle = Number(this.element.dataset.angle) - degrees;
    }

    pointInDirection(degrees=90) {
        this.element.dataset.angle = degrees;
    }

    goTo(x=0, y=0) {
        if (x === 'mouse') {
            this.element.style.left = `${mouseX + (window.innerWidth / 2) - this.width / 2}px`;
            this.element.style.top = `${mouseY - (window.innerHeight / 2) - this.height / 2}px`;
        } else if (x === 'random') {
            this.element.style.left = `${pickRandom(0, window.innerWidth)}px`;
            this.element.style.top = `${pickRandom(0, window.innerHeight)}px`;
        } else if (typeof x === 'string') {
            const objectToAttach = document.getElementById(x).getBoundingClientRect();
            this.element.style.left = `${window.innerWidth / 2 - this.width / 2 + x}px`;
            this.element.style.top = `${window.innerHeight / 2 - this.element.height / 2 - y}px`;
        } else {
            this.element.style.left = `${(window.innerWidth / 2 - this.width / 2) + x}px`;
            this.element.style.top = `${(window.innerHeight / 2 - this.element.height / 2) - y}px`;
        }
    }

    changeXBy(x=10) {
        this.element.style.left = `${this.element.getBoundingClientRect().x + x}px`;
    }

    changeYBy(y=10) {
        this.element.style.top = `${this.element.getBoundingClientRect().y - y}px`;
    }

    setXTo(x=0) {
        this.goTo(x, this.yPosition);
    }

    setYTo(y=0) {
        this.goTo(this.xPosition, y);
    }

    async say(message='Hello!', seconds) {
        document.querySelectorAll(`.message[data-actor=${this.element.id}]`).forEach(message => {
            message.parentNode.removeChild(message);
        })

        const newMessage = document.createElement('div');

        newMessage.classList.add('message');
        newMessage.setAttribute('data-actor', this.element.id);
        newMessage.innerText = message;
        newMessage.style.position = 'relative';
        newMessage.style.left = this.element.getBoundingClientRect().x - this.width / 2 + "px";
        newMessage.style.top = this.element.getBoundingClientRect().y - this.element.height * 1.5  + "px";
        document.body.insertAdjacentElement('beforeend', newMessage);

        if(seconds) {
            await this.wait(seconds)

            document.querySelectorAll(`.message[data-actor=${this.element.id}]`).forEach(message => {
                message.parentNode.removeChild(message);
            })
        }
    }

    changeSizeBy(num=10) {
        if (this.size + num <= 0) {
            this.element.dataset.size = 0;
        } else {
            this.element.dataset.size = this.size + num;
        }
    }

    setSizeTo(num=100) {
        if(num < 0) { num = 0; }
        this.element.dataset.size = num;
    }

    show() {
        this.element.style.visibility = "visible";
    }

    hide() {
        this.element.style.visibility = "hidden";
    }

    createClone() {
        const clone = document.createElement('img');

        clone.classList.add('actor');
        clone.src = this.element.attributes.src.value;
        clone.style.left = this.element.getBoundingClientRect().x + "px";
        clone.style.top = this.element.getBoundingClientRect().y + "px";
        document.body.insertAdjacentElement('beforeend', clone);
    }

    whenClicked(task) {
        this.element.addEventListener('click', () => {
            task();
        })
    }

    async broadcast(message) {
        const randId = Math.random();
        globalMessages.push({
            id: randId,
            message: message
        });
        await this.wait(5);
        globalMessages.forEach((object, i) => {
            if (object.id === randId) {
                globalMessages.splice(i, 1);
            }
        })
    }

    whenIReceive(message, task) {
        setInterval(() => {            
            globalMessages.forEach((object, i) => {
                if (object.message === message) {
                    task();
                    globalMessages.splice(i, 1);
                }
            })
        },10)
    }

    isTouching(object) {
        if (object === 'mouse') {
            const withinX = mouseX >= this.element.getBoundingClientRect().x && mouseX <= this.element.getBoundingClientRect().x + this.element.width;
            const withinY = mouseY >= this.element.getBoundingClientRect().y && mouseY <= this.element.getBoundingClientRect().y + this.element.height;
            return withinX && withinY;
        } else if (object === 'edge') {
            const thisRect = this.element.getBoundingClientRect();
            const overlap = (window.innerWidth < thisRect.right || 
                0 > thisRect.left || 
                0 > thisRect.top || 
                window.innerHeight < thisRect.bottom)

            return overlap;

        } else {
            const objectToTouch = document.getElementById(object).getBoundingClientRect();
            const thisRect = this.element.getBoundingClientRect();
            const overlap = !(objectToTouch.right < thisRect.left || 
                objectToTouch.left > thisRect.right || 
                objectToTouch.bottom < thisRect.top || 
                objectToTouch.top > thisRect.bottom)
            
            return overlap;
        }
    }
}

async function wait(seconds=1) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

function resetTimer() {
    timer  = 0;
}

async function repeat(task, iterations=10) {
    let counter = 1;
    while(counter <= iterations) {
        await wait(.03);
        task();
        counter++;
    }
}

function ask(question) {
    return prompt(question);
}

function switchBackdropTo(backdrop) {
    document.body.style.backgroundImage = `url(backdrops/${backdrop})`;
}

function pickRandom(from, to) {
    if (to < from) {
        return console.error('randNum: "from" value is greater than "to" value.');
    }
    let tempNum = Math.round(Math.random() * to);
    if (tempNum < from) {
        return pickRandom(from, to);
    }
    return tempNum;
}

async function forever(task) {
    setInterval(()=> {
        task();
    }, 30);
}

async function whenPressed(key, task) {
    document.addEventListener('keydown', (e) => {
        if(e.key === keyConversions[key]) {
            task();
        }
    })
}

function playSound(sound) {
    const audio = new Audio(`./sounds/${sound}`);
    audio.play();
}

function join(s1='', s2='') {
    return s1 + s2;
}

function letter(num, s) {
    return s[num - 1];
}

function lengthOf(s='') {
    return s.length;
}

String.prototype.contains = function (s) {
    return this.includes(s);
}

Number.prototype.mod = function (num) {
    return this % num;
}

function round(num) {
    return Math.round(num);
}

function abs(num) {
    return Math.abs(num);
}

function floor(num) {
    return Math.floor(num);
}

function ceiling(num) {
    return Math.ceil(num);
}

function sqrt(num) {
    return Math.sqrt(num);
}

function sin(num) {
    return Math.sin(num);
}

function cos(num) {
    return Math.cos(num);
}