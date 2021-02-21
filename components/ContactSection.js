import styled from 'styled-components';
import ContactForm from './ContactForm';
import Container from './Container';
import SectionTitle from './SectionTitle';

const ContactSectionWrapper = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 950px;
  background: linear-gradient(
    -114deg,
    rgba(48, 182, 160, 0.1),
    rgba(48, 191, 171, 0.6)
  );
  /* background: linear-gradient(to top right, #89f7fe, #66a6ff); */

  h1 {
    width: 100%;
  }

  & > div {
    display: flex;
    justify-content: center;

    .form-section,
    .illustration-section {
      width: 50%;
      margin-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;

      .illustration {
        width: 600px;
        height: 450px;
      }
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionWrapper>
      <Container style={{ alignItems: 'center' }}>
        <SectionTitle>Contact Me</SectionTitle>
        <section className="illustration-section">
          <img className="illustration" src="/contact-me.svg" alt="" />
        </section>
        <section className="form-section">
          <ContactForm />
        </section>
      </Container>
    </ContactSectionWrapper>
  );
}
