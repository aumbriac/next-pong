import { WebGLRenderer, PerspectiveCamera } from "three";

const handleWindowResize = (
  renderer: WebGLRenderer,
  camera: PerspectiveCamera
) => {
  return () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  };
};

export default handleWindowResize;
