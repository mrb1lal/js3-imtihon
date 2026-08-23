import { useCart } from '../context/CartContext';
import './Navbar.css';

export default function Navbar() {
    const { cartCount, likeCount, toggleCart, toggleLikes } = useCart();

    return (
        <header className="bosh-qism-kalla">
            <div className="logotip-zoor">SHOP.CO</div>
            <nav className="yol-yolakay">
                <a href="#">Shop</a>
                <a href="#">On Sale</a>
                <a href="#">New Arrivals</a>
                <a href="#">Brands</a>
            </nav>
            <div className="qidirish-joyi">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search for products..." />
            </div>
            <div className="ikonkalar-qismi">
                <button className="ikonka-btn" id="savatni-ochish-tugmasi" onClick={toggleCart}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span className="icon-badge" id="cart-count">{cartCount}</span>
                </button>
                <button className="ikonka-btn" id="yurakni-ochish-tugmasi" onClick={toggleLikes}>
                    <i className="fa-regular fa-heart"></i>
                    <span className="icon-badge" id="like-count">{likeCount}</span>
                </button>
            </div>
        </header>
    );
}