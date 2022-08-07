export interface CmdExec {
  mainCmd: string;
  paramsCmd: string[];
}

export interface CmdExecResult {
  stdout: string;
  stderr: string;
  error: string;
}
