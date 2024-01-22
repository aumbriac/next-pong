import { MemoExoticComponent } from "react";

const handleKeyPress = (keysPressed: MemoExoticComponent<any>) => {
  window.addEventListener(
    "keydown",
    (event) => (keysPressed[event.key] = true)
  );
  window.addEventListener("keyup", (event) => (keysPressed[event.key] = false));
};

export default handleKeyPress;
