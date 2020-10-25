var socket = io();
socket.on("message", addMessages)
socket.on("vote", addVote)

function sendUserCreds(creds) {
	$.post('http://localhost:3000/user', creds);
}

function addMessages(message){
	$("#messages").append(`
		<h3>${message.name}</h3>
		<p>${message.message}</p>`)
}

function getMessages(){
	$.get('/messages', (data) => {
		data.forEach(addMessages);
	})
}

function sendMessage(message){
	$.post('http://localhost:3000/messages', message);
}

function changeBarValue(id, vote) {
	var voteValue = $(`#${id}`).attr("aria-valuenow");
	$(`#${id}`).attr("aria-valuenow", voteValue + 1);
	$(`#${id}`).css("width", `${voteValue + 1}%`);
	$(`#${id}`).text(`${vote}`);
}

function sendVote(vote) {
	$.post('http://localhost:3000/vote', vote);
}

function addVote(vote) {
	$("#messages").append(`<p>${vote.username} Voted</p>`)
	changeBarValue("bass-bar", "bass");
	changeBarValue("tremolo-bar", "tremolo");
	changeBarValue("pitch-bar", "pitch");
	changeBarValue("distortion-bar", "distortion");
	changeBarValue("echo-bar", "echo");
	changeBarValue("delay-bar", "delay");
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
			`<p class="text-primary" id="username">${$('#usernameInput').val()}</p>`
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
			bass: response[0],
			tremolo: response[1],
			pitch: response[2],
			distortion: response[3],
			echo: response[4],
			delay: response[5]
		});
	})
	getVote();

	$("#sliderControl").on('click', '#reset', function () {
		console.log("run");
		$("#bass").roundSlider("setValue", 0);
		$("#tremolo").roundSlider("setValue", 0);
		$("#pitch").roundSlider("setValue", 0);
		$("#distortion").roundSlider("setValue", 0);
		$("#echo").roundSlider("setValue", 0);
		$("#delay").roundSlider("setValue", 0);
	})
})