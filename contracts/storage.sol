// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Storage {
    uint storedNumber;

    function writeNum(uint _num) public {
        storedNumber = _num;
    }

    function readNum() public view returns(uint){
        return storedNumber;
    }

//     Deployed Addresses

// StorageModule#Storage - 0x332C9D616aB41fC07ab71f9697cd032d43732E61

}