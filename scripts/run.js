const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("deployer", deployer.address);
  const TFFactory = await hre.ethers.getContractFactory("TFFactory");
  const tfFactory = await TFFactory.deploy();
  await tfFactory.deployed();
  console.log("contract deployed to ", tfFactory.address);
  const newFarm = await tfFactory.newFarm(
    "0x2D99ABD9008Dc933ff5c0CD271B88309593aB921",
    "0xCc48DEc2911bF16Cd4879fC5a249303F8D7e7952",
    "0xCc48DEc2911bF16Cd4879fC5a249303F8D7e7952",
    hre.ethers.utils.parseEther("1000"),
    3,
    7,
    100,
    100
  );
  await newFarm.wait();
  console.log(newFarm);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
