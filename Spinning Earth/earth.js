

var scene, camera, renderer;

var WIDTH  = window.innerWidth;
var HEIGHT = window.innerHeight;

var SPEED = 0.01;

function init() {
    scene = new THREE.Scene();
    initMesh();
    initCamera();
    initRenderer();


    document.body.appendChild(renderer.domElement);
}

function initCamera() {
    camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT, 1, 10);
    camera.position.set(0, 3.5, 5);
    camera.lookAt(scene.position);
}

function initRenderer() {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(WIDTH, HEIGHT);
}


var mesh = null;
function initMesh() {
  var loader = new THREE.JSONLoader();
  loader.load('Earth.json', function(geometry, materials) {
    mesh = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
    scene.add(mesh);
  });
}



function rotateMesh() {
  if (!mesh) {
    return;
  }
    mesh.rotation.x -= SPEED * 2;
    mesh.rotation.y -= SPEED;
    mesh.rotation.z -= SPEED * 3;
}

function render() {
    requestAnimationFrame(render);
    rotateMesh();
    renderer.render(scene, camera);
}

init();
render();
