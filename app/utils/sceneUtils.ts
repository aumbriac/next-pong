import * as THREE from "three";
import createWireframe from "./createWireframe";

export const createScene = (scene: THREE.Scene) => {
  const paddleWidth = 0.3,
    paddleHeight = 1,
    paddleDepth = 0.5,
    ballSize = 0.25;

  const paddleGeometry = new THREE.BoxGeometry(
    paddleWidth,
    paddleHeight,
    paddleDepth
  );
  const ballGeometry = new THREE.SphereGeometry(ballSize, 32, 32);
  const groundCeilingGeometry = new THREE.BoxGeometry(25, 0.1, 1);
  const groundCeilingHeight = 0.1;

  const paddle1 = createWireframe(paddleGeometry, 0x00ff00);
  const paddle2 = createWireframe(paddleGeometry, 0xff0000);
  const ball = new THREE.Mesh(
    ballGeometry,
    new THREE.MeshBasicMaterial({
      color: 0x00008b,
      wireframe: true,
      wireframeLinewidth: 2,
    })
  );

  paddle1.position.set(-6.6, 0, 0);
  paddle2.position.set(6.6, 0, 0);
  ball.position.set(0, 0, 0);

  const ground = createWireframe(groundCeilingGeometry, 0x00ffff);
  const ceiling = createWireframe(groundCeilingGeometry, 0xff00ff);
  ground.position.set(0, -4, 0);
  ceiling.position.set(0, 4, 0);

  const backgroundMaterial = new THREE.MeshBasicMaterial({ color: 0x010101 });
  const background = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 100),
    backgroundMaterial
  );
  background.position.set(0, 0, -5);

  scene.add(ground, ceiling, paddle1, paddle2, ball, background);

  return {
    paddle1,
    paddle2,
    ball,
    ground,
    ceiling,
    background,
    paddleWidth,
    paddleHeight,
    paddleDepth,
    ballSize,
    groundCeilingHeight,
  };
};

export const setupRenderer = (mount: HTMLDivElement | null) => {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  if (mount) {
    mount.appendChild(renderer.domElement);
  }
  return renderer;
};

export const setupCamera = () => {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 6;
  return camera;
};
