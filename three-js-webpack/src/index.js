import * as THREE from 'three'
import { WEBGL } from './webgl'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
if (WEBGL.isWebGLAvailable()) {

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x004fff);

  const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
  camera.position.set(0,0,5)

  const renderer = new THREE.WebGLRenderer({
    antialias:true
  });
  renderer.setSize(window.innerWidth,window.innerHeight);
  renderer.outputEncoding = THREE.sRGBEncoding;

  document.body.appendChild(renderer.domElement);
  const light = new THREE.PointLight(0xffffff,1);
  light.position.set(0,2,12);
  scene.add(light);

  let loader = new GLTFLoader();
  loader.load('./static/cute_whale 2/scene.gltf',function(gltf){
      scene.add(gltf.scene);

      function animate(){
        requestAnimationFrame(animate)
        gltf.scene.rotation.y += 0.01;
        renderer.render(scene,camera);
      }
      animate()
  });


  function onWindow(){//화면 조정
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);
  }
  window.addEventListener('resize',onWindow);

} else {
  var warning = WEBGL.getWebGLErrorMessage()
  document.body.appendChild(warning)
}
