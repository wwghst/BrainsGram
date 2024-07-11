import React, { useEffect, useState } from 'react';
import './YourselfModal.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ProfileImg from '../../../assets/img/ProfileImg.jpg';
import { Button } from '../../../shared';
import { Input } from '../../../shared';

const YourselfModal = () => {
    const [countries, setCountries] = useState([]);

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
            <Form className='modal'>
                <div className='modal__box'>
                    <span className='modal__tittle'>Write about yourself</span>
                    <div className="modal__main">
                        <div className="modal__imgChange">
                            <div className="modal__user">
                                <img src={ProfileImg} alt="ProfileImg" className='modal__profileImg' />
                                <span className='modal__name'>Name</span>
                            </div>
                            <Button variant='subBtn'>Change photo</Button>
                        </div>
                        <label htmlFor="country" className='modal__label'>Country</label>
                        <Field
                            id="country"
                            name="country"
                            as="select"
                            className='modal__select'
                        >
                            <option value="">Choose Country</option>
                            {countries.map(country => (
                                <option key={country.code} value={country.code} className='modal__option'>{country.name}</option>
                            ))}
                        </Field>
                        <ErrorMessage name="country" component="div" className="modal__error" />

                        <label htmlFor='description' className='modal__label'>About me</label>
                        <Field
                            id='description'
                            name='description'
                            as={Input}
                            style={{ height: 100, borderRadius: 10 }}
                        />
                        <ErrorMessage name="description" component="div" className="modal__error" />

                        <Button>Submit</Button>
                    </div>
                </div>
            </Form>
        </Formik>
    );
}

export default YourselfModal;
