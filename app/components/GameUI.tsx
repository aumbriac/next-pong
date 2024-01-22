export default function GameUI({ playerScore, opponentScore }) {
  const bgOpacity = "bg-opacity-50";
  return (
    <>
      <div className="absolute top-2 inset-x-0 mx-auto text-center">
        <div
          className={`bg-black ${bgOpacity} p-3 rounded-lg shadow-lg inline-block`}
        >
          <div className="text-2xl font-mono">
            <span className="text-green-500">{playerScore}</span> -{" "}
            <span className="text-red-500">{opponentScore}</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 inset-x-0 mx-auto text-center">
        <div
          className={`bg-black ${bgOpacity} p-3 rounded-lg shadow-lg inline-block`}
        >
          <div className="text-sm font-mono">
            <div className="flex items-center justify-center mb-2">
              <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                ↑
              </kbd>
              <span className="text-gray-500 mx-2 text-xs">Move up</span>
              <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                w
              </kbd>
            </div>
            <div className="flex items-center justify-center">
              <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                ↓
              </kbd>
              <span className="text-gray-500 mx-2 text-xs">Move down</span>
              <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                s
              </kbd>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
