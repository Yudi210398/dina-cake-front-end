"use client";

import Link from "next/link";
import { Alfa_Slab_One } from "next/font/google";
import { useState } from "react";
const alfa = Alfa_Slab_One({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  const [classx, setClassx] = useState(false);

  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <Link
              href={"/"}
              className={alfa.className + ` text-teal-600/100 block py-8`}
            >
              Dina Cake
            </Link>
          </div>

          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className={`block absolute right-4 activesburger`}
              onClick={() => setClassx(!classx)}
            >
              <span
                className={`hamburger-line ${classx && `activesburger1`}`}
              ></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
