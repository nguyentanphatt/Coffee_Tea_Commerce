import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Heading from './Components/Heading/Heading';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Heading/>
        <Navbar />
        <Routes>
          <Route path='/' element ={<HomePage />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
