const globalQuestion = [
  {
    id: "DJKJCDS387SBHDJF89D",
    date: "12-1-2024",
    time: "13:24",
    amount: "3499",
    status: "success",
    course: "web development",
  },
  {
    id: "DJKJCDS387SBHDJF89D",
    date: "12-1-2024",
    time: "13:24",
    amount: "3499",
    status: "success",
    course: "web development",
  },
  {
    id: "DJKJCDS387SBHDJF89D",
    date: "12-1-2024",
    time: "13:24",
    amount: "3499",
    status: "success",
    course: "web development",
  },
  {
    id: "DJKJCDS387SBHDJF89D",
    date: "12-1-2024",
    time: "13:24",
    amount: "3499",
    status: "success",
    course: "web development",
  },
  {
    id: "DJKJCDS387SBHDJF89D",
    date: "12-1-2024",
    time: "13:24",
    amount: "3499",
    status: "success",
    course: "web development",
  },
  {
    id: "DJKJCDS387SBHDJF89D",
    date: "12-1-2024",
    time: "13:24",
    amount: "3499",
    status: "pending",
    course: "web development",
  },
];

const PaymentHistory = () => {
  return (
    <div className="mt-20 md:mx-[200px]">
      <div>
        <h1 className="text-[3rem] md:text-[5rem] mx-2 font-bold tracking-tighter mb-10">
          Transaction History
        </h1>
      </div>
      <div>
        <div className=" overflow-x-auto shadow-md rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-sm text-white uppercase bg-gray-600  select-none ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  transaction id
                </th>
                <th scope="col" className="px-6 py-3">
                  date
                </th>
                <th scope="col" className="px-6 py-3">
                  time
                </th>
                <th scope="col" className="px-6 py-3">
                  amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Course name
                </th>
              </tr>
            </thead>
            <tbody>
              {globalQuestion?.map((que: any, index: number) => (
                <tr
                  key={index}
                  className="odd:bg-white  even:bg-gray-50  border-b "
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-black  whitespace-nowrap "
                  >
                    {que.id}
                  </th>
                  <td className="px-6 py-4 text-black">{que.date}</td>
                  <td className="px-6 py-4 text-black">{que.time}</td>
                  <td className="px-6 py-4 text-black">{que.amount}</td>
                  <td className="px-6 py-4 text-black">{que.status}</td>
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

export default PaymentHistory;
