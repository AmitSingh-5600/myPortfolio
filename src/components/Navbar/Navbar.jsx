import { links } from "../../data";
function Navbar() {
  return (
    <nav className="bg-emerald-100">
      <div className="mx-auto max-w-7xl p-4 sm:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
        <h2 className="text-3xl font-bold">
          Web<span className="text-emerald-600">Dev</span>
        </h2>
        <div className="flex gap-4">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide text-gray-700 hover:text-emerald-600 transition duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
