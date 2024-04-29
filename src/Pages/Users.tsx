import { useNavigate } from "react-router-dom";

const globalQuestion = [
  {
    name: "Example  ",
    email: "whatever@example.com",
    phone: "+91 988083242",
    course: "web development",
    duration: "10",
  },
  {
    name: "Example  ",
    email: "whatever@example.com",
    phone: "+91 988083242",
    course: "web development",
    duration: "10",
  },
  {
    name: "Example  ",
    email: "whatever@example.com",
    phone: "+91 988083242",
    course: "web development",
    duration: "10",
  },
  {
    name: "Example  ",
    email: "whatever@example.com",
    phone: "+91 988083242",
    course: "web development",
    duration: "10",
  },
  {
    name: "Example  ",
    email: "whatever@example.com",
    phone: "+91 988083242",
    course: "web development",
    duration: "10",
  },
  {
    name: "Example  ",
    email: "whatever@example.com",
    phone: "+91 988083242",
    course: "web development",
    duration: "10",
  },
  {
    name: "Example  ",
    email: "whatever@example.com",
    phone: "+91 988083242",
    course: "web development",
    duration: "10",
  },
  {
    name: "Example  ",
    email: "whatever@example.com",
    phone: "+91 988083242",
    course: "web development",
    duration: "10",
  },
];

const Users = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-20 md:mx-[200px]">
      <div>
        <h1 className="text-[3rem] md:text-[5rem] mx-2 font-bold tracking-tighter mb-10">
          User Details
        </h1>
      </div>
      <div className="mx-2 md:mx-0 my-5">
        <div className=" overflow-x-auto shadow-md rounded-lg">
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
                  Duration
                </th>
                <th scope="col" className="px-6 py-3">
                  Course
                </th>
              </tr>
            </thead>
            <tbody>
              {globalQuestion?.map((que: any, index: number) => (
                <tr
                  onClick={() => navigate("/user-detail")}
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
                  <td className="px-6 py-4 text-black">{que.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
