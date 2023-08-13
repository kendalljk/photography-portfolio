const Footer = () => {
    return (
        <div className="footer-display g-0">
            <div className="social-icons">
                <a href="https://www.facebook.com/brian.koch.75">
                    <i className="icon fab fa-facebook" />
                </a>
                <a href="https://flickr.com/photos/brian330inafrica">
                    <i className="icon fab fa-flickr" />
                </a>
                <a href={`mailto:kendalljunekoch@gmail.com`}>
                    <i className="icon fas fa-envelope" />
                </a>
            </div>
            <div className="copywrite">
                Copyright © Brian Koch Photography. Contents cannot be used in
                any way without written permission
            </div>
        </div>
    );
};

export default Footer;
