export interface ICmd {
  mainCmd: string;
  paramsCmd?: string;
}

export interface ICmdOutput {
  mainCmd: string;
  error?: string;
  stderr?: string;
  stdout?: string;
}
