import './Footer.scss'
import FooterLinks from './components/footerLinks/FooterLinks'
import UsersRec from './components/usersRec/UsersRec'

const Footer = () => {
    return (
        <div className='footer'>
            <UsersRec />
            <FooterLinks />
        </div>
    )
}

export default Footer