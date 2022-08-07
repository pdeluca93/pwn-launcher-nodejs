const getCmdToExec = () => {
  const pingCmd = {
    mainCmd: 'ping',
    paramsCmd: ['-n 5', '8.8.8.8'],
  };

  const nslookupCmd = {
    mainCmd: 'nslookup',
    paramsCmd: ['google.com'],
  };

  const cmdToExec = [pingCmd, nslookupCmd];
  return cmdToExec;
};

export { getCmdToExec };
