import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();


  return (
    <div className="z-[99] fixed inset-0 w-full h-[60px] shadow-md bg-[#e8ebed] py-10 flex justify-start md:justify-start px-10 items-center ">
      <div>
        <h1
          onClick={() => navigate("/")}
          className="font-bold text-xl md:text-3xl tracking-tighter cursor-pointer"
        >
          <img src="logo/LOGO.png" className="w-[100px]" alt="" />
        </h1>
      </div>
      
      {/* <div>
        <ul className="gap-2 lg:gap-10 text-sm md:text-lg cursor-pointer hidden sm:flex items-center">
          <li
            onClick={() => handleClick("/cart")}
            className="hover:underline text-2xl"
          >
            <BsCart3 />
          </li>
          <li
            onClick={() => handleClick("/courseprogress")}
            className=" border border-black black cursor-pointer text-sm py-2 px-4 hover:bg-gray-200"
          >
            Progress
          </li>
          <li
            onClick={() => handleClick("/purchansedcourse")}
            className=" border border-black black cursor-pointer text-sm py-2 px-4 hover:bg-gray-200"
          >
            Your Course
          </li>
          {/* <li
            onClick={() => handleClick("/signin")}
            className=" border border-black black cursor-pointer text-sm py-2 px-4 hover:bg-gray-200"
          >
            Login
          </li> */}

          {/* {name ? (
            <li className="flex items-center gap-2 relative">
              <span
                onClick={() => {
                  setisLogout(!isLogout);
                }}
                className="bg-[#3e3a3a]  font-semibold text-white w-[35px] h-[35px] text-sm rounded-full flex justify-center items-center"
              >
                {name[0].toUpperCase()}
              </span>
              {isLogout && (
                <span
                  onClick={() => {
                    localStorage.clear();
                    setisLogout(!isLogout);
                    navigate("/");
                  }}
                  className="w-[140px] h-[40px]  absolute inset-0 top-[110%] left-[-220%]  bg-white rounded-md hover:bg-gray-100 cursor-pointer text-black flex justify-center items-center font-bold shadow-lg "
                >
                  LogOut
                </span>
              )}
            </li>
          ) : (
            <li
              onClick={() => handleClick("/signup")}
              className="bg-[#242662]  text-white font-semibold text-sm border-2   border-[#242662]  py-2 px-4"
            >
              Signup
            </li>
          )}
        </ul>
        {isMenu ? (
          <div className="bg-gray-900  absolute inset-0 h-[300px] text-white text-xl sm:hidden font-medium py-7 px-4 rounded-b-2xl">
            <h1
              onClick={() => handleClick("/")}
              className="font-bold  md:text-3xl tracking-tighter cursor-pointer"
            >
              <img src="logo/LOGO.png" className="w-[80px]" alt="" />
            </h1>
            <h1
              className=" hover:bg-white py-2 px-2 hover:text-black rounded-lg"
              onClick={() => handleClick("/")}
            >
              Home
            </h1>
            <h1
              className=" hover:bg-white py-2 px-2 hover:text-black rounded-lg"
              onClick={() => handleClick("/courseprogress")}
            >
              Progress
            </h1>

            <h1
              className=" hover:bg-white py-2 px-2 hover:text-black rounded-lg"
              onClick={() => handleClick("/purchansedcourse")}
            >
              Your Course
            </h1>
            <h1 className=" hover:bg-white py-2 px-2 hover:text-black rounded-lg">
              {auth ? (
                <span
                  onClick={() => {
                    setIsMenu(false);
                    localStorage.clear();
                    navigate("/");
                  }}
                >
                  Logout
                </span>
              ) : (
                <span onClick={() => handleClick("/signin")}>Signin</span>
              )}
            </h1>
          </div>
        ) : (
          <div
            className="text-2xl text-black sm:hidden "
            onClick={handleNavbar}
          >
            <TfiMenu />
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Navbar;
