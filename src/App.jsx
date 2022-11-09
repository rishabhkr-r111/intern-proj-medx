import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './assets/comp/navbar';
import Home from './pages/home'
import About from './pages/about'
import Conact from './pages/contact'
import Offers from './pages/offers'
import Faq from './pages/faq'
import Signin from './pages/signin';
import Register from './pages/register';

function App() {
  // const [count, setCount] = useState(0)

  // const inc = () => {
  //   setCount(count => count+2);
  // };

  
return (
   <>
      <Navbar />

      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/about' element={ <About/> } />
        <Route path='/contact' element={ <Conact/> } />
        <Route path='/offers' element={ <Offers/> } />
        <Route path='/faq' element={ <Faq/> } />
        <Route path='/signin' element={ <Signin/> } />
        <Route path='/register' element={ <Register/> } />
        
      </Routes>

      
    </>
    
  )
}

export default App
