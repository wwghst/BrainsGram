import './Sidebar.scss'
import HomeImg from '../../assets/svg/Home.svg'
import ProfileImg from '../../assets/img/ProfileImg.jpg'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <span className='sidebar__tittle'>Brainsgram</span>
            <div className='sidebar__links'>
                <a href='#' className='sidebar__link sidebar__link--active'><img className='sidebar__homeImg' src={HomeImg}></img>Home</a>
                <a href='#' className='sidebar__link'><img className='sidebar__profileImg' src={ProfileImg}></img>Profile</a>
            </div>
        </div>
    )
}

export default Sidebar