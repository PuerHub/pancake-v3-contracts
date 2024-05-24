import { ethers, run } from "hardhat";

async function main() {
    // Remember to update the init code hash in SC for different chains before deploying
    const [owner] = await ethers.getSigners()
    console.log("Deploying contracts with the account:", owner.address);


    /** V2 Factory */
    console.log("Deploying V2 Factory...");

    const WNative = await ethers.getContractFactory("PancakeFactory");

    const wnative = await WNative.deploy(owner.address);

    await wnative.waitForDeployment();

    const address = await wnative.getAddress();

    console.log("PancakeFactory V2 deployed to:", address);

    await new Promise((resolve) => setTimeout(resolve, 10000));

    console.log("Verify on explorer...");
    await run("verify:verify", {
        address: address,
        constructorArguments: [owner.address],
    });
    console.log("PancakeFactory V2 verified on explorer");
}

main().then(() => process.exit(0)).catch((error) => {
    console.error(error);
    process.exit(1);
});