let mainList = document.getElementsByClassName('main_list')
let interactiveArt = document.getElementById('interactive_art_id');
let artPieces = document.getElementsByClassName('interactive_art');
let webDesign = document.getElementById('web_design_id');
let websites = document.getElementsByClassName('web_design');
let back = document.getElementsByClassName('back');

interactiveArt.onclick = () => {
	// DeviceOrientationEvent.requestPermission();
	mainList.forEach(element => {
		element.style.display = "none";
	})

	artPieces.forEach(piece => {
		piece.style.display = "block";
	})
}

webDesign.onclick = () => {
	mainList.forEach(element => {
		element.style.display = "none";
	})

	websites.forEach(piece => {
		piece.style.display = "block";
	})
}

for (var i = 0; i < back.length; i++) {
	back[i].onclick = () => {
		artPieces.forEach(piece => {
			piece.style.display = "none";
		})

		websites.forEach(piece => {
			piece.style.display = "none";
		})

		mainList.forEach(element => {
			element.style.display = "block";
		})
	}
}