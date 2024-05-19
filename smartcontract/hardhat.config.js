//https://eth-sepolia.g.alchemy.com/v2/cRrxLr2nx5c6_hoRkIrZPTkVP0JokIlV

const { solidity } = require("ethereum-waffle");

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks:{
    sepolia:{
      url: 'https://eth-sepolia.g.alchemy.com/v2/cRrxLr2nx5c6_hoRkIrZPTkVP0JokIlV',
      accounts: [`8d31f7c4684daf08bdb1df7da58aab1247936448aa47c91956797cc41f11a17f`]
    }
  }
}