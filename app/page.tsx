"use client";
import dynamic from "next/dynamic";
import MainScreen from "./components/MainScreen";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";

const Game = dynamic(() => import("./components/Game"), {
  ssr: false,
});

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState(0);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [difficulty, setDifficulty] = useState<number>(0.05);

  useEffect(() => {
    if (progress >= 100) {
      setGameStarted(true);
      setLoading(false);
    }
  }, [progress]);

  return loading ? (
    <Loading progress={progress} setProgress={setProgress} />
  ) : gameStarted ? (
    <Game difficulty={difficulty} />
  ) : (
    <MainScreen
      setLoading={setLoading}
      setDifficulty={setDifficulty}
      setGameStarted={setGameStarted}
    />
  );
}
