"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Photo {
    farm: number;
    primary: string;
    server: string;
    id: string;
    secret: string;
}

const Welcome = () => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchAlbums = async () => {
        try {
            const response = await fetch("/api/albums");
            const data = await response.json();
            console.log(data);
            setPhotos(data);
            setLoading(false);
        } catch (err: any) {
            setError(err?.toString() || "An error occurred");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAlbums();
    }, []);

    const nextPhoto = () => {
        let newIndex = Math.floor(Math.random() * photos.length);
        if (newIndex === currentPhotoIndex && photos.length > 1) {
            newIndex = (newIndex + 1) % photos.length;
        }
        setCurrentPhotoIndex(newIndex);
    };

    useEffect(() => {
        function scheduleNextPhoto() {
            if (photos.length > 1) {
                setTimeout(() => {
                    nextPhoto();
                    scheduleNextPhoto();
                }, 10000);
            }
        }

        scheduleNextPhoto();
    }, [photos, currentPhotoIndex]);

    const currentPhoto = photos[currentPhotoIndex];
    console.log(currentPhoto);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section className="welcome-page h-screen">
            <div className="g-0 m-0">
                <Image
                    className="figure-photo"
                    src={`https://farm${currentPhoto.farm}.staticflickr.com/${currentPhoto.server}/${currentPhoto.primary}_${currentPhoto.secret}_b.jpg`}
                    alt="BK images carousel"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="welcome-display"></div>
        </section>
    );
};

export default Welcome;
