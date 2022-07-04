console.log("start index.js");

var countIDProcess='x';

var gasMain = 672197;

var addressProviderMain, addressProviderOwnerProcess, addressProviderOperatorProcess;

var web3ContractMain, web3ContractERC721Process;

var contractMain = '0x59Cb63b718a53E297624dD6C6fAB03Ce6f8229CE';

var contractERC721Process ='0x699281e4c5c73990B1a27a7aE319f427DBD103b4';

var abiMain = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "IDProcess_",
				"type": "uint256"
			}
		],
		"name": "getProcess",
		"outputs": [
			{
				"internalType": "address",
				"name": "company_",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "IDProcess",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ProductClass_",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name_",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "NumberProcess_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "Actualprocess_",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "IsFinished_",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getProcessId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "company_",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "IDProcess_",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ProductClass_",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name_",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "NumberProcess_",
				"type": "uint256"
			}
		],
		"name": "setNewProcess",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "setProcessId",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "IDProcess_",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "Actualprocess_",
				"type": "uint256"
			}
		],
		"name": "setnewProductionPhase",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

var abiERC721 = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name_",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol_",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

var tokenIDProcess='';

var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

async function start() {
    console.log("in start()");
    const accounts = await web3.eth.getAccounts();
    addressProviderMain = accounts[0];
    addressProviderOwnerProcess = accounts[1];
    addressProviderOperatorProcess = accounts[2];

    web3ContractERC721Process = new web3.eth.Contract(abiERC721, contractERC721Process, {
        gasPrice: gasMain,
        from: addressProviderOwnerProcess
    });

    web3ContractMain = new web3.eth.Contract(abiMain, contractMain, {
        gasPrice: gasMain,
        from: addressProviderMain
    });

    document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br>------<br>Web3 Version: " + web3.version;

    setConfiguration();
	
}

start();

function setConfiguration() {
    console.log('in setConfiguration()');
	//ERC721 Process contract configuration
	getConfigContractERC721Process();
	
	//Main contract configuration
	getConfigContractMain();
}

function getConfigContractMain(){
	getCountProcess();
}

function getConfigContractERC721Process(){
	web3ContractERC721Process.methods.name().call(function (error, result) {
    if (!error) {
		document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>------<br>Initial configuration for ERC721 Process - Token name: " + result;
        } else {
        document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>------<br>Inital Configuration Error for ERC721 Process - Token name: " + error;
        }
    });
	
	web3ContractERC721Process.methods.symbol().call(function (error, result) {
    if (!error) {
		document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br>Inital Configuration for ERC721 Process - Token symbol: " + result;
        } else {
        document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br>Initial Configuration Error for ERC721 Process - Token symbol: " + error;
        }
    });
}

function getProcess()
{
	console.log("in getProcess()");
	web3ContractMain.options.gas = gasDapp;
	web3ContractMain.options.gasPrice = '10000000000000';
	document.getElementById('textarea').innerHTML = 'Account ------ Company - IDProcess --- Product Class - Name - Number of Phases -- State';

	getCountProcess();
	console.log("in getProcess() - countIdProcess: "+countIDProcess);
	
	for(var i = 1; i < countIDProcess; i++){
		web3ContractMain.methods.getProcess(i).call(function (error, result) {
		if (!error) {
			   document.getElementById('textarea').innerHTML = document.getElementById('textarea').innerHTML + "<br>..." + result[0].slice(32,43)+" ------- "+result[1]+" ---- "+result[6]+" ------------ "+result[2]+" ----------- "+result[3]+" ---------------- "+result[4]+" ------------ "+result[5]+" --- "+result[7];   
		 } else {
                document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br>getProcess Error - contractMain: " + error;
            }
         });		
	}
}

//ERC721Process

