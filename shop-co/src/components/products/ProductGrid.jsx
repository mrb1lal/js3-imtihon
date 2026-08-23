import ProductCard from './ProductCard';
import './ProductGrid.css';

export default function ProductGrid({ items, title }) {
    return (
        <section className="yangi-kelgan-mollar">
            <h2 className="ortadagi-katta-yozuv">{title}</h2>
            <div className="tovarlar-gridi">
                {items.map(item => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
            <button className="korsatish-hammasini-btn">View All</button>
        </section>
    );
}