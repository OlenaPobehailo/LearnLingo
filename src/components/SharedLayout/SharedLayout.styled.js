
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
// import Footer from "components/Footer/Footer";

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>

      {/* <Footer /> */}
    </div>
  );
};

export default SharedLayout;