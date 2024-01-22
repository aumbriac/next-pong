import paddleCollision from "./paddleCollision";
import resetBall from "./resetBall";
import aiControl from "./aiControl";
import { MemoExoticComponent, SetStateAction } from "react";
import { Vector3 } from "three";

const updateGame = (
  keysPressed: MemoExoticComponent<any>,
  paddle1: { position: any },
  paddle2: { position: any },
  ball: { position: any },
  paddleWidth: number,
  paddleHeight: number,
  ballSize: number,
  groundCeilingHeight: number,
  ballVelocity: {
    value: Vector3;
    clone: () => {
      (): any;
      new (): any;
      multiplyScalar: { (arg0: number): any; new (): any };
    };
    set: (arg0: any, arg1: number, arg2: number) => void;
    x: number;
    y: number;
  },
  setScore: {
    (value: SetStateAction<[number, number]>): void;
  },
  score: number[],
  difficulty: number,
  ground: { position: any },
  ceiling: { position: any },
  paddleSpeed: number,
  ballSpeed: number
) => {
  ball.position.add(ballVelocity);

  if (
    (keysPressed["w"] || keysPressed["ArrowUp"]) &&
    paddle1.position.y < ceiling.position.y - paddleHeight / 2
  ) {
    paddle1.position.y += paddleSpeed;
  } else if (
    (keysPressed["s"] || keysPressed["ArrowDown"]) &&
    paddle1.position.y > ground.position.y + paddleHeight / 2
  ) {
    paddle1.position.y -= paddleSpeed;
  }

  if (
    ball.position.y + ballSize / 2 >=
    ceiling.position.y - groundCeilingHeight / 2
  ) {
    ballVelocity.y = -ballVelocity.y;
  } else if (
    ball.position.y - ballSize / 2 <=
    ground.position.y + groundCeilingHeight / 2
  ) {
    ballVelocity.y = -ballVelocity.y;
  }

  paddleCollision(
    ball,
    ballSize,
    ballVelocity,
    paddle1,
    paddle2,
    paddleWidth,
    paddleHeight
  );

  if (ball.position.x + ballSize / 2 < paddle1.position.x - paddleWidth / 2) {
    resetBall(ball, ballSpeed, ballVelocity);
    const opponentScore = score[1] + 1;
    setScore((prevScore) => [prevScore[0], opponentScore]);
  } else if (
    ball.position.x - ballSize / 2 >
    paddle2.position.x + paddleWidth / 2
  ) {
    resetBall(ball, ballSpeed, ballVelocity);
    const playerScore = score[0] + 1;
    setScore((prevScore) => [playerScore, prevScore[1]]);
  }

  aiControl(
    paddle2,
    ball,
    paddleSpeed,
    ballSize,
    ballVelocity,
    ground,
    ceiling,
    groundCeilingHeight,
    difficulty
  );
};

export default updateGame;
