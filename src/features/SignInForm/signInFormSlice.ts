import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ISingInFormState {
    isUsernameError: boolean,
    usernameError: string,
    isPasswordError: boolean,
    passwordError: string,
    showPassword: boolean
}

const initialState: ISingInFormState = {
    isUsernameError: false,
    usernameError: '',
    isPasswordError: false,
    passwordError: '',
    showPassword: false
};

export const signInFormSlice = createSlice({
    name: "signInForm",
    initialState,
    reducers: {
        setUsernameError(state, action: PayloadAction<string>) {
            state.usernameError = action.payload;
            state.isUsernameError = action.payload.length > 0;
        },

        setPasswordError(state, action: PayloadAction<string>) {
            state.passwordError = action.payload;
            state.isPasswordError = action.payload.length > 0;
        },

        setShowPassword(state, action: PayloadAction<boolean>) {
            state.showPassword = action.payload;
        }
    },
});

export default signInFormSlice.reducer;

export const {
    setUsernameError,
    setPasswordError,
    setShowPassword
} = signInFormSlice.actions
