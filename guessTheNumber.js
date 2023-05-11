//RANDOM NUMBER GUESSER 
console.log("RANDOM NUMBER GUESSER GAME ")
let number =Math.round(Math.random()*100)
console.log("THE NUMBER IS BETWEEN 1 AND 100")
console.log("YOU HAVE 10 GUESSES")
console.log("TRY TO GUESS THE NUMBER")
console.log("START")
let guessCount = 10
for(let i = 1 ; i <= 10 ;i++){
let guess = prompt("ENTER YOUR GUESS:")
  guess = Number.parseInt(guess)
  console.log(guess)
  if(guess === number){
    console.log("CONGRATULATIONS, YOU GUESSED THE NUMBER CORRECTLY")
    break
  }
  else if(guess > number){
    console.log("THE NUMBER IS SMALLER THAN THE GUESSED NUMBER")
    guessCount--
  }
  else if(guess < number){
    console.log("THE NUMBER IS GREATER THAN THE GUESSED NUMBER")
    guessCount--
   
  }
   else{
      console.log("YOU RAN OUT OF GUESSES")
    }
  console.log("YOU HAVE ",guessCount,"GUESSES LEFT")
  if(guessCount == 0){
    console.log("YOU RAN OUT OF GUESSES,PLEASE TRY AGAIN")
  }

}