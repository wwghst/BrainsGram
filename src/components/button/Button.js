import './Button.scss'

const Button = ({ btnText, ...props }) => {
    return (
        <button
            className='mainBtn'
            type='button'
            name='button'
            {...props}
        >{btnText}</button>
    )
}

export default Button