"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CgMenuRight, CgClose } from "react-icons/cg";
import logo from "@/public/logo.png";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" flex justify-between items-center md:px-[5rem] px-4 py-[1rem] my-shadow fixed top-0 left-0 w-full z-40 bg-white">
      <div className=" flex sm:gap-[1rem] gap-2 items-center overflow-hidden">
        <Image
          src={logo}
          alt="img"
          width={1000}
          height={1000}
          className=" sm:w-[4rem] w-[3rem] sm:h-[4rem] h-[3rem] object-cover scale-150 pointer-events-none"
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
          href={`/#rrethnesh`}
          className="text-[1.3rem] hover:bg-[#078D75] hover:text-white px-[1rem] py-[0.5rem] rounded"
        >
          Reth Nesh
        </Link>
        <Link
          href={`/#vendodhja`}
          className="text-[1.3rem] hover:bg-[#078D75] hover:text-white px-[1rem] py-[0.5rem] rounded"
        >
          Vendodhja
        </Link>
      </div>
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
          } py-6 px-2 absolute top-20 right-0 w-[100%] z-20 
             bg-white flex items-center justify-center my-shadow`}
        >
          <div className=" flex justify-center items-center flex-col gap-0 w-full px-2 py-8">
            <Link
              href={`/`}
              className="text-[1.2rem] text-slate-600 hover:bg-gray-500 w-full text-center py-4"
              onClick={() => {
                setToggle(!toggle);
                window.scrollTo(0, 0);
              }}
            >
              Home
            </Link>
            <Link
              href={`/#rrethnesh`}
              className="text-[1.2rem] text-slate-600 hover:bg-gray-500 w-full text-center py-4"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              Rreth Nesh
            </Link>
            <Link
              href={`/#galeri`}
              className="text-[1.2rem] text-slate-600 hover:bg-gray-500 w-full text-center py-4"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              Galeri
            </Link>
            <Link
              href={`/#vendodhja`}
              className="text-[1.2rem] text-slate-600 hover:bg-gray-500 w-full text-center py-4"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              Vendodhja
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
