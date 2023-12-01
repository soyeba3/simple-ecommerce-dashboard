import { Outlet, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
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
        <Route exact path="/products" element={<Home />} />
        <Route exact path="/analytics" element={<Home />} />
        <Route exact path="/billing" element={<Home />} />
        <Route exact path="/company" element={<Home />} />
        <Route exact path="/admin" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
