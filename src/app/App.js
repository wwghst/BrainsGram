import Sidebar from '../components/sidebar/Sidebar'
import ProfilePosts from '../components/posts/ProfilePosts/ProfilePosts';
import ProfileInfo from '../components/profileInfo/ProfileInfo';
import YourselfModal from '../components/modals/yourselfModal/YourselfModal';


import './App.scss';


function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className='app__content'>
        <ProfileInfo />
        <ProfilePosts />
      </div>
      <YourselfModal/>
    </div>
  );
}

export default App;
