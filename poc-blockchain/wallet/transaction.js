const ChainUtil = require('../chain-util');
const dataDocument = 'QmTQdD48EJG1CiMcsFtbq9sq41hwfwVvXNPuaFjWGJxkeX';
class Transaction {
    constructor(){
        this.id = ChainUtil.id();
        this.input = null;
        this.outputs = [];
        this.data = dataDocument;
    }

    static newTransaction(senderWallet, recipient, amount){
        const transaction = new this()
    }
}