
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import { NavBar } from './components/NavBar/NavBar';
import { AppRouter } from './router/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <AppRouter />  
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
