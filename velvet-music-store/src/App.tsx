import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  AMPLIFIERS_ROUTE,
  CART_ROUTE,
  HEADPHONES_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  MICROPHONES_ROUTE,
  MIDI_KEYBOARDS_ROUTE,
  SIGNUP_ROUTE,
  SINGLE_PRODUCT_ROUTE,
  STUDIO_MONITORS_ROUTE,
  SUCCESS_CHECKOUT_ROUTE,
  USER_SETTINGS_ROUTE
} from './assets/constants/routes-names/routes';
import Home from './components/routes/home/Home';
import AppLayout from './AppLayout';
import ProductPage from './components/routes/products-pages/ProductPage';
import { ProductsProvider } from './components/contexts/products-context/products-context';
import LoginPage from './components/routes/LoginPage/LoginPage';
import { UserProvider } from './components/contexts/user-context/user-context';
import UserSettings from './components/routes/UserSettingsPage/UserSettings';
import SignUpPage from './components/routes/SignupPage/SignUpPage';
import { Toaster } from 'react-hot-toast';
import ViewProduct from './components/routes/ViewProduct/ViewProduct';
import { CartProvider } from './components/contexts/cart-context/cart-context';
import CartPage from './components/routes/CartPage/CartPage';
import SuccessCheckout from './components/routes/SuccessCheckout/SuccessCheckout';
import NotFoundPage from './components/routes/NotFoundPage/NotFoundPage';
import BrandPage from './components/routes/BrandPage/BrandPage';
import SearchPage from './components/routes/SearchPage/SearchPage';

const App = () => {
  return (
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <Router>
            <Routes>
              <Route path="/" element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route path={HOME_ROUTE} element={<Home />} />
                <Route path={SINGLE_PRODUCT_ROUTE} element={<ViewProduct />} />
                <Route path="/products/:category" element={<ProductPage />} />
                <Route path="/brands/:brandName" element={<BrandPage />} />
                <Route path={LOGIN_ROUTE} element={<LoginPage />} />
                <Route path={SIGNUP_ROUTE} element={<SignUpPage />} />
                <Route path={USER_SETTINGS_ROUTE} element={<UserSettings />} />
                <Route path={CART_ROUTE} element={<CartPage />} />
                <Route path="search/:searchInput" element={<SearchPage />} />
                <Route
                  path={SUCCESS_CHECKOUT_ROUTE}
                  element={<SuccessCheckout />}
                />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
            <Toaster
              position="top-center"
              gutter={12}
              toastOptions={{
                style: {
                  padding: '1.5rem',
                  marginTop: '5rem',
                  fontSize: '1.2rem'
                }
              }}
            />
          </Router>
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  );
};

export default App;
