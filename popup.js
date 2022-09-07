document.addEventListener("DOMContentLoaded", () => {
	document.querySelector("button").addEventListener("click", () => {
		const speed = prompt("Set playback rate", 1.72);
		if (speed != null || speed != "") {
			chrome.tabs.query({currentWindow: true, active: true}, tabs => {
				chrome.tabs.sendMessage(tabs[0].id, speed);
			});
		}
	});
});