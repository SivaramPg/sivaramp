import { useMemo, memo } from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

import FormInput from './FormInput';
import FormTextArea from './FormTextArea';

const ContactFormWrapper = styled.div`
  width: 75%;
  min-height: 400px;
  background-color: #ffffffdd;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  padding: 20px;

  h3 {
    width: 100%;
    text-align: center;
    text-transform: capitalize;
    font-size: 32px;
    margin-bottom: 30px;
    color: #5222d0;
  }

  button {
    width: 100%;
    height: 40px;
    background-color: #5222d0;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }
  }
`;

const validationSchema = Yup.object().shape({
  emailId: Yup.string('Invalid input')
    .email('Enter a valid email address')
    .required('Email Id is required'),
  subject: Yup.string()
    .min(1, 'Subject is too short')
    .max(256, 'Subject is too long')
    .required('Subject is required'),
  message: Yup.string()
    .min(1, 'Message is too short')
    .max(4096, 'Message is too long')
    .required('Message is required'),
});

function ContactForm() {
  const initialValues = useMemo(
    () => ({
      uuid: uuidv4(),
      emailId: '',
      subject: '',
      message: '',
    }),
    []
  );

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <ContactFormWrapper>
      <h3>Get in touch</h3>
      <Formik
        key={initialValues.uuid}
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnBlur={true}
        validateOnMount={false}
        validateOnChange={false}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form>
            <FormInput
              name="emailId"
              label="Email ID"
              placeholder="Email Id"
              autoComplete="off"
            />
            <FormInput
              name="subject"
              label="Subject"
              placeholder="Subject"
              autoComplete="off"
            />
            <FormTextArea name="message" label="Message" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </ContactFormWrapper>
  );
}

export default memo(ContactForm);
