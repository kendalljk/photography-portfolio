"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface Album {
    farm: number;
    primary: string;
    server: string;
    secret: string;
    id: string;
    title: {
        _content: string;
    };
}

export default function Galleries() {
    const [albums, setAlbums] = useState<Album[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchAlbums = async () => {
        try {
            const response = await fetch(`/api/getGallery`);
            const data = await response.json();
            console.log("Galleries albums", data);
            setAlbums(data);
        } catch (err: any) {
            setError(err?.toString() || "An error occurred");
        }
    };
    console.log("Albums", albums);

    useEffect(() => {
        fetchAlbums();
    }, []);

    return (
        <section className="gallery-display min-h-screen flex flex-col items-center">
            <h2 className="pt-20">Galleries</h2>
            <div className="w-full flex justify-around">
                {albums.map((album) => (
                    <div
                        key={album.id}
                        className="flex flex-col items-center flex-grow m-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                    >
                        <Image
                            src={`https://farm${album.farm}.staticflickr.com/${album.server}/${album.primary}_${album.secret}_c.jpg`}
                            alt={album.title._content}
                            width={400}
                            height={200}
                        />
                        <Link href={`/galleries/${album.id}`}>
                            <h4 className="album-title">
                                {album.title._content}
                            </h4>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
