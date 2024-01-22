export default function Score({ playerScore, opponentScore }) {
  return (
    <div className="absolute top-2 inset-x-0 mx-auto text-center">
      <div className="bg-black bg-opacity-85 p-3 rounded-lg shadow-lg inline-block">
        <div className="text-2xl font-mono">
          <span className="text-green-500">{playerScore}</span> -{" "}
          <span className="text-red-500">{opponentScore}</span>
        </div>
      </div>
    </div>
  );
}
