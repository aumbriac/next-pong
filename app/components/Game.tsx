import { useRef, useState, useEffect, useCallback, memo, useMemo } from "react";
import * as THREE from "three";
import Score from "./Score";
import { setupCamera, setupRenderer, createScene } from "../utils/sceneUtils";
import handleKeyPress from "../utils/handleKeyPress";
import useAnimationFrame from "../utils/useAnimationFrame";
import updateGame from "../utils/updateGame";
import handleWindowResize from "../utils/handleWindowResize";
import GameElements from "../types/GameElements";
import KeyInstructions from "./KeyInstructions";

export default function Game({ difficulty }) {
  const gameRef = useRef<HTMLDivElement>(null);
  const [score, setScore] = useState<[number, number]>([0, 0]);
  const [scene, setScene] = useState<THREE.Scene | null>(null);
  const [camera, setCamera] = useState<THREE.Camera | null>(null);
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null);
  const [gameElements, setGameElements] = useState<GameElements | null>(null);
  const ballVelocity = useRef(new THREE.Vector3(0.03, 0.03, 0));

  useEffect(() => {
    const newScene = new THREE.Scene();
    const newCamera = setupCamera();
    const newRenderer = setupRenderer(gameRef.current);
    const elements = createScene(newScene);

    setScene(newScene);
    setCamera(newCamera);
    setRenderer(newRenderer);
    setGameElements(elements);

    const onWindowResize = handleWindowResize(newRenderer, newCamera);
    window.addEventListener("resize", onWindowResize, false);

    const currentGameRef = gameRef.current;

    return () => {
      window.removeEventListener("resize", onWindowResize);
      if (currentGameRef && currentGameRef.contains(newRenderer.domElement)) {
        currentGameRef.removeChild(newRenderer.domElement);
      }
    };
  }, []);

  const keysPressed = useMemo(() => ({} as any), []);
  handleKeyPress(keysPressed);

  const animate = useCallback(() => {
    if (!gameElements || !renderer || !camera) return;

    const {
      paddle1,
      paddle2,
      ball,
      ground,
      ceiling,
      paddleWidth,
      paddleHeight,
      ballSize,
      groundCeilingHeight,
    } = gameElements;
    const paddleSpeed = 0.08;
    const ballSpeed = 0.03;

    updateGame(
      keysPressed,
      paddle1,
      paddle2,
      ball,
      paddleWidth,
      paddleHeight,
      ballSize,
      groundCeilingHeight,
      ballVelocity.current as any,
      setScore,
      score,
      difficulty,
      ground,
      ceiling,
      paddleSpeed,
      ballSpeed
    );

    renderer.render(scene as THREE.Scene, camera);
  }, [gameElements, renderer, camera, keysPressed, score, difficulty, scene]);

  useAnimationFrame(animate);

  return (
    <>
      <Score playerScore={score[0]} opponentScore={score[1]} />
      <div ref={gameRef}></div>
      <KeyInstructions />
    </>
  );
}
