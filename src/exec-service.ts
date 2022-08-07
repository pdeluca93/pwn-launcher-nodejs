import { exec, ExecException } from 'child_process';
import { CmdExec } from './types';
import colors from 'colors';
import fse from 'fs-extra';
import { EOL } from 'os';
import { sep } from 'path';

const sanitizeMessage = (message: string) => {
  if (!message.startsWith(EOL)) {
    message = `${EOL}${message}`;
  }
  if (!message.endsWith(EOL)) {
    message = `${message}${EOL}`;
  }
  return message;
};

const handleErrorResult = (message: ExecException) => {
  const sanitizedMessage = sanitizeMessage(message.toString());
  const formatedMessage = `Error: ${sanitizedMessage}`;

  console.log(colors.red(formatedMessage));

  return formatedMessage;
};

const handleStderrResult = (message: string) => {
  const sanitizedMessage = sanitizeMessage(message);
  const formatedMessage = `Stderr: ${sanitizedMessage}`;

  console.log(colors.yellow(formatedMessage));
  return formatedMessage;
};

const handleStdoutResult = (message: string) => {
  const sanitizedMessage = sanitizeMessage(message);
  const formatedMessage = `Stdout: ${sanitizedMessage}`;

  console.log(colors.green(formatedMessage));
  return formatedMessage;
};

const triggerExec = (cmdToExecute: string, mainCmd: string) => {
  exec(cmdToExecute, (error, stdout, stderr) => {
    const fileToWrite = `output${sep}${mainCmd}_${Date.now()}.txt`;

    if (error) {
      const message = handleErrorResult(error);
      fse.outputFileSync(fileToWrite, message);
    }

    if (stderr) {
      const message = handleStderrResult(stderr);
      fse.outputFileSync(fileToWrite, message);
    }

    if (stdout) {
      const message = handleStdoutResult(stdout);
      fse.outputFileSync(fileToWrite, message);
    }
  });
};

const handleExec = (cmdExec: CmdExec[]) => {
  cmdExec.forEach((c) => {
    const params = c.paramsCmd.join(' ');
    const cmdToEexec = `${c.mainCmd} ${params}`;

    console.log(colors.blue(`Executing ${cmdToEexec}`));
    triggerExec(cmdToEexec, c.mainCmd);
  });
};

export { handleExec };
