import { Outlet, Route, Routes } from "react-router-dom";
import Hooks from "./components/hooks/Hooks";
import Sidebar from "./components/sidebar/Sidebar";
import CreateProduct from "./pages/CreateProduct";
import Home from "./pages/Home";
import UpdateProduct from "./pages/UpdateProduct";

function App() {
  const Layout = ({ children }) => (
    <>
      <Sidebar>
        {children}
        <Outlet />
      </Sidebar>
    </>
  );

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route exact path="/" element={<Home />} />
        <Route path="/admin" element={<Home />} />
        <Route path="/products" element={<Home />} />
        <Route path="/analytics" element={<Home />} />
        <Route path="/billing" element={<Home />} />
        <Route path="/company" element={<Home />} />
        <Route path="/products/create" element={<CreateProduct />} />
        <Route path="/product/:id" element={<UpdateProduct />} />
      </Route>
      <Route path="/hooks" element={<Hooks />} />
    </Routes>
  );
}

export default App;
