import fse from 'fs-extra';
import { sep } from 'path';
import { createInterface } from 'readline';
import { COMMENT_CHARACTER_INPUT_FILE, INPUT_FOLDER } from '../config/config';
import { ICmd } from '../types/types';
import colors from 'colors';

const getCmdFromFile = async (fileToRead: string) => {
  const inputStream = fse.createReadStream(fileToRead);

  const lineReader = createInterface({
    input: inputStream,
    terminal: false,
  });

  const cmds: ICmd[] = [];
  for await (const line of lineReader) {
    const trimmedLine = line.trim();

    if (!trimmedLine || trimmedLine.startsWith(COMMENT_CHARACTER_INPUT_FILE)) {
      continue;
    }

    const lineSplitted = line.split(' ');
    const mainCmd = lineSplitted[0];

    const readedCmd: ICmd = {
      mainCmd,
      paramsCmd: lineSplitted.slice(1).join(' '),
    };

    cmds.push(readedCmd);
  }

  return cmds;
};

const getCmdFromFiles = async () => {
  const finalCmds: ICmd[] = [];
  try {
    const files = await fse.readdir(INPUT_FOLDER);
    for await (const file of files) {
      const filePath = `${INPUT_FOLDER}${sep}${file}`;
      const cmds = await getCmdFromFile(filePath);
      finalCmds.push(...cmds);
    }
  } catch (err) {
    console.log(colors.red(`Error reading input file: ${err}`));
  }

  return finalCmds;
};

export { getCmdFromFiles };
