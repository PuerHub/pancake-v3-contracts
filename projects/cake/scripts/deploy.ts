import { ethers, network } from 'hardhat'
import fs from 'fs'

async function main() {
    // Remember to update the init code hash in SC for different chains before deploying

    const networkName = network.name
    const LzEndpointContract = await import(`@pancakeswap/endpoint/deployments/${networkName}.json`)
    const lzEndpoint = LzEndpointContract.LzEndpoint;
    console.log("LzEndpoint deployed to:", lzEndpoint);

    /** Cake */
    console.log("Deploying Tea...");

    const Cake = await ethers.getContractFactory("TeaOFT");

    const cake = await Cake.deploy(lzEndpoint);

    const address = cake.address;

    console.log("Tea deployed to:", address);

    const contracts = {
        Tea: address
    }

    fs.writeFileSync(`./deployments/${networkName}.json`, JSON.stringify(contracts, null, 2))
}

main().then(() => process.exit(0)).catch((error) => {
    console.error(error);
    process.exit(1);
});
