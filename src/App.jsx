import React from 'react';
import {LoadScreen} from './components/LoadScreen'
import {Home} from './components/Section/Home'
import { NavBar } from "./components/NavBar"
import { MobileMenu } from "./components/MobileMenu"
function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      {!isLoaded && <LoadScreen onComplete={()=>setIsLoaded(true)}/>}{" "}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded?"opacity-100":"opacity-0"} bg-black text-gray-100`} >
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Home/>
      
      </div>
    </>
  )
}

export default App
