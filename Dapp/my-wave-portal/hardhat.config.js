require("@nomicfoundation/hardhat-toolbox");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

for (const account of accounts) {
  console.log(account.address);
}
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
* @type import('hardhat/config').HardhatUserConfig
*/
module.exports = {
solidity: "0.8.17",
networks: {
goerli: {
  url: "https://skilled-methodical-flower.ethereum-goerli.discover.quiknode.pro/d379c010ccbe90cf0dd06a850f81cfc680ef8d5b/",
  accounts: ["9fdb9152cfb34bf5d8563de955e394f30d51fb4d4a5bc84954741b9f41cec74c"]
},
},
};
