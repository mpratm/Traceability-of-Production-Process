console.log("start index.js");

var countIDProcess='x';

var gasMain = 672197;

var addressProviderMain;

var web3ContractMain;

var contractMain = '';

var abiMain = [{""}];

var tokenIDProcess='';

var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

async function start() {
    console.log("in start()");
    const accounts = await web3.eth.getAccounts();
    addressProviderMain = accounts[0];

    web3ContractMain = new web3.eth.Contract(abiMain, contractMain, {
        gasPrice: gasMain,
        from: addressProviderMain
    });

    document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br>------<br>Version web3: " + web3.version;

    setConfiguration();
	
}

start();

function setClear(){
    document.getElementById('IDCompany').innerHTML='';
    document.getElementById('IDProductClass').innerHTML='';
    document.getElementById('IDName').innerHTML='';
    document.getElementById('IDNumberProcess').innerHTML='';
    document.getElementById('IDActualProcess').innerHTML='';
    document.getElementById('IDIsFinished').innerHTML='';
}

function getProcess()
{
	console.log("in getProcess()");
	web3ContractDapp.options.gas = gasDapp;
	web3ContractDapp.options.gasPrice = '10000000000000';
	document.getElementById('textarea').innerHTML = 'Cuenta Gestion ------ Company - IDProcess --- Product Class - Name - Number of Phases -- State';
    //document.getElementById('availableDron').innerHTML = 'IDProcess - Nombre --- Altura Maxima - Altura Minima - Pesticida ---- Estado';

	getCountDron();
	console.log("in getProcess() - countIdProcess: "+countIDProcess);
	
	for(var i = 1; i < countIDProcess; i++){
		web3ContractDapp.methods.getProcess(i).call(function (error, result) {
		if (!error) {//address company_ 0,  uint256 idDron 1, uint256 altitudeMax_ 2, uint256 altitudeMin_ 3, uint256 costValue_ 4,string memory pesticide_ 5, string memory name_ 6, bool isActive_ 7
			   document.getElementById('textarea').innerHTML = document.getElementById('textarea').innerHTML + "<br>..." + result[0].slice(32,43)+" ------- "+result[1]+" ---- "+result[6]+" ------------ "+result[2]+" ----------- "+result[3]+" ---------------- "+result[4]+" ------------ "+result[5]+" --- "+result[7];
			   //if(result[7]==false){
				   //document.getElementById('availableDron').innerHTML = document.getElementById('availableDron').innerHTML + "<br>" +result[1]+" ----- "+result[6]+" ---------- "+result[2]+" ------------- "+result[3]+" ---------- "+result[5]+" -- Disponible";
			   //}
			   
		 } else {
                document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br>Error respuesta metodo getDron - contractDapp: " + error;
            }
         });		
	}
}

//inicio metodos del ERC721Dron

