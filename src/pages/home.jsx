import Hero from '../assets/comp/hero'
import Search from '../assets/comp/search';
import ProductTypes from '../assets/comp/productType';
import WhyUs from '../assets/comp/whyUs';
import Concerns from '../assets/comp/concerns';

function Home () {

    return (
        <>
          <Search/>
          <Hero />
          <ProductTypes />
          <Concerns />
          <WhyUs />
          
        </>
    )
}

export default Home