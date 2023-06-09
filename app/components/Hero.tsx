import Image from "next/image";
import logo from "@/public/logo.png";
import { FiChevronDown } from "react-icons/fi";

export default function Hero() {
  return (
    <div className="flex justify-between items-center px-[3rem] w-full h-screen  hero-bg">
      <div className=" flex flex-col">
        <h1 className="text-[1.5rem] font-bold">HA. WI.asistance</h1>
        <h1 className="text-[1.5rem] font-bold">
          Impjante dhe makineri per inerte
        </h1>
        <h1 className="text-[1.5rem] font-bold">Pjese kembimi dhe asistence</h1>
        <a
          href={`/#galeri`}
          className="sm:px-[3rem] px-6 py-[1rem] bg-[#078D75] w-fit mt-[2rem] rounded-md text-white font-bold text-[1.2rem] flex gap-2 items-center"
          draggable="false"
        >
          Foto Galeri <FiChevronDown size={25} />
        </a>
      </div>
      <div className=" overflow-hidden">
        <Image
          src={logo}
          alt="home-img"
          width={1000}
          height={1000}
          className="w-[17rem] h-[17rem] object-cover lg:mr-[9rem] mr-[1rem] md:flex scale-[1.5] hidden pointer-events-none"
        />
      </div>
    </div>
  );
}
