import { onAuthStateChanged } from "firebase/auth";
import "./App.css";
import { Dashboard } from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import SignIn from "./pages/signup-signin/SignIn";
import SignUp from "./pages/signup-signin/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { auth } from "./config/firbease-config";
import { getUserAction } from "./pages/signup-signin/userAction";
import { useDispatch, useSelector } from "react-redux";
import { Profile } from "./pages/signup-signin/Profile";
import { NewBook } from "./pages/book/NewBook";
import { Books } from "./pages/book/Books";
import { History } from "./pages/history/History";
import { Clients } from "./pages/clients/Clients";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  // let firebase to re auth user if they reload the page

  onAuthStateChanged(auth, (userData) => {
    if (userData.uid) {
      dispatch(getUserAction(userData.uid));
    }
  });

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="books" element={<Books />} />
          <Route path="newBook" element={<NewBook />} />
          <Route path="profile" element={<Profile />} />
          <Route path="history" element={<History />} />
          <Route path="clients" element={<Clients />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
