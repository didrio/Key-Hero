const songAudio = new Howl({
  src: [song.audioSource],
  autoplay: true,
  volume: 0,
  onplay: showMode
});

const miss = new Howl({
  src: ['../audio/miss.mp3'],
  autoplay: true,
  volume: 0
});

var config = {
  apiKey: "AIzaSyBXfeNYiALUFKnelDw9fTWEXBjyRa8gdBU",
  databaseURL: "https://key-6-997c8.firebaseio.com/"
};

firebase.initializeApp(config);
var database = firebase.database();

var score = 0;
var multiplier = 1;
var streak = 0;
var startTime = 0;
var animationTime = 0;
var animationTicker = 0;
var difficulty = 200;
var color = "#666666";
var rgba = "rgba(255, 255, 255";
var colorCounter = 0;
var dividerBottom = document.querySelector(".column-divider-bottom");
var modalBody = document.querySelector(".modal-body");
var x2 = document.querySelector(".x2");
var x3 = document.querySelector(".x3");
var x4 = document.querySelector(".x4");
var x5 = document.querySelector(".x5");
var x10 = document.querySelector(".x10");
var modal = document.getElementById('myModal');
var gameStarted = false;
var mode = "";

var keyTimes = [];

function showMode() {
  modalBody.style.fontSize = "2.2em";
	modalBody.innerHTML = song.formatted + "<br /><br /><button class='mode-button easy'>Easy</button><br /><button class='mode-button hard'>Hard</button>";
  document.querySelector(".easy").addEventListener("click", function(){
    mode = "Easy";
    showStartButton();
  });
  document.querySelector(".hard").addEventListener("click", function(){
    mode = "Hard";
    showStartButton();
  });
}

function showStartButton() {
  if (mode === "Easy") {
    song.keysEasy.forEach(function(keyArray){
    	const newArray = keyArray.map(number => ((7500 / song.tempo) * (number - 1)))
    	keyTimes.push(newArray);
    });
  } else {
    song.keysHard.forEach(function(keyArray){
    	const newArray = keyArray.map(number => ((7500 / song.tempo) * (number - 1)))
    	keyTimes.push(newArray);
    });
  }
  modalBody.style.fontSize = "1.4em";
  modalBody.innerHTML = "<button class='start-button'>Start!</button><br /><br /><br />Or Press [Space] Or [Enter]";
	document.querySelector(".start-button").onclick = startGame;
	document.addEventListener("keydown", function(event){
		if (!gameStarted) {
			if (event.key === " " || event.key === "Enter") {
				startGame();
			}
		}
	});
}

function addHighScore(name, score) {
  var scoreData = {
    name: name,
    score: score
  };
  var newScoreKey = firebase.database().ref().child("scores").push().key;
  var update = {};
  update["/scores/" + song.name + "/" + mode + "/" + newScoreKey] = scoreData;
  return firebase.database().ref().update(update);
}

function gameEnd() {
  songAudio.stop();
  modal.style.display = "block";
  modal.style.paddingTop = "15vh";
  document.removeEventListener("keydown", setupKeys);
  modalBody.style.fontSize = "2.2em";
  return firebase.database().ref("/scores/" + song.name + "/" + mode).once("value").then(function(snapshot) {
    var sortedScores = _.sortBy(snapshot.val(), "score").reverse();
    var scoreHtml = "High Scores:<br /><br />";
    var scoreCounter = 0;
    var highScore = (!snapshot.val()) ? true : false;
    Object.keys(sortedScores).some(key => {
      scoreCounter++;
      var scoresName = sortedScores[key].name;
      var scoresScore = sortedScores[key].score;
      if (score > scoresScore) { highScore = true };
      scoreHtml += scoresName + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + scoresScore + "<br />";
      if (scoreCounter === 10) { return true };
    });
    var topText = "";
    if (highScore) {
      topText += "You got a high score with " + score + " points!<br />";
      topText += "<input type='text' placeholder='Name' id='score-input'><br />";
      topText += "<button id='score-button'>Submit High Score!</button><br /><br />";
    } else {
      topText += "Your score was " + score + "<br /><br />";
    }
    var bottomText = "<br />" + song.formatted + "<br />" + mode + "<br /><br /><a href='./'>Play Again</a><br /><a href='../'>Main Menu</a>";
    modalBody.innerHTML = topText + scoreHtml + bottomText;
    if (document.querySelector("#score-button")) {
      var scoreButton = document.querySelector("#score-button");
      var scoreInput = document.querySelector("#score-input");
      scoreButton.addEventListener("click", function(event){
        addHighScore(scoreInput.value, score);
        scoreButton.style.display = "none";
        scoreInput.style.display = "none";
        topText = "Submitted!<br />";
        modalBody.innerHTML = topText + bottomText;
      });
    }
  });
}

