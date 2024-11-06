import CartDrawer from "@/components/drawer/CartDrawer";

import Nav from "@/components/layout/home/NavHeader/Nav";
import Footer from "@/components/layout/home/footer/Footer";

const layoutHome = ({ children }) => {
  return (
    <>
      <CartDrawer />

      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default layoutHome;
