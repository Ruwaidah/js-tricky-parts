function guessingGame() {
    const randomNum = Math.floor(Math.random() * 100)
    let isWin = false
    let count=1
  return function(num) {
    if (num > randomNum) {
        count++
        return `${num} is too high!`}
    else if (num < randomNum)  {
        count++
        return `${num} is too low!`
    }
    else if (num === randomNum && isWin) return `The game is over, you already won!`
    isWin = true
    return `You win! You found ${randomNum} in ${count} guesses.`
  }
    
}

let game = guessingGame();
console.log(game(50)); // "50 is too low!"
console.log(game(90)); // "90 is too high!"
console.log(game(70)); // "You win! You found 70 in 3 guesses."
console.log(game(70)); // "The game is over, you already won!"

module.exports = { guessingGame };
