import React from 'react'

import { Box, Heading, Text, Button, Flex, Progress } from "@chakra-ui/react";
const SingleSeperator = () => {

    function myFun() {
        console.log("start");
    }
    return (
        <>
            <Box border={{ base: "none", md: "1px solid black", lg: "1px solid black" }} w="70%" margin="2rem auto">
                <Heading textAlign="center" bgGradient='linear(to-l, orange.600, orange.300)'
                    bgClip='text'
                    fontSize={{ base: "lg", md: "xl", lg: "3xl" }}
                    fontWeight='extrabold'
                    py={{ base: "2", md: "4", lg: "6" }}
                    letterSpacing={2}
                    px={3}
                > SINGAL SEPERATOR 91
                </Heading>
                <Box alignItems="center" justifyContent="center" py="5" w="70%" m="0rem auto">
                    <Text py="3" fontWeight="bolder" fontSize={{ base: "sm", md: "lg", lg: "xl" }}>SERVICES STATUS</Text>
                    <Flex flexDir={{ base: "column", md: "column", lg: "row" }} w={{ base: "100%", md: "40%", lg: "100%" }}>
                        <Button bgColor="orange.400" ml={1} mt={{ base: "1", md: "1", lg: "0" }} _hover={{ bg: "orange.500" }} color="white" onClick={myFun}>START</Button>
                        <Button bgColor="orange.400" ml={1} mt={{ base: "1", md: "1", lg: "0" }} _hover={{ bg: "orange.500" }} color="white">PAUSE</Button>
                        <Button bgColor="orange.400" ml={1} mt={{ base: "1", md: "1", lg: "0" }} _hover={{ bg: "orange.500" }} color="white">STOP</Button>
                    </Flex>
                </Box>
                <Box alignItems="center" justifyContent="center" py="5" w="70%" m="0rem auto">
                    <Flex alignItems="center">
                        <Text fontWeight="bolder" py={4}>SERVICES STATUS ON </Text>
                        <Box ml="3" bg="orange.400" p={1}>
                            <Text color="white">28/12/2022</Text>
                        </Box>
                    </Flex>
                    <Box>
                        <Progress colorScheme='orange' isIndeterminate />
                    </Box>
                </Box>
                <Box alignItems="center" justifyContent="center" py="5" w="70%" h="40vh" bg="orange.100" mx="auto" my={6}>

                </Box>
            </Box>
        </>
    )
}

export default SingleSeperator