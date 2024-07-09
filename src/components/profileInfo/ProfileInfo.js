import './ProfileInfo.scss'
import ProfileImg from '../../assets/img/ProfileImg.jpg'
import Button from '../../shared/button/Button'

const ProfileInfo = () => {
    return (
        <div className="profile">
            <img src={ProfileImg} alt="ProfileImg" className='profile__img' />
            <div className="profile__content">
                <div className="profile__header">
                    <div className="profile__texts">
                        <span className='profile__name'>Name</span>
                        <span className='profile__country'>Country</span>
                    </div>
                    <Button style={{ width: 50, height: 25, fontSize: 15 }}>Edit</Button>
                </div>
                <div className='profile__buttons'>
                    <Button style={{ width: 150, height: 25, fontSize: 15 }}>85 subscribers</Button>
                    <Button style={{ width: 150, height: 25, fontSize: 15 }}>40 subscriptions</Button>
                    <Button style={{ width: 150, height: 25, fontSize: 15 }}>6 publications</Button>
                </div>
                <span className='profile__desc'>desciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciption</span>
            </div>
        </div>
    )
}

export default ProfileInfo