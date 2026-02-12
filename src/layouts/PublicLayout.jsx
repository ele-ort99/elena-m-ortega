import { Outlet } from "react-router";
import { NavbarPublic } from "../components/Navbar/NavbarPublic";
import { Footer } from "../components/Footer/Footer";


export const PublicLayout = () => {
  return (
    <>
      <header>
        {<NavbarPublic />}
      </header>
      <main>
         <Outlet />
      </main>
      <footer>
        { <Footer />}
      </footer>
    </>
    
  )
}
