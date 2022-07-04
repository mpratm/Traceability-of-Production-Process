const DAPP = artifacts.require("main");

contract("main", accounts => {
	it("Add the constructor with 1 data", () => 
		DAPP.deployed()
			.then(instance => instance.getProcessId.call({from: "0x0e596199ea5c6d3cbc713183e7514be022a19385"}))
			.then(getProcessId => {
				assert.equal(
					getProcessId.valueOf(),
					1,
					"The constructor don't add with 1 data"
					);
    }));
	
	it("Increment the counter of process and returns true", () => 
		DAPP.deployed()
			.then(instance => instance.getProcessId.call({from: "0x0e596199ea5c6d3cbc713183e7514be022a19385"}))
			.then(getProcessId => {
				assert.equal(
					getProcessId,
					true,
					"Not increment the counter and returns true"
					);
    }));
	
	it("Add a process and returns true", () => 
		DAPP.deployed()
			.then(instance => instance.setNewProcess.call(accounts[0], 1, "Machine", "Machine A", 5))
			.then(setNewProcess => {
				assert.equal(
					setNewProcess,
					true,
					"We didn't add the process"
					);
    }));

	it("Change the process phase and return true", () => 
		DAPP.deployed()
			.then(instance => instance.setNewProductionPhase.call(1, 2))
			.then(setNewProductionPhase => {
				assert.equal(
					setNewProductionPhase,
					true,
					"We didn't change the process phase"
					);
    }));

})