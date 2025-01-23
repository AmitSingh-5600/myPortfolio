import { FaGithubSquare, FaLinkedin, FaFileCode } from "react-icons/fa";

function Hero() {
  return (
    <section>
      <div>
        <article>
          <h1>I Amit</h1>
          <p>Front-end Developer</p>
          <p>turning ideas into reality</p>
          <div>
            <a>
              <FaGithubSquare />
            </a>
            <a>
              <FaLinkedin />
            </a>
            <a>
              <FaFileCode />
            </a>
          </div>
        </article>
      </div>
      <div>
        <article></article>
      </div>
    </section>
  );
}

export default Hero;
