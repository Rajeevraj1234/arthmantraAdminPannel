import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { IoGitPullRequestSharp } from "react-icons/io5";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-20 md:mx-[200px] h-[80vh] md:flex justify-center items-center">
      <div className="md:w-1/2 ml-2">
        <h1 className="md:text-[5rem] text-[3rem] font-bold tracking-tighter md:leading-[100px]">
          Arth Mantra Admin Pannel
        </h1>
        <h3 className="text-2xl mt-3 ">Hello, Jhon Doe</h3>
      </div>
      <div className="mt-20 md:w-1/2 flex justify-center items-center ">
        <div className="mx-2">
          <button
            onClick={() => navigate("/users")}
            className="border 4 py-4 text-md md:text-xl tracking-wide w-[300px] md:w-[400px] mb-10 bg-green-600 hover:bg-green-500 text-white shadow-lg font-bold flex justify-center items-center  gap-2 rounded-lg"
          >
            {" "}
            <FaUser />
            Users
          </button>
          <button
            onClick={() => navigate("/instructors")}
            className="border px-4 py-4 text-md md:text-xl tracking-wide w-[300px] md:w-[400px] mb-10 bg-green-600 hover:bg-green-500 text-white shadow-lg font-bold flex justify-center items-center  gap-2 rounded-lg"
          >
            {" "}
            <FaUserTie />
            Instructor
          </button>
          <button
            onClick={() => navigate("/paymenthistory")}
            className="border px-4 py-4 text-md md:text-xl tracking-wide w-[300px] md:w-[400px] mb-10 bg-green-600 hover:bg-green-500 text-white shadow-lg font-bold flex justify-center items-center gap-2 rounded-lg "
          >
            <MdPayment />
            Paymet History
          </button>
          <button
            onClick={() => navigate("/instructor-request")}
            className="border px-4 py-4 text-md md:text-xl tracking-wide w-[300px] md:w-[400px] mb-10 bg-green-600 hover:bg-green-500 text-white shadow-lg font-bold flex justify-center items-center  gap-2 rounded-lg"
          >
            <IoGitPullRequestSharp />
            Instructor Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
