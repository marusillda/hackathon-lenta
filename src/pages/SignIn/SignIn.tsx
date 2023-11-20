import SignInForm from "../../features/SignInForm/SignInForm";
import {Box} from "@mui/material";
import {Logo} from "../../ui/logo/logo";
import patternImage from "../../app/images/pattern.png";

const SignIn = () => {
    return (
        <Box component="main" width={"100%"}>
            <Box
                height={'100vh'}
                display={"flex"}
                padding={20}
            >
                <Box width={655}
                     display={"flex"}
                     flexDirection={"column"}
                >
                    <Box
                        display={"flex"}
                        alignSelf={"flex-start"}
                    >
                        <Logo width={312} height={72}/>
                    </Box>
                    <Box
                        paddingTop={'21%'}
                    >
                        <SignInForm/>
                    </Box>

                </Box>
                <Box
                    width={"calc(100% - 655px)"}
                    borderRadius={8}
                    sx={{
                        backgroundImage: `url(${patternImage})`,
                        backgroundSize: 'contain'
                    }}
                >
                </Box>
            </Box>
        </Box>
    )

};

export default SignIn;
