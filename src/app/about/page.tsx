import Awards from "../components/Awards";
import profilePhoto from "../resources/BK.jpg";
import { FaAward, FaBookOpen } from "react-icons/fa";


export default function About() {
    return (
        <section className="min-h-screen flex flex-col items-center py-20 overflow-auto">
            <div className="w-2/3 flex lg:flex-row flex-col">
                <div className="w-full lg:w-1/2 flex flex-col">
                    <img
                        className="m-auto rounded-full"
                        id="photographer-photo"
                        src="/BK.jpg"
                        alt="photographer photo"
                        width={300}
                        height={300}
                    />
                    <div className="">
                        <h2 className="underline">My Equipment</h2>
                        <details className="text-left">
                            <summary>Cameras/Lenses</summary>
                            <ul className="list-disc ml-10">
                                <li>OM System OM-1</li>
                                <li>Olympus OMD- EM1 – mark II</li>
                                <li>M.Zuiko 300 mm F4 Pro</li>
                                <li>M.Zuiko 40-150 mm F2.8 Pro</li>
                                <li>M.Zuiko 12-40 mm F2.8 Pro</li>
                                <li>M.Zuiko 9-18mm F4.0-5.6</li>
                                <li>M.Zuiko 1.4 x TC</li>
                            </ul>
                        </details>
                        <details className="text-left">
                            <summary>Flashes</summary>
                            <ul className="list-disc ml-10">
                                <li>Godox Ad200 (2)</li>
                                <li>Godox V850 II</li>
                                <li>Godox V350</li>
                                <li>Godox AD300Pro</li>
                                <li>Godox Ad600B</li>
                                <li>Godox Trigger - XPro II and X2</li>
                            </ul>
                        </details>
                        <details className="text-left">
                            <summary>Modifiers</summary>
                            <ul className="list-disc ml-10">
                                <li>Magmod Suite of modifiers</li>
                                <li>{`Magmod 36' OctoBox`}</li>
                                <li>{`Godox 1'x6' StripBox`}</li>
                                <li>{`Glow 2'x3' SoftBox`}</li>
                                <li>{`Glow 1'x3' StripBox`}</li>
                            </ul>
                        </details>
                        <details className="text-left">
                            <summary>Drones</summary>
                            <ul className="list-disc ml-10">
                                <li>DJI Mavic 2 Pro</li>
                                <li>DJI Spark</li>
                            </ul>
                        </details>
                        <details className="text-left">
                            <summary>Photo Printers</summary>
                            <ul className="list-disc ml-10">
                                <li>Canon Pro-100 – 13”x19”</li>
                            </ul>
                        </details>
                        <details className="text-left">
                            <summary>Processing Software</summary>
                            <ul className="list-disc ml-10">
                                <li>Adobe Lightroom</li>
                                <li>Adobe Photoshop</li>
                                <li>Topaz Photo AI</li>
                            </ul>
                        </details>
                    </div>
                </div>
                <div className="flex flex-col items-center mx-5 lg:mt-0 mt-5 w-full lg:w-1/2">
                    <p>
                        {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ea harum obcaecati tempora quisquam facilis nihil ipsam! Blanditiis fuga inventore, accusantium minima, ullam, fugiat ipsum debitis optio consectetur at qui! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum ab, sapiente culpa eum ipsam alias explicabo blanditiis molestias architecto aliquid, enim esse fuga, iusto facere nobis adipisci harum amet.`}
                    </p>
                    <p>
                        {`Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ad quas dolore quidem nam vitae rem architecto dolor beatae, quae suscipit doloremque. Dolore amet voluptates repellendus tenetur, fuga consequatur Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa unde recusandae sapiente cumque consectetur quisquam illum, sed provident, quod aliquid! Vitae veritatis excepturi qui ipsa laudantium placeat sequi a!`}
                    </p>
                    <p>
                        {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsa sit explicabo illum adipisci numquam ratione impedit, alias unde atque vero quae sapiente ex soluta esse vitae animi nesciunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magni veniam inventore temporibus et? Repellendus, nobis! Sunt, hic sed quo porro culpa doloribus, asperiores aliquid suscipit reiciendis soluta, quidem ex?`}
                    </p>
                </div>
            </div>
        </section>
    );
}
