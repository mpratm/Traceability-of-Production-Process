// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "./mapping.sol";

library LibraryProcess {
    function indexOf( mapping(uint256 => InfoProcess.Process) storage Process, string memory productclass, uint256 numberprocess, uint256 actualprocess, string memory n, bool finished) internal view returns (uint256 IDProcess_) {
        IDProcess_=0 ;
        for (uint i=0; i<4; i++){
            IDProcess_ = i; break;
        }
    }
}