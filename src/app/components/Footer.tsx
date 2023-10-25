import { FaFacebookSquare, FaFlickr } from "react-icons/fa";
import { GrMail } from 'react-icons/gr'

const Footer = () => {
    return (
        <section
            className="footer-display w-full flex flex-col"
        >
            <div className="social-icons w-full flex justify-center mt-5">
                <a
                    href="https://www.facebook.com/brian.koch.75"
                    className="m-5"
                >
                    <FaFacebookSquare
                    />
                </a>
                <a href={`mailto:kendalljunekoch@gmail.com`} className="m-5">
                    <GrMail/>
                </a>
                <a
                    href="https://flickr.com/photos/brian330inafrica"
                    className="m-5"
                >
                    <FaFlickr />
                </a>
            </div>
            <div className="text-center italic text-xs text-zinc-700 text-lg font-light my-5">
                Brian Koch Photography©
            </div>
        </section>
    );
};

export default Footer;
