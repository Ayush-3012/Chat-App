/* eslint-disable react/prop-types */
import { createContext, useEffect } from "react";
import { useState } from "react";
import { auth, database } from "../misc/firebase";
import { off, onValue, ref } from "firebase/database";

export const ProfileContext = createContext();

export const ProfileContextProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let userRef;

    const authUnsub = auth.onAuthStateChanged((authObj) => {
      if (authObj) {
        userRef = ref(database, `/profiles/${authObj.uid}`);
        onValue(userRef, (snap) => {
          const { name, createdAt } = snap.val();
          const data = {
            name,
            createdAt,
            uid: authObj.uid,
            email: authObj.email,
          };
          setProfile(data);
          setIsLoading(false);
        });
      } else {
        if (userRef) {
          off(userRef);
        }
        setProfile(null);
        setIsLoading(false);
      }
    });

    return () => {
      authUnsub();
      if(userRef){
        off(userRef)
      }
    };
  }, []);

  return (
    <ProfileContext.Provider value={{ isLoading, profile }}>
      {children}
    </ProfileContext.Provider>
  );
};
