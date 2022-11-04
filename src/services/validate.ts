import { Payload } from "../components/ContactForm";
import { v4 as uuid } from "uuid";

export function Validate({ name, email, phoneNumber, message }: Payload) {
  const messages: { id: string; target: string; validationError: string }[] = [];

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
  } else if (!email.includes("@")) {
    messages.push({ id: uuid(), target: "email", validationError: "E-mail inválido" });
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

  if (phoneNumber.length < 6) {
    messages.push({
      id: uuid(),
      target: "phoneNumber",
      validationError: "O número do telefone é inválido",
    });
  }

  return messages;
}