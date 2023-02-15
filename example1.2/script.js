// load three.js
import * as THREE from 'three'

const radius_slider = document.getElementById("radius");
// radius_slider.addEventListener("mouseup", onSliderChange, false);
// radius_slider.addEventListener("touchend", onSliderChange, false);

// on input dinaically updates the slider value
radius_slider.addEventListener("input", onSliderChange, false);



// uncomment to load controls
//import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

// create a scene and a camera
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
camera.position.z = 30

// create the renderer and add it to the html
const renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )


createSphere( radius_slider.value, 32, 16 );
// Uncomment next line to add controls
// const controls = new OrbitControls( camera, renderer.domElement );

// Create an object and add it to the scene:


// Render
function animate() {

    requestAnimationFrame( animate )


    renderer.render( scene, camera )

}



animate()

function createSphere(rad,w, h){
    // 1. Create the geometry:
    const geometry = new THREE.SphereGeometry( rad, w, h );

    // 2. Create the material:
    const material = new THREE.MeshNormalMaterial()


    const sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );

}

function onSliderChange() {

    scene.clear()
    createSphere( radius_slider.value, 32, 16 );
    
  }
  