import Image from "next/image";
import { data } from "../../../data/allProductData";
import Comment from "@/components/comment";

interface Params {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  // Generate static paths for all products
  return data.map((product) => ({ id: product.id }));
}

export default function ProductDetail({ params }: Params) {
  // Find the product data based on the ID in the route
  const product = data.find((item) => item.id === params.id);

  // Handle case where product is not found
  if (!product) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-500">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full   h-auto md:h-[500px] flex flex-col md:flex-row justify-between items-center px-6 py-10 gap-11">
        {/* Left Section */}
        <div className="w-full rounded-lg  md:w-[50%]">
          <Image
            src={`/${product.URL}.jpg`} // Dynamically display the image
            alt={product.title}
            width={1000}
            height={1000}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[50%] flex flex-col items-center md:items-start py-6 md:py-0 text-center md:text-start">
          <div className="w-full">
            {/* Title */}
            <h1 className="text-[48px] font-medium mb-4">{product.title}</h1>

            {/* Description */}
            <p className="text-lg text-justify text-gray-700 mb-6">
              {product.matterDefine}
            </p>
          </div>
        </div>
      </div>
      <Comment/>
      <br />
    </div>
  );
}
