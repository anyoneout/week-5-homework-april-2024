let params = new URLSearchParams(document.location.search);

let player1 = params.get("p1");
let player2 = params.get("p2");

if(player1 === "rock" && player2 === "paper") {
  document.write("player 2 wins!")
}
if(player1 === "rock" && player2 === "scissors") {
  document.write("player 1 wins!")
}
if(player1 === "paper" && player2 === "scissors") {
  document.write("player 2 wins!")
}
if(player1 === "paper" && player2 === "rock") {
  document.write("player 1 wins!")
}
if(player1 === "scissors" && player2 === "rock") {
  document.write("player 2 wins!")
}
if(player1 === "scissors" && player2 === "paper") {
  document.write("player 1 wins!")
}
if(player1 === player2) {
  document.write("It's a Draw!")
}
if(player1 === "" && player2 === "") {
  document.write("both players need to choose")
}
if(player1 === "") {
  document.write("player 1 needs to choose")
}
if(player2 === "") {
  document.write("player 2 needs to choose")
}
// TODO: write all the conditions to indicate who will win the game.


// TODO: Add some HTML and CSS to make the page nice


// Bonus: research innerHTML to put the result of the game into the element with id of "result".

// Bonus: add a form to allow for player to enter their guesses. Hint: Try <input type="password" name=p1 /> in a form in the html

// Bonus: allow players to enter their names and display them on the page.

// Bonus: add additional feature you might think of. 

// Super Extra bonus: Try and make the names persist so the players don't need to enter their names each play