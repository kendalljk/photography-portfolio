"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "../../app/resources/Logo.png";

function Navbar() {
    const pathname = usePathname();
    return (
        <nav
            className="navbar fixed w-full flex top-0 z-10 "
        >
            <div className="flex w-full justify-between my-3">
                <div>
                    <Link href="/" className="flex">
                        <Image
                            src={logo}
                            alt="B photo logo"
                            height={30}
                            width={30}
                            className="mx-3"
                        />
            <h1>Brian Koch Photography</h1>
            </Link>
                </div>
                <div className="bg-white pb-2">
                    <Link
                        href="/"
                        className={` hover:font-bold uppercase mx-3 ${
                            pathname === "/"
                                ? "underline underline-offset-8"
                                : "pt-2 text-slate-950"
                        }`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className={` hover:font-bold uppercase mx-3 ${
                            pathname === "/about"
                                ? "underline underline-offset-8"
                                : "pt-2 text-slate-950"
                        }`}
                    >
                        About
                    </Link>
                    <Link
                        href="/galleries"
                        className={` hover:font-bold uppercase mx-3 ${
                            pathname === "/galleries"
                                ? "underline underline-offset-8"
                                : "pt-2 text-slate-950"
                        }`}
                    >
                        Galleries
                    </Link>
                    <Link
                        href="/contact"
                        className={` hover:font-bold uppercase mx-3 ${
                            pathname === "/contact"
                                ? "underline underline-offset-8"
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