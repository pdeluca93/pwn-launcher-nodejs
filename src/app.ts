import { getCmdFromFiles } from './handlers/filetext-input-handler';
import { handleCmdExec } from './services/cmd-service';
import { ICmd } from './types/types';

const startUp = async () => {
  const cmds = await getCmdFromFiles();
  // In this array you can add hardcoded commands
  const hardcodedCmds: ICmd[] = [];

  const finalCmds = [...hardcodedCmds, ...cmds];
  handleCmdExec(finalCmds);
};

export { startUp };
