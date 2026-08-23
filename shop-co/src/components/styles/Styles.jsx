import './Styles.css';

export default function Styles() {
    return (
        <section className="kiyim-uslublari-seksiyasi">
            <div className="kulrang-katta-quti">
                <h2 className="ortadagi-katta-yozuv">BROWSE BY DRESS STYLE</h2>
                <div className="uslublar-rasmlari-grid">
                    <div className="uslub-karta kichkina-karta">
                        <img src="/img/Frame 61.png" alt="Casual" />
                    </div>
                    <div className="uslub-karta katta-karta">
                        <img src="/img/Frame 62.png" alt="Formal" />
                    </div>
                    <div className="uslub-karta katta-karta">
                        <img src="/img/Frame 64.png" alt="Party" />
                    </div>
                    <div className="uslub-karta kichkina-karta">
                        <img src="/img/Frame 63.png" alt="Gym" />
                    </div>
                </div>
            </div>
        </section>
    );
}