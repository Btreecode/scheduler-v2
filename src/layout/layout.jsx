import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Container from "./container";
import Footer from "./footer";

export default function Layout() {
  return (
    <div className="flex flex-col items-center min-h-screen min-w-fit">
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}
