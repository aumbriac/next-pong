export default function MainScreen({
  setLoading,
  setGameStarted,
  setDifficulty,
}) {
  const EASY = 0.01,
    MEDIUM = 0.025,
    HARD = 0.05;

  const handleStartGame = (difficulty: number) => {
    setGameStarted(true);
    setDifficulty(difficulty);
    setLoading(true);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="text-center">
        <h1 className="text-6xl text-white font-mono font-bold mb-4">
          Next Pong
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          A free open-source 3D retro pong game built with Next.js and Three.js
        </p>
        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={() => handleStartGame(EASY)}
            className="bg-green-500 text-white font-bold py-2 px-4 rounded-full border border-green-500 hover:bg-transparent hover:text-green-500 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 transition duration-300"
          >
            Easy
          </button>
          <button
            onClick={() => handleStartGame(MEDIUM)}
            className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-full border border-yellow-500 hover:bg-transparent hover:text-yellow-500 hover:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50 transition duration-300"
          >
            Medium
          </button>
          <button
            onClick={() => handleStartGame(HARD)}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded-full border border-red-500 hover:bg-transparent hover:text-red-500 hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition duration-300"
          >
            Hard
          </button>
        </div>
        <a
          href="https://github.com/aumbriac/next-pong"
          target="_blank"
          className="mt-6 inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <svg
            className="mr-2 -ml-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.699-2.782.604-3.369-1.341-3.369-1.341-.454-1.156-1.11-1.464-1.11-1.464-.908-.621.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.892 1.529 2.341 1.087 2.91.832.091-.647.35-1.087.637-1.338-2.22-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.03-2.683-.103-.253-.447-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.84c.85.004 1.705.115 2.502.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.099 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.935.36.31.679.919.679 1.853 0 1.337-.012 2.415-.012 2.743 0 .267.18.579.688.481A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
              clipRule="evenodd"
            />
          </svg>
          View on GitHub
        </a>
      </div>
    </div>
  );
}
