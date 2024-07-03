import { Children } from 'react'
import './Button.scss'

const Button = ({ children, ...props }) => {
    return (
        <button
            className='mainBtn'
            name='button'
            {...props}
        >{children}</button>
    )
}

export default Button