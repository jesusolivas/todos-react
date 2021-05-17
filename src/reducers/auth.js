export const authReducer = (state = {}, { uid, email, displayName, type }) => {
    switch (type) {
        case 'LOGIN':
            return {
                isAuthenticated: true,
                uid,
                email,
                displayName
            };
        case 'LOGOUT':
            return {
                isAuthenticated: false,
                uid: undefined,
                email: undefined,
                displayName: undefined
            };
        default:
            return state;
    }
};
