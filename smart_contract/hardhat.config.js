require("@nomiclabs/hardhat-waffle");

let keythereum = require("keythereum");
let datadir = "../blockchain/ministere/data";
let address = "0x51883d92adfc73eC0699d199C1F59B2BEF7Aca1b";
const password = "ministere";

let keyObject = keythereum.importFromFile(address, datadir);
let privateKey = keythereum.recover(password, keyObject);

module.exports = {
    solidity: {
        version: "0.8.13",
        settings: {
            optimizer: {
                enabled: true,
                runs: 800,
            },
            viaIR: true,
        },
    },
    networks: {
        ropsten: {
            url: "HTTP://127.0.0.1:8545",
            accounts: [privateKey.toString("hex")],
        },
    },
};
