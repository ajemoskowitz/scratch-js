async function startGame() {
    // YOUR CODE BELOW 🚀
    let color;

    dog.whenThisSpriteClicked(() => {
        color = ask("What's your favorite color?")
        document.body.style.background = color
        playSound('meow.wav')
    })


}

startGame();