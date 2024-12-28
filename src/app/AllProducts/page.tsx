
import Image from "next/image";
import Link from "next/link";
import { data } from "../../data/allProductData";

export default function AllProducts() {
  return (
    <div>
      <div className="w-full bg-blue-50 flex flex-wrap justify-around items-center gap-10 py-10">
        {data.map((item, index) => (
          <div
            key={index}
            className=" overflow-hidden m-5 rounded-lg w-[320px] h-[550px] shadow-lg p-6 bg-white"
          >
            <Link href={`../AllProducts/${item.id}`} target="_blank">
              <Image
                className="w-full bg-blue-700 h-72 rounded-lg transform transition-transform duration-300 hover:scale-110"
                src={`/${item.URL}.jpg`}
                alt="Image"
                width={300}
                height={300}
              />
            </Link>
            <div className="text-center mt-6">
              <h1 className="text-2xl font-bold text-blue-900 uppercase underline mb-2">
                {item.title}
              </h1>
              <p className="w-full   h-[80px]  text-center text-lg text-gray-700 mb-3">
                {item.matter}
              </p>
              <Link href={`../AllProducts/${item.id}`} target="_blank">
                <button className="bg-blue-900 text-white text-lg font-semibold rounded-lg py-2 px-6 transition-all duration-300 hover:bg-blue-500 hover:text-black">
                  <span className="relative after:content-['\00bb'] after:absolute after:opacity-0 after:translate-x-0 after:transition-transform after:duration-300 hover:after:opacity-100 hover:after:translate-x-2 ">
                    Read More
                  </span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
