import './PostModal.scss'
import Button from '../../../shared/button/Button'
import Input from '../../../shared/input/Input'
import ImgPost from '../../../assets/svg/ImgPost.svg'
import ImgPostColored from '../../../assets/svg/ImgPostColored.svg'
import ProfileImg from '../../../assets/img/ProfileImg.jpg'

const PostModal = () => {
    return (
        <div className="modal">
            <div className="modal__box">
                <div className="modal__header">
                    <span className='modal__tittle'>Create a publication</span>
                    <Button style={{ width: 150, height: 25, fontSize: 15}}>Submit</Button>
                </div>
                <div className="modal__main">
                    <div className="modal__left">
                        <div className="modal__icons">
                            <img src={ImgPost} alt="ImgPost" className='modal__icon' />
                            <img src={ImgPostColored} alt="ImgPost" className='modal__icon' />
                        </div>
                        <Button style={{ width: 250, height: 50, fontSize: 25 }}>Select on computer</Button>
                    </div>
                    <div className="modal__right">
                        <div className="modal__user">
                            <img src={ProfileImg} alt="ProfileImg" className='modal__profileImg' />
                            <span className='modal__name'>Name</span>
                        </div>
                        <Input placeholder='Add a description...' variant='subInput'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostModal