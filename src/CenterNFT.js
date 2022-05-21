import { useState } from "react";
import NFTwikRut from './WikRut.json';
import {
    chakra, Box, Flex, useColorModeValue, HStack, Button,
    useDisclosure, VStack, IconButton, CloseButton, Link, Image
  } from "@chakra-ui/react";

import { ethers, BigNumber} from 'ethers';

const NFTAddresswikRut = process.env.REACT_APP_ADDRESS;

const CenterNFTMint = ({accounts, setAccounts}) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                NFTAddresswikRut,
                NFTwikRut.abi,
                signer
            )

            try{
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
                })
                console.log("Response : ", response)
            } catch (err) {
                console.log("Error : ", err)
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount-1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 3) return;
        setMintAmount(mintAmount+1);
    };

    return (
        <div>
            <h1>WikRut NFT</h1>
            <p>NFT Minting Market</p>
            
            {isConnected ? (
                <div>
                    <div>
                        <button class={'buttonIncDec'} onClick={handleDecrement}>-</button>
                        <input type="number" value={mintAmount}/>
                        <button class={'buttonIncDec'} width={'10px'} onClick={handleIncrement}>+</button>
                    </div>
                    <button class={'button-27'}  onClick={handleMint}>Mint Now</button>
                </div>
            ) : (
                <p>Connect to Start Minting</p>
            )}
            <Flex justify="space-between" align="center" padding="30px 30px">


            <a href="https://unstoppabledomains.com/" class="button">Domains</a>
            <a href="https://unstoppabledomains.com/learn" class="button">Learn</a>
            <a href="https://unstoppabledomains.com/developers" class="button">Build</a>
            <a href="https://unstoppabledomains.com/apps" class="button">Applications</a>

            </Flex>

            
        </div>
        
    )

}

export default CenterNFTMint;
