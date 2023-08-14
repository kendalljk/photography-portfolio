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
            const response = await fetch(`/api/albums`);
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
        <section className="gallery-display min-h-screen flex flex-col items-center align-middle">
            <h2 className="pt-20">Galleries</h2>
            <div className="w-full flex justify-around">
                {albums.map((album) => (
                    <div key={album.id} className="album-item">
                        <Image
                            src={`https://farm${album.farm}.staticflickr.com/${album.server}/${album.primary}_${album.secret}_c.jpg`}
                            alt={album.title._content}
                            width={200}
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
