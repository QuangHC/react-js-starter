import {useState} from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Heading,
    Text,
    useColorModeValue,
    Link,
    useToast,
} from '@chakra-ui/react';
import {useLocation, useNavigate} from 'react-router-dom';
import useAuthStore from "~/store/authStore.js";

const Login = () => {
    const [form, setForm] = useState({email: "", password: ""});
    const login = useAuthStore((state) => state.login);
    const navigate = useNavigate();
    const location = useLocation();
    const toast = useToast();

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(form);
            toast({
                title: "Login successful!",
                description: "Remember to keep your password safe.",
                status: "success",
                duration: 1000,
                position: 'top-right',
                isClosable: true,
            });
            const redirectPath = location.state?.from || "/dashboard";
            navigate(redirectPath);
        } catch (error) {
            console.error("Login failed:", error);
            toast({
                title: "Login failed",
                description: error.message,
                status: "error",
                duration: 2000,
                position: 'top-right',
                isClosable: true,
            });
        }
    };

    return (
        <Box
            minH="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgImage={'/assets/bg.png'}
            color={'white'}
        >
            <Box
                as="form"
                method="POST" // Ensure method is POST to enable browser save prompt
                maxW="md"
                w="full"
                p={8}
                borderRadius="lg"
                boxShadow="lg"
                bg={useColorModeValue('#260E39', '#260E39')}
                onSubmit={handleSubmit}
            >
                <Heading fontSize="2xl" mb={4} textAlign="center">
                    Login to your account
                </Heading>
                <Stack spacing={4}>
                    <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input
                            type="email"
                            name="email" // Ensure name="username" is present
                            value={form.username}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            name="password" // Ensure name="password" is present
                            value={form.password}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <Stack spacing={6}>
                        <Button
                            bgGradient="linear(to-r, pink.500, purple.500)"
                            variant="solid"
                            type="submit"
                        >
                            Login
                        </Button>
                        <Text textAlign="center">
                            Don&#39;t have an account?{' '}
                            <Link color="#917EFB" href="/register">
                                Register
                            </Link>
                        </Text>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
};

export default Login;