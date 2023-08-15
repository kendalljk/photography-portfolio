"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
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

interface AlbumProps {
    params: {
        album: string;
    };
}

export default function Album({ params }: AlbumProps) {
    const [album, setAlbum] = useState<Album[]>([]);
    const [error, setError] = useState<string | null>(null);
    console.log("Params", params.album);

    const fetchAlbum = async () => {
        try {
            const response = await fetch(`/api/getAlbum?id=${params.album}`);
            const data = await response.json();
            console.log("Galleries album", data);
            setAlbum(data);
        } catch (err: any) {
            setError(err?.toString() || "An error occurred");
        }
    };
    console.log("Album photos", album);

    useEffect(() => {
        fetchAlbum();
    }, [params.album]);

    return (
        <section className="w-full min-h-screen flex flex-wrap justify-center">
            {album.map((photo) => (
                <div
                    key={photo.id}
                    className="flex flex-grow m-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                >
                    <Image
                        src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`}
                        alt="Photos from photo album"
                        width={400}
                        height={200}
                    />
                    <Link href={`/galleries/`}></Link>
                </div>
            ))}
        </section>
    );
}
