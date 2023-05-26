import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PersonalDetails from './pages/PersonalDetails';
import ResidentAddress from './pages/ResidentAddress';
import Otp from './pages/Otp';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/personal" element={<PersonalDetails />} />
        <Route path="/resident" element={<ResidentAddress />} />
        <Route path="/otp" element={<Otp />} />
      </Routes>
    </div>
  );
};

export default App;
