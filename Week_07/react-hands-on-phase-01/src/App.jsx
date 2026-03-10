import './App.css';
import Products from "./components/Products";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <header className="text-center mb-6 p-4">
        <h1 className="text-4xl font-bold text-blue-600">Products Page</h1>
      </header>

      <Products />
    </div>
  );
}

export default App;