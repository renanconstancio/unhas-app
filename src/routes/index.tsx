import { useState, useEffect } from "react";
import { Loading } from "../components/Loading";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AppAuth } from "./app.auth";
import { AppRoutes } from "./app.routes";
import { NavigationContainer } from "@react-navigation/native";

export function Routes() {
  const [loading, setIsLoading] = useState(true);
  const [user, setUser] = useState<object>();

  useEffect(() => {
    (async () => {
      onAuthStateChanged(getAuth(), resp => {
        setUser(resp);
        setIsLoading(false);
      });
    })();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {user ? <AppAuth /> : <AppRoutes />}
    </NavigationContainer>
  );
}
