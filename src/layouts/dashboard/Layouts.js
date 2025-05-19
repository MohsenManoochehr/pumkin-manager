import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

function Layouts({ children }) {
  return (
    <>
      <Header />
      <div className="flex justify-between">
        <SideBar />
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Layouts;
