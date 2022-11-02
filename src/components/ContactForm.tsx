import React from "react";
import styled from "styled-components";

export function ContactForm() {
  return (
    <ContactFormContainer>
      <h2 className="form-title">Entre em contato conosco</h2>
      <form action="https://webhook.site/24aa5305-ca8e-4647-9afb-70777a8a31a1" method="POST" className="contact-form">
        <div className="row">
          <input type="text" name="fullname" placeholder="Nome" id="fullname" className="field" required />
        </div>
        <div className="row">
          <input type="email" name="email" placeholder="E-mail" id="email" className="field" required />
          <input
            type="tel"
            name="phone-number"
            placeholder="Telefone"
            id="phone-number"
            className="field"
            pattern="\([0-9]{2}\) 9?[0-9]{4}-[0-9]{4}"
          />
        </div>
        <div className="row">
          <textarea
            name="message"
            id="message"
            className="field"
            placeholder="Mensagem"
            required
            rows={3}
            minLength={2}
            maxLength={256}
          />
        </div>
        <div className="row">
          <button type="submit" className="submit-button">
            Enviar
          </button>
        </div>
      </form>
    </ContactFormContainer>
  );
}

const ContactFormContainer = styled.div`
  width: 85%;
  margin: 48px auto;

  .contact-form {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
  }

  .form-title {
    font-size: 32px;
  }

  .field {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 12px 18px;
    outline: none;
    box-sizing: border-box;
  }

  .row:not(:first-child) {
    margin-top: 12px;
  }

  .field:focus {
    border-color: #5624d0;
  }

  .submit-button {
    background-color: #5624d0;
    color: #fff;
    padding: 12px 18px;
    margin-top: 12px;
    border: none;
    border-radius: 4px;
    width: 100%;
  }

  .submit-button:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  #message {
    resize: none;
  }

  /* Mobile */
  @media (max-width: 500px) {
    #email {
      margin-bottom: 12px;
    }

    .form-title {
      text-align: center;
    }
  }

  /* Desktop */
  @media (min-width: 500px) {
    .row {
      display: flex;
    }

    #email {
      margin-right: 12px;
      flex: 3;
    }

    #phone-number {
      flex: 2;
    }

    .form-title {
      text-align: left;
    }
  }
`;
