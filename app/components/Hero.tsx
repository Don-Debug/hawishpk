import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import { FiChevronDown } from "react-icons/fi";

export default function Hero() {
  return (
    <div className="flex justify-between items-center px-[3rem] w-full h-screen hero-bg">
      <div className=" flex flex-col">
        <h1 className="text-[1.5rem] font-bold">HA. WI.asistance</h1>
        <h1 className="text-[1.5rem] font-bold">
          Impjante dhe makineri per inerte
        </h1>
        <h1 className="text-[1.5rem] font-bold">Pjese kembimi dhe asistence</h1>
        <Link
          href={`/#galeri`}
          className="sm:px-[3rem] px-6 py-[1rem] bg-[#078D75] w-fit mt-[2rem] rounded-md text-white font-bold text-[1.2rem] flex gap-2 items-center"
        >
          Foto Galeri <FiChevronDown size={25} />
        </Link>
      </div>
      <div>
        <Image
          src={logo}
          alt="home-img"
          width={1000}
          height={1000}
          className="w-[15rem] h-[15rem] object-cover lg:mr-[9rem] mr-[1rem] md:flex hidden pointer-events-none"
        />
      </div>
    </div>
  );
}
