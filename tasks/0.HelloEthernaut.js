await contract.info()
'You will find what you need in info1().'
await contract.info1()
'Try info2(), but with "hello" as a parameter.'
await contract.info2('hello');
'The property infoNum holds the number of the next info method to call.'
await contract.infoNum();
'o {negative: 0, words: Array(2), length: 1, red: null}'
await contract.info42();
'theMethodName is the name of the next method.'
await contract.theMethodName();
'The method name is method7123949.'
await contract.method7123949();
'If you know the password, submit it to authenticate().'
await contract.authenticate(await contract.password());
