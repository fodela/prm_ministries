import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <ul className="flex gap-4 text-lg uppercase">
      <li>
        <Link href="#">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        <Link href="/give">Give</Link>
      </li>
      <li>
        <Link href="/testimonies">Testimonies</Link>
      </li>
      <li>
        <Link href="/library">Library</Link>
      </li>
      <li>
        <Link href="events">Events</Link>
      </li>
      <li>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </li>
    </ul>
  );
};

export default Navigation;
