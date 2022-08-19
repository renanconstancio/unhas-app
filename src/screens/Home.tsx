import { useEffect, useState } from "react";
import {
  Center,
  FlatList,
  Heading,
  HStack,
  IconButton,
  Text,
  useTheme,
  VStack,
} from "native-base";
import { ChatTeardropText, SignOut } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

import { Filter } from "../components/Filter";
import { Button } from "../components/Button";
import { Order, OrderProps } from "../components/Order";
import { Loading } from "../components/Loading";

import Logo from "../assets/Unhas-Gabriele-Agostinho.svg";

export function Home() {
  const navigation = useNavigation();

  const [isLoading, setIsLoding] = useState(true);
  const [statusSelected, setStatusSelected] = useState<"open" | "closed">(
    "open",
  );
  const [orders, setOrders] = useState<OrderProps[]>([]);

  const { colors } = useTheme();

  // useEffect(() => {
  //   (async () => {
  //     const snapDocs = listOrders();

  //     setOrders(snapDocs);
  //     setIsLoding(false);
  //   })();
  // }, [statusSelected]);

  function handleNewOrder() {
    navigation.navigate("new");
  }

  function handleOpenDetails(orderId: string) {
    navigation.navigate("details", { orderId });
  }

  function handleLogout() {
    return;
  }

  return (
    <VStack flex={1} pb={6} bg={"gray.700"}>
      <HStack
        w={"full"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bg={"gray.600"}
        pt={12}
        pb={5}
        px={6}
      >
        <Logo />

        <IconButton
          icon={<SignOut size={26} color={colors.gray[300]} />}
          onPress={handleLogout}
        />
      </HStack>

      <VStack flex={1} px={6}>
        <HStack w={"full"} mt={8} mb={4} justifyContent={"space-between"}>
          <Heading color={"gray.100"}>Meus Chamados</Heading>
          <Text color={"gray.200"}>{orders.length ?? 0}</Text>
        </HStack>
        <HStack space={3} mb={8}>
          <Filter
            type={"open"}
            title={"em andamento"}
            onPress={() => setStatusSelected("open")}
            isActive={statusSelected === "open"}
          />
          <Filter
            type={"closed"}
            title={"finalizados"}
            onPress={() => setStatusSelected("closed")}
            isActive={statusSelected === "closed"}
          />
        </HStack>
        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={orders}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Order data={item} onPress={() => handleOpenDetails(item.id)} />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 50 }}
            ListEmptyComponent={() => (
              <Center>
                <ChatTeardropText color={colors.gray[300]} size={40} />
                <Text
                  mt={6}
                  color={"gray.300"}
                  fontSize={"xl"}
                  textAlign={"center"}
                >
                  Você ainda não possui {"\n"}
                  solicitações{" "}
                  {statusSelected === "open" ? "em andamento" : "finlizados"}
                </Text>
              </Center>
            )}
          />
        )}

        <Button title={"Nova solicitação"} onPress={handleNewOrder} />
      </VStack>
    </VStack>
  );
}
