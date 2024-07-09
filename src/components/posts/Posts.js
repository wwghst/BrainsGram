import './Posts.scss'
import Post1 from '../../assets/img/post1.jpeg'
import Post2 from '../../assets/img/post2.jpg'
import Post3 from '../../assets/img/post3.jpeg'
import Post4 from '../../assets/img/post4.avif'
import Button from '../../shared/button/Button'


const Posts = () => {
    return (
        <div className="posts">
            <div className="posts__header">
                <span className='posts__tittle'>Posts</span>
                <Button style={{ width: 100, height: 20, fontSize: 15 }}>Add post</Button>
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
        </div>
    )
}

export default Posts