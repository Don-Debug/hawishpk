import galery from "@/constants/galery";
import Image from "next/image";

export default function Galery() {
  {
    galery.map((post) => console.log(post.image));
  }
  return (
    <div
      className="galery-bg my-[10rem] flex flex-col justify-center items-center w-full h-auto "
      id="galeri"
    >
      <h1 className="text-[2rem] font-bold text-center my-[3rem]">
        Foto Galeri
      </h1>
      <div className="flex flex-row flex-wrap sm:justify-start justify-center items-start lg:px-[5rem] md:px-[2rem] px-[1rem] py-[3rem] md:gap-12 gap-4">
        {galery.map((post) => (
          <div
            key={post.name}
            className="flex flex-col justify-center items-center gap-4 bg-white my-shadow rounded-md md:w-[20rem] w-[15rem] h-auto"
          >
            <Image
              src={post.image}
              alt={post.name}
              width={1000}
              height={1000}
              className=" w-[100%] md:h-[20rem] h-[15rem] object-cover rounded-md pointer-events-none"
            />
            <h1 className="md:text-[1.5rem] text-[1.3rem] font-bold text-center">
              {post.name}
            </h1>
            <p className="md:px-4 px-2 py-2 md:text-[1.1rem] text-[0.9rem] font-medium self-start w-[100%]">
              {post.description}
            </p>
            <button className="px-[1.5rem] py-[0.5rem] bg-[#078D75] mb-4 w-fit rounded-md text-white font-bold md:text-[1.2rem] text-[1rem] text-center">
              Shiko
            </button>
          </div>
        ))}
      </div>
      <button className="sm:px-[3rem] px-[1.5rem] py-[1rem] bg-[#078D75] w-fit mt-[2rem] rounded-md text-white font-bold text-[1.2rem] text-center">
        Shiko me shume
      </button>
    </div>
  );
}
