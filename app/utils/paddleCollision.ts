const paddleCollision = (
  ball: { position: { x: number; y: number } },
  ballSize: number,
  ballVelocity: { x: number },
  paddle1: { position: { x: number; y: number } },
  paddle2: { position: { x: number; y: number } },
  paddleWidth: number,
  paddleHeight: number
) => {
  if (
    ball.position.x - ballSize / 2 < paddle1.position.x + paddleWidth / 2 &&
    ball.position.y + ballSize / 2 > paddle1.position.y - paddleHeight / 2 &&
    ball.position.y - ballSize / 2 < paddle1.position.y + paddleHeight / 2
  ) {
    ballVelocity.x = Math.abs(ballVelocity.x) + 0.005;
  }

  if (
    ball.position.x + ballSize / 2 > paddle2.position.x - paddleWidth / 2 &&
    ball.position.y + ballSize / 2 > paddle2.position.y - paddleHeight / 2 &&
    ball.position.y - ballSize / 2 < paddle2.position.y + paddleHeight / 2
  ) {
    ballVelocity.x = -Math.abs(ballVelocity.x) - 0.005;
  }
};

export default paddleCollision;
