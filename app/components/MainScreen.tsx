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
        <h1 className="text-6xl text-white font-bold mb-4">Next Pong</h1>
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
      </div>
    </div>
  );
}
