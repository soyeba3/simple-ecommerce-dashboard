import { Outlet, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import CreateProduct from "./pages/CreateProduct";
import Home from "./pages/Home";

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
      </Route>
    </Routes>
  );
}

export default App;
