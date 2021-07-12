let mainList = document.getElementsByClassName('main_list')
let interactiveArt = document.getElementById('interactive_art_id');
let artPieces = document.getElementsByClassName('interactive_art');
let webDesign = document.getElementById('web_design_id');
let websites = document.getElementsByClassName('web_design');

interactiveArt.onclick = () => {
	console.log('clicked');
	mainList.forEach(element => {
		element.style.display = "none";
	})

	artPieces.forEach(piece => {
		piece.style.display = "block";
	})
}

webDesign.onclick = () => {
	console.log('clicked');
	mainList.forEach(element => {
		element.style.display = "none";
	})

	websites.forEach(piece => {
		piece.style.display = "block";
	})
}