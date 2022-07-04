// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "./mapping.sol";
import "./mapping_process.sol";

contract Traceability is InfoProcess {

    uint256 private _idProcess;
    address private _owner;

    mapping(uint256 => Process) private process;

    constructor() {
        _idProcess=1;
        _owner=msg.sender;
    }

    modifier onlyOwner() {
        require( msg.sender == _owner, "Only the Company that is doing the process can do thus actions");
        _;
    }

    function getProcessId() external view returns (uint256) {
        return _idProcess;
    }

    function setNewProcess(address company_, uint256 IDProcess_, string memory ProductClass_, string memory name_, uint256 NumberProcess_) public onlyOwner returns  (bool) {
		_setNewProcess(company_, IDProcess_, ProductClass_, name_, NumberProcess_);
		return true;
	}
	function _setNewProcess(address company_, uint256 IDProcess_, string memory ProductClass_,string memory name_, uint256 NumberProcess_) internal  returns  (bool) {
		process[IDProcess_]._company = company_;
		process[IDProcess_]._ProductClass = ProductClass_;
		process[IDProcess_]._name = name_;
		process[IDProcess_]._NumberProcess = NumberProcess_;
        process[IDProcess_]._ActualProcess = 1;
		process[IDProcess_]._IsFinished = false;
		return true;
	}
	
	function getProcess(uint256 IDProcess_) external view returns (address company_, uint256 IDProcess, string memory ProductClass_,string memory name_, uint256 NumberProcess_, uint256 Actualprocess_, bool IsFinished_){
	    company_ = process[IDProcess_]._company ;
		ProductClass_ = process[IDProcess_]._ProductClass ;
		name_ = process[IDProcess_]._name ;
		NumberProcess_ = process[IDProcess_]._NumberProcess;
        Actualprocess_ = process[IDProcess_]._ActualProcess;
		IsFinished_ = process[IDProcess_]._IsFinished ;
		IDProcess = IDProcess_;
	}

    function setnewProductionPhase(uint256 IDProcess_, uint256 Actualprocess_) public onlyOwner returns (bool) {
        _setnewProductionPhase(IDProcess_, Actualprocess_);
        return true;
    }

    function _setnewProductionPhase(uint256 IDProcess_, uint256 Actualprocess_) internal returns (bool) {
        process[IDProcess_]._ActualProcess = Actualprocess_;
        return true;
    }

}