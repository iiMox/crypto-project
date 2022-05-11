import Web3 from "web3";

import { contractABI, contractAddress } from "./constants";

const web3M = new Web3(
    new Web3.providers.HttpProvider("http://127.0.0.1:8545")
);
const web3U = new Web3(
    new Web3.providers.HttpProvider("http://127.0.0.1:8546")
);
const web3D = new Web3(
    new Web3.providers.HttpProvider("http://127.0.0.1:8547")
);

const certifsM = new web3M.eth.Contract(contractABI, contractAddress);

const certifsU = new web3U.eth.Contract(contractABI, contractAddress);

const certifsD = new web3D.eth.Contract(contractABI, contractAddress);

export { certifsM, certifsU, certifsD };
