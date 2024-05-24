import { ethers, network } from 'hardhat'
import fs from 'fs'

async function main() {
  // Remember to update the init code hash in SC for different chains before deploying

  const networkName = network.name

  /** Endpoint */
  console.log('Deploying Endpoint...')

  const Endpoint = await ethers.getContractFactory('Endpoint')

  const endpoint = await Endpoint.deploy(526)

  const address = endpoint.address

  console.log('Endpoint deployed to:', address)

  const contracts = {
    LzEndpoint: address
  }

  fs.writeFileSync(`./deployments/${networkName}.json`, JSON.stringify(contracts, null, 2))
  console.log('Contracts deployed and saved to deployments folder')
}

main().then(() => process.exit(0)).catch((error) => {
  console.error(error)
  process.exit(1)
})
