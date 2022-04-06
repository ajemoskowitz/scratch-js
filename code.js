async function startGame() {
    // FOR HELP, GO TO: README.md
    // 👇 WRITE YOUR CODE BELOW THIS PART 👇
    dog.goTo(0, 0);



    forever(() => {
        if(mouseDown) {
            dog.glide(.5, 'mouse')
        }
    })




    whenPressed('space', () => {
        dog.glide()
    })





















    // 👆 WRITE YOUR CODE ABOVE THIS PART 👆
    // 🛑 STOP 🛑
}

// DON'T CHANGE THIS ❌❌❌
startGame();
// DON'T CHANGE THIS ❌❌❌