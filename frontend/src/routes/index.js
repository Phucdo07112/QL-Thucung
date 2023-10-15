import HomePage from "../page/HomePage";
import NotFoundPage from "../page/NotFoundPage/NotFoundPage";
import AdminDashboard from "../page/admin/AdminDashboard";
import Login from "../page/auth/Login";
import Register from "../page/auth/Register";
import Profile from "../page/user/Profile";
import Orders from "../page/user/Orders";
import Product from "../page/Product";
import ProductDetails from "../page/ProductDetails";
import Pet from "../page/pet";
import PetDetails from "../page/PetDetails";

export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/login",
    page: Login,
    isShowHeader: false,
  },
  {
    path: "/register",
    page: Register,
    isShowHeader: false,
  },
  {
    path: "/profile",
    page: Profile,
    isShowHeader: true,
  },
  {
    path: "/admin/AdminDashboard",
    page: AdminDashboard,
    isShowHeader: false,
    isPrivated: true,
  },
  {
    path: "/order",
    page: Orders,
    isShowHeader: true,
  },
  {
    path: "/product/:categoryId",
    page: Product,
    isShowHeader: true,
  },
  {
    path: "/productDetails/:productId",
    page: ProductDetails,
    isShowHeader: true,
  },
  {
    path: "/pet/:categoryId",
    page: Pet,
    isShowHeader: true,
  },
  {
    path: "/petDetails/:productId",
    page: PetDetails,
    isShowHeader: true,
  },
  {
    path: "*",
    page: NotFoundPage,
    isShowHeader: true,
  },
  // {
  //     path: '/system/admin',
  //     page: AdminPage,
  //     isShowHeader: false,
  //     isPrivated: true
  // },
  // {
  //     path: '*',
  //     page: NotFoundPage
  // }
];
