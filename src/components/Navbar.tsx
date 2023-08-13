"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "../app/resources/Logo.png";

function Navbar() {
    const pathname = usePathname();
    return (
        <nav className="navbar fixed w-full flex top-0 z-10">
            <div className="flex w-full justify-between m-5">
                <div>
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="B photo logo"
                            height={50}
                            width={50}
                        />
                    </Link>
                </div>
                <div className="">
                    <Link
                        href="/"
                        className={` hover:font-bold ${
                            pathname === "/home"
                                ? "underline underline-offset-8"
                                : "py-2 px-4 text-slate-950"
                        }`}
                    >
                        HOME
                    </Link>
                    <Link
                        href="/about"
                        className={` hover:font-bold ${
                            pathname === "/about"
                                ? "underline underline-offset-8"
                                : "py-2 px-4 text-slate-950"
                        }`}
                    >
                        ABOUT
                    </Link>
                    <Link
                        href="/galleries"
                        className={` hover:font-bold ${
                            pathname === "/galleries"
                                ? "underline underline-offset-8"
                                : "py-2 px-4 text-slate-950"
                        }`}
                    >
                        GALLERIES
                    </Link>
                    <Link
                        href="/contact"
                        className={` hover:font-bold ${
                            pathname === "/contact"
                                ? "underline underline-offset-8"
                                : "py-2 px-4 text-slate-950"
                        }`}
                    >
                        CONTACT
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
