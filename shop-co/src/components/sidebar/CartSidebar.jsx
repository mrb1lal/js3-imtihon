import { useCart } from '../context/CartContext';
import './Sidebar.css';

export default function CartSidebar() {
    const { cartItems, isCartOpen, closeCart, removeFromCart } = useCart();

    if (!isCartOpen) return null;

    return (
        <div id="savat-yon-oyna" className={`yon-oyna-qulf ${isCartOpen ? 'yon-oyna-ochiq' : ''}`}>
            <div className="oyna-kalla">
                <h2>Savat (Cart)</h2>
                <button id="savat-yopish" onClick={closeCart}>X</button>
            </div>
            <div id="savat-ichidagi-narsalar" className="yon-ichki-joy">
                {cartItems.length === 0 ? (
                    <p style={{ color: '#555' }}>Savat bo'sh</p>
                ) : (
                    cartItems.map((product, index) => (
                        <div key={index} className="yon-oyna-item">
                            <p>{product.title}</p>
                            <div>
                                <b>${product.price}</b>
                                <button onClick={() => removeFromCart(index)}>Ochirish</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}