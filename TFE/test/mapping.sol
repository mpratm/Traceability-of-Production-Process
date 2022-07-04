// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract InfoProcess {
    struct Process {
        address _company; //Name of the Company that is doing the process
        string _ProductClass; //Type of product
        uint256 _NumberProcess; //Number of Process that we are tracking in the production
        uint256 _ActualProcess; //Actual Process of the production
        string _name; //Name of the order
        bool _IsFinished; //Is the Process Finished
    }

}