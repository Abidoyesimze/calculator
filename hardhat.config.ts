import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config({ path: './.env' });

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || "",  // Get RPC URL from .env
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],  // Get private key from .env
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || "",  // Get Etherscan API key from .env
  },
};

export default config;
