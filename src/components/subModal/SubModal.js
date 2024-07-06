import './SubModal.scss'
import SearchImg from '../../assets/svg/Search.svg'
import ProfileImg from '../../assets/img/ProfileImg.jpg'
import Input from '../../shared/input/Input'
import { Button } from '../../shared'

const SubModal = () => {
    return (
        <div className="subModal">
            <div className="subModal__box">
                <span className='subModal__tittle'>Subscribers</span>
                <div className='subModal__searchBox'>
                    <img className='subModal__logo' src={SearchImg} />
                    <Input variant='subInput' placeholder='Search...' />
                </div>
                <div className="subModal__subs">
                    <div className="subModal__sub">
                        <div className="subModal__left">
                            <img src={ProfileImg} alt="ProfileImg" className="subModal__profileImg" />
                            <span className='subModal__name'>Name</span>
                        </div>
                        <Button variant='subBtn'>Subscriptions</Button>
                    </div>
                    <div className="subModal__sub">
                        <div className="subModal__left">
                            <img src={ProfileImg} alt="ProfileImg" className="subModal__profileImg" />
                            <span className='subModal__name'>Name</span>
                        </div>
                        <Button variant='subBtn'>Subscriptions</Button>
                    </div>
                    <div className="subModal__sub">
                        <div className="subModal__left">
                            <img src={ProfileImg} alt="ProfileImg" className="subModal__profileImg" />
                            <span className='subModal__name'>Name</span>
                        </div>
                        <Button variant='subBtn'>Subscriptions</Button>
                    </div>
                    <div className="subModal__sub">
                        <div className="subModal__left">
                            <img src={ProfileImg} alt="ProfileImg" className="subModal__profileImg" />
                            <span className='subModal__name'>Name</span>
                        </div>
                        <Button variant='subBtn'>Subscriptions</Button>
                    </div>
                    <div className="subModal__sub">
                        <div className="subModal__left">
                            <img src={ProfileImg} alt="ProfileImg" className="subModal__profileImg" />
                            <span className='subModal__name'>Name</span>
                        </div>
                        <Button variant='subBtn'>Subscriptions</Button>
                    </div>
                    <div className="subModal__sub">
                        <div className="subModal__left">
                            <img src={ProfileImg} alt="ProfileImg" className="subModal__profileImg" />
                            <span className='subModal__name'>Name</span>
                        </div>
                        <Button variant='subBtn'>Subscriptions</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubModal