import './ProfilePosts.scss'
import Modal from '../../../shared/modal/Modal'
import Post1 from '../../../assets/img/post1.jpeg'
import Post2 from '../../../assets/img/post2.jpg'
import Post3 from '../../../assets/img/post3.jpeg'
import Post4 from '../../../assets/img/post4.avif'
import Button from '../../../shared/button/Button'
import Input from '../../../shared/input/Input'
import ImgPost from '../../../assets/svg/ImgPost.svg'
import ImgPostColored from '../../../assets/svg/ImgPostColored.svg'
import ProfileImg from '../../../assets/img/ProfileImg.jpg'
import { useState } from 'react'


const ProfilePosts = () => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <div className="posts">
            <div className="posts__header">
                <span className='posts__tittle'>Posts</span>
                <Button style={{ width: 100, height: 20, fontSize: 15 }} onClick={() => setModalActive(true)}>Add post</Button>
            </div>
            <hr className='posts__line' />
            <div className="posts__posts">
                <img src={Post1} alt="" className='posts__post' />
                <img src={Post2} alt="" className='posts__post' />
                <img src={Post3} alt="" className='posts__post' />
                <img src={Post4} alt="" className='posts__post' />
                <img src={Post1} alt="" className='posts__post' />
                <img src={Post2} alt="" className='posts__post' />
                <img src={Post3} alt="" className='posts__post' />
                <img src={Post4} alt="" className='posts__post' />
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <div className="modal__box">
                    <div className="modal__header">
                        <span className='modal__tittle'>Create a publication</span>
                        <Button style={{ width: 150, height: 25, fontSize: 15 }}>Submit</Button>
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
                            <Input placeholder='Add a description...' variant='subInput' />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ProfilePosts