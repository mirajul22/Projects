import { NavLink } from "react-router-dom";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  return (
    <>
      <nav className="md:ml-auto ml-auto  md:mr-auto flex flex-wrap items-center text-base justify-center">
        <NavLink
          to="/"
          className="mr-5  text-[16px] hover:text-cyan-600 duration-200">
          HOME
        </NavLink>
        <NavLink
          to="/about"
          className="mr-5  text-[16px] hover:text-cyan-600 duration-200">
          ABOUT
        </NavLink>
        <NavLink
          to="/product"
          className="mr-5  text-[16px] hover:text-cyan-600 duration-200">
          PRODUCT
        </NavLink>
        <NavLink
          to="contact"
          className="mr-5  text-[16px] hover:text-cyan-600 duration-200">
          CONTACT
        </NavLink>
      </nav>
    </>
  );
};

export default Nav;
