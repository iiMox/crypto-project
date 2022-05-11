import Web3 from "web3";

import { contractABI, contractAddress } from "./constants";

const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8548"));
const certifs = new web3.eth.Contract(contractABI, contractAddress);

export { certifs };
