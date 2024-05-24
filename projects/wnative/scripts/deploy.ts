import { ethers, run } from "hardhat";

async function main() {
    // Remember to update the init code hash in SC for different chains before deploying



    /** WNative */
    console.log("Deploying WNative...");

    const WNative = await ethers.getContractFactory("WPUER9");

    const wnative = await WNative.deploy();

    const address = wnative.address;

    console.log("WNative deployed to:", address);

    await new Promise((resolve) => setTimeout(resolve, 10000));

    console.log("Verify on explorer...");
    await run("verify:verify", {
        address: address
    });
    console.log("WNative verified on explorer");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
