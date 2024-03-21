import Header from './components/routes/home/sections/header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/routes/home/sections/footer/Footer';
import SideNav from './components/utils-components/SideNav';
import { useProductsContext } from './components/contexts/products-context/products-context';

const AppLayout = () => {
  const ProductsCtx = useProductsContext();
  return (
    <>
      {ProductsCtx?.sidenav_toggle ? <SideNav /> : null}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