function startGame() {
	gameStarted = true;
	document.addEventListener("keydown", setupKeys);
	modal.style.display = "none";
  songAudio.stop();
  songAudio.volume(1);
  miss.volume(1);
  startTime = (new Date().getTime()) + 2000;
	var firstTimer = setTimeout(function(){
		songAudio.play();
		startTime = new Date().getTime();
		animationInterval();
		noteInterval();
    setTimeout(function(){
      gameEnd();
    }, song.length);
	}, 2000);
	keyTimes.forEach(function(keyArray, index){
		keyArray.forEach(function(targetTime){
			if (targetTime < 4000) {
				var div = document.createElement("div");
				div.classList.add("note");
				div.id = index.toString() + targetTime.toString();
        const modeSpeed = (mode === "Easy") ? 2 : 1;
				const delay = (mode === "Easy") ? targetTime / 1000 : (targetTime + 1000) / 1000;
				TweenLite.to(div, modeSpeed, {top: "90vh", delay: delay, ease: "linear"}).eventCallback("onComplete", makeTransparent, [div]);
				TweenLite.to(div, (modeSpeed * 0.15), {backgroundColor: "white", delay: delay});
				const columnNumber = index + 1;
				const noteColumn = document.querySelector(".column-" + columnNumber);
				noteColumn.appendChild(div);
			}
		});
	});
}

function makeTransparent(div) {
	div.style.backgroundColor = "rgba(0,0,0,0)";
}

function setupKeys(event) {
  switch (event.key) {
    case "q":
    handlePoints(0);
    break;
    case "w":
    handlePoints(1);
    break;
    case "e":
    handlePoints(2);
    break;
    case "i":
    handlePoints(3);
    break;
    case "o":
    handlePoints(4);
    break;
    case "p":
    handlePoints(5);
    break;
    default:
    break;
  }
}

function animationInterval() {
	const interval = 2000;
	var expected = Date.now() + interval;
	function step() {
	    var dt = Date.now() - expected;
	    if (dt > interval) {
	    }
	    animateNotes();
	    expected += interval;
	    setTimeout(step, Math.max(0, interval - dt));
	}
	setTimeout(step, interval);
}

function noteInterval() {
	setInterval(function(){
		const notes = document.querySelectorAll(".note");
		const now = new Date().getTime();
		notes.forEach(function(note){
			if (note.id.substring(1) < (now - startTime) - difficulty) {
				missPoint(2);
				note.parentNode.removeChild(note);
			}
		});
	}, 250);
}

function animateNotes() {
	animationTicker += 2000;
	keyTimes.forEach(function(keyArray, index){
		keyArray.forEach(function(targetTime, i){
			if (targetTime >= (animationTicker + 2000) && targetTime < (animationTicker + 4000)) {
				var div = document.createElement("div");
				div.classList.add("note");
				div.id = index.toString() + targetTime.toString();
        const modeSpeed = (mode === "Easy") ? 2 : 1;
				const delay = (targetTime - (animationTicker + modeSpeed * 1000)) / 1000;
				TweenLite.to(div, modeSpeed, {top: "90vh", delay: delay, ease: "linear"}).eventCallback("onComplete", makeTransparent, [div]);
				TweenLite.to(div, (modeSpeed * 0.15), {backgroundColor: "white", delay: delay});
				const columnNumber = index + 1;
				const noteColumn = document.querySelector(".column-" + columnNumber);
				noteColumn.appendChild(div);
			}
		});
	});
}

function handlePoints(index) {
	const now = new Date().getTime();
	if (keyTimes[index].length === 0) {
		missPoint(1);
		animateHitAndMiss(index + 1, "miss");
	}
	keyTimes[index].some(function(targetTime, i){
		const difference = (now - startTime) - targetTime;
		if (Math.abs(difference) <= difficulty) {
			keyTimes[index].splice(i, 1);
			hitPoint(index, targetTime, i);
			return true;
		} else if (i === (keyTimes[index].length - 1)) {
			missPoint(1);
			animateHitAndMiss(index + 1, "miss");
		}
	});
}

