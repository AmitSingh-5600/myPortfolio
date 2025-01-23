import hero from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <div className="bg-emerald-100">
      <section className="grid sm:grid-cols-2 gap-8 p-8 max-w-7xl mx-auto">
        <article className="mx-auto w-full">
          <h1 className="text-4xl font-bold">I&apos;m Amit Singh</h1>
          <h2 className="text-2xl mt-4 font-bold text-gray-600">
            Full-Stack Developer
          </h2>
          <p className="text-lg mt-2 font-medium text-gray-600">
            &quot;Simplicity is my lens to uncover the essence of
            complexity.&quot;
          </p>
          <div className="flex mt-3 gap-4">
            <a href="https://github.com/AmitSingh-5600" target="_blank">
              <FaGithubSquare className="h-8 w-8 text-gray-600 hover:text-black" />
            </a>
            <a
              href="https://www.linkedin.com/in/amit-singh5600/"
              target="_blank"
            >
              <FaLinkedin className="h-8 w-8 text-gray-600 hover:text-black" />
            </a>
          </div>
        </article>

        <article className="hidden sm:block">
          <img src={hero} alt="Hero Image" className="w-full h-60" />
        </article>
      </section>
    </div>
  );
}

export default Hero;
