var socket = io();
socket.on("message", addMessages)
socket.on("vote", addVote)

function sendUserCreds(creds) {
	$.post('http://localhost:3000/user', creds);
}

function addMessages(message){
	if (message.name == "streamer") {
		$("#messages").append(`
		<h2>${message.name}</h2>
		<p>${message.message}</p>`)
	} else {
		$("#messages").append(`
		<h3>${message.name}</h3>
		<p>${message.message}</p>`)
	}
}

function getMessages(){
	$.get('/messages', (data) => {
		data.forEach(addMessages);
	})
}

function sendMessage(message){
	$.post('http://localhost:3000/messages', message);
}

var highestVotes = [];

function changeBarValue(id, vote) {
	var voteValue = parseInt($(`#${id}-bar`).attr("aria-valuenow"));
	$(`#${id}-bar`).attr("aria-valuenow", voteValue + 1);
	$(`#${id}-bar`).css("width", `${voteValue + 1}%`);
	$(`#${id}-vote`).text(`${voteValue+1}`);
}

function sendVote(vote) {
	$.post('http://localhost:3000/vote', vote);
}

function addVote(vote) {

	if (vote.bass > 0) {
		changeBarValue("bass-up", vote.bass);
	}

	if (vote.treble > 0) {
		changeBarValue("treble-up", vote.treble);
	}

	if (vote.middle > 0) {
		changeBarValue("middle-up", vote.middle);
	}
	
	if (vote.bass < 0) {
		changeBarValue("bass-down", vote.bass);
	}

	if (vote.treble < 0) {
		changeBarValue("treble-down", vote.treble);
	}

	if (vote.middle < 0) {
		changeBarValue("middle-down", vote.middle);
	}
}

function getVote() {
	$.get('/vote', (data) => {
		data.forEach(addVote);
	})
}

$(() => {
	$("#send").click(()=>{
		sendMessage({
			name: $("#username").text(),
			message: $("#message").val()
		});
	})
	getMessages();

	$("#login").click(function() {
		if ($('#usernameInput').val() && $('#passwordInput').val()) {
			$('#loginModal').modal('hide');
			$('#modalParent').hide();

			$("#loginUsername").append(
			`<h3 id="username">${$('#usernameInput').val()}</h3>`
			);
		}

		sendUserCreds({
			username: $('#usernameInput').val(),
			password: $('#passwordInput').val()
		});
	});

	$("#effect-vote").submit(function (event) {
		event.preventDefault();
		response = $("#effect-vote").serializeArray();
		console.log(response)
		sendVote({
			username: $("#username").text(),
			bass: response[0].value,
			treble: response[1].value,
			middle: response[2].value,
		});
	})
	getVote();

	$("#sliderControl").on('click', '#reset', function () {
		console.log("run");
		$("#bass").roundSlider("setValue", 0);
		$("#treble").roundSlider("setValue", 0);
		$("#middle").roundSlider("setValue", 0);
	})
})