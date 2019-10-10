import React from "react";

export const user = {
  isGoogleLogin: false,
};

export const UserContext = React.createContext({
  user,
  redirectUrl: "",
  toggleUser: () => {}
});
