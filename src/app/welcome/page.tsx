"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface WelcomePhoto {
    farm: number;
    primary: string;
    server: string;
    id: string;
    secret: string;
}

const Welcome = () => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const [welcomePhotos, setWelcomePhotos] = useState<WelcomePhoto[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchAlbums = async () => {
        try {
            const response = await fetch(
                `/api/getAlbumByTitle?title=backgrounds`
            );
            const data = await response.json();
            setWelcomePhotos(data);
        } catch (err: any) {
            setError(err?.toString() || "An error occurred");
        }
    };

    console.log(welcomePhotos);

    useEffect(() => {
        fetchAlbums();
    }, []);

    useEffect(() => {
        const nextPhoto = () => {
            let newIndex = Math.floor(Math.random() * welcomePhotos.length);
            if (newIndex === currentPhotoIndex && welcomePhotos.length > 1) {
                newIndex = (newIndex + 1) % welcomePhotos.length;
            }
            setCurrentPhotoIndex(newIndex);
        };

        if (welcomePhotos.length > 1) {
            const intervalId = setInterval(() => {
                nextPhoto();
            }, 10000);

            // clears interval when component unmounts, prevents excess calls
            return () => {
                clearInterval(intervalId);
            };
        }
    }, [welcomePhotos, currentPhotoIndex]);

    const currentPhoto = welcomePhotos[currentPhotoIndex];
    console.log(currentPhoto);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section className="welcome-page relative h-screen">
            <div className="relative h-screen">
                {currentPhoto && (
                    <Image
                        className="figure-photo"
                        src={`https://live.staticflickr.com/${currentPhoto.server}/${currentPhoto.id}_${currentPhoto.secret}_b.jpg`}
                        alt="BK images carousel"
                        fill
                        style={{
                            objectFit: "cover",
                        }}
                        sizes="100vw 100vh"
                    />
                )}
            </div>
            <div className="welcome-display absolute top-2/3 left-20 text-white">
                <h1 className="text-3xl tracking-widest drop-shadow">
                    Brian Koch
                </h1>
                <h2 className="tracking-widest text-2xl mb-5 drop-shadow">
                    Photography
                </h2>
                <Link
                    href={"/galleries"}
                    className="bg-stone-400 px-5 py-2 rounded-full hover:bg-stone-300"
                >
                    Galleries
                </Link>
            </div>
        </section>
    );
};

export default Welcome;
