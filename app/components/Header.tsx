"use client";

import Button from "./Button";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import Link from "next/link";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="header relative">
      <Logo />
      <span className="hidden xl:block">
        <Navigation />
      </span>

      <BiMenu
        className="xl:hidden text-2xl md:mx-4"
        onClick={() => setOpen(!open)}
      />

      <div className="absolute top-16 right-0 left-0 bg-black/10 backdrop-blur-lg ">
        {open && (
          <ul className="flex flex-col items-center gap-4 text-lg uppercase menu py-10">
            <li
              onClick={() => {
                setOpen(false);
              }}
            >
              <Link href="#">Home</Link>
            </li>
            <li
              onClick={() => {
                setOpen(false);
              }}
            >
              <Link href="/about">About</Link>
            </li>
            <li
              onClick={() => {
                setOpen(false);
              }}
            >
              <Link href="/contact">Contact</Link>
            </li>
            <li
              onClick={() => {
                setOpen(false);
              }}
            >
              <Link href="/give">Give</Link>
            </li>
            <li
              onClick={() => {
                setOpen(false);
              }}
            >
              <Link href="/testimonies">Testimonies</Link>
            </li>
            <li
              onClick={() => {
                setOpen(false);
              }}
            >
              <Link href="/library">Library</Link>
            </li>
            <li
              onClick={() => {
                setOpen(false);
              }}
            >
              <Link href="events">Events</Link>
            </li>
            <li
              onClick={() => {
                setOpen(false);
              }}
            >
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        )}
      </div>

      <span className="hidden 2xl:block">
        <Button />
      </span>
    </header>
  );
};

export default Header;
