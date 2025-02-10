import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home'; // Home component with buttons
import QualityCheck from './components/qualitycheck/QualityCheck'; // Quality Check page
import Banner from './components/banner/Banner';  // Only on Home
import Promo from './components/promo/Promo';     // Only on Home

function App() {
    return (
        <Router>
        <Router>
            <NavBar />
            <Routes>
                {/* Home Page Route */}
                <Route 
                    path="/" 
                    element={
                        <>
                            <Banner /> {/* Banner Only on Home */}
                            <Promo />  {/* Promo Only on Home */}
                            <Home />   {/* Home buttons */}
                        </>
                    } 
                />
                {/* Quality Check Page Route */}
                <Route path="/quality-check" element={<QualityCheck />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
