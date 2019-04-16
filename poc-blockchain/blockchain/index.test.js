const Blockchain = require('.');
const Block = require('./block');

describe("Blockchain", () => {
    let bc, bc2;

    beforeEach(()=>{
        bc = new Blockchain();
        bc2 = new Blockchain();
    });

    it("start with genesis block", ()=>{
        expect(bc.chain[0]).toEqual(Block.genesis())
    });

    it('adds a new block', ()=>{
        const data = 'foo';
        bc.addBlock(data);
        expect(bc.chain[bc.chain.length-1].data).toEqual(data);
    })

    it('validate the chain', () =>{
        bc2.addBlock('foo');
        expect(bc.isValidChain(bc2.chain)).toBe(true);

    })

    it('invalidade chain', () => {
        bc2.chain[0].data = 'Bad data';
        expect(bc.isValidChain(bc2.chain)).toBe(false);
    });

    it('invalidade a corrupt chain', () => {
        bc2.addBlock('foo');
        bc2.chain[1].data = 'Not foo';
        expect(bc.isValidChain(bc2.chain)).toBe(false);
    });

    it("replaces the chain with a valid chain", ()=>{
        bc2.addBlock('goo');
        bc.replaceChain(bc2.chain);

        expect(bc.chain).toEqual(bc2.chain);
    })

    it("does not replaces the chain with a valid chain", ()=>{
        bc.addBlock('foo');
        bc.replaceChain(bc2.chain);

        expect(bc.chain).not.toEqual(bc2.chain);
    })

});