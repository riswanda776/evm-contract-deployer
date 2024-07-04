const hre = require("hardhat");

async function main() {
  const Token = await hre.ethers.getContractFactory("Token");
  const token = await Token.deploy();

  console.log("Deploying Contract...");
  await token.waitForDeployment();

  const contractAddress = await token.getAddress();

  if (process.env.EXPLORER) {
    console.log("Contract deployed to:", `${process.env.EXPLORER}/address/${contractAddress}`);
  } else {
    console.log("Contract deployed to:", contractAddress);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});