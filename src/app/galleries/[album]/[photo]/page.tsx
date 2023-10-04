"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { useSearchParams } from "next/navigation";

interface Photo {
    farm: number;
    primary: string;
    server: string;
    secret: string;
    id: string;
    dates: {
        taken: string;
    };
    owner: {
        realname: string;
    };
}

interface PhotoProps {
    params: {
        photo: string;
    };
}

export default function Photo({ params }: PhotoProps) {
    const [photo, setPhoto] = useState<Photo | null>(null);
    const [error, setError] = useState<string | null>(null);
    console.log("Params", params.photo);
    const searchParams = useSearchParams();

    const fetchPhoto = async () => {
        try {
            const response = await fetch(`/api/getPhoto?id=${params.photo}`);
            const data = await response.json();
            console.log("Galleries album", data);
            setPhoto(data);
        } catch (err: any) {
            setError(err?.toString() || "An error occurred");
        }
    };
    console.log("Album photo", photo);

    useEffect(() => {
        fetchPhoto();
    }, [params.photo]);

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1,
    };

    return (
        <section className="w-full min-h-screen flex flex-col items-center justify-center">
            {photo && (
                <>
                    <div className="w-full flex justify-center">
                        <Image
                            src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`}
                            alt="Photos from photo album"
                            width={800}
                            height={600}
                        />
                    </div>
                    {photo.dates.taken && <h3>{photo.dates.taken}</h3>}
                    <span className="italic ml-5">{photo.owner.realname}</span>
                </>
            )}
            {error && <div className="text-red-500">{error}</div>}
        </section>
    );
}
