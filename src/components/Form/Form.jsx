import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import { RiMailSendFill } from "react-icons/ri";
import TextField from '@material-ui/core/TextField'

import ContactService from '../../services/ContactService';
import { Notification } from './FormElements.styled.js';

const validationSchema = yup.object({
  name: yup
    .string()
    .required('Name is required'),
  email: yup
    .string()
    .email('Email must be a valid email')
    .required('Email is required'),
  message: yup
    .string()
    .required('Message is required')
});

const Form = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsFormSubmitted(true)
      ContactService(values)
      setTimeout(() => {
        setIsFormSubmitted(false)
      }, 5000)
    }
  });

  const nameFieldProps = {
    autoComplete: 'name',
    error: formik.touched.name && Boolean(formik.errors.name),
    helperText: formik.touched.name && formik.errors.name,
    id: 'name-field',
    label: 'Name *',
    name: 'name', 
    onChange: formik.handleChange,
    value: formik.values.name
  };

  const emailFieldProps = {
    autoComplete: 'email',
    error: formik.touched.email && Boolean(formik.errors.email),
    helperText: formik.touched.email && formik.errors.email,
    id: 'email-field',
    label: 'Email *',
    name: 'email', 
    onChange: formik.handleChange,
    value: formik.values.email
  };

  const messageFieldProps = {
    error: formik.touched.message && Boolean(formik.errors.message),
    helperText: formik.touched.message && formik.errors.message,
    id: 'message-field',
    label: 'Message *', 
    multiline: true,
    name: 'message',
    rows: 8,
    onChange: formik.handleChange,
    value: formik.values.message
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className='vh-100' id='contact--container'>
          <div className='contact--name'>
            <InputField {...nameFieldProps} />
          </div>
          <div className='contact--email'>
            <InputField {...emailFieldProps} />
          </div>
          <div className='contact--message'>
            <InputField {...messageFieldProps} />
          </div>
        </div>
        <Button 
          style={{ margin: '1em' }}
          color="primary" 
          variant="contained" 
          startIcon={<RiMailSendFill />}
          type="submit">
          Submit
        </Button>
      </form>
      {isFormSubmitted && <Notification />}
    </>
)};

const InputField= props => (
  <TextField 
    fullWidth
    InputLabelProps={{
      shrink: true,
    }}
    margin="normal"
    variant="outlined"
    size='medium'
    {...props}
  />
);

export default Form;