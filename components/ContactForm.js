import styled from 'styled-components';

const ContactFormWrapper = styled.div`
  width: 70%;
  min-height: 400px;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
`;

export default function ContactForm() {
  return <ContactFormWrapper></ContactFormWrapper>;
}
