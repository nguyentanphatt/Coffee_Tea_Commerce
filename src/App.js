import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Heading from './Components/Heading/Heading';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer/Footer';
import ItemCategory from './Pages/ItemCategory';
import coffee_banner from './assets/frontend/coffee_banner.png'
import tea_banner from './assets/frontend/tea_banner.jpg'
import seed_banner from './assets/frontend/seed_banner.webp'
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Heading/>
        <Navbar />
        <Routes>
          <Route path='/' element ={<HomePage />}/>
          <Route path='/coffee' element={<ItemCategory banner={coffee_banner} category="coffee"/>}/>
          <Route path='/tea' element={<ItemCategory banner={tea_banner} category="tea"/>}/>
          <Route path='/seed' element={<ItemCategory banner={seed_banner} category="bean and seed"/>}/>
          <Route path='/login' element={<LoginSignup />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
