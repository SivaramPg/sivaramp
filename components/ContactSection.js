import styled from 'styled-components';
import { respondTo } from '../utils/respondTo';
import ContactForm from './ContactForm';
import Container from './Container';
import SectionTitle from './SectionTitle';

const ContactSectionWrapper = styled.section`
  width: 100%;
  min-height: 950px;
  background: linear-gradient(
    -114deg,
    rgba(48, 182, 160, 0.1),
    rgba(48, 191, 171, 0.6)
  );
  /* background: linear-gradient(to top right, #89f7fe, #66a6ff); */
  ${respondTo.md`
    min-height: 900px;
  `}
  ${respondTo.xs`
        min-height: 1000px;
  `}

  h1 {
    width: 100%;
  }

  & > div {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;

    .form-section,
    .illustration-section {
      width: 50%;
      margin-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .form-section {
      order: 2;
      ${respondTo.md`
        width: 60%;
      `}
      ${respondTo.sm`
        width: 70%;
      `}
      ${respondTo.xs`
        width: 100%;
      `}
    }

    .illustration-section {
      order: 1;

      ${respondTo.md`
        width: 40%;
      `}
      ${respondTo.sm`
        width: 30%;
      `}
       ${respondTo.xs`
        width: 100%;
        margin-top: 0px;
      `}

      .illustration {
        width: 100%;
        ${respondTo.xs`
        width: 50%;
      `}
      }
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionWrapper id="contact-me">
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
