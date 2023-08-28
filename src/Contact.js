import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55627.400103943095!2d78.09823972053044!3d29.378705962130855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390bee6a893390f9%3A0x9bbd471db27ea08f!2sBijnor%2C%20Uttar%20Pradesh%20246701!5e0!3m2!1sen!2sin!4v1692513859161!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="location"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/mknlrgaa" method="POST" className="contact-inputs">
          <input type="text" placeholder="username" name="username" required autoComplete="off"/>
          <input type="email" placeholder="Email" autoComplete="off" required name="Email"/>
          <textarea name="message" placeholder="Enter your message" autoComplete="off" required cols="30" rows="10"></textarea>
          <input type="submit" value="send"/>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
