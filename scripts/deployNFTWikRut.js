const hre = require("hardhat");

async function main() {

  const NFTWikRut = await hre.ethers.getContractFactory("WikRut");
  const NFTwikRut = await NFTWikRut.deploy();

  await NFTwikRut.deployed();

  console.log("NFTwikRut deployed to:", NFTwikRut.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
