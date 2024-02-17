import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Corrected the import statement
import SneakPage from "./Pages/SneakPeak/SneakPeak";
import ShopAll from './Pages/ShopAll/ShopAll';
import SinglePage from './Pages/SinglePage/SinglePage';
import Products from './Context/Products';
import PrivateRoutes from './Utils/PrivateRoutes';
import Dashboard from './Pages/Dashboard';
import { getUser } from './Utils/func';
import Login from './Pages/LoginPage/Login';

function App() {
  return (
    <Router>
      <Products>
        <Routes>
          <Route path="/" element={<SneakPage />} />
          <Route path='/shopall' element={<ShopAll />} />
          <Route path='/login' element={<Login />} />
          <Route path="/singlepage/:productId" element={<SinglePage />} />
          <Route path="/dashboard" element={
            <PrivateRoutes secretKey={getUser()}>
              <Dashboard />
            </PrivateRoutes>
          } />
        </Routes>
      </Products>
    </Router>
  );
}

export default App;
