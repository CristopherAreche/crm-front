import { Route, Routes } from "react-router-dom";

// Views
import LandingPage from "./views/LandingPage";
import VendedorCliente from "./views/VendedorCliente";
import VendedorDetallesCliente from "./views/VendedorDetallesCliente";
import LoginPage from "./views/auth/LoginPage";
import SellerResume from "./views/SellerResume";
import ClientList from "./components/ClientList";

// Layouts
import AuthLayout from "./layouts/AuthLayout";
import SellerLayout from "./layouts/SellerLayout";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route
          exact
          path="/vendedor_detalles_cliente"
          element={<VendedorDetallesCliente />}
        />
        <Route exact path="/vendedor_cliente" element={<VendedorCliente />} />
        {/* Layouts Routes */}
        <Route exact path="/auth" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
        </Route>
        <Route exact path="/seller-dash" element={<SellerLayout />}>
           <Route index element={<SellerResume />}/>
           <Route path='clients' element={<ClientList />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
