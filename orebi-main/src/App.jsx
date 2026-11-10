import React from 'react';
import './App.css';
import RootLayouts from './components/layouts/RootLayouts';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Error from './components/pages/Error';
import { Route, Routes } from 'react-router-dom';
import Shop from './components/pages/Shop';
import Contacts from './components/pages/Contacts';
import Cart from './components/pages/Cart';
import { ShopProvider } from './context/ShopContext';

function App() {
  return (
    <ShopProvider>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="Contacts" element={<Contacts />} />
          <Route path="journal" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </ShopProvider>
  );
}

export default App;
