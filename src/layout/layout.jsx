import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Container from "./container";
import Footer from "./footer";
import { createContext, useState } from "react";
import SideMenu from "../components/site-menu";

export let AppContext = createContext(AppContext);

export default function Layout() {
  let [user, setUser] = useState(undefined);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      <div className="flex flex-col items-center min-h-screen min-w-fit">
        <Navbar />
        <div
          className="grid flex-1 gap-10 container"
          style={{
            gridTemplateColumns: "1fr 350px",
          }}
        >
          <Container>
            <Outlet />
          </Container>
          <SideMenu />
        </div>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}
