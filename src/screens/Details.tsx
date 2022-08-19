import { HStack, ScrollView, Text, useTheme, VStack } from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Header } from "../components/Header";
import { OrderProps } from "../components/Order";
import { Alert } from "react-native";
import { Loading } from "../components/Loading";
import {
  CircleWavyCheck,
  ClipboardText,
  DesktopTower,
  Hourglass,
} from "phosphor-react-native";
import { CardDetails } from "../components/CardDetails";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";

type RouteParams = {
  orderId: string;
};

type OrderDetails = {
  description: string;
  solution: string;
  closed: string;
} & OrderProps;

export function Details() {
  const route = useRoute();
  const navigation = useNavigation();

  const [isLoading, setIsLoadind] = useState(true);
  const [solution, setSolution] = useState("");
  const [order, setOrder] = useState<OrderDetails>({} as OrderDetails);

  const { colors } = useTheme();

  const { orderId } = route.params as RouteParams;

  function handleOrderClosed() {
    if (!solution) {
      return Alert.alert(
        "Solicitação",
        "Informe a solução para encerrar  a solicitação.",
      );
    }
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <VStack flex={1} pb={6} bg={"gray.700"}>
      <Header title="Solicitação" />

      <HStack bg={"gray.500"} justifyContent={"center"} p={4}>
        {order.status === "closed" ? (
          <CircleWavyCheck size={22} color={colors.yellow[300]} />
        ) : (
          <Hourglass size={22} color={colors.secondary[700]} />
        )}

        <Text
          ml={2}
          fontSize={"sm"}
          textTransform={"uppercase"}
          color={
            order.status === "closed"
              ? colors.yellow[300]
              : colors.secondary[700]
          }
        >
          {order.status === "closed" ? "finalizado" : "em andamento"}
        </Text>
      </HStack>

      <ScrollView mx={5} showsVerticalScrollIndicator={false}>
        <CardDetails
          title="equipamento"
          description={`Patrimônio ${order.patrimony}`}
          icon={DesktopTower}
        />
        <CardDetails
          title="Descrição do problema"
          description={order.description}
          icon={ClipboardText}
          footer={`Registrado em ${order.when}`}
        />
        <CardDetails
          title="Solução"
          description={order.solution}
          icon={CircleWavyCheck}
          footer={order.closed && `Encerrado em ${order.closed}`}
        >
          {order.status == "open" && (
            <Input
              placeholder="Descrição da solução"
              onChangeText={setSolution}
              textAlignVertical={"top"}
              multiline
              h={24}
            />
          )}
        </CardDetails>
      </ScrollView>

      {order.status === "open" && (
        <Button
          title="Encerrar solicitação"
          m={5}
          onPress={handleOrderClosed}
        />
      )}
    </VStack>
  );
}
