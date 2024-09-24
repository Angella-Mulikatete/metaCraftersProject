import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { vars } from "hardhat/config";

const ALCHEMY_API_KEY = vars.get("ALCHEMY_API_KEY");
const SEPOLIA_PRIVATE_KEY = vars.get("SEPOLIA_PRIVATE_KEY");

const config: HardhatUserConfig = {
  solidity: "0.8.27",
   networks: {
    // for testnet
     sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
  // etherscan: {
  //   // Use "123" as a placeholder, because Blockscout doesn't need a real API key, and Hardhat will complain if this property isn't set.
  //   apiKey: {
  //     "lisk-sepolia": "123",
  //   },
  //   customChains: [
  //     {
  //       network: "lisk-sepolia",
  //       chainId: 4202,
  //       urls: {
  //         apiURL: "https://sepolia-blockscout.lisk.com/api",
  //         browserURL: "https://sepolia-blockscout.lisk.com/",
  //       },
  //     },
  //   ],
  // },
  // sourcify: {
  //   enabled: false,
  // },
};

export default config;
//StorageModule#Storage - 0x332C9D616aB41fC07ab71f9697cd032d43732E61
