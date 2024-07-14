import SinglePost from '../components/posts/singlePost/SinglePost'

const HomePage = () => {
    return (
        <>
            <SinglePost />
            <hr className='app__hr'></hr>
            <SinglePost />
            <hr className='app__hr'></hr>
            <SinglePost />
        </>
    )
}

export default HomePage