async function setRecordProcess(company, id, class1, name, states){
        console.log('setRecordProcess()');
        setProcessId();
        getProcessId();
        console.log('setRecordProcess - countIdProcess:'+countIDProcess)
        await setMintProcess(countIDProcess);
        setProcess(company, id, class1, name, states);	
    }
    
    function getCountProcess(){
        console.log('getCountProcess()');
        web3ContractMain.options.gas = gasMain;
        web3ContractMain.options.gasPrice = '10000000000000';
        
        var	data = web3ContractDapp.methods.getCountProcess().call(function (error, result) {
            if (!error) {
                  document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>------<br>getCountProcess answer - contractMain: " + result;
                  countIdProcess =  result;
                } else {
                    document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>------<br>getCountProcess Error - contractMain: " + error;
                }
             });
        console.log('getCountProcess()-countIdProcess: '+countIDProcess);
    }
    
    function setCountProcess(){
        console.log('setCountDron()');
        web3ContractMain.options.gas = gasMain;
        web3ContractMain.options.gasPrice = '10000000000000';
        
        web3ContractMain.methods.setCountProcess().send(function (error, result) {
            if (!error) {
                   document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>setCountProcess answer - contractMain: " + result;
                } else {
                    document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>setCountProcess Error - contractMain: " + error;
                }
             });
    }
    
    function setProcess(company, id, class1, name, states){
        console.log('setProcess() - countIdProcess: '+countIdProcess);
        var date = new Date();
        web3ContractMain.options.gas = gasMain;
        web3ContractMain.options.gasPrice = '10000000000000';
        var company_ = addressProviderOperatorProcess;
        var IDProcess_ = id;
        var ProductClass_ = class1;
        var name_ = name;
        var costV_ = date.getSeconds() + 1;
        var NumberProcess_ = states;
        console.log('setProcess() - costV_: '+costV_);
        web3ContractMain.methods.setNewProcess(company_, parseInt(IDProcess_), parseInt(ProductClass_), parseInt(name_), parseInt(costV_), NumberProcess_).send(function (error, result) {
            if (!error) {
                   document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>setProcess answer - contractMain: " + result;
                } else {
                    document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>setProcess Error - contractMain: " + error;
                }
             });
    }

    function setProcessNewPhase(id, actualprocess ){
        console.log('setProcess() - countIdProcess: '+countIdProcess);
        var date = new Date();
        web3ContractMain.options.gas = gasMain;
        web3ContractMain.options.gasPrice = '10000000000000';
        //var company_ = addressProviderOperatorProcess;
        var IDProcess_ = id;
        var Actualprocess_ = actualprocess;
        var costV_ = date.getSeconds() + 1;
        console.log('setProcess() - costV_: '+costV_);
        web3ContractMain.methods.setnewProductionPhase(parseInt(IDProcess_), parseInt(Actualprocess_)).send(function (error, result) {
            if (!error) {
                   document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>setProcess answer - contractMain: " + result;
                } else {
                    document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>setProcess Error - contractMain: " + error;
                }
             });
    }
    
    function setMintProcess(data){
        console.log('in setMintProcess() -data: '+data);
        web3ContractERC721Process.options.gas = gasMain;
        web3ContractERC721Process.options.gasPrice = '10000000000000';
        
        var to_ = addressProviderOwnerProcess;
        var tokenId_ = data ;
        
        web3ContractERC721Process.methods.setMint(to_, parseInt(tokenId_)).send(function (error, result) {
            if (!error) {
                   document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>setMint answer - ContractERC721Process: " + result +" - tokenId: "+tokenId_;
                   getEventSetMintProcess(to_, tokenId_) ;
                   
                } else {
                    document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>setMint Error - ContractERC721Process: " + error;
                }
             });
    }
    
    function setTransferFromProcess(data){
        console.log('in setTransferFromProcess()'+data);
        web3ContractERC721Process.options.gas = gasMain;
        web3ContractERC721Process.options.gasPrice = '10000000000000';
        var from = addressProviderOwnerProcess;
        var to = addressProviderOperatorProcess;
        var tokenId = data;
        
        web3ContractERC721Process.methods.transferFrom(from, to, tokenId).send(function (error, result) {
            if (!error) {
                   document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>settransferFromProcess answer - ContractERC721Process: " + result;
                   setApprovalForAllProcess();
                   setAproveProcess(tokenId);
                } else {
                    document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>setTransferFromProcess Error - ContractERC721Process: " + error;
                }
             });
    }
    
    function setApprovalForAllProcess(){
        console.log('in setApprovalForAllProcess()');
        web3ContractERC721Process.options.gas = gasMain;
        web3ContractERC721Process.options.gasPrice = '10000000000000';
        var operator =  addressProviderOperatorProcess;
        var approved = true; 
        
        web3ContractERC721Process.methods.setApprovalForAll(operator, approved).send(function (error, result) {
            if (!error) {
                   document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>setApprovalForAllProcess answer - ContractERC721Process: " + result;
                   getEventApprovalForAllProcess(operator, approved) ;
                } else {
                    document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>setApprovalForAllProcess Error - ContractERC721Process: " + error;
                }
             });
    }
    
    function setAproveProcess(data){
        console.log('in setAproveProcess() - '+data);
        web3ContractERC721Process.options.gas = gasMain;
        web3ContractERC721Process.options.gasPrice = '10000000000000';
        var to = addressProviderOwnerProcess;
        var tokenId = data; 
        
        web3ContractERC721Process = new web3.eth.Contract(abiERC721, contractERC721Process, { from: addressProviderOperatorProcess});
        web3ContractERC721Process.methods.approve(to, tokenId).send(function (error, result) {
            if (!error) {
                   document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>setAproveProcess answer - ContractERC721Process: " + result;
                   setIsApprovedForAllProcess();
                } else {
                    document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>setAproveProcess Error - ContractERC721Process: " + error;
                }
             });
        web3ContractERC721Process = new web3.eth.Contract(abiERC721, contractERC721Process, { from: addressProviderOwnerProcess});
        document.getElementById('IDsProcess').innerHTML = 'Registro Exitoso'
    }
    
    function setIsApprovedForAllProcess(){
        console.log('in setIsApprovedForAllProcess()');
        web3ContractERC721Process.options.gas = gasMain;
        web3ContractERC721Process.options.gasPrice = '10000000000000';
        var owner = addressProviderOwnerProcess;
        var operator = addressProviderOperatorProcess;
        
        web3ContractERC721Process.methods.isApprovedForAll(owner, operator).call(function (error, result) {
            if (!error) {
                   document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>setIsApprovedForAllProcess answer - ContractERC721Process: " + result;
             } else {
                    document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>setIsApprovedForAllProcess Error - ContractERC721Process: " + error;
                }
             });
    }
    
    //Events
    
    function getEventSetMintProcess(to_, tokenId_) {
        console.log("in getEventSetMintProcess()");
        web3ContractERC721Process.getPastEvents('Transfer', {
            filter: {
                a: to_,
                b: tokenId_
            },
            fromBlock: 0,
            toBlock: 'latest'
        }, function (error, events) {
            if (events.length == 0) {
                console.log(events[0]);
                 document.getElementById('tokenIDProcess').innerHTML = events[0].returnValues.tokenId 
                document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>setMint answer - ContractERC721Process - to: "+events[0].returnValues.to+" - tokenId: "+events[0].returnValues.tokenId;
                setTransferFromProcess(events[0].returnValues.tokenId);
            } else {
                console.log(events[events.length - 1]);
                document.getElementById('tokenIDProcess').innerHTML = events[events.length - 1].returnValues.tokenId;
                document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>setMint answer - ContractERC721Dron - to: "+events[events.length - 1].returnValues.to+" - tokenId: "+events[events.length - 1].returnValues.tokenId;
                setTransferFromProcess(events[events.length - 1].returnValues.tokenId);
            };
        })
        .then(function (events) {
            console.log('Events: '+events.length)
         });
    }
    
    function getEventApprovalForAllProcess(operator, approved){
        console.log("in getEventApprovalForAllProcess()");
        web3ContractERC721Process.getPastEvents('ApprovalForAll', {
            filter: {
                a: operator,
                b: approved
            },
            fromBlock: 0,
            toBlock: 'latest'
        }, function (error, events) {
            if (events.length == 0) {
                console.log(events[0]);
                document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>setApprovalForAll answer - ContractERC721Process - owner: "+events[0].returnValues.owner+" - approved: "+events[0].returnValues.approved;
            } else {
                console.log(events[events.length - 1]);
                document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>setApprovalForAll answer - ContractERC721Process - owner: "+events[events.length - 1].returnValues.owner+" - approved: "+events[events.length - 1].returnValues.approved;
            };
        })
        .then(function (events) {
            console.log('Events: '+events.length)
         });
    }
    
    function getEventSetAproveProcess(to, tokenId){
        console.log("in getEventSetAproveProcess()");
        web3ContractERC721Process.getPastEvents('_approve', {
            filter: {
                a: to,
                b: tokenId
            },
            fromBlock: 0,
            toBlock: 'latest'
        }, function (error, events) {
            var _r = '';
            if (events.length == 0) {
                console.log(events[0]);
                document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>------<br>approve answer - ContractERC721Process - to: "+events[0].returnValues.to+" - tokenId: "+events[0].returnValues.tokenId;
                tokenIDProcess='';
            } else {
                console.log(events[events.length - 1]);
                document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>------<br>approve answer - ContractERC721Process - to: "+events[events.length - 1].returnValues.to+" - tokenId: "+events[events.length - 1].returnValues.tokenId;
                tokenIDProcess='';
            };
        })
        .then(function (events) {
            console.log(events)
         });
    }
    
    //ERC721Process