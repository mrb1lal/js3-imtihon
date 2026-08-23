import { useCart } from '../context/CartContext';
import './Sidebar.css';

export default function LikeSidebar() {
    const { likedItems, isLikeOpen, closeLikes, removeFromLikes } = useCart();

    if (!isLikeOpen) return null;

    return (
        <div id="yurak-yon-oyna" className={`yon-oyna-qulf ${isLikeOpen ? 'yon-oyna-ochiq' : ''}`}>
            <div className="oyna-kalla">
                <h2>Yoqtirganlar (Likes)</h2>
                <button id="yurak-yopish" onClick={closeLikes}>X</button>
            </div>
            <div id="yurak-ichidagi-narsalar" className="yon-ichki-joy">
                {likedItems.length === 0 ? (
                    <p style={{ color: '#555' }}>Hali hech nima yoqtirilmagan</p>
                ) : (
                    likedItems.map((product, index) => (
                        <div key={index} className="yon-oyna-item">
                            <p>{product.title}</p>
                            <div>
                                <b>${product.price}</b>
                                <button onClick={() => removeFromLikes(index)}>Ochirish</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}