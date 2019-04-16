const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const Blockchain = require('../blockchain');
const P2pServer = require('./psp-server');

const HTTP_PORT = process.env.HTTP_PORT || 3021;

const app = express();
const bc = new Blockchain();
const p2pServer = new P2pServer(bc);

app.use(bodyParser.json());

app.use('/blocks', (req, res)=>{
   res.json(bc.chain)
});

app.use('/mine',(req,res)=>{
   const block = bc.addBlock(req.body.data);
   console.log(chalk.red(`New Block added : ${block.toString()}`));

   p2pServer.syncChains();

   res.redirect('/blocks');
});

app.listen(HTTP_PORT, () => console.log(`Listening on port ${HTTP_PORT}`));
p2pServer.listen();