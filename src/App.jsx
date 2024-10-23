import './index.css'
import { ThemeContext } from './context/ThemeContext';
import { useContext } from 'react';
import Results from './components/Results';
import OrdersTable from './components/OrdersTable';
function App() {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={isDarkTheme ? 'dark' : ''}>
      <div className="min-h-screen flex flex-col justify-center items-center transition-all bg-white dark:bg-gray-800 dark:text-white">
        <h1 className="text-3xl font-bold mb-4">
          {isDarkTheme ? 'Dark Theme' : 'Light Theme'}
        </h1>
        <button
          className="px-4 py-2 bg-stone-500 text-white rounded hover:bg-stone-600 dark:bg-blue-700 dark:hover:bg-blue-800 transition"
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>
        <Results/>
        <OrdersTable/>
      </div>
    </div>
  );
}

export default App;