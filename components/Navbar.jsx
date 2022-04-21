import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.svg";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { NavLink } from "./NavLink";
import SearchForm from "./SearchForm";

export default function Navbar() {
  let [menuOpened, setMenuOpened] = useState(false);
  const handleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <nav className="relative w-full h-auto py-3 px-5 flex justify-between md:justify-start items-center ">
      <Link href="/" passHref={true}>
        <a className="w-32 h-auto mt-1">
          <Image src={logo} alt="logo" />
        </a>
      </Link>
      <div
        className={`absolute top-12 right-0 z-50 md:static p-5 md:p-0 md:opacity-[1!important] md:translate-x-0 min-h-[60vh] md:min-h-fit md:h-auto w-screen md-w-auto bg-white shadow-md md:shadow-none md:bg-transparent transition-all duration-1000 ${
          menuOpened ? "translate-x-0 opacity-1" : "translate-x-full opacity-0"
        } md:flex md:justify-between md:-items-center flex-auto`}
      >
        <div className="md:hidden">
          <SearchForm />
        </div>
        <ul className="mt-5 md:mt-0 text-sm font-semibold md:h-full md:flex md:justify-between md:items-center md:py-2">
          <li className="block md:inline-block py-3 md:py-0 md:px-6 h-full">
            <NavLink href="/homes" className="hover:text-primary">
              Homes
            </NavLink>
          </li>
          <li className="block md:inline-block py-3 md:py-0 md:px-6 h-full">
            <NavLink href="/saved" className="hover:text-primary">
              Saved Homes
            </NavLink>
          </li>
          <li className="block md:inline-block py-3 md:py-0 md:px-6 h-full">
            <NavLink href="/contact" className="hover:text-primary">
              Contact Us
            </NavLink>
          </li>
        </ul>

        <span className="block md:flex md:justify-between md:items-center text-sm font-semibold">
          <Link href="/" passHref={true}>
            <a className="block md:inline-block md:bg-primary/10 md:text-primary hover:text-primary mt-2 mb-5 md:mt-0 md:mb-0 md:px-3 md:py-2 md:mr-2 md:rounded-xl">
              Sign Up
            </a>
          </Link>
          <Link href="/" passHref={true}>
            <a className="block md:inline-block bg-primary w-fit text-white rounded-xl px-5 py-2">
              Login
            </a>
          </Link>
        </span>
      </div>
      <div className="md:hidden">
        {!menuOpened ? (
          <button
            className="px-2 py-1 text-primary hover:bg-primary/10 rounded transition-opacity duration-2000"
            onClick={handleMenu}
          >
            <MenuRoundedIcon />
          </button>
        ) : (
          <button
            className="px-2 py-1 text-primary hover:bg-primary/10 rounded transition-opacity duration-2000"
            onClick={handleMenu}
          >
            <CloseIcon />
          </button>
        )}
      </div>
    </nav>
  );
}
