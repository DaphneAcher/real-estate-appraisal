export default function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600">
          Tailwind Test
        </h1>
        <p className="mt-4 text-gray-700">
          If you can see this text styled with a gray color and the heading above
          in blue, then Tailwind is working!
        </p>
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Test Button
        </button>
      </div>
    </div>
  );
}