import { useEffect } from "react";

export default function Loading({ progress, setProgress }) {
  useEffect(() => {
    let start = 0;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / 5, 100);
      setProgress(progress);
      if (progress < 100) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [setProgress]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-4">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-7xl font-mono text-gray-300 text-center">
          LOADING...
        </p>
      </div>
    </div>
  );
}
