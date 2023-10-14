"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
//import Image from "next/image";
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
    const [page, setPage] = useState<number>(1);
    const [hasMore, setHasMore] = useState(true);
    const searchParams = useSearchParams();
    const title = searchParams?.get("title") || "";

    const fetchAlbum = async (page: number) => {
        try {
            const response = await fetch(
                `/api/getAlbumById?id=${params.album}&page=${page}`
            );
            const data = await response.json();
            setHasMore(data.hasMore);
            setAlbum((prevAlbum) => [...prevAlbum, ...data.photos]);
        } catch (err: any) {
            setError(err?.toString() || "An error occurred");
        }
    };

    useEffect(() => {
        fetchAlbum(page);
    }, [params.album, page]);

    const loadMore = () => {
        const newPage = page + 1;
        setPage(newPage);
    };

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1,
    };

    return (
        <section className="w-full min-h-screen flex flex-col items-center">
            <h2 className="pt-20 text-xl mb-5">{title}</h2>
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
                            <img
                                src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`}
                                alt="Photos from photo album"
                                width={400}
                                height={200}
                            />
                        </Link>
                    </div>
                ))}
            </Masonry>
            {hasMore && (
                <button
                    onClick={loadMore}
                    className="bg-stone-400 px-5 py-2 rounded-full hover:bg-stone-300 mb-5"
                >
                    Load More
                </button>
            )}
        </section>
    );
}
