import { firebase, googleAuthProvider } from "../firebase/firebase";

export const login = () => ({
    type: 'LOGIN'
});

export const startLogin = async (dispatch) => {
    const auth = await firebase.auth().signInWithPopup(googleAuthProvider);
    if (auth.user && auth.user.uid) {
        dispatch(login());
    }
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
};
