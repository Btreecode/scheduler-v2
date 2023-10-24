import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Container from "./container";
import Footer from "./footer";
import { createContext, useState } from "react";

export let AppContext = createContext(AppContext);

export default function Layout() {
  let [user, setUser] = useState(undefined);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      <div className="flex flex-col items-center min-h-screen min-w-fit">
        <Navbar />
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}
