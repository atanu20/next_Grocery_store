import Baner from '../components/Baner';
import Category from '../components/Category';
import Contact from '../components/Contact';
import Deal from '../components/Deal';
import Footer from '../components/Footer';
import Homee from '../components/Home';
import Navbar from '../components/Navbar';
import Product from '../components/Product';

export default function Home() {
  return (
    <>
      <Navbar />
      <Homee />
      <Baner />
      <Category />
      <Product />
      {/* <Deal /> */}
      <Contact />
      <Footer />
    </>
  );
}
