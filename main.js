
console.log("DEBUG: JS Activated.");

// import * as THREE from '/node_modules/three/build/three.module.js';
// import * as THREE from '/node_modules/three';
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement);

const geometry = new THREE.BoxGeometry( 2, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// White directional light at half intensity shining from the top.
const directionalLight = new THREE.DirectionalLight( 0xffffff, 10.0 );
const ambientLight = new THREE.AmbientLight(0x404040);
const GlobalClock = new THREE.Clock(true); // Creates and starts a clock, yay?

scene.add( directionalLight );
//scene.add( ambientLight );

//scene.fog = new THREE.Fog( 0xccccff, 0, 7 );

camera.position.z = 5;

let DeltaSeconds = 0.0;
let previousFrameTime = 0.0;

function animate() {
    requestAnimationFrame( animate );

    DeltaSeconds = Clock.GetDelta();
    FramesPerSecond = 1.0 / DeltaSeconds;
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.001;

    renderer.render( scene, camera );
}

animate();

