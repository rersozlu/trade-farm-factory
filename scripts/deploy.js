const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("deployer", deployer.address);
  const TFFactory = await hre.ethers.getContractFactory("TFFactory");
  const tfFactory = await TFFactory.deploy();
  await tfFactory.deployed();
  console.log("contract deployed to ", tfFactory.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
