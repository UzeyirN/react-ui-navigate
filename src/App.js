import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductsDetail from './pages/ProductsDetail'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={< Home />}></Route>
        <Route path='/about' element={< About />}></Route>
        <Route path='/products' element={< Products />}></Route>
        <Route path='/products/:id' element={< ProductsDetail />}></Route>
        <Route path='/contact' element={< Contact />}></Route>
        <Route path='/*' element={< NotFound />}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
