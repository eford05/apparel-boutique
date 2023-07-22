import { Fragment } from "react";
import Announcements from "./components/Announcements";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Product from "./pages/Product";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";

//Use CatContext to determine what is displayed in products

function App() {
  const Layout = () => {
    return (
      <Fragment>
        <Announcements />
        <Navbar />
        <Outlet />
        <Footer />
      </Fragment>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/products/:id",
          element: <Products />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
