var totalscore = $("#totalscore");
var winsClass = $(".wins");
var lossesClass = $(".losses");
var randomNumber = $(".randomBox");
var total = 0;
var wins = " ";
var losses = " ";

var audioElement = document.createElement('audio');
 audioElement.setAttribute('src', 'assets/images/nimbus.mp3');

$(document).ready(function(){
 $("#one, #three, #six, #four").on("click", function(){
  audioElement.play();
});


var generateNum = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

var numberGenerated = generateNum(19, 120);

var oneNum = generateNum(1, 12);
var threeNum = generateNum(1, 12);
var fourNum = generateNum(1, 12);
var sixNum = generateNum(1, 12);

randomNumber.append(numberGenerated);



function setScore(){
	$(totalscore).html("Your total score is: " + total);
}


$("#one").on("click", function(){
	 total += oneNum;
 	 console.log('yes');
 	 setScore();
	 checkwin();
});


$("#three").on("click", function(){
	 total += threeNum;
 	 console.log('yeees');
 	 setScore();
	 checkwin();
});


$("#four").on("click", function(){
	 total += fourNum;
 	 console.log('yeeees');
 	 setScore();
	 checkwin();
});
 

$("#six").on("click", function(){
	 total += sixNum;
 	 console.log('yeeeeees');
 	 setScore();
	 checkwin();
});

var checkwin = function (){
	if (numberGenerated === total) {
		$(winsClass).html("Wins: " + wins + 1);	
		alert('You have summoned Shenron!');
		resetGame();
	
	}else if(total > numberGenerated){
		$(lossesClass).html("Losses: " + losses + 1);
		alert('You have destroyed the planet!');
		resetGame();
		}
	};

function resetGame() {
    window.location.reload()
};

});