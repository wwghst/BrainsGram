import Sidebar from '../components/sidebar/Sidebar'
import Footer from '../components/footer/Footer';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import LoginForm from '../components/auth/loginForm/LoginForm'
import SignInForm from '../components/auth/signInForm/SignInForm'
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";


import './App.scss';


function MainLayout() {
  const location = useLocation();
  const hideSidebarAndFooter = ["/" , "/registration"].includes(location.pathname);

  return (
    <div className="app">
      {!hideSidebarAndFooter && <Sidebar />}
      <div className="app__content">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/userName" element={<ProfilePage />} />
          <Route path="/" element={<LoginForm />} />
          <Route path="/registration" element={<SignInForm />} />
        </Routes>
      </div>
      {!hideSidebarAndFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default App;
