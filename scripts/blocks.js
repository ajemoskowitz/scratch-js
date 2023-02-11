Last login: Fri Feb 10 18:20:04 on ttys002
ty@seth-the-cat sratch-js-tester % npm start

> sratch-js-tester@1.0.0 start
> electron-forge start

✔ Checking your system
✔ Locating application
✔ Loading configuration
✔ Preparing native dependencies [0.2s]
✔ Running generateAssets hook

ty@seth-the-cat sratch-js-tester % security find-identity -p codesigning -v
     0 valid identities found
ty@seth-the-cat sratch-js-tester % cd ../
ty@seth-the-cat ~ % cd documents
ty@seth-the-cat documents % gh repo clone ajemoskowitz/scratch-js
zsh: command not found: gh
ty@seth-the-cat documents % git repo clone ajemoskowitz/scratch-js
git: 'repo' is not a git command. See 'git --help'.

The most similar commands are
	grep
	reflog
	remote
	repack
ty@seth-the-cat documents % git
usage: git [-v | --version] [-h | --help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           [--super-prefix=<path>] [--config-env=<name>=<envvar>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone     Clone a repository into a new directory
   init      Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add       Add file contents to the index
   mv        Move or rename a file, a directory, or a symlink
   restore   Restore working tree files
   rm        Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect    Use binary search to find the commit that introduced a bug
   diff      Show changes between commits, commit and working tree, etc
   grep      Print lines matching a pattern
   log       Show commit logs
   show      Show various types of objects
   status    Show the working tree status

grow, mark and tweak your common history
   branch    List, create, or delete branches
   commit    Record changes to the repository
   merge     Join two or more development histories together
   rebase    Reapply commits on top of another base tip
   reset     Reset current HEAD to the specified state
   switch    Switch branches
   tag       Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch     Download objects and refs from another repository
   pull      Fetch from and integrate with another repository or a local branch
   push      Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.
See 'git help git' for an overview of the system.
ty@seth-the-cat documents % git clone ajemoskowitz/scratch-js
fatal: repository 'ajemoskowitz/scratch-js' does not exist
ty@seth-the-cat documents % git fetch ajemoskowitz/scratch-js
fatal: not a git repository (or any of the parent directories): .git
ty@seth-the-cat documents % brew install gh
Running `brew update --auto-update`...
==> Auto-updated Homebrew!
Updated 3 taps (homebrew/cask-versions, homebrew/core and homebrew/cask).
==> New Formulae
spek                                     symlinks                                 touca                                    youplot                                  zsh-autocomplete
==> New Casks
egnyte

You have 13 outdated formulae and 2 outdated casks installed.
You can upgrade them with brew upgrade
or list them with brew outdated.

==> Fetching gh
==> Downloading https://ghcr.io/v2/homebrew/core/gh/manifests/2.23.0
######################################################################## 100.0%
  UW PICO 5.09                                                                                         New Buffer
















































                                                                                             [ Read 463 lines ]
^G Get Help                       ^O WriteOut                       ^R Read File                      ^Y Prev Pg                        ^K Cut Text                       ^C Cur Pos
^X Exit                           ^J Justify                        ^W Where is                       ^V Next Pg                        ^U UnCut Text                     ^T To Spell
  UW PICO 5.09                                                                                      File: blocks.js

class Actor {
    constructor(element) {
        this.element = element;
        this.height = element.height;
        this.width = element.width;
        this.direction = Number(this.element.dataset.angle);
        this.windowY = Number(this.element.dataset.windowY);
        this.size = Number(this.element.dataset.size);
        this.scaleX = Number(this.element.dataset.scaleX);
        this.xPosition = Math.round((element.getBoundingClientRect().x + element.getBoundingClientRect().width / 2) - (window.innerWidth / 2));
        this.yPosition = Math.round(((element.getBoundingClientRect().y + element.getBoundingClientRect().height / 2) - (window.innerHeight / 2)) * -1);
        this.isGliding = (this.element.dataset.glide === 'true');
        this.brightness = Number(this.element.dataset.brightness);
        this.element.style.transform = `scale(${this.size / 100}) rotate(${this.direction - 90}deg) scaleX(${this.scaleX})`;
        this.element.style.filter = `brightness(${(this.brightness / 100) + 1})`
    }

    ////////////////////
    // MOTION BLOCKS
    ////////////////////

    move(steps=10) {
        let newX = this.xPosition + (steps * Math.sin(this.direction * (Math.PI / 180)));
        let newY = this.yPosition + (steps * Math.cos(this.direction * (Math.PI / 180)));
        this.goTo(newX, newY);
    }

    flip() {
        this.element.dataset.scaleX = Number(this.element.dataset.scaleX) * -1;
    }

    turnRight(degrees=15) {
        this.element.dataset.angle = Number(this.element.dataset.angle) + degrees;
    }

    turnLeft(degrees=15) {
        this.element.dataset.angle = Number(this.element.dataset.angle) - degrees;
    }

    goTo(x=0, y=0) {
        if (x === 'mouse') {
            this.goTo(mouseX, mouseY);
        } else if (x === 'random') {
            this.element.style.left = `${pickRandom(0, window.innerWidth)}px`;
            this.element.style.top = `${pickRandom(0, window.innerHeight)}px`;
        } else if (typeof x === 'string') {
            const objectToAttach = document.getElementById(x).getBoundingClientRect();

^G Get Help                       ^O WriteOut                       ^R Read File                      ^Y Prev Pg                        ^K Cut Text                       ^C Cur Pos
^X Exit                           ^J Justify                        ^W Where is                       ^V Next Pg                        ^U UnCut Text                     ^T To Spellclass Actor {
    constructor(element) {
        this.element = element;
        this.height = element.height;
        this.width = element.width;
        this.direction = Number(this.element.dataset.angle);
        this.windowY = Number(this.element.dataset.windowY);
        this.size = Number(this.element.dataset.size);
        this.scaleX = Number(this.element.dataset.scaleX);
        this.xPosition = Math.round((element.getBoundingClientRect().x + element.getBoundingClientRect().width / 2) - (window.innerWidth / 2));
        this.yPosition = Math.round(((element.getBoundingClientRect().y + element.getBoundingClientRect().height / 2) - (window.innerHeight / 2)) * -1);
        this.isGliding = (this.element.dataset.glide === 'true');
        this.brightness = Number(this.element.dataset.brightness);
        this.element.style.transform = `scale(${this.size / 100}) rotate(${this.direction - 90}deg) scaleX(${this.scaleX})`;
        this.element.style.filter = `brightness(${(this.brightness / 100) + 1})`
    }

    ////////////////////
    // MOTION BLOCKS
    ////////////////////

    move(steps=10) {
        let newX = this.xPosition + (steps * Math.sin(this.direction * (Math.PI / 180)));
        let newY = this.yPosition + (steps * Math.cos(this.direction * (Math.PI / 180)));
        this.goTo(newX, newY);
    }

    flip() {
        this.element.dataset.scaleX = Number(this.element.dataset.scaleX) * -1;
    }

    turnRight(degrees=15) {
        this.element.dataset.angle = Number(this.element.dataset.angle) + degrees;
    }

    turnLeft(degrees=15) {
        this.element.dataset.angle = Number(this.element.dataset.angle) - degrees;
    }

    goTo(x=0, y=0) {
        if (x === 'mouse') {
            this.goTo(mouseX, mouseY);
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

    glide(secs=1, x=0, y=0) {
        if (!this.isGliding) {
            if (x === 'mouse') {
                this.element.dataset.glide = true;
                let currentMouseX = mouseX;
                let currentMouseY = mouseY;

                this.element.animate([
                    {
                        left: this.element.style.left,
                        top: this.element.style.top,
                    },
                    {
                        left: `${currentMouseX + (window.innerWidth / 2) - this.width / 2}px`,
                        top: `${currentMouseY - (window.innerHeight / 2) - this.height / 2}px`
                    }
                ], {
                    duration: secs * 1000,
                    iterations: 1
                })

                setTimeout(() => { this.element.dataset.glide = false; }, secs * 1000)

                this.goTo(currentMouseX, currentMouseY);
            } else if (x === 'random') {
                // this.element.dataset.glide = true;
                // let randomX = pickRandom(0, window.innerWidth);
                // let randomY = pickRandom(0, window.innerHeight);

                // this.element.animate([
                //     {
                //         left: this.element.style.left,
                //         top: this.element.style.top,
                //     },
                //     {
                //         left: `${randomX}px`,
                //         top: `${randomY}px`
                //     }
                // ], {
                //     duration: secs * 1000,
                //     iterations: 1
                // })

                // setTimeout(() => { this.element.dataset.glide = false; }, secs * 1000)

                // this.goTo(randomX + (window.innerWidth / 2) - this.width / 2, randomY - (window.innerHeight / 2) - this.height / 2);
            } else if (typeof x == 'string') {
                this.element.dataset.glide = true;
                let currentSpriteX = window[x].xPosition;
                let currentSpriteY = window[x].yPosition;

                this.element.animate([
                    {
                        left: this.element.style.left,
                        top: this.element.style.top,
                    },
                    {
                        left: `${currentSpriteX + (window.innerWidth / 2) - this.width / 2}px`,
                        top: `${currentSpriteY - (window.innerHeight / 2) - this.height / 2}px`
                    }
                ], {
                    duration: secs * 1000,
                    iterations: 1
                })

                setTimeout(() => { this.element.dataset.glide = false; }, secs * 1000)

                this.goTo(currentSpriteX, currentSpriteY);
            } else {
                this.element.dataset.glide = true;

                this.element.animate([
                    {
                        left: this.element.style.left,
                        top: this.element.style.top,
                    },
                    {
                        left: `${(window.innerWidth / 2 - this.width / 2) + x}px`,
                        top: `${(window.innerHeight / 2 - this.element.height / 2) - y}px`
                    }
                ], {
                    duration: secs * 1000,
                    iterations: 1
                })

                setTimeout(() => { this.element.dataset.glide = false; }, secs * 1000)

                this.goTo(x, y);
            }
        }
    }

    pointInDirection(degrees=90) {
        this.element.dataset.angle = degrees;
    }

    pointTowards(sprite) {
        if (sprite == 'mouse' && mouseY >= this.yPosition) {
            let newAngle = Math.asin((mouseX - this.xPosition) / (this.distanceTo('mouse'))) / (Math.PI / 180);
            this.pointInDirection(newAngle);
        } else if (sprite == 'mouse' && mouseY < this.yPosition) {
            let newAngle = Math.asin((this.xPosition - mouseX) / this.distanceTo('mouse')) / (Math.PI / 180);            
            this.pointInDirection(newAngle + 180);
        } else if (window[sprite].yPosition >= this.yPosition) {
            let newAngle = Math.asin((window[sprite].xPosition - this.xPosition) / (this.distanceTo(sprite))) / (Math.PI / 180);
            this.pointInDirection(newAngle);
        } else {
            let newAngle = Math.asin((this.xPosition - window[sprite].xPosition) / this.distanceTo(sprite)) / (Math.PI / 180);            
            this.pointInDirection(newAngle + 180);
        }
    }

    changeXBy(x=10) {
        this.element.style.left = `${this.element.getBoundingClientRect().x + x}px`;
    }

    changeYBy(y=10) {
        if (this.size > 100) {
            this.element.style.top = `${this.windowY - y}px`;
        } else {
            this.element.style.top = `${this.windowY - y}px`;
        }
    }

    setXTo(x=0) {
        this.goTo(x, this.yPosition);
    }

    setYTo(y=0) {
        this.goTo(this.xPosition, y);
    }

    ////////////////////
    // LOOKS BLOCKS
    ////////////////////

    async say(message='Hello!', seconds) {
        document.querySelectorAll(`.message[data-actor=${this.element.id}]`).forEach(message => {
            message.parentNode.removeChild(message);
        })

        const newMessage = document.createElement('div');

        newMessage.classList.add('message');
        newMessage.setAttribute('data-actor', this.element.id);
        newMessage.innerText = message;
        document.body.insertAdjacentElement('beforeend', newMessage);

        if(seconds) {
            await wait(seconds)

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

    // TODO
    changeEffect(effect="brightness", degree=25){
        this.element.dataset.brightness = Number(this.element.dataset.brightness) + degree;
    }
    
    // TODO
    setEffect(effect="brightness", degree=0){
        this.element.dataset.brightness = degree;
    }

    // TODO
    clearGraphicEffects(){
        this.element.dataset.brightness = 0;
    }

    show() {
        this.element.style.display = "block";
    }

    hide() {
        this.element.style.display = "none";
    }

    whenIStartAsAClone(task) {
        this.element.dataset.cloneStart = task;
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
        await wait(5);
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

    ////////////////////
    // SENSING BLOCKS
    ////////////////////

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

    distanceTo(sprite='mouse') {
        if (sprite == 'mouse') {
            return Math.sqrt((mouseX - this.xPosition) ** 2 + (mouseY - this.yPosition) ** 2)
        } else {
            return Math.sqrt((window[sprite].xPosition - this.xPosition) ** 2 + (window[sprite].yPosition - this.yPosition) ** 2)
        }
    }
}

////////////////////
// GLOBAL BLOCKS
////////////////////
////////////////////
// GLOBAL BLOCKS
////////////////////
////////////////////
// GLOBAL BLOCKS
////////////////////

function keyPressed(key) {
    if (key === 'shift') {
        return keyEvent.shiftKey;
    } else if (key === 'any') {
        return activeKeys.length > 0;
    } else {
        return activeKeys.includes(keyConversions[key]);
    }
}

function createClone(sprite) {
    let clone = window[sprite].element.cloneNode();
    clone.id = 'clone' + pickRandom(10000000, 99999999);

    let cloneNode = document.createAttribute('data-clone');
    cloneNode.value = window[sprite].element.id;

    clone.attributes.setNamedItem(cloneNode);

    document.body.querySelector('script').insertAdjacentElement('beforebegin', clone);

    window[clone.id] = new Actor(clone); 

    clone.onload = function () {
        // window[clone.id].say('hi there!!!!')
        window[sprite].element.dataset.cloneStart;
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
