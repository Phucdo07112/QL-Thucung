import { Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./page/HomePage";
import Cart from "./page/cart";
import Login from "./page/auth/Login";
import { routes } from "./routes";
import DefaultComponent from "./components/Layout/Default"
import Layout from "./components/Layout/Layout";

function App() {
  return (
    // <h1>cc</h1>
    
    <Routes>
      {routes.map((route) => {
      const Page = route.page
      const Layouts = route.isShowHeader ? Layout : DefaultComponent
      return (
        <Route key={route.path} path={route.path} element={
          <Layouts>
            <Page />
          </Layouts>
        } />
      )
    })}
      {/* <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} /> */}
    {/* //     <Route path="/" element={<HomePage />} />
    //     <Route path="/product/:slug" element={<ProductDetails />} />
    //     <Route path="/categories" element={<Categories />} />
    //     <Route path="/cart" element={<CartPage />} />
    //     <Route path="/category/:slug" element={<CategoryProduct />} />
    //     <Route path="/search" element={<Search />} />
    //     <Route path="/dashboard" element={<PrivateRoute />}>
    //       <Route path="user" element={<Dashboard />} />
    //       <Route path="user/orders" element={<Orders />} />
    //       <Route path="user/profile" element={<Profile />} />
    //     </Route>
    //     <Route path="/dashboard" element={<AdminRoute />}>
    //       <Route path="admin" element={<AdminDashboard />} />
    //       <Route path="admin/create-category" element={<CreateCategory />} />
    //       <Route path="admin/create-product" element={<CreateProduct />} />
    //       <Route path="admin/product/:slug" element={<UpdateProduct />} />
    //       <Route path="admin/products" element={<Products />} />
    //       <Route path="admin/users" element={<Users />} />
    //       <Route path="admin/orders" element={<AdminOrders />} />
    //     </Route>
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/forgot-password" element={<ForgotPasssword />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="/policy" element={<Policy />} />
    //     <Route path="*" element={<Pagenotfound />} /> */}
    </Routes>

  );
}

export default App;
