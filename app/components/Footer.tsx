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
            draggable="false"
          >
            <BsTelephone size={25} /> +355692931309
          </Link>
          <Link
            target="blank"
            href={`https://www.google.com/maps/place/Ha.wi+assistance/@40.4620965,19.4828968,3a,82.6y,86.15h,80.69t/data=!3m6!1e1!3m4!1sj1Bfx7XlCcqF8mrtuHWtSA!2e0!7i13312!8i6656!4m11!1m2!2m1!1shawi+shpk+vlore!3m7!1s0x134533b6a516fd7f:0x66b66352f000eb6e!8m2!3d40.4619741!4d19.4832028!10e5!15sCg9oYXdpIHNocGsgdmxvcmVaESIPaGF3aSBzaHBrIHZsb3JlkgERZWxlY3Ryb25pY3Nfc3RvcmXgAQA!16s%2Fg%2F11hf6vfmq0`}
            className="flex items-center gap-2 text-[1.2rem] mt-2"
            draggable="false"
          >
            <GoLocation size={25} />
            Rr. Gjergj Kastrioti Nd.72 H.4 9401 Vlorë, ALBANIA.
          </Link>
          <Link
            href={`https://www.google.com/maps/place/41%C2%B026'03.5%22N+19%C2%B044'04.5%22E/@41.4343056,19.7345833,17z/data=!3m1!4b1!4m4!3m3!8m2!3d41.4343056!4d19.7345833?hl=en`}
            className="flex items-center gap-2 text-[1.2rem] mt-2"
            target="blank"
            draggable="false"
          >
            <GoLocation size={25} />
            Nikel Fushe-Kruje, Albania
          </Link>
          <div className="flex justify-start items-center gap-6 px-5 py-8">
            <Link
              href={`https://www.facebook.com/profile.php?id=100067159663399`}
              target="blank"
              draggable="false"
            >
              <BsFacebook size={30} />
            </Link>
            <Link
              href={`https://www.instagram.com/hawi.shpk/`}
              target="blank"
              draggable="false"
            >
              <BsInstagram size={30} />
            </Link>
            <Link href={``} draggable="false">
              <BsTwitter size={30} />
            </Link>
          </div>
        </div>
        <div className="self-start">
          <Link
            href={`mailto:info@hawishpk.com`}
            className="flex items-center gap-2 text-[1.2rem] mt-2"
            draggable="false"
          >
            <AiOutlineMail size={25} />
            info@hawishpk.com
          </Link>
          <Link
            href={`mailto:adhurim@hawishpk.com`}
            className="flex items-center gap-2 text-[1.2rem] mt-2"
            draggable="false"
          >
            <AiOutlineMail size={25} />
            adhurim@hawishpk.com
          </Link>
          <Link
            href={`mailto:asistenca@hawishpk.com`}
            className="flex items-center gap-2 text-[1.2rem] mt-2"
            draggable="false"
          >
            <AiOutlineMail size={25} />
            asistenca@hawishpk.com
          </Link>
        </div>
      </div>
      <p className="text-center">Copyright © {year} HA.WI.ASISTANCE</p>
    </div>
  );
}
