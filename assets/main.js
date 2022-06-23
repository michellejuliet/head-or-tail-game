let playerCount = 0;
let compCount = 0;
let compChoice;
let rounds = 0;
//let outcome = outcomeFn();

function player(value) {
  if (value == 'head') {
    console.log('Head');
    compChoice = Math.floor(Math.random() * 2);
    
    let outcome = outcomeFn();

    if (outcome == 1) {
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

    if(rounds == 5) {
      if(playerCount > compCount) {
        document.getElementById('result').innerHTML = 'Player Wins!';
      } else if(compCount > playerCount) {
        document.getElementById('result').innerHTML = 'Computer Wins!'
      } else {
        document.getElementById('result').innerHTML = "It's a draw!"
      }
       restart();
    }

  } else if (value == 'tail') {
    console.log('Tail');
    compChoice = Math.floor(Math.random() * 2);
    let outcome = outcomeFn();

    if (outcome == 0) {
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

    if(rounds == 5) {
      if(playerCount > compCount) {
        document.getElementById('result').innerHTML = 'Player Wins!'
      } else if(compCount > playerCount) {
        document.getElementById('result').innerHTML = 'Computer Wins!'
      } else {
        document.getElementById('result').innerHTML = "It's a draw!"
      }
    }
    
  }

}

function outcomeFn() {
  return Math.floor(Math.random() * 2)
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