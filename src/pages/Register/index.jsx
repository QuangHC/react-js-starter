import { useState } from 'react';
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
    Link, useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import TokenApi from "~/utils/axios/ClientApi.js";

const Register = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const toast = useToast();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await TokenApi.USER.register(form);
            toast({
                title: "Register successful!",
                description: "Remember to keep your password safe.",
                status: "success",
                duration: 1000,
                position: 'top-right',
                isClosable: true,
            });
            navigate("/login"); // Redirect to login page after registration
        } catch (error) {
            toast({
                title: "Register failed",
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
                as="form" // Make this a form element to support form submission
                maxW="md"
                w="full"
                p={8}
                borderRadius="lg"
                boxShadow="lg"
                bg={useColorModeValue('#260E39', '#260E39')}
                onSubmit={handleSubmit} // Attach handleSubmit to form submission
            >
                <Heading fontSize="2xl" mb={4} textAlign="center">
                    Create a new account
                </Heading>
                <Stack spacing={4}>
                    <FormControl id="username">
                        <FormLabel>Username</FormLabel>
                        <Input
                            type="text"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            name="password"
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
                            Register
                        </Button>
                        <Text textAlign="center">
                            Already have an account?{' '}
                            <Link color="#917EFB" href="/login">
                                Login
                            </Link>
                        </Text>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
};

export default Register;
