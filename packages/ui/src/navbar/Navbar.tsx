"use client";
import { useEffect, useState } from "react"
import Link from "next/link";
import NavbarItem from "./NavbarItem";

export type NavbarProps = {
  variant?: "web" | "docs" | "doggo-bot" | "scoreboard";
  enableShrink?: boolean;
  hasSidenav?: boolean;
  mainRef?: React.RefObject<HTMLElement | null>;
}

export default function Navbar({ variant = "web", enableShrink, hasSidenav, mainRef }: NavbarProps) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const mainEl = mainRef?.current;
    if (!mainEl) return;

    const handleScroll = () => {
      const scrollTop = mainEl.scrollTop;
      setHasScrolled(scrollTop > 50);
      setIsShrunk(scrollTop > 100 || hasSidenav || variant === "scoreboard" || window.innerWidth <= 320);
    };

    mainEl.addEventListener("scroll", handleScroll);

    return () => mainEl.removeEventListener("scroll", handleScroll);
  }, [mainRef, enableShrink]);

  return (
    <nav 
      id="navbar"
      
      className={`ui:sticky ui:top-0 ui:w-full ui:bg-gray-900 ui:text-white ${
        hasScrolled ? "ui:shadow-md ui:transition-shadow ui:duration-300 ui:ease-in-out" : ""
      } z-50`}
    >
      {/* Main Navbar */}
      <div
        className={`ui:w-full ui:px-4 ui:lg:px-10 ui:flex ui:justify-between ui:items-center ui:transition-all ui:duration-300 ui:ease-in-out ${
          isShrunk ? "ui:h-12" : "ui:h-20"
        } ${hasSidenav ? "ui:pl-14 ui:lg:pl-14" : "" }`}
      >
        {/* Logo (Arcky-Tech) */}
        <h1
          className={`${
            isShrunk
              ? "ui:lg:text-2xl ui:sm:text-xl ui:text-base"
              : "ui:lg:text-3xl ui:sm:text-2xl ui:text-base"
          } ui:font-bold ui:transition-all ui:duration-300 ui:ease-in-out ${
            variant === "web"
              ? hasScrolled
                ? "ui:opacity-100 ui:translate-y-0"
                : "ui:opacity-0 ui:-translate-5"
              : "ui:opacity-100"
          }`}
        >
          <Link 
            href="/"
            className="ui:hover:text-gray-400 ui:transition-all ui:duration-300 ui:ease-in-out ui:md:inline ui:hidden"
          >
            {!hasSidenav ? "Arcky-Tech" : ""}
          </Link>
        </h1>
        {/* Icons and Name */}
        <div className="flex ui:md:space-x-5 ui:space-x-4">
          <NavbarItem
            href="/"
            icon="HomeIcon"
            text="Home"
            isShrunk={isShrunk}
          />
          <NavbarItem
            href="/projects"
            icon="BriefcaseIcon"
            text="Projects"
            isShrunk={isShrunk}
          />
          <NavbarItem
            href="https://discord.gg/HK99jTNqS2"
            icon="ChatBubbleLeftRightIcon"
            text="Discord"
            isShrunk={isShrunk}
          />
          <NavbarItem
            href="/documentation"
            icon="BookOpenIcon"
            text="Documentation"
            isShrunk={isShrunk}
          />
          <NavbarItem
            href="/about"
            icon="InformationCircleIcon"
            text="About"
            isShrunk={isShrunk}
          />
          <NavbarItem
            href="/contact"
            icon="UsersIcon"
            text="Contact"
            isShrunk={isShrunk}
          />
        </div>
      </div>
    </nav>
  )
}