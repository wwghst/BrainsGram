import Sidebar from '../components/sidebar/Sidebar'
import Posts from '../components/posts/Posts';
import ProfileInfo from '../components/profileInfo/ProfileInfo';


import './App.scss';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className='app__content'>
        <ProfileInfo />
        <Posts />
      </div>
    </div>
  );
}

export default App;
