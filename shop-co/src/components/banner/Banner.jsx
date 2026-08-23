import './Banner.css';

export default function Banner() {
    return (
        <section className="katta-bosh-rasm">
            <div className="chap-taraf-yozuvlar">
                <h1>ONE LIFE GRAPHIC T-SHIRT</h1>
                <p>This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                <button className="qop-qora-knopka">Shop Now</button>
                <div className="raqamlar-statistika">
                    <div><h3>200+</h3><p>International Brands</p></div>
                    <div><h3>2,000+</h3><p>High-Quality Products</p></div>
                    <div><h3>30,000+</h3><p>Happy Customers</p></div>
                </div>
            </div>
            <div className="ong-taraf-rasmlar">
                <img className="model-rasmi" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRK5s5KcPGGTjSKDn8BTuotKu7mm_83ngPtKuVzljKlV-6sMqOD" alt="Product" />
            </div>
        </section>
    );
}