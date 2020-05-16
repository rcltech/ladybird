import React, { useCallback, useState } from "react";

export const GoogleUserContext = React.createContext({
  googleUser: undefined,
  user_details: {
    id: "",
    first_name: "",
    last_name: "",
    image_url: "",
    email_id: "",
  },
  setCurrentGoogleUser: () => {},
});

export const useGoogleUser = () => {
  const [googleUser, setGoogleUser] = useState(undefined);
  const [user_details, setUserDetails] = useState({});
  const setCurrentGoogleUser = useCallback(user => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    const profile = auth2.currentUser.get().getBasicProfile();
    setUserDetails({
      id: profile.getId(),
      first_name: profile.getGivenName(),
      last_name: profile.getFamilyName(),
      image_url: profile.getImageUrl(),
      email_id: profile.getEmail(),
    });
    setGoogleUser(user);
  }, []);
  return { googleUser, user_details, setCurrentGoogleUser };
};
