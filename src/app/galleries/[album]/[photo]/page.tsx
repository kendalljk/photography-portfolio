"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
//import Image from "next/image";
import Masonry from "react-masonry-css";
import { useSearchParams } from "next/navigation";
import { RiCloseCircleLine } from "react-icons/ri";

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
    const searchParams = useSearchParams();
    const router = useRouter();

    const goBack = () => {
        router.back();
    };

    useEffect(() => {
        const fetchPhoto = async () => {
            try {
                const response = await fetch(
                    `/api/getPhoto?id=${params.photo}`
                );
                const data = await response.json();
                setPhoto(data);
            } catch (err: any) {
                setError(err?.toString() || "An error occurred");
            }
        };

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
                <div className="max-h-screen mt-12 flex justify-center">
                    <img
                        src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`}
                        className="object-contain relative"
                        alt="Photos from photo album"
                        loading="lazy"
                    />
                    <RiCloseCircleLine
                        className="relative top-0 left-12 text-4xl text-slate-800"
                        onClick={() => goBack()}
                    />
                </div>
            )}
            {error && <div className="text-red-500">{error}</div>}
        </section>
    );
}
