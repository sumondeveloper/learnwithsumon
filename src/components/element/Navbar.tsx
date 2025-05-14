import { navItems } from "@/utils/constant";
import Link from "next/link";
import Button from "../shared/Button";

const Navbar = () => {
  return (
    <header className="fixed w-full">
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a href="#" className="inline-flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Learn with Sumon
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <Link href="#" target="_blank">
              <Button text="Download" />
            </Link>
          </div>
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navItems.map((item, index) => (
                <li key={index * 50}>
                  <Link
                    href={item.path}
                    className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                  >
                    {" "}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
