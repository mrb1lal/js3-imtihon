import './Newsletter.css';

export default function Newsletter() {
    return (
        <div className="qora-kattakon-quti-obuna">
            <div className="obuna-yozuvlar">
                <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
            </div>
            <div className="obuna-inputlar">
                <div className="qidirish-joyi oq-input">
                    <i className="fa-regular fa-envelope"></i>
                    <input type="text" placeholder="Enter your email address" />
                </div>
                <button className="oq-knopka-obuna">Subscribe to Newsletter</button>
            </div>
        </div>
    );
}