async function setRecordDron(nameDron, altitudeMinDron, altitudeMaxDron, pesticideDron){
    //function setRecordDron(nameDron, altitudeMinDron, altitudeMaxDron, pesticideDron){
        console.log('setRecordDron()');
        setCountDron();
        getCountDron();
        console.log('setRecordDron - countIdDron:'+countIdDron)
        await setMintDron(countIdDron);
        setDron(nameDron, altitudeMinDron, altitudeMaxDron, pesticideDron);	
    }
    
    function getCountDron(){
        console.log('getCountDron()');
        web3ContractDapp.options.gas = gasDapp;
        web3ContractDapp.options.gasPrice = '10000000000000';
        
        var	data = web3ContractDapp.methods.getCountDron().call(function (error, result) {
            if (!error) {
                  document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>------<br>Respuesta metodo getCountDron - contractDapp: " + result;
                  countIdDron =  result;//document.getElementById('IDsdron').innerHTML = result;
                } else {
                    document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>------<br>Error respuesta getCountDron - contractDapp: " + error;
                }
             });
        console.log('getCountDron()-countIdDron: '+countIdDron);
    }
    
    function setCountDron(){
        console.log('setCountDron()');
        web3ContractDapp.options.gas = gasDapp;
        web3ContractDapp.options.gasPrice = '10000000000000';
        
        web3ContractDapp.methods.setCountDron().send(function (error, result) {
            if (!error) {
                   document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>Respuesta hash metodo setCountDron - contractDapp: " + result;
                  //getCountDron();
                } else {
                    document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>Error hash respuesta setCountDron - contractDapp: " + error;
                }
             });
    }
    
    function setDron(nameDron, altitudeMinDron, altitudeMaxDron, pesticideDron){
        console.log('setDron() - countIdDron: '+countIdDron);
        var date = new Date();
        web3ContractDapp.options.gas = gasDapp;
        web3ContractDapp.options.gasPrice = '10000000000000';
        var company_ = addressProviderOperatorDron;
        var idDron_ = countIdDron;
        var altitudeMax_ = altitudeMaxDron;
        var altitudeMin_ = altitudeMinDron;
        var costValue_ = date.getSeconds() + 1;//Asignacion aleatorio del costo
        var pesticide_ = pesticideDron;
        var name_ = nameDron;
        console.log('setDron() - costValue_: '+costValue_);
        web3ContractDapp.methods.setDron(company_, parseInt(idDron_), parseInt(altitudeMax_), parseInt(altitudeMin_), parseInt(costValue_), pesticide_, name_).send(function (error, result) {
            if (!error) {
                   document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>Respuesta hash metodo setDron - contractDapp: " + result;
                  getEventSetDronOk(idDron_, altitudeMax_, altitudeMin_, costValue_)
                } else {
                    document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>Error respuesta setDron - contractDapp: " + error;
                }
             });
    }
    
    function setMintDron(data){
        console.log('in setMintDron() -data: '+data);
        web3ContractERC721Dron.options.gas = gasDapp;
        web3ContractERC721Dron.options.gasPrice = '10000000000000';
        
        var to_ = addressProviderOwnerDron;
        var tokenId_ = data ;
        
        web3ContractERC721Dron.methods.setMint(to_, parseInt(tokenId_)).send(function (error, result) {
            if (!error) {
                   document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>Respuesta hash metodo setMint - ContractERC721Dron: " + result +" - tokenId: "+tokenId_;
                   getEventSetMintDron(to_, tokenId_) ;
                   
                } else {
                    document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>Error respuesta hash metodo setMint - ContractERC721Dron: " + error;
                }
             });
    }
    
    function setTransferFromDron(data){
        console.log('in setTransferFromDron()'+data);
        web3ContractERC721Dron.options.gas = gasDapp;
        web3ContractERC721Dron.options.gasPrice = '10000000000000';
        var from = addressProviderOwnerDron;
        var to = addressProviderOperatorDron ;
        var tokenId = data;
        
        web3ContractERC721Dron.methods.transferFrom(from, to, tokenId).send(function (error, result) {
            if (!error) {
                   document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>Respuesta hash metodo transferFrom - ContractERC721Dron: " + result;
                   setApprovalForAllDron();
                   setAproveDron(tokenId);
                } else {
                    document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>Error respuesta hash metodo transferFrom - ContractERC721Dron: " + error;
                }
             });
    }
    
    function setApprovalForAllDron(){
        console.log('in setApprovalForAllDron()');
        web3ContractERC721Dron.options.gas = gasDapp;
        web3ContractERC721Dron.options.gasPrice = '10000000000000';
        var operator =  addressProviderOperatorDron;
        var approved = true; 
        
        web3ContractERC721Dron.methods.setApprovalForAll(operator, approved).send(function (error, result) {
            if (!error) {
                   document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>Respuesta hash metodo setApprovalForAll - ContractERC721Dron: " + result;
                   getEventApprovalForAllDron(operator, approved) ;
                } else {
                    document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>Error respuesta hash setApprovalForAll transferFrom - ContractERC721Dron: " + error;
                }
             });
    }
    
    function setAproveDron(data){
        console.log('in setAproveDron() - '+data);
        web3ContractERC721Dron.options.gas = gasDapp;
        web3ContractERC721Dron.options.gasPrice = '10000000000000';
        var to = addressProviderOwnerDron;
        var tokenId = data; 
        
        web3ContractERC721Dron = new web3.eth.Contract(abiERC721, contractERC721Dron, { from: addressProviderOperatorDron});
        web3ContractERC721Dron.methods.approve(to, tokenId).send(function (error, result) {
            if (!error) {
                   document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>Respuesta hash metodo approve - ContractERC721Dron: " + result;
                   setIsApprovedForAllDron();
                } else {
                    document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>Error respuesta hash approve transferFrom - ContractERC721Dron: " + error;
                }
             });
        web3ContractERC721Dron = new web3.eth.Contract(abiERC721, contractERC721Dron, { from: addressProviderOwnerDron});
        document.getElementById('IDsDron').innerHTML = 'Registro Exitoso'
    }
    
    function setIsApprovedForAllDron(){
        console.log('in setIsApprovedForAllDron()');
        web3ContractERC721Dron.options.gas = gasDapp;
        web3ContractERC721Dron.options.gasPrice = '10000000000000';
        var owner = addressProviderOwnerDron;//addressProviderOwner ;
        var operator = addressProviderOperatorDron;// addressProviderOperator;
        
        web3ContractERC721Dron.methods.isApprovedForAll(owner, operator).call(function (error, result) {
            if (!error) {
                   document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>Respuesta hash metodo isApprovedForAll - ContractERC721Dron: " + result;
             } else {
                    document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>Error respuesta hash metodo isApprovedForAll - ContractERC721Dron: " + error;
                }
             });
    }
    
    //Eventos
    
    function getEventSetDronOk(idDron_, altitudeMax_, altitudeMin_, costValue_) {
        console.log("in getEventSetDronOk()");
        web3ContractDapp.getPastEvents('eventSetDronOk', {
            filter: {
                a: idDron_,
                b: altitudeMax_,
                c: altitudeMin_,
                d: costValue_
            },
            fromBlock: 0,
            toBlock: 'latest'
        }, function (error, events) {
            if (events.length == 0) {
                console.log(events[0]);
                document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>Respuesta evento eventSetDronOk de setDron - contractDapp - idDron_: "+events[0].returnValues.idDron_ +" - altitudeMix_ "+events[0].returnValues.altitudeMix_+" - altitudeMax_ "+events[0].returnValues.altitudeMax_;
            } else {
                console.log(events[events.length - 1]);
                document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>Respuesta evento eventSetDronOk de setDron - contractDapp - idDron_: "+events[events.length - 1].returnValues.idDron_ +" - altitudeMin_ "+events[events.length - 1].returnValues.altitudeMin_+" - altitudeMax_ "+events[events.length - 1].returnValues.altitudeMax_;
            };
        })
        .then(function (events) {
            console.log('Eventos: '+events.length)
         });
         getDron();
    }
    
    function getEventSetMintDron(to_, tokenId_) {
        console.log("in getEventSetMintDron()");
        web3ContractERC721Dron.getPastEvents('Transfer', {
            filter: {
                a: to_,
                b: tokenId_
            },
            fromBlock: 0,
            toBlock: 'latest'
        }, function (error, events) {
            if (events.length == 0) {
                console.log(events[0]);
                 document.getElementById('tokenIdDron').innerHTML = events[0].returnValues.tokenId 
                document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>Respuesta evento Transfer de setMint - ContractERC721Dron - to: "+events[0].returnValues.to+" - tokenId: "+events[0].returnValues.tokenId;
                setTransferFromDron(events[0].returnValues.tokenId);
            } else {
                console.log(events[events.length - 1]);
                document.getElementById('tokenIdDron').innerHTML = events[events.length - 1].returnValues.tokenId;
                document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>Respuesta evento Transfer de setMint - ContractERC721Dron - to: "+events[events.length - 1].returnValues.to+" - tokenId: "+events[events.length - 1].returnValues.tokenId;
                setTransferFromDron(events[events.length - 1].returnValues.tokenId);
            };
        })
        .then(function (events) {
            console.log('Eventos: '+events.length)
         });
    }
    
    function getEventApprovalForAllDron(operator, approved){
        console.log("in getEventApprovalForAllDron()");
        web3ContractERC721Dron.getPastEvents('ApprovalForAll', {
            filter: {
                a: operator,
                b: approved
            },
            fromBlock: 0,
            toBlock: 'latest'
        }, function (error, events) {
            if (events.length == 0) {
                console.log(events[0]);
                document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>Respuesta evento ApprovalForAll de setApprovalForAll - ContractERC721Dron - owner: "+events[0].returnValues.owner+" - approved: "+events[0].returnValues.approved;
            } else {
                console.log(events[events.length - 1]);
                document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>Respuesta evento ApprovalForAll de setApprovalForAll - ContractERC721Dron - owner: "+events[events.length - 1].returnValues.owner+" - approved: "+events[events.length - 1].returnValues.approved;
            };
        })
        .then(function (events) {
            console.log('Eventos: '+events.length)
         });
    }
    
    function getEventSetAproveDron(to, tokenId){
        console.log("in getEventSetAproveDron()");
        web3ContractERC721Dron.getPastEvents('_approve', {
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
                document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>------<br>Respuesta evento _approve de approve - ContractERC721Dron - to: "+events[0].returnValues.to+" - tokenId: "+events[0].returnValues.tokenId;
                tokenIdDron='';
            } else {
                console.log(events[events.length - 1]);
                document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + "<br><br>------<br>Respuesta evento _approve de approve - ContractERC721Dron - to: "+events[events.length - 1].returnValues.to+" - tokenId: "+events[events.length - 1].returnValues.tokenId;
                tokenIdDron='';
            };
        })
        .then(function (events) {
            console.log(events)
         });
    }
    
    //fin metodos del ERC721Dron