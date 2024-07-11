import Sidebar from '../components/sidebar/Sidebar'
import ProfilePosts from '../components/posts/ProfilePosts/ProfilePosts';
import ProfileInfo from '../components/profileInfo/ProfileInfo';
import PostModal from '../components/modals/postModal/PostModal';


import './App.scss';
import SinglePost from '../components/singlePost/SinglePost';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className='app__content'>
        <ProfileInfo />
        <ProfilePosts />
      </div>
      <PostModal/>
    </div>
  );
}

export default App;
