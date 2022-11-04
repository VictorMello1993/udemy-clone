import React, { useState } from "react";
import styled from "styled-components";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  message: "",
};

function isValidName(name: string): string | null {
  if (!name) {
    return "O nome é obrigatório";
  }

  if (name.length > 30) {
    return "O tamanho máximo do campo nome é de 30 caracteres";
  }

  return null;
}

function isValidEmail(email: string): string | null {
  if (!email) {
    return "E-mail é obrigatório";
  }

  if (!email.includes("@")) {
    return "E-mail inválido";
  }

  return null;
}

function isValidMessage(message: string): string | null {
  if (message.length < 12) {
    return "A mensagem precista ter pelo menos 12 caracteres";
  }

  if (message.length > 256) {
    return "A mensagem precista ter no máximo 256 caracteres";
  }

  return null;
}

function isValidPhoneNumber(phoneNumber: string): string | null {
  if (phoneNumber.length < 6) {
    return "O número do telefone é inválido";
  }

  return null;
}

function ErrorMessage({ message }: { message: string | null }) {
  if (!message) {
    return null;
  }

  return <span className="error">{message}</span>;
}

export function ContactForm() {
  const [formState, setFormState] = useState(initialValues);

  const validName = isValidName(formState.name);
  const validEmail = isValidEmail(formState.email);
  const validPhoneNumber = isValidPhoneNumber(formState.phoneNumber);
  const validMessage = isValidMessage(formState.message);

  const isFormValid = !validName && !validEmail && !validPhoneNumber && !validMessage;

  async function submitForm(event: any) {
    try {
      event.preventDefault();

      if (isFormValid) {
        const form = new FormData();

        form.append("name", formState.name);
        form.append("email", formState.email);
        form.append("phone-number", formState.phoneNumber);
        form.append("message", formState.message);

        await fetch("https://webhook.site/24aa5305-ca8e-4647-9afb-70777a8a31a1", {
          method: "post",
          body: form,
          mode: "cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        });
      }

      alert("Formulário enviado com sucesso!");
      setFormState(initialValues);
    } catch (error) {
      console.log(error);
      alert("Houve um erro ao enviar o formulário");
    }
  }

  return (
    <ContactFormContainer>
      <h2 className="form-title">Entre em contato conosco</h2>
      <form
        action="https://webhook.site/24aa5305-ca8e-4647-9afb-70777a8a31a1"
        method="POST"
        className="contact-form"
        noValidate
        onSubmit={(event) => submitForm(event)}
      >
        <div className="row">
          <div className="field-container">
            <input
              type="text"
              name="fullname"
              placeholder="Nome"
              id="fullname"
              className="field"
              value={formState.name}
              onChange={(event) => setFormState({ ...formState, name: event.target.value })}
            />
            <ErrorMessage message={validName} />
          </div>
        </div>

        <div className="row">
          <div className="field-container email-container">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              id="email"
              className="field"
              value={formState.email}
              onChange={(event) => setFormState({ ...formState, email: event.target.value })}
            />
            <ErrorMessage message={validEmail} />
          </div>

          <div className="field-container phone-number-container">
            <input
              type="tel"
              name="phone-number"
              placeholder="Telefone"
              id="phone-number"
              className="field"
              value={formState.phoneNumber}
              onChange={(event) => setFormState({ ...formState, phoneNumber: event.target.value })}
              // pattern="\([0-9]{2}\) 9?[0-9]{4}-[0-9]{4}"
            />
            <ErrorMessage message={validPhoneNumber} />
          </div>
        </div>

        <div className="row">
          <textarea
            name="message"
            id="message"
            className="field"
            placeholder="Mensagem"
            rows={3}
            value={formState.message}
            onChange={(event) => setFormState({ ...formState, message: event.target.value })}
          />
        </div>
        <ErrorMessage message={validMessage} />
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
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);

  .contact-form {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
  }

  .form-title {
    font-size: 32px;
    font-family: udemy sans, -apple-system, BlinkMacSystemFont, Roboto, segoe ui, Helvetica, Arial, sans-serif,
      apple color emoji, segoe ui emoji, segoe ui symbol;
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

  .field-container {
    width: 100%;
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
    font-size: 18px;
    font-weight: 700;
    font-family: udemy sans, -apple-system, BlinkMacSystemFont, Roboto, segoe ui, Helvetica, Arial, sans-serif,
      apple color emoji, segoe ui emoji, segoe ui symbol;
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

    .email-container {
      margin-right: 12px;
      flex: 3;
    }

    .phone-number-container {
      flex: 2;
    }

    .form-title {
      text-align: left;
    }

    /* .field:invalid {
      border-color: #f11212;
    } */

    /* .field:invalid + .error {
      display: block;
    } */

    .error {
      color: #f11212;
      font-size: 10px;
    }
  }
`;
