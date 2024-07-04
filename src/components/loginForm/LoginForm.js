import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from 'yup'
import Button from '../button/Button'
import './LoginForm.scss'

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <>
            <label htmlFor={props.name} className="logForm__label">{label}</label>
            <input {...props} {...field} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    )
}

const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' })
    return (
        <>
            <label className="checkbox">
                <input type="checkbox" {...props} {...field} className="checkbox__box" />
                {children}
            </label>


            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    )
}

const LoginForm = () => {
    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email('Wrong mail')
                    .required('Obligatory field!'),
                password: Yup.string()
                    .min(8, 'Minimum 8 characters to fill')
                    .required('Obligatory field!'),
            })}
            onSubmit={values => console.log(values)}
        >
            <Form className="logForm">
                <div className="logForm__tittles">
                    <span className="logForm__tittle">Welcome to </span>
                    <span className="logForm__tittle--font">Brainsgram</span>
                </div>
                <div className="logForm__links">
                    <a href="#" className="logForm__link logForm__link--active">Login</a>
                    <span className="logForm__stick">|</span>
                    <a href="#" className="logForm__link">Registration</a>
                </div>
                <div className="logForm__inputs">
                    <MyTextInput
                        label="Email"
                        id="email"
                        name="email"
                        type="text"
                    />
                    <MyTextInput
                        label="Password"
                        id="password"
                        name="password"
                        type="text"
                    />
                    <MyCheckbox
                        name="remember">
                        Remember me
                    </MyCheckbox>
                </div>
                <Button style={{ width: 260 }} type="submit">Submit</Button>
            </Form>
        </Formik >
    )
}

export default LoginForm