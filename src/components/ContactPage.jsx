import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

const Div=styled.div`
  outline: solid;
  width: 500px;
  margin: auto;
  background-color: white;
`;

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

const ContactPage = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Div>
      <h1>Contact</h1>
      <p>Have a question or want to work together?</p>
      <form onSubmit={formik.handleSubmit}>
        <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="message"
            name="message"
            label="Message"
            value={formik.values.message}
            multiline="true"
            onChange={formik.handleChange}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
          <Button 
            onClick={console.log(formik.values)} 
            style={{ margin: '1em' }}
            color="primary" 
            variant="contained" 
            startIcon={<SendRoundedIcon />}
            type="submit">
            Submit
          </Button>
      </form>
    </Div>
  );
};

export default ContactPage;