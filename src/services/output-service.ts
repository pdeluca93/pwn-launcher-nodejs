import colors from 'colors';
import fse from 'fs-extra';
import { sep } from 'path';
import { OUTPUT_FOLDER } from '../config/config';
import {
  formatErrorMessage,
  formatStderrMessage,
  formatStdoutMessage,
} from '../helpers/message-helper';
import { ICmdOutput } from '../types/types';

const writeOutputFile = (fileToWrite: string, message: string) => {
  try {
    fse.outputFileSync(fileToWrite, message, { flag: 'a' });
  } catch (err) {
    console.log(colors.red(`Error writing output file: ${err}`));
  }
};

const handleOutput = (output: ICmdOutput) => {
  const { mainCmd, error, stderr, stdout } = output;
  const fileToWrite = `${OUTPUT_FOLDER}${sep}${mainCmd}_${Date.now()}.txt`;

  if (error) {
    const message = formatErrorMessage(error);
    console.log(colors.red(message));

    writeOutputFile(fileToWrite, message);
  }

  if (stderr) {
    const message = formatStderrMessage(stderr);
    console.log(colors.yellow(message));

    writeOutputFile(fileToWrite, message);
  }

  if (stdout) {
    const message = formatStdoutMessage(stdout);
    console.log(colors.green(message));

    writeOutputFile(fileToWrite, message);
  }
};

export { handleOutput };
