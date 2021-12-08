await web3.eth.getStorageAt(contract.address, 1, (a) => {
    console.log(a)
});