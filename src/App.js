import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NavBar from './Components/Navbar.js'
import Footer from './Components/Footer.js'

import Home  from './Views/Home'
import About  from './Views/About'
import Catalog  from './Views/Catalog'
import FAQs  from './Views/FAQs'
import Contact  from './Views/Contact'

import LunchBags  from './Views/LunchBags'
import WaterBottles  from './Views/WaterBottles'
import ToteBags  from './Views/ToteBags'
import SchoolApparel  from './Views/SchoolApparel'
import SchoolSupplies  from './Views/SchoolSupplies'
import Toiletries  from './Views/Toiletries'

function App() {

  return (
    <Router>
      <div className="App">
        
        <NavBar/>
        
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/About" element={<About/>} />
            <Route exact path="/Catalog" element={<Catalog/>} />
            <Route exact path="/FAQs" element={<FAQs/>} />
            <Route exact path="/Contact" element={<Contact/>} />
            <Route exact path="/LunchBags" element={<LunchBags/>} />
            <Route exact path="/WaterBottles" element={<WaterBottles/>} />
            <Route exact path="/ToteBags" element={<ToteBags/>} />
            <Route exact path="/SchoolApparel" element={<SchoolApparel/>} />
            <Route exact path="/SchoolSupplies" element={<SchoolSupplies/>} />
            <Route exact path="/Toiletries" element={<Toiletries/>} />
            
          </Routes>
        
        <Footer/>
      
      </div>
    </Router>
  )

}

export default App;
