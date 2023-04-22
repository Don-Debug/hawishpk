"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CgMenuRight, CgClose } from "react-icons/cg";
import Next from "@/public/logo.png";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" flex justify-between items-center md:px-[5rem] px-4 py-[1rem] my-shadow fixed top-0 left-0 w-full z-40 bg-white">
      <div className=" flex sm:gap-[1rem] gap-2 items-center">
        <Image
          src={Next}
          alt="img"
          width={1000}
          height={1000}
          className=" sm:w-[4rem] w-[3rem] sm:h-[4rem] h-[3rem] object-contain pointer-events-none"
        />
        <h1 className=" sm:text-[1.4rem] text-[1.1rem] font-bold">
          Hawi SH.P.K
        </h1>
      </div>

      <div className=" md:flex hidden justify-between items-center lg:gap-[4rem] gap-2rem">
        <Link
          href={`/`}
          className="text-[1.3rem] hover:bg-[#078D75] hover:text-white px-[1rem] py-[0.5rem] rounded"
        >
          Home
        </Link>
        <Link
          href={`/`}
          className="text-[1.3rem] hover:bg-[#078D75] hover:text-white px-[1rem] py-[0.5rem] rounded"
        >
          Reth Nesh
        </Link>
        <Link
          href={`/`}
          className="text-[1.3rem] hover:bg-[#078D75] hover:text-white px-[1rem] py-[0.5rem] rounded"
        >
          Vendodhja
        </Link>

        <div className="md:hidden flex">
          {toggle ? (
            <CgClose
              className=" text-[40px] font-bold cursor-pointer text-black"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <CgMenuRight
              className=" text-[40px] font-bold cursor-pointer text-black"
              onClick={() => setToggle(!toggle)}
            />
          )}

          <div
            className={`${
              !toggle ? " hidden" : " flex"
            } py-6 px-6 absolute top-24 right-3 w-[70%] z-10 
            rounded-xl bg-small-menu flex items-center justify-center`}
          >
            <ul className=" list-none flex justify-center items-center text-center flex-col gap-6 w-full px-2 py-1">
              <li>
                <Link
                  href={`/`}
                  className="text-[1.2rem] text-slate-600"
                  onClick={() => {
                    setToggle(!toggle);
                    window.scrollTo(0, 0);
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={`#about`}
                  className="text-[1.2rem] text-slate-600"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={`#location`}
                  className="text-[1.2rem] text-slate-600"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  Location
                </Link>
              </li>
              <li>
                <Link
                  href={`/menu`}
                  className="text-[1.2rem] text-slate-600"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  Menu
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}