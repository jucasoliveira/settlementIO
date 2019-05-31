/**
 * @jest-environment node
 */
const Wallet = require('./index');
const TransactionPool = require('./transaction-pool');


describe('Wallet', ()=>{
    let wallet , tp;

    beforeEach(() =>{
        wallet = new Wallet();
        tp = new TransactionPool()
    })

    describe('creating a transaction', () =>{
        let transaction , sendAmount, recipient;

        beforeEach(()=>{
            sendAmount = 50;
            recipient = 'r4ndn-4ddr355';
            transaction = wallet.createTransaction(recipient, sendAmount, tp);
        })

        describe('and doing some transaction', () =>{
            beforeEach(()=>{
                wallet.createTransaction(recipient, sendAmount, tp);
            })

            it('doubles the `sendamount` subtracted from the wallet balance', ()=>{
                expect(transaction.outputs.find(output => output.address === wallet.publicKey).amount)
                    .toEqual(wallet.balance - sendAmount * 2);
            })
            it('clones the `sendAmount` ouput for the recipient', ()=>{
                expect(transaction.outputs.filter(output => output.address === recipient).map(output => output.amount))
                    .toEqual([sendAmount,sendAmount])

            })
        })
    })
})
