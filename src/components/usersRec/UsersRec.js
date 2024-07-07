import './UsersRec.scss'
import ProfileImg from '../../assets/img/ProfileImg.jpg'
import Subscribed from '../../assets/svg/Check.svg'
import Button from '../../shared/button/Button'
const UsersRec = () => {
    return (
        <div className="users">
            <span className='users__tittle'>Recommendations for you:</span>
            <div className='users__user'>
                <img src={ProfileImg} alt="ProfileImg" className="users__img" />
                <div className='users__info'>
                    <span className='users__name'>Name</span>
                    <span className='users__text'>recommendations</span>
                    <Button variant='subBtn' style={{ marginTop: 10 }}>Subscribe</Button>
                </div>
            </div>
            <div className='users__user'>
                <img src={ProfileImg} alt="ProfileImg" className="users__img" />
                <div className='users__info'>
                    <span className='users__name'>Name</span>
                    <span className='users__text'>recommendations</span>
                    <Button variant='subBtn' style={{ marginTop: 10 }}>Subscribe</Button>
                </div>
            </div>
            <div className='users__user'>
                <img src={ProfileImg} alt="ProfileImg" className="users__img" />
                <div className='users__info'>
                    <span className='users__name'>Name</span>
                    <span className='users__text'>recommendations</span>
                    <div className='users__subscribed'>
                        <img className='users__subImg' src={Subscribed} />
                        <span className='users__subText'>You are subscribed</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersRec