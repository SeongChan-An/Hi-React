import { createContext, useState } from "react";
import Clayful from "clayful/client-js";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setisAuth] = useState(false);
  const navigate = useNavigate();

  const isAuthenticated = () => {
    var Customer = Clayful.Customer;

    var options = {
      customer: localStorage.getItem("accessToken"),
    };

    Customer.isAuthenticated(options, function (err, result) {
      if (err) {
        // Error case
        console.log(err.code);
        setisAuth(false);
        return;
      }

      var data = result.data;
      if (data.authenticated) {
        setisAuth(true);
      } else {
        setisAuth(false);
      }
    });
  };

  const signOut = () => {
    setisAuth(false);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("customUid");
    navigate("/login");
  };

  const AuthContextData = {
    isAuth,
    isAuthenticated,
    signOut,
  };

  return (
    <AuthContext.Provider value={AuthContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
