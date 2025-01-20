import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./conponents/Navbar";
import Sidebar from "./conponents/Sidebar";
import "./App.css";
import ManageBooks from "./pages/ManageBooks";
import ManageUsers from "./pages/ManageUsers";
import BrowseBooks from "./pages/BrowseBooks";
import MyRentals from "./pages/MyRentals";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ManageRentals from "./pages/ManageRentals";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <Navbar />
        <MainContent />
      </div>
    </BrowserRouter>
  );
}

function MainContent() {
  const location = useLocation();
  const isLoginPage =
    location.pathname === "/" || location.pathname === "/register";

  return (
    <div className={` flex flex-1 ${isLoginPage ? "" : "mt-12"} mt-12`}>
      {!isLoginPage && <Sidebar />}
      <div className="flex-1 p-4 mt-4">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manage-books" element={<ManageBooks />} />
          <Route path="/manage-rentals" element={<ManageRentals />} />
          <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/browse-books" element={<BrowseBooks />} />
          <Route path="/my-rentals" element={<MyRentals />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
