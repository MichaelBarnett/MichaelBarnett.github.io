
console.log("DEBUG: JS Activated.");

// There seems to be multiple ways of getting JS stuff, which is fun I suppose, including downloading and implementing at runtime, which I think is prefered.
// import * as THREE from '/node_modules/three/build/three.module.js';
// import * as THREE from '/node_modules/three';
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

import GameMode from './src/mode.js';

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement);

const plane_geo = new THREE.BoxGeometry(100, 1, 100);
const geometry = new THREE.BoxGeometry( 2, 1, 1 );
const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
const M_Water = new THREE.MeshPhongMaterial( { color: 0x004040 } );
const cube = new THREE.Mesh( geometry, material );
cube.castShadow = true;
const floor_mesh = new THREE.Mesh( plane_geo, M_Water );
floor_mesh.castShadow = true;
scene.add( cube );
scene.add( floor_mesh );

floor_mesh.position.y = -10;

// White directional light at half intensity shining from the top.
let directionalLight = new THREE.DirectionalLight( 0xffffff, Math.PI);

directionalLight.position.x = -1.0;
directionalLight.position.y = 1.0;
directionalLight.position.z = 1.0;
directionalLight.castShadow = true;

//const ambientLight = new THREE.AmbientLight(0x404040);
const GlobalClock = new THREE.Clock(true); // Creates and starts a clock, yay?

scene.add( directionalLight );
//scene.add( ambientLight );

var DEBUGUI = document.createElement('div');
DEBUGUI.style.position = 'absolute';
DEBUGUI.style.color= "white";
DEBUGUI.style.backgroundColor = 0x000000;
//DEBUGUI.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
DEBUGUI.style.width = 100;
DEBUGUI.style.height = 100;
DEBUGUI.style.backgroundColor = "black";
DEBUGUI.innerHTML = "hi there!";
DEBUGUI.style.top = 10 + 'px';
DEBUGUI.style.left = 10 + 'px';
document.body.appendChild(DEBUGUI);

//scene.add( ambientLight );

scene.fog = new THREE.Fog( 0xccccff, 0, 50 );

// Create a Text2D object
// const text = new Text2D('Hello, Three.js!', {
//     font: '30px Arial',
//     fillStyle: '#ffffff',
//     antialias: true
// });

// // Position the text
// text.position.set(100, 100, 0);
// scene.add( text );

let MyGameMode = new GameMode();

const camera_spring_arm = new THREE.Group();
//camera_spring_arm.add( camera ) ;
camera.position.x = 10;
camera.position.y = 10;
camera.position.z = 10;
camera.lookAt(new THREE.Vector3(0,0,0));

let camera_direction = 0.0;
let camera_distance = 10.0;

function animate() {
    requestAnimationFrame( animate );

    const DeltaSeconds = GlobalClock.getDelta();
    const FramesPerSecond = 1.0 / DeltaSeconds;

    DEBUGUI.innerHTML = "FPS: " + (FramesPerSecond).toFixed(0) + 
                        "<br>ms: " + (1000.0*DeltaSeconds).toFixed(2);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.001;

    camera_direction += 0.001

    camera.position.x = Math.cos(camera_direction) * camera_distance;
    camera.position.z = Math.sin(camera_direction) * camera_distance;
    camera.lookAt(new THREE.Vector3(0,0,0))

    //camera_spring_arm.rotation.y += 0.01

    renderer.render( scene, camera );
}

function toXYCoords (pos) {
    var vector = projector.projectVector(pos.clone(), camera);
    vector.x = (vector.x + 1)/2 * window.innerWidth;
    vector.y = -(vector.y - 1)/2 * window.innerHeight;
    return vector;
}

animate();

