import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-[200px] font-normal">404</h1>
        <h2 className="text-[40px]">
          Omffoo... <span>You Lost </span>
        </h2>
        <br />
        <NavLink to="/">
          <button className="inline-flex text-white bg-blue-500 border-[1px] border-blue-500 py-2 px-6 focus:outline-none hover:bg-transparent hover:text-black rounded text-lg duration-300">
            Go Back To Home Page
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default Error;
