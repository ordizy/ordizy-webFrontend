
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./pages/landingPage.tsx";
import Register from './pages/register.tsx';
import Login from './pages/login.tsx';
import CreatePassowrd from './pages/createPassword.tsx';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-password" element={<CreatePassowrd />} />


        </Routes>
      </Router>
  );
}

export default App;
