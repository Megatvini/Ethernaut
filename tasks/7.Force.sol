contract Ctr {
    constructor(address payable force_addr) public payable {
        selfdestruct(force_addr);
    }
}