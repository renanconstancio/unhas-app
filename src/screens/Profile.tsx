import { useEffect, useState } from "react";
import {
  Box,
  Center,
  FlatList,
  Heading,
  HStack,
  IconButton,
  ScrollView,
  Text,
  useTheme,
  VStack,
} from "native-base";

import { Button } from "../components/Button";
import { Loading } from "../components/Loading";

import { getAuth, onAuthStateChanged, signOut, User } from "firebase/auth";

import Logo from "../assets/logo.svg";
import { EnvelopeSimple, UserCircle } from "phosphor-react-native";

export function Profile() {
  const { colors } = useTheme();
  const [loading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User>();

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
    <VStack flex={1} justifyContent={"center"} bg={"gray.700"}>
      <HStack
        alignItems={"center"}
        justifyContent={"center"}
        mb={4}
        p={7}
        bg={colors.gray[600]}
      >
        {/* <Icon color={colors.primary[700]} /> */}
        <Text
          ml={2}
          color={"gray.300"}
          fontSize={"lg"}
          textTransform={"uppercase"}
        >
          Meu Perfil
        </Text>
      </HStack>
      <ScrollView mx={5} showsVerticalScrollIndicator={false}>
        <HStack
          alignItems={"center"}
          bg={"gray.500"}
          mx={2}
          p={5}
          mb={1}
          rounded={"sm"}
        >
          <EnvelopeSimple size={32} />
          <Text
            ml={2}
            color={"gray.300"}
            fontSize={"sm"}
            textTransform={"uppercase"}
          >
            {user.email}
          </Text>
        </HStack>
        <HStack
          alignItems={"center"}
          bg={"gray.500"}
          mx={2}
          p={5}
          mb={1}
          rounded={"sm"}
        >
          <Text
            ml={2}
            color={"gray.300"}
            fontSize={"sm"}
            textTransform={"uppercase"}
          >
            {/* {JSON.stringify(user, null, 2)} */}
          </Text>
        </HStack>
      </ScrollView>
      {/* <Text
        color={"gray.300"}
        fontSize={"md"}
        bg={"gray.500"}
        m={5}
        p={5}
        rounded={"sm"}
      >
        Teste
      </Text>

      <Box
        borderTopWidth={1}
        borderTopColor={"gray.400"}
        mt={3}
        bg={"gray.500"}
        m={5}
        p={5}
        rounded={"sm"}
      >
        <Text mt={3} color={"gray.300"} fontSize={"sm"}>
          Teste
        </Text>
      </Box> */}
    </VStack>
  );
}
