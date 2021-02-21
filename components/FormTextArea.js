import styled from 'styled-components';
import { useField } from 'formik';

const FormTextAreaWrapper = styled.div`
  width: 100%;
  position: relative;

  margin-top: 20px;
  margin-bottom: 30px;

  & > label {
    position: absolute;
    left: 10px;
    transform: translateY(75%);
    transition: all 0.125s linear;
    background-color: #fff;
    padding: 0 5px;
    font-size: 20px;
    color: #7d7d7d;
    cursor: text;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 60px;
  border-radius: 5px;
  border: 2px solid white;
  padding: 5px 10px 5px 10px;
  font-size: 16px;
  font-family: 'Wotfard';
  caret-color: black;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  /* Hide the scrollbar */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  &:focus,
  &:valid {
    border: 2px solid black;
  }
  &:valid ~ label,
  &:focus ~ label {
    color: #000;
    font-size: 16px;
    transform: translateY(-50%);
  }

  ::placeholder {
    color: #aaa;
  }

  resize: none;
  height: 200px;
`;

const ErrorMsg = styled.p`
  color: crimson;
  font-size: 12px;
  position: absolute;
`;

export default function FormTextArea({ label, name, ...props }) {
  const [field, meta, helpers] = useField(name);

  return (
    <FormTextAreaWrapper>
      <TextArea id={name} {...field} {...props} />
      {label ? <label htmlFor={name}>{label}</label> : null}
      {meta.touched && meta.error ? <ErrorMsg>{meta.error}</ErrorMsg> : null}
    </FormTextAreaWrapper>
  );
}
