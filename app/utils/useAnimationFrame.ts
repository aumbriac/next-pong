import { useEffect } from "react";

const useAnimationFrame = (callback) => {
  useEffect(() => {
    let animationFrameId;

    const loop = () => {
      callback();
      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [callback]);
};

export default useAnimationFrame;
