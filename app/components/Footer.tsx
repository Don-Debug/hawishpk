import Link from "next/link";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsTelephone,
} from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-[#078D75] text-white py-[2rem]">
      <div className="flex flex-row flex-wrap justify-between items-center gap-8 px-[3rem] py-[2rem]">
        <div>
          <Link
            href={`tel:+355692931309`}
            className="flex items-center gap-2 text-[1.2rem] mt-2"
          >
            <BsTelephone size={25} /> +355692931309
          </Link>
          <Link
            href={`/`}
            className="flex items-center gap-2 text-[1.2rem] mt-2"
          >
            <GoLocation size={25} />
            Rr. Gjergj Kastrioti Nd.72 H.4 9401 Vlorë, ALBANIA.
          </Link>
          <Link
            href={`/`}
            className="flex items-center gap-2 text-[1.2rem] mt-2"
          >
            <GoLocation size={25} />
            Rr. Gjergj Kastrioti Nd.72 H.4 9401 Vlorë, ALBANIA.
          </Link>
          <div className="flex justify-start items-center gap-6 px-5 py-8">
            <Link href={`/`}>
              <BsFacebook size={30} />
            </Link>
            <Link href={`/`}>
              <BsInstagram size={30} />
            </Link>
            <Link href={`/`}>
              <BsTwitter size={30} />
            </Link>
          </div>
        </div>
        <div className=" self-start">
          <Link
            href={`/`}
            className="flex items-center gap-2 text-[1.2rem] mt-2"
          >
            <AiOutlineMail size={25} />
            info@hawishpk.com
          </Link>
          <Link
            href={`/`}
            className="flex items-center gap-2 text-[1.2rem] mt-2"
          >
            <AiOutlineMail size={25} />
            adhurim@hawishpk.com
          </Link>
          <Link
            href={`/`}
            className="flex items-center gap-2 text-[1.2rem] mt-2"
          >
            <AiOutlineMail size={25} />
            asistenca@hawishpk.com
          </Link>
        </div>
      </div>
      <p className="text-center">Copyright &copy; {year} HA.WI.ASISTANCE</p>
    </div>
  );
}
