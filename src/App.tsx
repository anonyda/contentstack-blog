
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { AppRouter } from './router/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <AppRouter />  
      </div>
    </BrowserRouter>
    
  );
}

export default App;
