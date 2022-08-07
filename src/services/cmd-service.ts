import { exec } from 'child_process';
import { ICmdExec } from '../types/types';
import colors from 'colors';
import { handleOutput } from './output-service';

const triggerCmdExec = (cmdToExec: string, mainCmd: string) => {
  console.log(colors.blue(`Executing ${cmdToExec}`));

  exec(cmdToExec, (error, stdout, stderr) => {
    handleOutput({
      mainCmd,
      error: (error && error.toString()) || '',
      stdout,
      stderr,
    });
  });
};

const handleCmdExec = (cmdExec: ICmdExec[]) => {
  cmdExec.forEach((c) => {
    const params = c.paramsCmd.join(' ');
    const cmdToEexec = `${c.mainCmd} ${params}`;

    triggerCmdExec(cmdToEexec, c.mainCmd);
  });
};

export { handleCmdExec };
