import { CartProvider } from './components/context/CartContext';
import TopBar from './components/layout/TopBar';
import Navbar from './components/nav/Navbar';
import Banner from './components/banner/Banner';
import Brands from './components/brands/Brands';
import ProductGrid from './components/products/ProductGrid';
import Styles from './components/styles/Styles';
import Reviews from './components/reviews/Reviews';
import Newsletter from './components/newsletter/Newsletter';
import Footer from './components/footer/Footer';
import CartSidebar from './components/sidebar/CartSidebar';
import LikeSidebar from './components/sidebar/LikeSidebar';
import { products, topSelling } from './data/products';
import './App.css';

function App() {
    return (
        <CartProvider>
            <TopBar />
            <Navbar />
            <Banner />
            <Brands />
            <ProductGrid items={products} title="NEW ARRIVALS" />
            <hr className="ajratuvchi-chiziq" />
            <ProductGrid items={topSelling} title="TOP SELLING" />
            <Styles />
            <Reviews />
            <Newsletter />
            <Footer />
            <CartSidebar />
            <LikeSidebar />
        </CartProvider>
    );
}

export default App;