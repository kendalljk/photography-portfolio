"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Masonry from "react-masonry-css";

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
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);
    const [hasMore, setHasMore] = useState(true);

    const fetchAlbums = async (page: number) => {
        try {
            const response = await fetch(`/api/getGallery?page=${page}`);
            const data = await response.json();
            setHasMore(data.hasMore);
            setAlbums((prevAlbums) => [...prevAlbums, ...data.albums]);
            setLoading(false);
        } catch (err: any) {
            setError(err?.toString() || "An error occurred");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAlbums(page);
    }, [page]);

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1,
    };

    const loadMore = () => {
        const newPage = page + 1;
        setPage(newPage);
    };

    return (
        <section className="gallery-display min-h-screen flex flex-col items-center w-full">
            <h2 className="pt-20 text-xl mb-5">Galleries</h2>
            <div className="w-full flex flex-wrap mx-auto justify-center">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid flex w-auto"
                    columnClassName="my-masonry-grid_column"
                >
                    {albums.map((album) => (
                        <div
                            key={album.id}
                            className="gallery-item flex flex-col px-2"
                        >
                            <div className="flex justify-center mb-5">
                                <Link
                                    className="text-center font-semibold"
                                    href={{
                                        pathname: `/galleries/${album.id}`,
                                        query: { title: album.title._content },
                                    }}
                                >
                                    <Image
                                        src={`https://live.staticflickr.com/${album.server}/${album.primary}_${album.secret}_c.jpg`}
                                        alt={album.title._content}
                                        width={500}
                                        height={300}
                                    />
                                    <h4 className="album-title">
                                        {album.title._content}
                                    </h4>
                                </Link>
                            </div>
                        </div>
                    ))}
                </Masonry>
            </div>
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
