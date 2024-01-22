import * as THREE from "three";

const aiControl = (
  paddle2: { position: { x: number; y: number } },
  ball: {
    position: {
      clone: () => {
        (): any;
        new (): any;
        add: { (arg0: any): any; new (): any };
      };
      x: number;
    };
  },
  paddleSpeed: number,
  ballSize: number,
  ballVelocity: {
    clone: () => {
      (): any;
      new (): any;
      multiplyScalar: { (arg0: number): any; new (): any };
    };
    x: number;
  },
  ground: { position: { y: number } },
  ceiling: { position: { y: number } },
  groundCeilingHeight: number,
  difficulty: number
) => {
  const gameDifficulty = Math.max(0.01, Math.min(0.1, difficulty));

  const futureBallPosition = ball.position
    .clone()
    .add(
      ballVelocity
        .clone()
        .multiplyScalar((paddle2.position.x - ball.position.x) / ballVelocity.x)
    );

  futureBallPosition.y = THREE.MathUtils.clamp(
    futureBallPosition.y,
    ground.position.y + groundCeilingHeight / 2 + ballSize / 2 + 0.1,
    ceiling.position.y - groundCeilingHeight / 2 - ballSize / 2 - 0.1
  );

  if (
    paddle2.position.y < ceiling.position.y - 0.7 &&
    paddle2.position.y > ground.position.y + 0.7
  ) {
    paddle2.position.y = THREE.MathUtils.lerp(
      paddle2.position.y,
      futureBallPosition.y,
      gameDifficulty
    );
  } else if (
    paddle2.position.y >= ceiling.position.y - 0.7 &&
    futureBallPosition.y < paddle2.position.y
  ) {
    paddle2.position.y -= paddleSpeed;
  } else if (
    paddle2.position.y <= ground.position.y + 0.7 &&
    futureBallPosition.y > paddle2.position.y
  ) {
    paddle2.position.y += paddleSpeed;
  }
};

export default aiControl;
