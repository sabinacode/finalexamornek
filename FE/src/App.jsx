
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './Pages/Shop/Shop';
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';

import Contact from './Pages/Contact/Contact';
import Wishlist from './Pages/Wishlist/Wishlist';
import Details from './Pages/Details/DEtails';
import NoPages from './Pages/NoPages/NoPages';
import Admin from './Pages/Admin/Admin';
import { Add } from './Pages/Add/Add';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>} />
          <Route path="shop" element={<Shop/>} />
          <Route path="about" element={<About/>} />
          <Route path="blog" element={<Blog/>} />
          <Route path="add" element={<Add/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="wishlist" element={<Wishlist/>} />
          <Route path="detail/:id" element={<Details/>} />
          <Route path="add" element={<Add/>} />
          <Route path="admin" element={<Admin/>} />
          <Route path="*" element={<NoPages/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
