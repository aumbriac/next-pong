const resetBall = (
  ball: {
    position: { set: (arg0: number, arg1: number, arg2: number) => void };
  },
  ballSpeed: number,
  ballVelocity: { set: (arg0: any, arg1: number, arg2: number) => void }
) => {
  ball.position.set(0, 0, 0);
  ballVelocity.set(ballSpeed, (Math.random() > 0.5 ? 1 : -1) * ballSpeed, 0);
};

export default resetBall;
