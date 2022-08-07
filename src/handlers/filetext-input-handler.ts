import fse from 'fs-extra';
import { sep } from 'path';
import { createInterface } from 'readline';
import { COMMENT_CHARACTER_INPUT_FILE, INPUT_FOLDER } from '../config/config';
import { ICmd } from '../types/types';

const getCmdFromFiles = async () => {
  const fileToRead = `${INPUT_FOLDER}${sep}example.txt`;
  const inputStream = fse.createReadStream(fileToRead);

  const lineReader = createInterface({
    input: inputStream,
    terminal: false,
  });

  // const parseCmdWithName = (cmd: string) => {};

  const cmds: ICmd[] = [];
  for await (const line of lineReader) {
    const trimmedLine = line.trim();

    if (!trimmedLine || trimmedLine.startsWith(COMMENT_CHARACTER_INPUT_FILE)) {
      continue;
    }

    const lineSplitted = line.split(' ');

    const mainCmd = lineSplitted[0];
    // if(mainCmd.startsWith('<')){
    // }

    const readedCmd: ICmd = {
      mainCmd,
      paramsCmd: lineSplitted.slice(1).join(' '),
    };

    cmds.push(readedCmd);
  }

  return cmds;
};

export { getCmdFromFiles };
