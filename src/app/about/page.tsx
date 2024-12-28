import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div id="About">
      <div className=" w-[100%] py-11 flex flex-col justify-center  lg:flex-row lg:justify-between px-11 items-center gap-5">
        <div>
          <Image
            className="w-56 md:w-[400px] md:h-[300px]  my-11"
            src="/me.jpg"
            alt="picture"
            width={1000}
            height={1000}
          />
        </div>
        <div className=" w-[100%]    text-3xl font-bold ">
          <h1 className="text-center lg:text-start">About</h1>
          <p className=" text-xl font-normal  text-justify ">
            My name is Uzair Ahmed. I am a versatile full-stack developer, UI/UX
            designer, and graphics designer with a strong commitment to creating
            visually appealing and user-friendly digital experiences. Currently,
            I am further enhancing my skills by enrolling in an advanced IT
            course. With a deep interest in both the technical and creative
            sides of development, I am dedicated to mastering the full spectrum
            of design and development to deliver high-quality, innovative
            solutions.
            <br />
            <br />I aim to master full-stack development and establish a
            thriving freelance career, dedicated to providing my clients with
            top-notch, dependable results.
          </p>
          <Link  href="/cv.pdf" target="blank">
            <button className=" pt-10 md:pt-10">View CV</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
