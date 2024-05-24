import { verifyContract } from '@pancakeswap/common/verify'

async function main() {
  const networkName = network.name
  const LzEndpointContract = await import(`@pancakeswap/endpoint/deployments/${networkName}.json`)
  const lzEndpoint = LzEndpointContract.LzEndpoint;

  const deployedContracts = await import(`@pancakeswap/cake/deployments/${networkName}.json`)

  // Verify Cake
  console.log('Verify CakeOFT at:', deployedContracts.Tea)
  await verifyContract(deployedContracts.Tea, [lzEndpoint])
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
