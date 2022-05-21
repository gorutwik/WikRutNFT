import React, { useState } from "react";
import {
    chakra, Box, Flex, useColorModeValue, HStack, Button,
    useDisclosure, VStack, IconButton, CloseButton, Link, Image
  } from "@chakra-ui/react";

import UAuth from '@uauth/js'
import udLogo from './assets/social-media-icons/udLogo.png'
import metaLogo from './assets/social-media-icons/MetaMask_Fox.png'



const LoginOptions = ({accounts, setAccounts}) => {
    
    const [userName, setUserName] = useState();
    const isConnected = Boolean(accounts[0]);
    async function UDSConnect() {
        
        console.log("Clicked")

        try {
            
          const authorization = await uauth.loginWithPopup()
          setUserName(authorization.idToken.sub);
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          })
          console.log(authorization)
          setAccounts(accounts)
        } catch (error) {
          console.error(error)
        }
    }
    async function connectAccount() {
        if(window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            })

            setAccounts(accounts);
            setUserName(accounts[0]);
            console.log("Connected!!")
        }
    }

    

    const uauth = new UAuth({
        clientID: process.env.REACT_APP_CLIENT_ID,
        redirectUri: window.location.href,

    })
    

    return (
        <Flex justify="space-between" align="center" padding="30px 30px">
            
            {}
            <Button 
            width={'20%'}
            height={'45px'}
            s={Button} color={'white'} leftIcon={<img style={{height: "20px"}} src={udLogo} alt='Unstoppble Domains Logo'/>}
            backgroundColor={'#4b47ee'}
            _hover={{
                bg: '#0b24b3'
            }}
            _active={{
                bg: '#5361c7'
            }}
            onClick={UDSConnect}>
                Login with Unstoppable
            </Button>
            {}
            {}
            <br></br>
            {isConnected ? (
                <p class={'para'}>{userName} Connected</p>
            ) : (
                <button class="button-27" onClick={connectAccount} >Metamask</button>
            )}

            

        </Flex>
    )

}

export default LoginOptions;

// <button class="button-27" onClick={connectViaUDS}>Unstoppable Domains</button>
// borderRadius={'15px'}
//             border={'2px solid #1A1A1A'}
//             appearance={'none'}
//             boxSizing={'border-box'}
//             cursor={'pointer'}
//             display={'inline-block'}
//             fontSize={'16px'}
//             fontWeight={'300'}
//             lineHeight={'normal'}
//             margin={'0'}
//             minHeight={'60px'}
//             minWidth={'0'}
//             outline={'none'}
//             padding={'16px 24px'}
//             textAlign={'center'}
//             textDecoration={'none'}
//             transition={'all 300ms cubic-bezier(.23, 1, 0.32, 1)'}
//             userSelect={'none'}
//             width={'20%'}
//             willChange={'tranform'}