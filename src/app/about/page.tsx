import profilePhoto from "../resources/BK.jpg";
import Image from "next/image";

export default function About() {
    return (
        <section className="w-full h-1/2 flex justify-between">
            <div className="w-full flex flex-col items-center py-10">
                <h2 className="text-center uppercase text-2xl">My Story</h2>
                <p className="w-2/3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsam deserunt nobis perspiciatis amet! Error deserunt quam
                    alias repellendus delectus, reiciendis placeat consequuntur.
                    Ex id excepturi voluptates vero nobis inventore. Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Soluta quod
                    itaque dolor incidunt sit et temporibus natus aut? Similique
                    dolores officiis laborum nam, cumque architecto tempora
                    cupiditate nihil accusamus odio!
                </p>
                <button
                    className="px-10 rounded-full hover:bg-stone-600 w-fit"
                    style={{
                        background: "#BCAC9A",
                    }}
                >
                    Learn More
                </button>
            </div>
            <div>
                <Image
                    src={profilePhoto}
                    alt="Brian Koch photographer photo"
                    width={600}
                    height={400}
                    className="p-10"
                />
            </div>
        </section>
    );
}
