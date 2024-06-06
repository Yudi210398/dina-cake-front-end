"use client";

import Link from "next/link";
import { Alfa_Slab_One } from "next/font/google";
import { useEffect, useState } from "react";
import Image from "next/image";
const alfa = Alfa_Slab_One({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  const [classx, setClassx] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  console.log(scrollY, `cakk`);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener saat komponen dilepas
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let hasil: string;

  if (scrollY === 0) hasil = `bg-white-200 pb-8`;
  else hasil = "navbar-fixed w-full z-10 pb-6";

  return (
    <header className={hasil}>
      <br />
      <nav className="flex justify-between items-center w-[80%]  mx-auto">
        <div>DINA CAKE</div>

        <div
          id="nav menu"
          className=" absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full"
        >
          <ul className="block">
            <li>
              <Link href="/">HOME</Link>
            </li>

            <li>
              <Link href="/">PRODUK</Link>
            </li>

            <li>
              <Link href="/">KONTAK</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-6   ">
          <button
            id="hamburger"
            name="hamburger"
            type="button"
            className="block absolute cursor-pointer "
            onClick={() => setClassx(!classx)}
          >
            <span
              className={`hamburger-line ${
                classx && "activesburger1"
              } transition duration-300 ease-in-out origin-top-left`}
            ></span>
            <span
              className={`hamburger-line ${
                classx && "activesburger3"
              } transition duration-300 ease-in-out`}
            ></span>
            <span
              className={`hamburger-line ${
                classx && "activesburger2"
              } transition duration-300 ease-in-out origin-bottom-left`}
            ></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
