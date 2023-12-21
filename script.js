function toggleMode() {
	const html = document.documentElement
	const profileImage = document.querySelector("#profile img")

	html.classList.toggle("light")

	if (html.classList.contains("light")) {
		profileImage.setAttribute("src", "./assets/avatar-light.png")
		// profileImage.src = './assets/avatar-light.png';
	} else {
		profileImage.setAttribute("src", "./assets/avatar.png")
		// profileImage.src = './assets/avatar.png';
	}
}
