import { getCmdFromFiles } from './handlers/filetext-input-handler';
import { handleCmdExec } from './services/cmd-service';

const startUp = async () => {
  const cmdToExec = await getCmdFromFiles();

  const pingCmd = {
    mainCmd: 'ping',
    paramsCmd: '-n 5 8.8.8.8',
  };

  const nslookupCmd = {
    mainCmd: 'nslookup',
    paramsCmd: 'google.com',
  };

  const finalCmdToExec = [pingCmd, nslookupCmd, ...cmdToExec];
  handleCmdExec(finalCmdToExec);
};

export { startUp };
