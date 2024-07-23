import './ProfileInfo.scss'
import ProfileImg from '../../assets/img/ProfileImg.jpg'
import Button from '../../shared/button/Button'
import Modal from '../../shared/modal/Modal'
import SearchImg from '../../assets/svg/Search.svg'
import Input from '../../shared/input/Input'
import { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ProfileInfo = () => {
    const [countries, setCountries] = useState([]);
    const [subModalActive, setSubModalActive] = useState(false)
    const [yourselfModalActive, setYourselfModalActive] = useState(false)

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                const countryList = data.map(country => ({
                    name: country.name.common,
                    code: country.cca2
                }));
                setCountries(countryList);
            })
            .catch(error => console.error('Error fetching countries:', error));
    }, []);

    return (
        <div className="profile">
            <img src={ProfileImg} alt="ProfileImg" className='profile__img' />
            <div className="profile__content">
                <div className="profile__header">
                    <div className="profile__texts">
                        <span className='profile__name'>Name</span>
                        <span className='profile__country'>Country</span>
                    </div>
                    <Button style={{ width: 50, height: 25, fontSize: 15 }} onClick={() => setYourselfModalActive(true)}>Edit</Button>
                </div>
                <div className='profile__buttons'>
                    <Button style={{ width: 150, height: 25, fontSize: 15 }} onClick={() => setSubModalActive(true)}>85 subscribers</Button>
                    <Button style={{ width: 150, height: 25, fontSize: 15 }} onClick={() => setSubModalActive(true)}>40 subscriptions</Button>
                    <Button style={{ width: 150, height: 25, fontSize: 15 }} onClick={() => setSubModalActive(true)}>6 publications</Button>
                </div>
                <span className='profile__desc'>desciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciption</span>
            </div>
            <Modals
                countries={countries}
                subModalActive={subModalActive}
                setSubModalActive={setSubModalActive}
                yourselfModalActive={yourselfModalActive}
                setYourselfModalActive={setYourselfModalActive} />
        </div>
    )
}

const Modals = ({ subModalActive, setSubModalActive, yourselfModalActive, setYourselfModalActive, countries }) => {
    return (
        <>
            <Modal active={subModalActive} setActive={setSubModalActive}>
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
                    </div>
                </div>
            </Modal>

            <Modal active={yourselfModalActive} setActive={setYourselfModalActive}>
                <Formik
                    initialValues={{
                        country: '',
                        description: '',
                    }}
                    validationSchema={Yup.object({
                        country: Yup.string()
                            .required('Country is required'),
                        description: Yup.string()
                            .min(8, 'Minimum 8 characters to fill')
                            .max(30, 'Maximum 30 characters to fill')
                            .required('Description is required'),
                    })}
                    onSubmit={(values) => console.log(values)}
                >
                    <Form >
                        <div className='yourModal__box'>
                            <span className='yourModal__tittle'>Write about yourself</span>
                            <div className="yourModal__main">
                                <div className="yourModal__imgChange">
                                    <div className="yourModal__user">
                                        <img src={ProfileImg} alt="ProfileImg" className='yourModal__profileImg' />
                                        <span className='yourModal__name'>Name</span>
                                    </div>
                                    <Button variant='subBtn'>Change photo</Button>
                                </div>
                                <label htmlFor="country" className='yourModal__label'>Country</label>
                                <Field
                                    id="country"
                                    name="country"
                                    as="select"
                                    className='yourModal__select'
                                >
                                    <option value="">Choose Country</option>
                                    {countries.map(country => (
                                        <option key={country.code} value={country.code} className='yourModal__option'>{country.name}</option>
                                    ))}
                                </Field>
                                <ErrorMessage name="country" component="div" className="yourModal__error" />

                                <label htmlFor='description' className='yourModal__label'>About me</label>
                                <Field
                                    id='description'
                                    name='description'
                                    as={Input}
                                    style={{ height: 100, borderRadius: 10 }}
                                />
                                <ErrorMessage name="description" component="div" className="yourModal__error" />

                                <Button>Submit</Button>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </Modal>
        </>
    )
}

export default ProfileInfo