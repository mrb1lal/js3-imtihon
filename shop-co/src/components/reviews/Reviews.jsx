import './Reviews.css';

const reviews = [
    {
        stars: '⭐⭐⭐⭐⭐',
        name: 'Sarah M. ✅',
        text: 'I\'m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I\'ve bought has exceeded my expectations.'
    },
    {
        stars: '⭐⭐⭐⭐⭐',
        name: 'Alex K. ✅',
        text: 'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.'
    },
    {
        stars: '⭐⭐⭐⭐⭐',
        name: 'James L. ✅',
        text: 'As someone who\'s always on the lookout for unique fashion pieces, I\'m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.'
    }
];

export default function Reviews() {
    return (
        <section className="xursand-odamlar-qismi">
            <h2 className="chapdagi-katta-yozuv">OUR HAPPY CUSTOMERS</h2>
            <div className="otzivlar-gridi">
                {reviews.map((review, index) => (
                    <div key={index} className="bitta-otziv">
                        <div className="yulduzlar">{review.stars}</div>
                        <h3>{review.name}</h3>
                        <p>{review.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}