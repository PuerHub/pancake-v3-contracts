import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import "dotenv";

require('dotenv').config({ path: require('find-config')('.env') })

const config: HardhatUserConfig = {
  defaultNetwork: "PuerHub",
  solidity: {
    compilers: [
      {
        version: '0.5.16',
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
    ]
  },
  networks: {
    PuerHub: {
      url: "https://rpc.puerhub.com",
      chainId: 526,
      accounts: [process.env.KEY_PUERHUB!],
    },
  },
  etherscan: {
    apiKey: {
      PuerHub: 'abc',
    },
    customChains: [
      {
        network: "PuerHub",
        chainId: 526,
        urls: {
          apiURL: "https://bc.puerhub.com/api",
          browserURL: "https://bc.puerhub.com",
        }
      }
    ]
  },
  sourcify: {
    enabled: false
  }
};

export default config;
