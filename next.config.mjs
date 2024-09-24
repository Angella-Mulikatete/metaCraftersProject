/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify:true,
    env:{
        CONTRACT_ADDRESS: "0x332C9D616aB41fC07ab71f9697cd032d43732E61",
        ABI:[
            {
            "inputs": [],
            "name": "readNum",
            "outputs": [
                {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
            },
            {
            "inputs": [
                {
                "internalType": "uint256",
                "name": "_num",
                "type": "uint256"
                }
            ],
            "name": "writeNum",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
            }
       ]
    },
};

export default nextConfig;
