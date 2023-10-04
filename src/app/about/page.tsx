import profilePhoto from "../resources/BK.jpg";
import Image from "next/image";

export default function About() {
    return (
        <section className="about min-h-screen flex flex-col items-center py-20 overflow-auto">
            <h2 className="pb-10">About</h2>
            <div className="w-2/3 flex lg:flex-row flex-col">
                <div className="w-full">
                    <Image
                        id="photographer-photo"
                        src={profilePhoto}
                        alt="photographer photo"
                        width={300}
                        height={300}
                    />
                    <div>
                        <h4>My Equipment:</h4>
                        <ul>
                            <li>Canon EOS R5 Canon EF 16-35mm f/4 L</li>
                            <li>
                                Canon RF 24-105mm f/4 L Canon EF 50mm f/1.8 II
                                Canon EF
                            </li>
                            <li>
                                100mm f/2.8 USM Sigma EF 100-300mm f/4 EX DG
                                Induro CLT204
                            </li>
                            <li>
                                Stealth Carbon Fiber Tripod Manfrotto 055CXPRO3
                                Carbon Fiber
                            </li>
                            <li>Tripod</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center lg:mt-0 mt-5">
                    <div className="w-full">
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
            </div>
        </section>
    );
}
