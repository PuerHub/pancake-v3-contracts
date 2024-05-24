import { verifyContract } from '@pancakeswap/common/verify'

async function main() {
  const networkName = network.name
  const deployedContracts = await import(`@pancakeswap/endpoint/deployments/${networkName}.json`)

  // Verify Endpoint
  console.log('Verify Endpoint at:', deployedContracts.LzEndpoint)
  await verifyContract(deployedContracts.LzEndpoint, [526])
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
