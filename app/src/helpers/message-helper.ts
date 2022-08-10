import { EOL } from 'os';
import {
  MESSAGE_ENCAPSULATION,
  MESSAGE_ERROR_TITLE,
  MESSAGE_STDERR_TITLE,
  MESSAGE_STDOUT_TITLE,
} from '../config/config';

const sanitizeMessage = (message: string) => {
  if (!message.startsWith(EOL)) {
    message = `${EOL}${message}`;
  }
  if (!message.endsWith(EOL)) {
    message = `${message}${EOL}`;
  }
  return message;
};

const formatMessage = (title: string, message: string) => {
  const sanitizedMessage = sanitizeMessage(message);
  const formatedMessage = `${MESSAGE_ENCAPSULATION} ${title.toUpperCase()} ${MESSAGE_ENCAPSULATION} ${sanitizedMessage}`;

  return formatedMessage;
};

const formatErrorMessage = (message: string) => {
  return formatMessage(MESSAGE_ERROR_TITLE, message);
};

const formatStderrMessage = (message: string) => {
  return formatMessage(MESSAGE_STDERR_TITLE, message);
};

const formatStdoutMessage = (message: string) => {
  return formatMessage(MESSAGE_STDOUT_TITLE, message);
};

export { formatErrorMessage, formatStderrMessage, formatStdoutMessage };
