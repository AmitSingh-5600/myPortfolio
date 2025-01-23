import hero from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="bg-emerald-100 grid sm:grid-cols-2 gap-8 px-8 py-4">
      <article className="mx-auto w-full">
        <h1 className="text-4xl font-bold">I&apos;m Amit Singh</h1>
        <h2 className="text-2xl mt-4 font-bold text-slate-500 ">
          Full-Stack Developer
        </h2>
        <p className="text-1xl mt-2 font-bold text-slate-500">
          &quot;Simplicity is my lens to uncover the essence of
          complexity.&quot;
        </p>
        <div className="flex mt-3 gap-4">
          <a href="https://github.com/AmitSingh-5600" target="_blank">
            <FaGithubSquare className="h-8 w-8  text-slate-500 hover:text-black" />
          </a>
          <a
            href="https://www.linkedin.com/in/amit-singh5600/"
            target="_blanck"
          >
            <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black" />
          </a>
        </div>
      </article>

      <article className=" w-1/1  hidden sm:block">
        <img src={hero} className="size-52" />
      </article>
    </section>
  );
}

export default Hero;
