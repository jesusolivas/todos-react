// Third party dependencies
import { useReducer } from "react";

// Internal dependencies
import AuthContext from "./context/auth";
import { authReducer } from "./reducers/auth";
import AppRouter from "./routers/AppRouter";
import { firebase } from "./firebase/firebase";

const currentUser = firebase.auth().currentUser;
const authDefaultState = {
  isAuthenticated: !!currentUser,
  uid: currentUser.uid,
  email: currentUser.email,
  displayName: currentUser.displayName
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
