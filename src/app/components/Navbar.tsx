"use client";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
//import Image from "next/image";


function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
    return (
        <nav className="navbar fixed w-full flex top-0 z-10 bg-white/50 py-1 border-b border-slate">
            <div className="flex w-full justify-between items-center ">
                <div>
                    <Link href="/" className="flex">
                        <img
                            src="/Logo.png"
                            alt="B photo logo"
                            width={30}
                            className="mx-5"
                        />
                        <h1
                            className={` lg:block hidden text-xl text-black ${
                                pathname === "/" ? "invisible" : ""
                            }`}
                        >
                            Brian Koch Photography
                        </h1>
                    </Link>
                </div>
                <div className="pb-2 lg:text-lg text-sm lg:mr-5">
                    <Link
                        href="/"
                        className={` hover:font-bold uppercase mx-3 ${
                            pathname === "/"
                                ? "underline underline-offset-8 font-bold"
                                : "pt-2 text-slate-950"
                        }`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className={` hover:font-bold uppercase mx-3 ${
                            pathname === "/about"
                                ? "underline underline-offset-8 font-bold"
                                : "pt-2 text-slate-950"
                        }`}
                    >
                        About
                    </Link>
                    <Link
                        href="/galleries"
                        className={` hover:font-bold uppercase mx-3 ${
                            pathname === "/galleries"
                                ? "underline underline-offset-8 font-bold"
                                : "pt-2 text-slate-950"
                        }`}
                    >
                        Galleries
                    </Link>
                    <Link
                        href="/contact"
                        className={` hover:font-bold uppercase mx-3 ${
                            pathname === "/contact"
                                ? "underline underline-offset-8 "
                                : "pt-2 text-slate-950"
                        }`}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
