import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-[100px] mx-5 md:mx-[330px] h-[80vh] flex justify-center items-center ">
      <div className="border border-black rounded-lg w-[400px] py-5 ">
        <div>
          <h1 className="text-center text-[2.4rem]">Admin Signin</h1>
          <p className="text-center font-light text-sm mt-3">
            Sign in with your credientials
          </p>
        </div>
        <form action="" className="flex flex-col items-center mt-7">
          <input
            type="email"
            placeholder="Enter Email"
            className="py-1 px-2 focus:outline-none border-b border-black mb-2"
          />
          <input
            type="password"
            placeholder="Enter Passoword"
            className="py-1 px-2 focus:outline-none border-b border-black mb-7"
          />
          <button
            onClick={() => {
              navigate("/");
            }}
            className="bg-[#423737] py-2 px-5 rounded-md text-white font-medium"
          >
            Signin
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
