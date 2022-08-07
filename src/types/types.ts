import { ExecException as string } from 'child_process';

export interface ICmdExec {
  mainCmd: string;
  paramsCmd: string[];
}

export interface ICmdOutput {
  mainCmd: string;
  error?: string;
  stderr?: string;
  stdout?: string;
}
