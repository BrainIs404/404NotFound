var socket = io();
socket.on("message", addMessages)

$(() => {
	$("#send").click(()=>{
		sendMessage({
			name: $("#username").text(),
			message: $("#message").val()
		});

		console.log(`username is: ${name}`);
	})
	getMessages()

	$("#login").click(function() {
		if ($('#usernameInput').val() && $('#passwordInput').val()) {
			$('#loginModal').modal('hide');
			$('#modalParent').hide();

			$("#loginUsername").append(
			`<p class="text-primary" id="username">${$('#passwordInput').val()}</p>`
			);
		}

		sendUserCreds({
			username: $('#usernameInput').val(),
			password: $('#passwordInput').val()
		});
	});
})

function sendUserCreds(creds) {
	$.post('https://deco3801-404notfound.uqcloud.net/users', creds);
}

function addMessages(message){
	$("#messages").append(`
		<h4>${message.name}</h4>
		<p>${message.message}</p>`)
}
function getMessages(){
	$.get('https://deco3801-404notfound.uqcloud.net/messages', (data) => {
		data.forEach(addMessages);
	})
}

function sendMessage(message){
	$.post('https://deco3801-404notfound.uqcloud.net/messages', message);
}