var socket = io();
socket.on("message", addMessages)

$(() => {
	$("#send").click(()=>{
		sendMessage({
			name: $("#username").text(),
			message: $("#message").val()
		});
	})
	getMessages()

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
		console.log(response);
	})
})

function sendUserCreds(creds) {
	$.post('http://localhost:3000/user', creds);
}

function addMessages(message){
	$("#messages").append(`
		<p>${message.name}</p>
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