import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <main className="w-full max-w-xl px-4">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            YouTube Summarizer
          </h1>
          <div className="w-full">
            <div className="flex gap-2">
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Paste the youtube video link here..."
              />
              <button
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Summarize
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
