import * as THREE from "three";

const createWireframe = (
  geometry: THREE.BoxGeometry,
  color: number,
  linewidth = 3
) => {
  const edges = new THREE.EdgesGeometry(geometry);
  const material = new THREE.LineBasicMaterial({ color, linewidth });
  return new THREE.LineSegments(edges, material);
};

export default createWireframe;
