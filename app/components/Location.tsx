import Image from "next/image";
import Link from "next/link";
import map from "@/public/map.png";

export default function Location() {
  return (
    <div id="vendodhja" className="py-[5rem]">
      <div>
        <h1 className="text-[2rem] font-bold text-center mt-[5rem]">
          Vendodhja
        </h1>
        <div className="md:w-[80%] w-[95%] sm:aspect-[1/0.7] aspect-[1/1.2] bg-white mx-auto mt-[7rem] my-shadow mb-[11rem]">
          <Link
            target="blank"
            href={`https://www.google.com/maps/place/Ha.wi+assistance/@40.4617903,19.4832985,19z/data=!4m10!1m2!2m1!1shawi+shpk+vlore!3m6!1s0x134533b6a516fd7f:0x66b66352f000eb6e!8m2!3d40.4619741!4d19.4832028!15sCg9oYXdpIHNocGsgdmxvcmVaESIPaGF3aSBzaHBrIHZsb3JlkgERZWxlY3Ryb25pY3Nfc3RvcmXgAQA!16s%2Fg%2F11hf6vfmq0`}
          >
            <Image
              src={map}
              alt="mapi"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
