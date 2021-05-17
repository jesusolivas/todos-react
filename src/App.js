// Third party dependencies
import { useReducer } from "react";

// Internal dependencies
import AuthContext from "./context/auth";
import { authReducer } from "./reducers/auth";
import AppRouter from "./routers/AppRouter";
import { firebase } from "./firebase/firebase";

const currentUser = firebase.auth().currentUser;
const isAuthenticated = !!currentUser;
const authDefaultState = {
  isAuthenticated: isAuthenticated,
  uid: isAuthenticated ? currentUser.uid : undefined,
  email: isAuthenticated ? currentUser.email : undefined,
  displayName: isAuthenticated ? currentUser.displayName : undefined
};

console.log(authDefaultState);

const App = () => {
  const [state, dispatch] = useReducer(authReducer, authDefaultState);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  )
};

export default App;
