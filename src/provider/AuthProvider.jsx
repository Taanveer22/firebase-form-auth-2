import { createContext } from "react";

const AuthContext = createContext(null);
const name = "react";

const authInfo = {
  name,
};

const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthProvider;
