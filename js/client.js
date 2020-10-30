//create a web socket
var socket = io();

//socket event handlers
socket.on("message", addMessages)
socket.on("vote", addVote)

//urls to server
var url = "https://mellow-wiggly-ocelot.glitch.me/";
var urlLocal = "http://localhost:3000/";

var defaultURL = urlLocal;

//send user login name and passwords to server
//		creds (obj): credential object containning username and password
//				format: {
//							username: str,
//							password: str
//						}
function sendUserCreds(creds) {
	$.post(defaultURL + 'users', creds);
}

//display user message on chat box
//		message (obj): message object containning the sender and the message
//				format: {
//							name: str,
//							message: str
//						}
function addMessages(message){
	if (message.name == "streamer") {
		$("#messages").append(
     `<div class="chatLine">
        <p class="streamerNameTag">${message.name}:</p>
        <p class="messContent">${message.message}</p>
      </div>`
    )
	} else {
		$("#messages").append(
     `<div class="chatLine">
        <p class="audienceNameTag">${message.name}:</p>
        <p class="messContent">${message.message}</p>
      </div>`
    )
	}
  var elem = document.getElementById('messages');
  elem.scrollTop = elem.scrollHeight;
}

//tell nodejs server to get messages from mongodb
//and display them on user's screen
function getMessages(){
	$.get(defaultURL + 'messages', (data) => {
		data.forEach(addMessages);
	})
}

//send the message to nodejs backend server
//		message (obj): message object containning the sender and the message
//				format: {
//							name: str,
//							message: str
//						}
function sendMessage(message){
	$.post(defaultURL + 'messages', message);
}

//Update the count of a value bar
//For now it only adds one to the count
//		id (str): the id of the bar

function changeBarValue(id) {
	var voteValue = parseInt($(`#${id}-bar`).attr("aria-valuenow"));
	$(`#${id}-bar`).attr("aria-valuenow", voteValue + 1);
	$(`#${id}-bar`).css("width", `${voteValue + 1}%`);
	$(`#${id}-vote`).text(`${voteValue+1}`);
}

//Send user vote to nodejs backend server
//		vote (obj): vote object containning the sender and individual votes
//				format: {
//							username: $("#username").text(),
//							bass: response[0].value,
//							treble: response[1].value,
//							middle: response[2].value,
//						}
function sendVote(vote) {
	$.post(defaultURL + 'vote', vote);
}

//Update total vote
//		vote (obj): vote object containning the sender and individual votes
//				format: {
//							username: $("#username").text(),
//							bass: response[0].value,
//							treble: response[1].value,
//							middle: response[2].value,
//						}
function addVote(vote) {

	if (vote.bass > 0) {
		changeBarValue("bass-up");
	}

	if (vote.treble > 0) {
		changeBarValue("treble-up");
	}

	if (vote.middle > 0) {
		changeBarValue("middle-up");
	}
	
	if (vote.bass < 0) {
		changeBarValue("bass-down");
	}

	if (vote.treble < 0) {
		changeBarValue("treble-down");
	}

	if (vote.middle < 0) {
		changeBarValue("middle-down");
	}
}

//tell nodejs server to get user votes from mongodb
//and add them to the vote count
function getVote() {
	$.get(defaultURL + 'vote', (data) => {
		data.forEach(addVote);
	})
}

$(() => {

	//hide the button to stop user voting for now
	$(".end-vote").hide();

	//send button click event handler
	$("#send").click(()=>{
		//send the message to the server
		if ($("#username").text()) {
			sendMessage({
			name: $("#username").text(),
			message: $("#message").val()
		});
		}
	})

	//request messages from nodejs server
	getMessages();

	//login button click event handler
	$("#login").click(function() {
		if ($('#usernameInput').val() && $('#passwordInput').val()) {
			//hide login form
			$('#loginModal').modal('hide');
			$('#modalParent').hide();
			
			//show end vote button and hide vote button if the user is a streamer
			if ($('#usernameInput').val() == "streamer") {
				$('.vote').hide();
				$('.end-vote').show();
			}

			//Show the user name
			$("#loginUsername").append(
			`<h3 id="username">${$('#usernameInput').val()}</h3>`
			);
		}

		//send username and password to the server
		sendUserCreds({
			username: $('#usernameInput').val(),
			password: $('#passwordInput').val()
		});
	});

	//effect vote submit button
	$("#effect-vote").submit(function (event) {
		event.preventDefault();
		var response = $("#effect-vote").serializeArray();
		console.log(response);

		//send the vote to the server
		sendVote({
			username: $("#username").text(),
			bass: response[0].value,
			treble: response[1].value,
			middle: response[2].value,
		});
	})
	getVote();

	//slider reset button to reset user vote value
	$("#sliderControl").on('click', '#reset', function () {
		console.log("run");

		$("#bass").roundSlider("setValue", 0);
		$("#treble").roundSlider("setValue", 0);
		$("#middle").roundSlider("setValue", 0);
	})
  
 	$(document).keydown(function(e){
    	if (e.which == 13) { 
      		sendMessage({
				name: $("#username").text(),
				message: $("#message").val()
			});
      
    	return false;
    }
  });
})