import Hero from '../assets/comp/hero'
import Search from '../assets/comp/search';
import ProductTypes from '../assets/comp/productType';
import WhyUs from '../assets/comp/whyUs';

function Home () {

    return (
        <>
          <Search/>
          <Hero />
          <ProductTypes />
          <WhyUs />
        </>
    )
}

export default Home