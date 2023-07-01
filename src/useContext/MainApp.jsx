import { UserProvider } from "./context/UserProvider";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from './Home';
import { About } from "./About";
import { Login } from "./Login";
import { NavBar } from "./NavBar";

export const Main = () => {
  return (
    <UserProvider>
      <NavBar />
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />

        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </UserProvider>
  )
}