import React from 'react'

import NavBar from './Components/Navbar.js'
import Footer from './Components/Footer.js'

import Home  from './Views/Home'
import About  from './Views/About'

function App() {

  return (
    <div className="App">
      <NavBar/>
        <Home/>
      <Footer/>
    </div>
  )

}

export default App;
