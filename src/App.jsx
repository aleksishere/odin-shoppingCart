import React from 'react';
import TopBar from "./components/TopBar/TopBar.jsx"
import HomeContent from "./components/HomeContent/HomeContent.jsx"
import Shop from "./components/Shop/Shop.jsx"
import Footer from "./components/Footer/Footer.jsx"
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {

  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path='/' element={<HomeContent />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
