import { FaFacebookSquare, FaFlickr } from "react-icons/fa";
import { GrMail } from 'react-icons/gr'

const Footer = () => {
    return (
        <section
            className="footer-display w-full flex flex-col bg-stone-300"
            style={{ backgroundColor: "#7A8266" }}
        >
            <div className="social-icons w-full flex justify-center mt-5">
                <a
                    href="https://www.facebook.com/brian.koch.75"
                    className="m-5"
                >
                    <FaFacebookSquare
                        style={{ color: "white", fontSize: "25px" }}
                    />
                </a>
                <a href={`mailto:kendalljunekoch@gmail.com`} className="m-5">
                    <GrMail style={{ color: "white", fontSize: "25px" }} />
                </a>
                <a
                    href="https://flickr.com/photos/brian330inafrica"
                    className="m-5"
                >
                    <FaFlickr style={{ color: "white", fontSize: "25px" }} />
                </a>
            </div>
            <div className="text-center italic text-sm text-zinc-700 text-lg font-light my-5">
                Copyright © Brian Koch Photography. Contents cannot be used in
                any way without written permission
            </div>
        </section>
    );
};

export default Footer;
