

const InstructorRequest = () => {
  return (
    <div className="mt-20 md:mx-[200px]">
      <div>
        <h1 className="text-[2.7rem] md:text-[5rem] mx-2 font-bold tracking-tighter mb-10">
          Instuctor Requests
        </h1>
      </div>
      <div className="grid md:grid-cols-3 mx-2 my-3 gap-5">
        <InstructRequestCard />
        <InstructRequestCard />
        <InstructRequestCard />
        <InstructRequestCard />
        
      </div>
    </div>
  );
};

const InstructRequestCard = () => {
 
  return (
    <div className="border border-black rounded-md md:w-[500px] p-4   ">
      <h3 className="text-3xl font-bold mb-4">Example  </h3>
      <div className="font-light mb-5 text-sm md:text-md">
        About : Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
        ipsam, fugiat rerum non ad provident ea error rem consectetur sint?
      </div>
      <div>Qualification: PHD in Computer Scince</div>
      <div className="flex justify-start items-center gap-10">
        <span className=" py-2 bg-green-600 w-[100px] text-center text-white font-semibold rounded-md mt-5 cursor-pointer">
          Accept
        </span>
        <span className=" py-2 bg-red-600 w-[100px] text-center text-white font-semibold rounded-md mt-5 cursor-pointer">
          Deny
        </span>
      </div>
    </div>
  );
};

export default InstructorRequest;
