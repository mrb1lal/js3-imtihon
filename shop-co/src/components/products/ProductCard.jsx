import { useCart } from '../context/CartContext';
import './ProductCard.css';

export default function ProductCard({ product }) {
    const { addToCart, addToLikes } = useCart();

    const discountHtml = product.discount > 0
        ? (
            <>
                <span className="eski-narx">${product.oldPrice}</span>
                <span className="skidka-foizi">-{product.discount}%</span>
            </>
        )
        : null;

    return (
        <div className="bitta-tovar-qutisi">
            <img src={product.image} alt={product.title} />
            <div className="tovar-nomi">{product.title}</div>
            <div>⭐⭐⭐⭐⭐ {product.rating}/5</div>
            <div className="narxlar-joyi">
                <span>${product.price}</span>
                {discountHtml}
            </div>
            <div className="btn-gruppasi">
                <button className="savatga-urish-btn" onClick={() => addToCart(product.id)}>Savatga</button>
                <button className="like-bosish-btn" onClick={() => addToLikes(product.id)}>❤ Like</button>
            </div>
        </div>
    );
}