require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      forking: {
        url: "https://api.avax-test.network/ext/bc/C/rpc",
      },
    },
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts: [process.env.ACCOUNT_KEY],
    },
    avax: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      accounts: [process.env.ACCOUNT_KEY],
    },
  },
};
