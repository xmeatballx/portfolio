let landing = document.getElementById('landing');
let landingButton = document.getElementById('landingbutton');
let mainList = document.getElementsByClassName('main_list');
let threejsButton = document.getElementById('threejs_id');
let threejs = document.getElementsByClassName('threejs');
let interactiveArt = document.getElementById('interactive_art_id');
let artPieces = document.getElementsByClassName('interactive_art');
let webDesign = document.getElementById('web_design_id');
let websites = document.getElementsByClassName('web_design');
let back = document.getElementsByClassName('back');

landingbutton.onclick = () => {
	landing.style.display = "none";
	DeviceOrientationEvent.requestPermission();
}

// landing.mousePressed(function(){
// 		DeviceOrientationEvent.requestPermission();
// });

threejsButton.onclick = () => {
	mainList.forEach(element => {
		element.style.display = "none";
	})

	threejs.forEach(sketch => {
		sketch.style.display = "block";
	})
}

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
		threejs.forEach(sketch => {
			sketch.style.display = "none";
		})

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