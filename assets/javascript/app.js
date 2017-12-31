//on load start 
$(document).ready(function(){
	$("#start-button").click(function(){
		$(this).hide();
	});
	$("#timer-div").hide();
	$("#time-counter").hide();
	$("#question1").hide();
	$(".q1answer").hide();
	$("#question2").hide();
	$("#question3").hide();
	$("#question4").hide();
	$("#question5").hide();
	$("#correctScreen").hide();
	$("#q1Correct").hide();
	$("#q1Incorrect").hide();
	$("#q2Correct").hide();
	$("#q2Incorrect").hide();
	$("#q3Correct").hide();
	$("#q3Incorrect").hide();
	$("#q4Correct").hide();
	$("#q4Incorrect").hide();
	$("#q5Correct").hide();
	$("#q5Incorrect").hide();

	//Countdown timer function
	function countdownQuestionOne(){
		var number = 21;
		intervalId = setInterval(decrementQ1, 1000);
		function decrementQ1(){
		number--;
		$("#time-counter").html(number);
		if (number === 0){
			stop();
			timesUpQ1();
		}
		}
	}

	function countdownQuestionTwo(){
		var number = 21;
		intervalId = setInterval(decrementQ2, 1000);
		function decrementQ2(){
		number--;
		$("#time-counter").html(number);
		if (number === 0){
			stop();
			timesUpQ2();
		}
		}
	}

	function countdownQuestionThree(){
		var number = 21;
		intervalId = setInterval(decrementQ3, 1000);
		function decrementQ3(){
		number--;
		$("#time-counter").html(number);
		if (number === 0){
			stop();
			timesUpQ3();
		}
		}
	}

	function countdownQuestionFour(){
		var number = 21;
		intervalId = setInterval(decrementQ4, 1000);
		function decrementQ4(){
		number--;
		$("#time-counter").html(number);
		if (number === 0){
			stop();
			timesUpQ4();
		}
		}
	}

	function countdownQuestionFive(){
		var number = 21;
		intervalId = setInterval(decrementQ5, 1000);
		function decrementQ5(){
		number--;
		$("#time-counter").html(number);
		if (number === 0){
			stop();
			timesUpQ5();
		}
		}
	}


	function stop(){
		clearInterval(intervalId);
	}


	// show and hide questions on timer
	$("#start-button").click(function(){
		$("#time-counter").show();
		$("#question1").show();
		$("#timer-div").show();
		questionOne();
	});

	// Question 1

	function questionOne(){
		countdownQuestionOne();		
		$("button#q1").click(function(){
		$("#question1").hide();
		$("#time-counter").show();
		var answer = $(this).val();
		if (answer == "19"){
			$("#q1Correct").show();
			setTimeout( function(){
				$("#q1Correct").hide();
			}, 2000);
			stop();
		} else {
			$("#q1Incorrect").show();
			setTimeout( function(){
				$("#q1Incorrect").hide();
			}, 2000);
			stop();
		}
		setTimeout(function(){
			$("#question2").show();
		}, 2000);
		questionTwo();
	});
	}

	function timesUpQ1(){
		incorrectPoint += 1;
		console.log("incorrect: " + incorrectPoint);
		$("#question1").hide();
		$("#q1Incorrect").show();
			setTimeout( function(){
				$("#q1Incorrect").hide();
			}, 2000);
		setTimeout(function(){
			$("#question2").show();
		}, 2000);
		questionTwo();
	}

	// Q2
	function questionTwo(){
		countdownQuestionTwo();		
		$("button#q2").click(function(){
		$("#question2").hide();
		$("#time-counter").show();
		var answer = $(this).val();
		if (answer == "TS"){
			$("#q2Correct").show();
			setTimeout( function(){
				$("#q2Correct").hide();
			}, 2000);
			stop();
		} else {
			$("#q2Incorrect").show();
			setTimeout( function(){
				$("#q2Incorrect").hide();
			}, 2000);
			stop();
		}
		setTimeout(function(){
			$("#question3").show();
		}, 2000);
		questionThree();
	});
	}

	function timesUpQ2(){
		incorrectPoint += 1;
		console.log("incorrect: " + incorrectPoint);
		$("#question2").hide();
		$("#q2Incorrect").show();
			setTimeout( function(){
				$("#q2Incorrect").hide();
			}, 2000);
		setTimeout(function(){
			$("#question3").show();
		}, 2000);
		questionThree();
	}

	// Q3

	function questionThree(){
		countdownQuestionThree();		
		$("button#q3").click(function(){
		$("#question3").hide();
		$("#time-counter").show();
		var answer = $(this).val();
		if (answer == "Coco"){
			$("#q3Correct").show();
			setTimeout( function(){
				$("#q3Correct").hide();
			}, 2000);
			stop();
		} else {
			$("#q3Incorrect").show();
			setTimeout( function(){
				$("#q3Incorrect").hide();
			}, 2000);
			stop();
		}
		setTimeout(function(){
			$("#question4").show();
		}, 2000);
		questionFour();
	});
	}

	function timesUpQ3(){
		incorrectPoint += 1;
		console.log("incorrect: " + incorrectPoint);
		$("#question3").hide();
		$("#q3Incorrect").show();
			setTimeout( function(){
				$("#q3Incorrect").hide();
			}, 2000);
		setTimeout(function(){
			$("#question4").show();
		}, 2000);
		questionFour();
	}


	// Q4
	function questionFour(){
		countdownQuestionFour();		
		$("button#q4").click(function(){
		$("#question4").hide();
		$("#time-counter").show();
		var answer = $(this).val();
		if (answer == "Woody"){
			$("#q4Correct").show();
			setTimeout( function(){
				$("#q4Correct").hide();
			}, 2000);
			stop();
		} else {
			$("#q4Incorrect").show();
			setTimeout( function(){
				$("#q4Incorrect").hide();
			}, 2000);
			stop();
		}
		setTimeout(function(){
			$("#question5").show();
		}, 2000);
		questionFive();
	});
	}

	function timesUpQ4(){
		incorrectPoint += 1;
		console.log("incorrect: " + incorrectPoint);
		$("#question4").hide();
		$("#q4Incorrect").show();
			setTimeout( function(){
				$("#q4Incorrect").hide();
			}, 2000);
		setTimeout(function(){
			$("#question5").show();
		}, 2000);
		questionFive();
	}

	// Q5
	function questionFive(){
		countdownQuestionFive();		
		$("button#q5").click(function(){
		$("#question5").hide();
		$("#time-counter").show();
		var answer = $(this).val();
		if (answer == "Remy"){
			$("#q5Correct").show();
			setTimeout( function(){
				$("#q5Correct").hide();
			}, 2000);
			stop();
		} else {
			$("#q5Incorrect").show();
			setTimeout( function(){
				$("#q5Incorrect").hide();
			}, 2000);
			stop();
		}
		setTimeout(function(){
			$("#correct-screen").show();
		}, 2000);
		correctScoresScreen();
	});
	}

	function timesUpQ5(){
		incorrectPoint += 1;
		console.log("incorrect: " + incorrectPoint);
		$("#question5").hide();
		$("#q5Incorrect").show();
			setTimeout( function(){
				$("#q5Incorrect").hide();
			}, 2000);
		setTimeout(function(){
			$("#correct-screen").show();
		}, 2000);
		correctScoresScreen();
	}

	//scores
	function correctScoresScreen(){
		$("#question5").hide();
		$("#time-counter").hide();
		$("#timer-div").hide();
		setTimeout(function(){
		$("#correctScreen").show();
		}, 2000);
		$("#correctScore").html(score);
		$("#incorrect-screen").html(incorrectPoint);
		
	};


	//scoring
	var score = 0;
	var incorrectPoint = 0;

	$("button#q1").click(function(){
		var answer = $(this).val();
		if (answer == "19"){
			score += 1;
			console.log("correct: " + score);
		} else {
			incorrectPoint += 1;
			console.log("incorrect: " + incorrectPoint);
		}
	});

	$("button#q2").click(function(){
		var answer = $(this).val();
		if (answer == "TS"){
			score += 1;
			console.log("correct: " + score);
			$("#correct-screen").html(score);
		} else {
			incorrectPoint += 1;
			console.log("incorrect: " + incorrectPoint);
			$("#correctScore").html(score);
			$("#incorrect-screen").html(incorrectPoint);
		}
	});  

	$("button#q3").click(function(){
		var answer = $(this).val();
		if (answer == "Coco"){
			score += 1;
			console.log("correct: " + score);
			$("#correct-screen").html(score);
		} else {
			incorrectPoint += 1;
			console.log("incorrect: " + incorrectPoint);
			$("#correctScore").html(score);
			$("#incorrect-screen").html(incorrectPoint);
		}
	});

	$("button#q4").click(function(){
		var answer = $(this).val();
		if (answer == "Woody"){
			score += 1;
			console.log("correct: " + score);
			$("#correct-screen").html(score);
		} else {
			incorrectPoint += 1;
			console.log("incorrect: " + incorrectPoint);
			$("#correctScore").html(score);
			$("#incorrect-screen").html(incorrectPoint);
		}
	});

	$("button#q5").click(function(){
		var answer = $(this).val();
		if (answer == "Remy"){
			score += 1;
			console.log("correct: " + score);
			$("#correctScore").html(score);
			$("#incorrectScore").html(incorrectPoint);
		} else {
			incorrectPoint += 1;
			console.log("incorrect: " + incorrectPoint);
			$("#correctScore").html(score);
			$("#incorrectScore").html(incorrectPoint);
		}
	});

});

