import { handleCmdExec } from './services/cmd-service';
import { ICmdExec } from './types/types';

const startUp = () => {

  handleCmdExec(cmdToExec);
};

export { startUp };
