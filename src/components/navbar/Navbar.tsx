"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About me" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact me" }
];

export default function Navbar() {
    const [scrolling, setScrolling] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`site-nav${scrolling || menuOpen ? " site-nav--scrolled" : " site-nav--home"}`}>
            <div className="nav-inner">
                <Logo />
                <ul className="nav-links">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button
                    className="nav-menu-button"
                    type="button"
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    {menuOpen ? <X size={21} /> : <Menu size={21} />}
                </button>
            </div>
            <div className={`mobile-menu${menuOpen ? " mobile-menu--open" : ""}`}>
                {navLinks.map((link, index) => (
                    <Link
                        href={link.href}
                        key={link.href}
                        onClick={() => setMenuOpen(false)}
                    >
                        <span>0{index + 1}</span>{link.label}<span>↗</span>
                    </Link>
                ))}
            </div>
        </nav>
    );
}