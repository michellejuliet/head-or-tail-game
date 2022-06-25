let playerCount = 0;
let compCount = 0;
let compChoice;
let rounds = 0;
//let outcome = outcomeFn();
let game = ['Tail', 'Head']; //[0, 1]
let index;

function player(value) {
  if (value == 'Head') {
    //console.log('Head');

    // comp plays 
    index = Math.floor(Math.random() * game.length)
    compChoice = game[index];

    // coin outcome is set
    let outcome = outcomeFn();

    // add scores
    if (outcome == 'Head') {
      playerCount = playerCount + 1;
    }
    if (outcome == compChoice) {
      compCount = compCount + 1;
    }

    rounds = rounds + 1;
    document.getElementById('rounds').innerHTML = rounds;
    document.getElementById('comp').innerHTML = compChoice;
    document.getElementById('outcome').innerHTML = outcome;
    document.getElementById('playerCount').innerHTML = playerCount;
    document.getElementById('compCount').innerHTML = compCount;

    if (rounds == 5) {
      if (playerCount > compCount) {
        document.getElementById('result').innerHTML = 'Player Wins!';
      } else if (compCount > playerCount) {
        document.getElementById('result').innerHTML = 'Computer Wins!'
      } else {
        document.getElementById('result').innerHTML = "It's a draw!"
      }
    } else if (rounds == 6) {
      restart();
    }


  } else if (value == 'Tail') {
    //console.log('Tail');

    // comp plays 
    index = Math.floor(Math.random() * game.length)
    compChoice = game[index];

    // coin outcome is set
    let outcome = outcomeFn();

    // add scores
    if (outcome == 'Tail') {
      playerCount = playerCount + 1;
    }
    if (outcome == compChoice) {
      compCount = compCount + 1;
    }
    rounds = rounds + 1;
    document.getElementById('rounds').innerHTML = rounds;
    document.getElementById('comp').innerHTML = compChoice;
    document.getElementById('outcome').innerHTML = outcome;
    document.getElementById('playerCount').innerHTML = playerCount;
    document.getElementById('compCount').innerHTML = compCount;

    if (rounds == 5) {
      if (playerCount > compCount) {
        document.getElementById('result').innerHTML = 'Player Wins!'
      } else if (compCount > playerCount) {
        document.getElementById('result').innerHTML = 'Computer Wins!'
      } else {
        document.getElementById('result').innerHTML = "It's a draw!"
      }
    } else if (rounds == 6) {
      restart();
    }

  }

}

function outcomeFn() {
  let i = Math.floor(Math.random() * game.length);  
  return game[i];
}

function restart() {
  rounds = 0;
  playerCount = 0;
  compCount = 0;

  document.getElementById('rounds').innerHTML = '';
  document.getElementById('comp').innerHTML = '';
  document.getElementById('outcome').innerHTML = '';
  document.getElementById('playerCount').innerHTML = '';
  document.getElementById('compCount').innerHTML = '';
  document.getElementById('result').innerHTML = '';

}