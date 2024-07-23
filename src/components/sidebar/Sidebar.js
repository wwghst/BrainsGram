import './Sidebar.scss'
import HomeImg from '../../assets/svg/Home.svg'
import ProfileImg from '../../assets/img/ProfileImg.jpg'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <span className='sidebar__tittle'>Brainsgram</span>
            <div className='sidebar__links'>
                <NavLink
                    style={({ isActive }) => ({ borderBottom: isActive ? '2px solid #757575' : 'none' })}
                    to='/home'
                    className='sidebar__link'><img className='sidebar__homeImg' src={HomeImg}></img>Home</NavLink>
                <NavLink
                    style={({ isActive }) => ({ borderBottom: isActive ? '2px solid #757575' : 'none' })}
                    to='userName'
                    className='sidebar__link'><img className='sidebar__profileImg' src={ProfileImg}></img>Profile</NavLink>
            </div>
        </div>
    )
}

export default Sidebar