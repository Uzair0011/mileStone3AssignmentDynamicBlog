import Image from "next/image";

export default function Main() {
  return (
    <div>
      {/* Image and Header Section */}
      <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center px-4 md:px-9 py-5">
        <div className="pb-6 md:pb-11 md:w-1/2">
          <h1 className="font-black text-[30px] text-blue-900 md:text-[50px]">
            Blog Website
          </h1>
          <p className="text-justify pt-3 text-sm md:text-base pr-0 md:pr-10">
            A blog website is an online platform where individuals or organizations regularly publish content in the form of articles, also known as blog posts. These posts are typically focused on specific topics, ideas, or personal experiences and are organized in reverse chronological order.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/main.svg"
            alt="Blog Illustration"
            width={500}
            height={1000}
            className="w-full max-w-[400px] md:max-w-[500px]"
          />
        </div>
      </div>

      {/* Blog Section Placeholder */}
      <div></div>
    </div>
  );
}
