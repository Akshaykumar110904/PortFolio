import React from 'react';
import {LoadScreen} from './components/LoadScreen'
function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  return (
    <>
      {!isLoaded && <LoadScreen onComplete={()=>setIsLoaded(true)}/>}{" "}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded?"opacity-100":"opacity-0"} bg-black text-gray-100`} >
      </div>
    </>
  )
}

export default App
