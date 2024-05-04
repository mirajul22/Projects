import { NavLink } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import Nav from "./Nav";
const Header = () => {
  return (
    <>
      <header className=" body-font relative">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
          <NavLink
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src="./logo/logo.jpg"
              alt="logo"
              className=" w-[100px] h-[100px] rounded"
            />
            {/* <span className="ml-3 text-xl">Tailblocks</span> */}
          </NavLink>
          <Nav />
          {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mr-10">
            Cart
          </button> */}
          <NavLink>
            <FaShoppingBag className="text-2xl relative mr-[40px]" />
            <span className="absolute bg-cyan-300 p-1 rounded-full text-[10px] font-bold translate-y-[-30px] ml-[16px]">
              10
            </span>
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;
