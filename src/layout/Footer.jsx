import {Box, HStack, Text, Image, Link, Wrap, WrapItem, Flex, Spacer} from '@chakra-ui/react';
import images from "~/assets/index.js";
import Wrapper from "~/components/Wrapper.jsx";
import {FiGithub} from "react-icons/fi";
import {FaXTwitter} from "react-icons/fa6";

const Footer = () => {
    const footerLinks = [
        { name: 'Home', href: '/' },
        { name: 'Dashboard', href: '/dashboard' },
    ];

    return (
        <Box as="footer" bg="white" borderColor="gray.100">
            <Wrapper centerContent maxW="container.xl" mt={'40px'}>
                {/* Logo */}
                <HStack spacing={2} justify="center">
                    <Image src={images.HEADER.defImg} alt="Template" h="32px" />
                    <Text fontSize="xl" fontWeight="bold">Template</Text>
                </HStack>

                {/* Links Wrap */}
                <Wrap
                    w={{base: 'full', md: '70%'}}
                    spacing={2}
                    justify="center"
                    my={8}
                >
                    {footerLinks.map((link) => (
                        <WrapItem key={link.name}>
                            <Link
                                href={link.href}
                                fontSize="sm"
                                color="black"
                                borderRadius={'20px'}
                                fontWeight={500}
                                _hover={{
                                    color: "black",
                                    bg: "#f1f5f9"
                                }}
                                px={4}
                                py={2}
                            >
                                {link.name}
                            </Link>
                        </WrapItem>
                    ))}
                </Wrap>

                {/* Bottom Section */}
                <Flex
                    w={'100%'}
                    flexDir={{base: 'column', md: 'row-reverse'}}
                    justify="revert"
                    align="center"
                    borderTop="1px solid"
                    borderColor="gray.100"
                    py={'10'}
                    gap={4}
                >
                    <WrapItem>
                        <HStack spacing={4}>
                            <Link href="https://twitter.com" color={"gray.600"} fontSize={'18px'} isExternal>
                                <FaXTwitter/>
                            </Link>
                            <Link href="https://discord.com" color={"gray.600"} fontSize={'18px'} isExternal>
                                <FiGithub />
                            </Link>
                        </HStack>
                    </WrapItem>
                    <Spacer />
                    <WrapItem>
                        <Text color="gray.500" fontSize="13px" fontWeight="500">
                            © 2024 Template. All rights reserved.
                        </Text>
                    </WrapItem>
                </Flex>
            </Wrapper>
        </Box>
    );
};

export default Footer;