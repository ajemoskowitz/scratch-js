async function startGame() {
    // FOR HELP, GO TO: README.md
    // 👇 WRITE YOUR CODE BELOW THIS PART 👇
    // arrowRight.setSizeTo(20);
    // arrowLeft.setSizeTo(20);
    // arrowUp.setSizeTo(20);
    // arrowDown.setSizeTo(20);

    // arrowLeftPlayer.setSizeTo(20);
    // arrowLeftPlayer.changeEffect('brightness', 50);

    // arrowLeftGoal.setSizeTo(20);

    // forever(async () => {
    //     arrowLeftPlayer.glide(2, 'arrowLeftGoal');
    //     arrowLeftPlayer.goTo(arrowLeftPlayer.xPosition, -1000);
    // })

    let speed = 10;

    forever(() => {
        if(mouseDown) {
            dog.glide(.2, 'mouse')
        }

        if(keyPressed('shift')) {
            speed = 50;
        } else {
            speed = 10;
        }

        if(keyPressed('right arrow') && keyPressed('down arrow')) {
            dog.changeXBy(speed)
            dog.changeYBy(-speed)
        } else if (keyPressed('right arrow')) {
            dog.changeXBy(speed)
        } else if(keyPressed('down arrow')) {
            dog.changeYBy(-speed)
        }

        if(keyPressed('up arrow') && keyPressed('left arrow')) {
            dog.changeXBy(-speed)
            dog.changeYBy(speed)
        } else if (keyPressed('left arrow')) {
            dog.changeXBy(-speed)
        } else if(keyPressed('up arrow')) {
            dog.changeYBy(speed)
        }
    })


    whenPressed('space', () => {
        dog.element.src = './sprites/cat/costume1.svg'
    })










    // 👆 WRITE YOUR CODE ABOVE THIS PART 👆
    // 🛑 STOP 🛑
}

// DON'T CHANGE THIS ❌❌❌
startGame();
// DON'T CHANGE THIS ❌❌❌