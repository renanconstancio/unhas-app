import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { Loading } from "../components/Loading";
import { SignIn } from "../screens/SignIn";
import { AppRoutes } from "./app.routes";
import { Text } from "native-base";

export function Routes() {
  const [loading, setIsLoading] = useState(false);
  const [user, setUser] = useState({ id: "asdfsdfasdfasdfas" });

  useEffect(() => {
    // (async () => {
    //   onAuthStateChanged(getAuth(), (resp) => {
    //     setUser(resp);
    //     setIsLoading(false);
    //   });
    // })();
  }, []);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <NavigationContainer>
      {/* {user ? <AppRoutes /> : <SignIn />} */}
    </NavigationContainer>
  );
}
