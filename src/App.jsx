import { useState } from 'react'
import Navbar from './assets/comp/navbar';
import Hero from './assets/comp/hero'
import Search from './assets/comp/search';
import ProductTypes from './assets/comp/productType';
import WhyUs from './assets/comp/whyUs';

function App() {
  // const [count, setCount] = useState(0)

  // const inc = () => {
  //   setCount(count => count+2);
  // };

  
return (
   <div>
      <Navbar />
      <Search/>
      <Hero />
      <ProductTypes />
      <WhyUs />
    </div>
    
  )
}

export default App
