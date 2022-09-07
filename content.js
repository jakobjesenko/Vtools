function detectKeyPress(event){
	if (event.altKey){
		const video = document.getElementsByTagName("video")[0];
		let speed = document.getElementById("playbackspeed").innerHTML;
		//console.log(video);
		if (!video){
			return;
		}
		switch (event.key){
			case "l":
				video.currentTime += 10;
				break;
			case "j":
				video.currentTime -= 10;
				break;
			case "k":
				video.paused ? video.play() : video.pause();
				break;
			case "i":
				video.playbackRate = 1;
				break;
			case "s":
				video.playbackRate = 1.5; //spremeni v dinamicno
				break;
			case "p":
				video.playbackRate = speed;
				break;
			case "u":
				video.playbackRate -= 0.10;
				break;
			case "o":
				video.playbackRate += 0.10;
				break;
			case "c":
				speed = prompt("Set playback rate", 1.72);
				if (speed != null || speed != "") {
					video.playbackRate = speed;
					document.getElementById("playbackspeed").innerHTML = speed;
				}
				break;
			default:
				return;
		}
	}
}

function detectKeyRelease(event){
	if (event.altKey){
		const video = document.getElementsByTagName("video")[0];
		let speed = document.getElementById("playbackspeed").innerHTML;
		if (!video){
			return;
		}
		switch (event.key){
			case "s":
				video.playbackRate = speed;
				break;
			default:
				return;
		}
	}
}

window.addEventListener("keydown", detectKeyPress);
window.addEventListener("keyup", detectKeyRelease);
window.addEventListener("DOMContentLoaded", () => {
	window.addEventListener("keydown", detectKeyPress);
	window.addEventListener("keyup", detectKeyRelease);
});

chrome.runtime.onMessage.addListener(request => {
	document.getElementById("playbackspeed").innerHTML = request;
});

const temp = document.createElement("p");
temp.setAttribute("style", "display: none")
temp.setAttribute("id", "playbackspeed");
temp.innerHTML = 3;
document.body.appendChild(temp);




