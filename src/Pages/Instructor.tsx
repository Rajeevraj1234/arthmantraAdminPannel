import { useNavigate } from "react-router-dom";

const globalQuestion = [
  {
    name: "Example Malhotra",
    email: "whatever@example.com",
    phone: "+91 988083242",
    course: "web development",
    duration: "10",
  },
  {
    name: "Example Malhotra",
    email: "whatever@example.com",
    phone: "+91 988083242",
    course: "web development",
    duration: "10",
  },
  {
    name: "Example Malhotra",
    email: "whatever@example.com",
    phone: "+91 988083242",
    course: "web development",
    duration: "10",
  },
  {
    name: "Example Malhotra",
    email: "whatever@example.com",
    phone: "+91 988083242",
    course: "web development",
    duration: "10",
  },
  {
    name: "Example Malhotra",
    email: "whatever@example.com",
    phone: "+91 988083242",
    course: "web development",
    duration: "10",
  },
  {
    name: "Example Malhotra",
    email: "whatever@example.com",
    phone: "+91 988083242",
    course: "web development",
    duration: "10",
  },
  {
    name: "Example Malhotra",
    email: "whatever@example.com",
    phone: "+91 988083242",
    course: "web development",
    duration: "10",
  },
  {
    name: "Example Malhotra",
    email: "whatever@example.com",
    phone: "+91 988083242",
    course: "web development",
    duration: "10",
  },
];

const Instructor = () => {
  const navigate  =  useNavigate();
  return (
    <div className="mt-20 md:mx-[200px]">
      <div>
        <h1 className="text-[3rem] md:text-[5rem] mx-2 font-bold tracking-tighter mb-10">
          Instructor Details
        </h1>
      </div>
      <div>
        <div className=" overflow-x-auto shadow-md rounded-lg mx-2">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-sm text-white uppercase bg-gray-600  select-none ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Course
                </th>
                <th scope="col" className="px-6 py-3">
                  Courses
                </th>
              </tr>
            </thead>
            <tbody>
              {globalQuestion?.map((que: any, index: number) => (
                <tr
                  onClick={() => navigate("/instructor-detail")}
                  key={index}
                  className="odd:bg-white cursor-pointer  even:bg-gray-50  border-b "
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-black  whitespace-nowrap "
                  >
                    {que.name}
                  </th>
                  <td className="px-6 py-4 text-black">{que.email}</td>
                  <td className="px-6 py-4 text-black">{que.phone}</td>
                  <td className="px-6 py-4 text-black">{que.duration}</td>
                  <td className="px-6 py-4 text-blue-500">
                    <a href="">click</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
