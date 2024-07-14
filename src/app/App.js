import Sidebar from '../components/sidebar/Sidebar'
import Footer from '../components/footer/Footer';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import './App.scss';


function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="app__content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/userName" element={<ProfilePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
