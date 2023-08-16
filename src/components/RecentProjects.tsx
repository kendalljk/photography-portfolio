"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface Projects {
    farm: number;
    primary: string;
    server: string;
    secret: string;
    id: string;
    title: {
        _content: string;
    };
}

const ITEMS_PER_PAGE = 3;

const RecentProjects = () => {
    const [projects, setProjects] = useState<Projects[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchProjects = async () => {
        try {
            const response = await fetch(`/api/getGallery`);
            const data = await response.json();
            console.log("Galleries Projects", data);
            setProjects(data);
            setTotalPages(Math.ceil(data.length / ITEMS_PER_PAGE));
        } catch (err: any) {
            setError(err?.toString() || "An error occurred");
        }
    };
    console.log("Projects", projects);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    useEffect(() => {
        fetchProjects();
    }, []);
    return (
        <section className="w-full flex flex-col items-center py-20">
            <h2>My Recent Projects</h2>
            <div className="w-full flex justify-center">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="lg:m-5 md:m-2 disabled:text-slate-400"
                >
                    <AiOutlineLeft style={{ fontSize: "25px" }} />
                </button>
                {projects.slice(startIndex, endIndex).map((project) => (
                    <div key={project.id} className="m-2">
                        <div className="relative w-30 h-40 sm:w-32 sm:h-48 md:w-56 md:h-96 overflow-hidden ">
                            <Image
                                src={`https://farm${project.farm}.staticflickr.com/${project.server}/${project.primary}_${project.secret}_c.jpg`}
                                alt={project.title._content}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <Link href={`/galleries/${project.id}`}>
                            <h4 className="project-title">
                                {project.title._content}
                            </h4>
                        </Link>
                    </div>
                ))}
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="lg:m-5 md:m-2 disabled:text-slate-400"
                >
                    <AiOutlineRight style={{ fontSize: "25px" }} />
                </button>
            </div>
        </section>
    );
};

export default RecentProjects;
