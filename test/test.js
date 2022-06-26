const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TFFactory", function () {
  it("Should deploy a new contract and set the owner as msg sender", async function () {
    const TFFactory = await ethers.getContractFactory("TFFactory");
    const tfFactory = await TFFactory.deploy();
    await tfFactory.deployed();

    const newFarm = await tfFactory.newFarm(
      "0x2D99ABD9008Dc933ff5c0CD271B88309593aB921",
      "0xCc48DEc2911bF16Cd4879fC5a249303F8D7e7952",
      "0xCc48DEc2911bF16Cd4879fC5a249303F8D7e7952",
      hre.ethers.utils.parseEther("1000"),
      3,
      7,
      1,
      1
    );
    await newFarm.wait();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
