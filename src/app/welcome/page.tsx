"use client";
import React, { useState, useEffect } from "react";
//import Image from "next/image";
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
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section className="w-full relative min-h-screen">
            <div className="relative">
                {currentPhoto && (
                    <img
                        className="w-full h-screen block object-cover"
                        src={`https://live.staticflickr.com/${currentPhoto.server}/${currentPhoto.id}_${currentPhoto.secret}_b.jpg`}
              alt="carousel of photos taken by photographer, Brian Koch"

                    />
                )}
            </div>
            <div className="welcome-display absolute top-2/3 left-20 text-white">
                <h1 className="text-2xl lg:text-5xl tracking-widest drop-shadow">
                    Brian Koch
                </h1>
                <h2 className="text-xl lg:text-5xl tracking-widest text-4xl mb-5 drop-shadow">
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
