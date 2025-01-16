import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Collapse,
    Icon,
    Image,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure, Container,
} from '@chakra-ui/react'
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons'
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import images from "~/assets/index.js";
import routesConfigure from "~/configure/routesConfig.jsx";

export default function Header() {
    const {isOpen, onToggle} = useDisclosure()
    const navigation = useNavigate();
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY
            if (offset > 0) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <Box
            position="fixed"
            top="0"
            left="0"
            right="0"
            zIndex="1000"
            transform={`translateY(${scrolled ? '0' : '0'})`}
            transition="all 0.3s ease-in-out"
            bg="white"
            boxShadow={'md'}
        >
            <Container maxW={{base: 'full', md: '8xl'}} px={{base: '0px', md: '50px'}} py={'5px'}>
                <Flex
                    bg={useColorModeValue('white', 'gray.800')}
                    color={useColorModeValue('gray.600', 'white')}
                    minH={'60px'}
                    py={{base: 2}}
                    px={{base: 4}}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}
                    align={'center'}
                    flexDir={{base: 'row', md: 'row'}}
                >
                    <Flex flex={{base: 1}} justify={{base: 'start', md: 'start'}} align={'center'}>
                        <Flex
                            justifyContent={'center'}
                            align={'center'}
                            gap={'2'}
                            _hover={{
                                cursor: 'pointer'
                            }}
                            onClick={() => navigation('/')}
                        >
                            <Image src={images.HEADER.defImg} alt={'Logo'} w={'40px'}/>
                            <Text
                                display={{base: 'inline', md: 'inline'}}
                                textAlign={useBreakpointValue({base: 'center', md: 'left'})}
                                fontFamily={'heading'}
                                fontSize={{base: '20px', md: '25px'}}
                                fontWeight={'600'}
                                color={useColorModeValue('gray.800', 'white')}>
                                Template
                            </Text>
                        </Flex>

                        <Flex display={{base: 'none', md: 'flex'}} flex={1}>
                            <DesktopNav/>
                        </Flex>
                    </Flex>

                    <Flex
                        justify={{base: 'end', md: 'start'}}
                        flex={{base: 1, md: 'auto'}}
                        ml={{base: -2}}
                        display={{base: 'flex', md: 'none'}}>
                        <IconButton
                            onClick={onToggle}
                            icon={isOpen ? <CloseIcon w={3} h={3}/> : <HamburgerIcon w={5} h={5}/>}
                            variant={'ghost'}
                            aria-label={'Toggle Navigation'}
                        />
                    </Flex>
                </Flex>

                <Collapse in={isOpen} animateOpacity>
                    <MobileNav/>
                </Collapse>
            </Container>
        </Box>
    )
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('black', 'gray.200')
    const linkHoverColor = useColorModeValue('gray.800', 'white')
    const popoverContentBgColor = useColorModeValue('white', 'gray.800')
    const navigate = useNavigate()

    return (
        <Flex flex={1} direction={'row'} gap={4} justify={'center'} alignItems={'center'}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Flex
                                justifyContent={'center'}
                                align={'center'}
                                _hover={{
                                    bg: '#eaf0f6',
                                }}
                                py={'2px'}
                                pr={'.5rem'}
                                pl={'1rem'}
                                borderRadius={'md'}
                                onClick={() => navigate(navItem.href)}

                            >
                                <Image src={navItem.iconUrl} alt={'Logo'} w={'1.5rem'} borderRadius={'50%'}/>
                                <Box
                                    as="a"
                                    p={2}
                                    fontSize={'sm'}
                                    fontWeight={500}
                                    color={linkColor}
                                    _hover={{
                                        textDecoration: 'none',
                                        color: linkHoverColor,
                                    }}>
                                    {navItem.label}
                                </Box>
                            </Flex>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Flex>
    )
}

// eslint-disable-next-line react/prop-types
const DesktopSubNav = ({label, href, subLabel}) => {
    return (
        <Box
            as="a"
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{bg: useColorModeValue('pink.50', 'gray.900')}}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{color: 'pink.400'}}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{opacity: '100%', transform: 'translateX(0)'}}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon}/>
                </Flex>
            </Stack>
        </Box>
    )
}

const MobileNav = () => {
    return (
        <Stack bg={useColorModeValue('white', 'gray.800')} p={4} borderTop={'1px solid #D9E0E8'} display={{md: 'none'}}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    )
}

// eslint-disable-next-line react/prop-types
const MobileNavItem = ({label, children, href}) => {
    const {isOpen, onToggle} = useDisclosure()

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Box
                p={2}
                as="a"
                href={href ?? '#'}
                justifyContent="space-between"
                alignItems="center"
                borderRadius={'5px'}
                _hover={{
                    textDecoration: 'none',
                    bg: '#D9E0E8'
                }}>
                <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Box>

            <Collapse in={isOpen} animateOpacity style={{marginTop: '0!important'}}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        // eslint-disable-next-line react/prop-types
                        children.map((child) => (
                            <Box as="a" key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Box>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    )
}

const NAV_ITEMS = [
    {
        iconUrl: images.HEADER.defImg,
        label: 'Home',
        href: routesConfigure.Home,
    },
    {
        iconUrl: images.HEADER.defImg,
        label: 'Dashboard',
        href: routesConfigure.Dashboard,
    },
    {
        iconUrl: images.HEADER.defImg,
        label: 'Login',
        href: routesConfigure.Login,
    },
    {
        iconUrl: images.HEADER.defImg,
        label: 'Register',
        href: routesConfigure.Register,
    },
]