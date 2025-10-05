import { useState } from "react";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="bg-stone-900  border-b border-stone-800 md:py-2 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <NavLogo />

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 text-white">
            <NavLinks />
            <button className="bg-amber-400 text-stone-900 py-2 px-8  rounded-sm ">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <MobileMenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <MobileMenu>
          <div className="text-white text-lg">
            <NavLinks />
            <button className="bg-amber-400 text-stone-900 py-2 px-8  rounded-sm w-full mt-5">
              Login
            </button>
          </div>
        </MobileMenu>
      )}
    </nav>
  );
};

export default Navbar;