function hitPoint(index, targetTime, i) {
	score += (1 * multiplier);
	streak += 1;
	checkMultiplier();
	document.querySelector("#score").innerHTML = score;
	animateHitAndMiss(index + 1, "hit");
	const notes = document.querySelectorAll(".note");
	notes.forEach(function(note){
		if (Number(note.id.substring(1)) === targetTime && Number(note.id.charAt(0)) === index) {
			note.parentNode.removeChild(note);
		}
	});
}

function missPoint(points) {
	score -= points;
	streak = 0;
	if (multiplier !== 1) {
		multiplier = 1;
		color = "#ffffff";
		rgba = "rgba(255, 255, 255";
		TweenLite.to(dividerBottom, 1, {backgroundColor: color});
		x2.style.display = "none";
		x3.style.display = "none";
		x4.style.display = "none";
		x5.style.display = "none";
		x10.style.display = "none";
	}
	checkMultiplier();
	document.querySelector("#score").innerHTML = score;
	miss.play();
	var minusPoints = document.createElement("span");
	minusPoints.classList.add("minus-points");
	minusPoints.innerHTML = "-" +  points;
	var random = Math.floor(Math.random() * (90 - 10) + 10);
	TweenLite.fromTo(minusPoints, 1, {top: "5%", color: "rgba(255,0,0,1)", left: random + "%"}, {top: "0%", color: "rgba(255,0,0,0)"}).eventCallback("onComplete", removeSpan, [minusPoints]);
	const pointsDiv = document.querySelector(".points");
	pointsDiv.appendChild(minusPoints);
}

function removeSpan(span){
	span.parentNode.removeChild(span);
}

function checkMultiplier() {
	if (streak === 250) {
		multiplier = 5;
		color = "#cc0088";
		rgba = "rgba(204, 0, 136";
		TweenLite.to(dividerBottom, 1, {backgroundColor: color});
		x5.style.display = "flex";
		TweenLite.fromTo(x5, 0.2, {scale: 0}, {scale: 1});
	} else if (streak === 150) {
		multiplier = 4;
		color = "#cc6600";
		rgba = "rgba(204, 102, 0";
		TweenLite.to(dividerBottom, 1, {backgroundColor: color});
		x4.style.display = "flex";
		TweenLite.fromTo(x4, 0.2, {scale: 0}, {scale: 1});
	} else if (streak === 25) {
		multiplier = 2;
		color = "#00cc66";
		rgba = "rgba(0, 204, 102";
		TweenLite.to(dividerBottom, 1, {backgroundColor: color});
		x2.style.display = "flex";
		TweenLite.fromTo(x2, 0.2, {scale: 0}, {scale: 1});
	} else if (streak === 400) {
		multiplier = 10;
		color = "#6600cc";
		rgba = "rgba(102, 0, 204";
		TweenLite.to(dividerBottom, 1, {backgroundColor: color});
		x10.style.display = "flex";
		TweenLite.fromTo(x10, 0.2, {scale: 0}, {scale: 1});
	} else if (streak === 75) {
		multiplier = 3;
		color = "#cccc00";
		rgba = "rgba(204, 204, 0";
		TweenLite.to(dividerBottom, 1, {backgroundColor: color});
		x3.style.display = "flex";
		TweenLite.fromTo(x3, 0.2, {scale: 0}, {scale: 1});
	}
}

function animateHitAndMiss(key, action){
	const columnDiv = document.querySelector(".column-" + key);
	const keyDiv = document.querySelector(".key-" + key);
	if (action === "hit") {
		TweenLite.fromTo(columnDiv, 0.3, {backgroundColor: rgba + ", 0.3)"}, {backgroundColor: "rgba(0,0,0,0)"});
		TweenLite.fromTo(keyDiv, 0.3, {scale: 1.2, backgroundColor: rgba + ", 0.3)"}, {scale: 1, backgroundColor: "white"});
	} else if (action === "miss") {
		TweenLite.fromTo(keyDiv, 0.15, {scale: 0.5, backgroundColor: "red"}, {scale: 1, backgroundColor: "white"});
	}
}
