import {
    Box,
    Button,
    IconButton,
    InputAdornment,
    Link,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import {Visibility, VisibilityOff} from "@mui/icons-material";

import {useSignInMutation} from "../../services/SignInService";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {useNavigate} from "react-router-dom";
import {
    setUsernameError,
    setPasswordError,
    setShowPassword,
} from "./signInFormSlice";
import {setCredentials} from "../Auth/AuthSlice";

const SignInForm = () => {
    const [signIn, { /*data,*/ isError, reset}] = useSignInMutation();
    const {
        showPassword,
        passwordError,
        usernameError,
        isUsernameError,
        isPasswordError,
    } = useAppSelector((state) => state.signInReducer);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.nativeEvent.target as HTMLFormElement);
        const username = formData.get("username")?.toString();
        const password = formData.get("password")?.toString();

        if (!username || !password) {
            dispatch(setUsernameError(username ? "" : "Введите логин"));
            dispatch(setPasswordError(password ? "" : "Введите пароль"));
            reset();
            return;
        }

        try {
            const res = await signIn({username, password});

            if ("data" in res) {
                await dispatch(setCredentials({token: res.data.access}));
                localStorage.setItem("accessToken", res.data.access);
                navigate("/");
            }
        } catch (err) {
            console.log("this is err in SignIn:", err);
        }
    };

    const handleClickShowPassword = () =>
        dispatch(setShowPassword(!showPassword));

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    return (
        <Box
            component="section"
            width={616}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
        >
            <Typography
                component="h1"
                variant="h4"
                textAlign={"center"}
                color={"primary"}
                fontWeight={"bold"}
                lineHeight={"130%"}
                letterSpacing={"0.34px"}
            >
                Авторизуйтесь для входа <br/> в Лента.Спрос
            </Typography>
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                width={460}
                marginTop={5}
                borderRadius={4}
                sx={{
                    boxShadow: "0px 8px 32px 0px rgba(0, 0, 0, 0.08);",
                }}
            >
                <Box
                    component="form"
                    noValidate
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    width={"380px"}
                    py={10}
                    onSubmit={handleSubmit}
                >
                    <TextField
                        error={isUsernameError || isError}
                        required
                        fullWidth
                        id="username"
                        label="Логин"
                        name="username"
                        autoComplete="username"
                        helperText={
                            isError ? "Логин или пароль введены не верно" : usernameError
                        }
                        autoFocus
                        InputProps={{
                            sx: {
                                borderRadius: 2,
                            },
                        }}
                    />

                    <TextField
                        sx={{mt: 6}}
                        error={isPasswordError || isError}
                        required
                        fullWidth
                        id="password"
                        label="Пароль"
                        name="password"
                        autoComplete="password"
                        helperText={isError ? "" : passwordError}
                        autoFocus
                        type={showPassword ? "text" : "password"}
                        InputProps={{
                            sx: {
                                borderRadius: 2,
                            },
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        size={"large"}
                        sx={{mt: 8, mb: 5, width: 160, height: 52, borderRadius: 2}}
                    >
                        Войти
                    </Button>

                    <Link
                        href="#"
                        variant="body2"
                        sx={{width: "100%"}}
                        textAlign={"center"}
                    >
                        Забыли пароль?
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default SignInForm;
