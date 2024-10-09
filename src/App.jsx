import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use BrowserRouter
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Login from './components/loginSignin/LoginSignin';
import QualityCheck from './components/qualitycheck/QualityCheck';
import RecycleForm from './components/recycle/RecycleForm';
import SellForm from './components/sell/SellForm';
import Ngo from './components/ngo/Ngo';
import Shop from './pages/shop/Shop';
import Home from './pages/home/Home';
import ItemDetail from './pages/itemdetail/ItemDetail';
import About from './pages/about/About'; // Updated import

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/shop" element={<Shop />} />
                <Route path="/account" element={<Login/>} />
                <Route path="/item/:id" element={<ItemDetail />} />
                <Route path="/sell" element={<SellForm />} />
                <Route path="/donate" element={<Ngo />} />
                <Route path="/recycle" element={<RecycleForm />} />
                <Route path="/about" element={<About />} /> 
                <Route path="/qualitycheck" element={<QualityCheck />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
