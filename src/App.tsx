import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Instructor from "./Pages/Instructor";
import Users from "./Pages/Users";
import PaymentHistory from "./Pages/PaymentHistory";
import InstructorRequest from "./Pages/InstructorRequest";
import UserDetail from "./Pages/UserDetail";
import InsructorDetail from "./Pages/InsructorDetail";
import Signin from "./Pages/Signin";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructors" element={<Instructor />} />
        <Route path="/users" element={<Users />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/paymenthistory" element={<PaymentHistory />} />
        <Route path="/instructor-request" element={<InstructorRequest />} />
        <Route path="/user-detail" element={<UserDetail />} />
        <Route path="/instructor-detail" element={<InsructorDetail />} />
      </Routes>
    </>
  );
}
export default App;
