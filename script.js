// rock, paper, scissors

let computer_choice = '';
let choices = ['r','p','s'];
let results = document.getElementById('results');
let games_played = 0;
let wins = 0;
let ties = 0;
let losses = 0;

function playRPS(player_choice) {
	//clear the results
	let message = "";
	
	// Generate a random computer_choice
	let i = Math.floor(Math.random() * 3);
	computer_choice = choices[i]

	// test code - post the choices
	// console.log(`You picked ${player_choice}.`);
	// console.log(`The computer picked ${computer_choice}.`);
	
	let choices_long = ["rock", "paper", "scissors"];
	message += `<p>The computer chose ${choices_long[i]}.</p>`

	if (player_choice == 'r' && computer_choice == 's' ||
		player_choice == 'p' && computer_choice == 'r' ||
		player_choice == 's' && computer_choice == 'p') {
			message += '<p class="w3-green w3-large result">You win! 😀</p>';
			wins += 1;
		} else if (player_choice == computer_choice) {
			// ties
			message += '<p class="w3-yellow w3-large result">It\'s a tie. 🙃</p>';
			ties += 1;

		} else {
			// computer wins
			message += '<p class="w3-red w3-large result">The computer wins.</p>';
			losses += 1;
		}
		games_played += 1;
		winrate = (wins / games_played) * 100;
		message += `<p>Games played: ${games_played}<br>
						  Wins: ${wins}<br>
		                Losses: ${losses}<br>
						  Ties: ${ties}<br>
						  Win-rate: ${winrate.toFixed(0)}%</p>`;
		results.innerHTML = message;
}
