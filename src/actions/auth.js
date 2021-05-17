import { firebase, googleAuthProvider } from "../firebase/firebase";

export const login = (user) => ({
    type: 'LOGIN',
    user
});

export const startLogin = async (dispatch) => {
    const auth = await firebase.auth().signInWithPopup(googleAuthProvider);
    if (auth.user && auth.user.uid) {
        dispatch(login({
            uid: auth.user.uid,
            email: auth.user.email,
            displayName: auth.user.displayName,
        }));
    }
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
};
