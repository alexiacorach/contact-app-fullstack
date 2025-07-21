import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AppRoutes from './AppRoutes';


const App: React.FC = () => {
  return (
    <div className="app">
      <AppRoutes />
    </div>
  );
};

export default App;

