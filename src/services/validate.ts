import { Payload } from "../components/ContactForm";
import { v4 as uuid } from "uuid";
import Joi from "joi";
import { schema } from "../config/schemaValidation";

export function Validate({ name, email, phoneNumber, message }: Payload) {
  const messages: { id: string; target: string; validationError: string }[] = [];

  const PHONE_NUMBER_REGEX = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/;

  if (!name) {
    messages.push({ id: uuid(), target: "name", validationError: "O nome é obrigatório" });
  }

  if (name.length > 30) {
    messages.push({
      id: uuid(),
      target: "name",
      validationError: "O tamanho máximo do campo nome é de 30 caracteres",
    });
  }

  if (!email) {
    messages.push({ id: uuid(), target: "email", validationError: "E-mail é obrigatório" });
  } else {
    const { error } = schema.validate({ email });

    if (error) {
      const messagesSchemaValidation = error.details.map((item) => item.message)[0];

      messages.push({ id: uuid(), target: "email", validationError: messagesSchemaValidation });
    }
  }

  if (message.length < 12) {
    messages.push({
      id: uuid(),
      target: "message",
      validationError: "A mensagem precista ter pelo menos 12 caracteres",
    });
  }

  if (message.length > 256) {
    messages.push({
      id: uuid(),
      target: "message",
      validationError: "A mensagem precisa ter no máximo 256 caracteres",
    });
  }

  if (!PHONE_NUMBER_REGEX.test(phoneNumber)) {
    messages.push({
      id: uuid(),
      target: "phoneNumber",
      validationError: "O número do telefone é inválido",
    });
  }

  return messages;
}
