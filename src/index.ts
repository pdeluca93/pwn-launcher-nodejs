import { handleExec } from './exec-service';
import { CmdExec } from './types';

const pingCmd: CmdExec = {
  mainCmd: 'ping',
  paramsCmd: ['-n 5', '8.8.8.8'],
};

const nslookupCmd: CmdExec = {
  mainCmd: 'nslookup',
  paramsCmd: ['google.com'],
};

const cmdToExecute: CmdExec[] = [pingCmd, nslookupCmd];
handleExec(cmdToExecute);
