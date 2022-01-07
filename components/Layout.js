import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return ( 
    <div className="content wrapper flex flex-col h-screen">
      <Navbar/>
      { children }
      <Footer/>
    </div>
  );
}

export default Layout;