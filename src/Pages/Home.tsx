import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className="mt-20 mx-[200px]">
      <div>
        <h1 className="text-[5rem] font-bold tracking-tighter">Arth Mantra Admin Pannel</h1>
      </div>
      <div className="mt-20">
        <button onClick={()=>navigate("/users")} className="block border px-4 py-4 text-xl tracking-wide w-[400px] mb-10 bg-[#242662] hover:bg-[#5455b1] text-white font-bold ">Users</button>
        <button onClick={()=>navigate("/instructors")} className="block border px-4 py-4 text-xl tracking-wide w-[400px] mb-10 bg-[#242662] hover:bg-[#5455b1] text-white font-bold ">Instructor</button>
        <button onClick={()=>navigate("/paymenthistory")} className="block border px-4 py-4 text-xl tracking-wide w-[400px] mb-10 bg-[#242662] hover:bg-[#5455b1] text-white font-bold ">Paymet History</button>
        <button onClick={()=>navigate("/instructor-request")} className="block border px-4 py-4 text-xl tracking-wide w-[400px] mb-10 bg-[#242662] hover:bg-[#5455b1] text-white font-bold ">Instructor Request</button>
      </div>
    </div>
  );
};

export default Home;
