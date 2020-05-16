var HDWalletProvider = require("truffle-hdwallet-provider");
const infuraKey = "b1674fa834bb44f289ffc746f7390a8f";
const mnemonic = "near retire pigeon truth rocket defense injury come buffalo cup memory course";

module.exports = {
  networks: {

    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: '*',
      gas: 4712388,
      gasPrice: 100000000000,
    },

    truffle_dev: {
      host: "127.0.0.1",
      port: 8545,
      network_id: '*',
      gas: 6721975,
      gasPrice: 20000000000,
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`)
      },
      network_id: '4',
      gas: 4500000,
      gasPrice: 10000000000,
    }
  },
};