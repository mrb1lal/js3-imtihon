import './Footer.css';

export default function Footer() {
    return (
        <footer className="pastki-axlat-qutisi">
            <div className="footer-tepa-qism">
                <div className="footer-birinchi-ustun">
                    <div className="logotip-zoor">SHOP.CO</div>
                    <p>We have clothes that suits your style and which you're proud to wear. From women to men.</p>
                    <div className="ijtimoiy-tarmoqlar">
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-github"></i>
                    </div>
                </div>
                <div className="footer-ustun">
                    <h4>COMPANY</h4>
                    <a href="#">About</a>
                    <a href="#">Features</a>
                    <a href="#">Works</a>
                    <a href="#">Career</a>
                </div>
                <div className="footer-ustun">
                    <h4>HELP</h4>
                    <a href="#">Customer Support</a>
                    <a href="#">Delivery Details</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div className="footer-ustun">
                    <h4>FAQ</h4>
                    <a href="#">Account</a>
                    <a href="#">Manage Deliveries</a>
                    <a href="#">Orders</a>
                    <a href="#">Payments</a>
                </div>
                <div className="footer-ustun">
                    <h4>RESOURCES</h4>
                    <a href="#">Free eBooks</a>
                    <a href="#">Development Tutorial</a>
                    <a href="#">How to - Blog</a>
                    <a href="#">Youtube Playlist</a>
                </div>
            </div>
            <div className="footer-pastki-chiziq">
                <p>Shop.co © 2000-2023, All Rights Reserved</p>
                <div className="tolov-turlari">
                    <i className="fa-brands fa-cc-visa"></i>
                    <i className="fa-brands fa-cc-mastercard"></i>
                    <i className="fa-brands fa-cc-paypal"></i>
                    <i className="fa-brands fa-cc-apple-pay"></i>
                </div>
            </div>
        </footer>
    );
}