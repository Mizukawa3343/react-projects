import { FaBars } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

const MobileMenuButton = ({ isOpen, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-stone-50  focus:outline-none"
    >
      {isOpen ? (
        <IoCloseOutline className="text-4xl" />
      ) : (
        <FaBars className="text-3xl" />
      )}
    </button>
  );
};

export default MobileMenuButton;
