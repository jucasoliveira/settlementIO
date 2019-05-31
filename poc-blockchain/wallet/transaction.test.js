/**
 * @jest-environment node
 */
const Transaction = require('./transaction');
const Wallet = require('./index');

describe('Transaction', ()=>{
    let transaction, wallet, recipient, amount;

    beforeEach(()=>{
        wallet = new Wallet();
        amount = 50;
        recipient = 'r3c1p13nt';
        transaction = Transaction.newTransaction(wallet,recipient,amount)
    });

    it('retrieve the deducted amount', ()=>{
        expect(transaction.outputs.find(output => output.address === wallet.publicKey).amount)
            .toEqual(wallet.balance - amount);
    });

    it('retrieve the added amount', ()=>{
        expect(transaction.outputs.find(output => output.address === recipient).amount)
            .toEqual(amount);
    });

    it('inputs the balance of the wallet', ()=>{
        expect(transaction.input.amount).toEqual(wallet.balance)
    });

    it('validate a valid transaction', ()=>{
        expect(Transaction.verifyTransaction(transaction)).toBe(true)
    });

    it('invalidate a corrupt transaction', ()=>{
        transaction.outputs[0].amount = 50000;
        expect(Transaction.verifyTransaction(transaction)).toBe(false)
    });

    describe('amount that exceeds the balance', ()=>{
        beforeEach(()=>{
            amount = 50000;
            transaction = Transaction.newTransaction(wallet,recipient,amount)
        });
        it('does not create the transaction', ()=>{
            expect(transaction).toEqual(undefined);
        })

    })

    describe('and updating a transaction', ()=>{

        let nextAmount, nextRecipient;

        beforeEach(() => {
            nextAmount = 20;
            nextRecipient = 'n3xt-4ddr355';
            transaction = transaction.update(wallet, nextRecipient, nextAmount);
        });

        it(`subtracts the next amount from the sender's output`, () => {
            expect(transaction.outputs.find(output => output.address === wallet.publicKey).amount)
                .toEqual(wallet.balance - amount - nextAmount);
        });

        it('outputs an amount for the next recipient', () => {
            expect(transaction.outputs.find(output => output.address === nextRecipient).amount)
                .toEqual(nextAmount);
        });

    })
});