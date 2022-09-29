import { exec } from 'child_process';
import { ICmd } from '../types/types';
import colors from 'colors';
import { handleOutput } from './output-service';

const triggerCmdExec = (cmd: ICmd) => {
  const cmdToEexec = `${cmd.mainCmd} ${cmd.paramsCmd || ''}`.trim();
  console.log(colors.blue(`Executing ${cmdToEexec}`));

  exec(cmdToEexec, (error, stdout, stderr) => {
    handleOutput({
      mainCmd: cmd.mainCmd,
      error: (error && error.toString()) || '',
      stdout,
      stderr,
    });
  });
};

const handleCmdExec = (cmds: ICmd[]) => {
  cmds.forEach((cmd) => {
    triggerCmdExec(cmd);
  });
};

export { handleCmdExec };
