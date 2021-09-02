//load textures
const envmap = new THREE.CubeTextureLoader()
	.setPath( './cubemap/')
	.load( [
		'posx.jpg',
		'negx.jpg',
		'posy.jpg',
		'negy.jpg',
		'posz.jpg',
		'negz.jpg'
	])
envmap.mapping = THREE.CubeReflectionMapping;
const myNormalMap = new THREE.TextureLoader().load("./NormalMap.png")
myNormalMap.wrapS = THREE.RepeatWrapping;
myNormalMap.wrapT = THREE.RepeatWrapping;
myNormalMap.repeat.set(1,1);
const myDisplacementMap = new THREE.TextureLoader().load("./DisplacementMap.png")
myDisplacementMap.wrapS = THREE.RepeatWrapping;
myDisplacementMap.wrapT = THREE.RepeatWrapping;
myDisplacementMap.repeat.set(1,1);
const myAoMap = new THREE.TextureLoader().load("./AmbientOcclusionMap.png")
myAoMap.wrapS = THREE.RepeatWrapping;
myAoMap.wrapT = THREE.RepeatWrapping;
myAoMap.repeat.set(1,1);

const myAlphaMap = new THREE.TextureLoader().load("./alphamap.png")
myAlphaMap.wrapS = THREE.RepeatWrapping;
myAlphaMap.wrapT = THREE.RepeatWrapping;

//get reference to html canvas element
const canvas = document.getElementById('webgl');

//create scene context
const scene = new THREE.Scene();
scene.background = envmap;

//initialize camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// 3D geometry in scene
const geometry = new THREE.SphereGeometry(2,50,50);

// MATERIALS
const material = new THREE.MeshStandardMaterial();
material.roughness = 0.0;
material.metalness = 1.0;
material.envMap = envmap;
material.aoMap = myAoMap;
// material.alphaMap = myAlphaMap;
material.transparent = true;
material.displacementMap = myDisplacementMap;
material.displacementScale = .01;
material.normalMap = myNormalMap;
material.normalScale.set(.1,.1);
// material.displacementMap = texture;

//create meshes to be rendered
const mesh = new THREE.Mesh( geometry, material );
// mesh.position.set(15,0,-30);
scene.add( mesh );

//lights
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
directionalLight.position.set(0,0.1,1);
scene.add( directionalLight );

camera.position.z = 5;

//renderer setup
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
	alpha: true
});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let deg = 0;
//basically the draw loop
function animate() {
	deg+=.001;
	requestAnimationFrame( animate );
	camera.position.x = Math.sin(deg)*5;
	camera.position.z = Math.cos(deg)*5;
	camera.rotation.y = deg;
	mesh.rotation.y = -deg;
	renderer.render( scene, camera );
}
animate();