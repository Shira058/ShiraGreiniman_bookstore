import './App.css';
import HomePage from './components/homePage.js';
import Logo from './components/logo';
import StorePage from './components/storePage';
import BookDetailsPage from './components/bookDetailsPage'
import ThanksPage from './components/thanksPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from './components/cartPage';
import FinalizeOrderPage from './components/finalizeOrderPage';
export default function App() {
  return (
  
    <Router> 
       <Logo />
      <Routes>
        <Route exect path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/store/:storeId' element={<StorePage />} />
        <Route path='/bookDetails/:bookId' element={<BookDetailsPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/order' element={<FinalizeOrderPage />} />
        <Route path='/thanks' element={<ThanksPage />} />
      </Routes>
    </Router>
  );
}

