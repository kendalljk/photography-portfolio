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
            const response = await fetch(`/api/getRecents`);
            const data = await response.json();

            setProjects(data);
            setTotalPages(Math.ceil(data.length / ITEMS_PER_PAGE));
        } catch (err: any) {
            setError(err?.toString() || "An error occurred");
        }
    };

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
      <section className="w-full h-screen flex flex-col justify-center py-12">
        <h1 className="mx-auto">Recent projects</h1>
            <div className="w-full h-1/2 flex justify-center">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="lg:m-5 md:m-2 disabled:text-slate-400"
                >
                    <AiOutlineLeft style={{ fontSize: "25px" }} />
                </button>
                {projects.slice(startIndex, endIndex).map((project) => (
                    <div
                        key={project.id}
                        className="m-2 w-1/4 h-full lg:w-1/5 font-semibold"
                    >
                        <div className="relative w-full h-full overflow-hidden ">
                            <Image
                                src={`https://live.staticflickr.com/${project.server}/${project.primary}_${project.secret}_c.jpg`}
                                className="object-cover"
                                alt={project.title._content}
                                fill
                        sizes="w-1/4 h-full lg:w-1/5"
                        loading="lazy"
                            />
                        </div>
                        <Link
                            href={{
                                pathname: `/galleries/${project.id}`,
                                query: { title: project.title._content },
                            }}
                        >
                            <h4 className="truncate">
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
