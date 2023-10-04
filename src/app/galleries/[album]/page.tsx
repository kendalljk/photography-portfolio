"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { useSearchParams } from "next/navigation";

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
    const searchParams = useSearchParams();
    const title = searchParams?.get("title") || "";

    const fetchAlbum = async () => {
        try {
            const response = await fetch(
                `/api/getAlbumById?id=${params.album}`
            );
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

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1,
    };

    return (
        <section className="w-full min-h-screen flex flex-col items-center">
            <h2 className="pt-20 text-3xl mb-5">{title}</h2>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid flex w-auto"
                columnClassName="my-masonry-grid_column"
            >
                {album.map((photo) => (
                    <div key={photo.id} className="my-masonry-item m-2">
                        <Link
                            className="text-center font-semibold"
                            href={{
                                pathname: `/galleries/album/${photo.id}`,
                            }}
                        >
                            <Image
                                src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`}
                                alt="Photos from photo album"
                                width={400}
                                height={200}
                            />
                        </Link>
                    </div>
                ))}
            </Masonry>
        </section>
    );
}
