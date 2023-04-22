import Image from "next/image";
import img from "@/public/second-project.png";

export default function About() {
  return (
    <div className=" my-[6rem]" id="rrethnesh">
      <h1 className="text-[2rem] font-bold text-center">Rreth Nesh</h1>
      <div className="flex flex-col">
        <div className="bg-[#078D75] my-[2rem] md:w-[80%] w-[95%] mx-auto flex lg:flex-row flex-col justify-between py-[1rem] sm:px-[1rem] px-[0.5rem] rounded-md">
          <div className="lg:w-[50%] w-[100%]">
            <Image
              src={img}
              alt="img"
              width={1000}
              height={1000}
              className="w-[100%] h-[100%] object-cover pointer-events-none"
            />
          </div>
          <div className="lg:w-[50%] w-[100%] md:px-4 px-1">
            <h1 className=" text-center text-[1.5rem] font-bold text-white py-4">
              Histori
            </h1>
            <p className="text-white sm:text-[1.1rem] text-[0.9rem]">
              HA.WI.asistance sh.p.k. është një shoqëri Italo-Shqiptare e
              themeluar më 15.02.2010 me objekt operimi në Shqipëri dhe në vende
              të tjera të Ballkanit. Kjo shoqëri nga momenti i themelimit operon
              në fushën e prodhimit, asistencës dhe furnizimit me pjesë këmbimi
              për impiantet e inerteve si dhe për industrinë e nxjerrjes dhe
              përpunimit të mineraleve. Njëkohësisht disponon të gjitha burimet
              për të realizuar çfardo lloj impianti depurimi (pastrimi) për
              ujrat publike dhe industriale. Shoqëria ka të gjitha mundësitë dhe
              burimet e nevojshme për ndertimin dhe vënien në funksion të
              impianteve të depurimit (pastrimit) të ujrave civile dhe atyre
              industriale, operon në shqipëri me prespektivë për tu zhvilluar
              edhe në vende të tjera të Ballkanit.
            </p>
          </div>
        </div>
        <div className="bg-[#078D75] my-[2rem] md:w-[80%] w-[95%] mx-auto flex lg:flex-row-reverse flex-col justify-between py-[1rem] sm:px-[1rem] px-[0.5rem] rounded-md">
          <div className="lg:w-[50%] w-[100%]">
            <Image
              src={img}
              alt="img"
              width={1000}
              height={1000}
              className="w-[100%] h-[100%] object-cover pointer-events-none"
            />
          </div>
          <div className="lg:w-[50%] w-[100%] md:px-4 px-1">
            <h1 className=" text-center text-[1.5rem] font-bold text-white py-4">
              Aktiviteti
            </h1>
            <p className="text-white sm:text-[1.1rem] text-[0.9rem]">
              Shoqeria HA:WI.asistance.sh.p.k. ka si objekt primar furnizimin me
              makineri dhe pjesë këmbimi impiatet e prodhimit të materialeve
              inerte si dhe industrinë e nxjerrjes dhe përpunimit të
              materialeve, njëkohësisht t'ju ofrojë atyre edhe asistencën e
              nevojshme teknike duke shfrytëzuar eksperiencën shumëvjeçare në
              Itali.
            </p>
            <ul className="text-white mt-4 list-disc">
              Produktet:
              <li className="ml-5">
                Makineri për thyerjen e inerteve dhe mineraleve të ndryshme{" "}
              </li>
              <li className="ml-5">
                Pjesë këmbimi për kava çimenteri dhe minierat (çekiça, kraca...)
              </li>
              <li className="ml-5">
                Transportiera dhe gomina të tjera (baveata){" "}
              </li>
              <li className="ml-5"> Rrula për trasportier</li>
              <li className="ml-5"> Sita të tipeve të ndryshme</li>
              <li className="ml-5"> Elektromotorra, vibratora, reduktora</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
