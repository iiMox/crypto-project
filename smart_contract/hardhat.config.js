require("@nomiclabs/hardhat-waffle");

let keythereum = require("keythereum");
let datadir = "../blockchain/ministere/data";
let address = "0xAcbC4F2e0ddBcFA4449955E8CfCad363FbB3c068";
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
