const userDetail = () => {
  return (
    <div className="mt-20 mx-2 md:mx-[200px]">
      <div>
        <h1 className="text-[3.5rem] md:text-[4rem] font-bold ">Exmaple Malhotra</h1>
      </div>
      <div className="mb-10">
        <div>Email: expmple.com</div>
        <div>Phone: +91 93284384</div>
        {/* // other details will be shown here */}
      </div>
      <div className="my-3">
        <h3 className="text-[2rem] font-semibold mb-5">Course Purchased</h3>
        <div className="grid md:grid-cols-3  gap-5">
          <div className="border border-black rounded-md h-[150px] md:w-[500px] p-4 cursor-pointer ">
            <h3 className="text-3xl font-bold mb-4">Web Development</h3>
            <div>Duration : 10 months</div>
            <div>Instructor: abcxyz ambani </div>
          </div>
          <div className="border border-black rounded-md h-[150px] md:w-[500px] p-4 cursor-pointer ">
            <h3 className="text-3xl font-bold mb-4">Web Development</h3>
            <div>Duration : 10 months</div>
            <div>Instructor: abcxyz ambani </div>
          </div>
          <div className="border border-black rounded-md h-[150px] md:w-[500px] p-4 cursor-pointer ">
            <h3 className="text-3xl font-bold mb-4">Web Development</h3>
            <div>Duration : 10 months</div>
            <div>Instructor: abcxyz ambani </div>
          </div>
          <div className="border border-black rounded-md h-[150px] md:w-[500px] p-4 cursor-pointer ">
            <h3 className="text-3xl font-bold mb-4">Web Development</h3>
            <div>Duration : 10 months</div>
            <div>Instructor: abcxyz ambani </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default userDetail;
