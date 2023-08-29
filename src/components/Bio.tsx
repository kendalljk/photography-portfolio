import React from "react";
import Image from "next/image";
import profilePhoto from "../app/resources/BK.jpg";
import Link from "next/link";

const Bio = () => {
    return (
        <section className="about p-20 w-full h-1/2 flex justify-center">
            <div className="lg:w-2/3 md:flex">
                <div className="w-full flex flex-col py-10">
                    <h2 className="uppercase text-2xl mb-5">My Story</h2>
                    <p className="md:w-2/3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ipsam deserunt nobis perspiciatis amet! Error
                        deserunt quam alias repellendus delectus, reiciendis
                        placeat consequuntur. Ex id excepturi voluptates vero
                        nobis inventore. Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Soluta quod itaque dolor incidunt sit
                        et temporibus natus aut? Similique dolores officiis
                        laborum nam, cumque architecto tempora cupiditate nihil
                        accusamus odio!
                    </p>
                    <Link
                        href={"/about"}
                        className="bg-stone-400 px-5 py-2 rounded-full hover:bg-stone-300 w-fit mt-5"
                    >
                        Learn More
                    </Link>
                </div>
                <div>
                    <Image
                        src={profilePhoto}
                        alt="Brian Koch photographer photo"
                        width={600}
                        height={400}
                        className="py-10"
                    />
                </div>
            </div>
        </section>
    );
};

export default Bio;
