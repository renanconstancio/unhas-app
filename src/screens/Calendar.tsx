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
import { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  Timestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import db from "../config/firebase";
import { dateFormat } from "../utils/firestoreDateFormat";

type RouteParams = {
  orderId: string;
};

type OrderDetails = {
  description: string;
  solution: string;
  closed: string;
} & OrderProps;

export function Calendar() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [solution, setSolution] = useState("");
  // const [order, setOrder] = useState<OrderDetails>({} as OrderDetails);

  const { colors } = useTheme();

  // const navigation = useNavigation();
  // const route = useRoute();

  // const { orderId } = route.params as RouteParams;

  // async function handleOrderClosed() {
  //   if (!solution) {
  //     return Alert.alert(
  //       "Solicitação",
  //       "Informe a solução para encerrar  a solicitação.",
  //     );
  //   }

  //   setIsLoading(true);
  //   await updateDoc(doc(db, "orders", orderId), {
  //     solution,
  //     status: "closed",
  //     updated_at: Timestamp.now(),
  //   })
  //     .then(() => {
  //       Alert.alert("Solicitação", "Solicitação finalizada com sucesso.");
  //       navigation.goBack();
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       setIsLoading(false);
  //       return Alert.alert(
  //         "Solicitação",
  //         "Não foi possível registrar a solicitação.",
  //       );
  //     });
  // }

  // useEffect(() => {
  //   (async () => {
  //     return await getDoc(doc(db, "orders", orderId))
  //       .then(resp => {
  //         const {
  //           created_at,
  //           description,
  //           patrimony,
  //           status,
  //           closed_at,
  //           solution,
  //         } = resp.data();

  //         const closed = closed_at ? dateFormat(closed_at) : null;

  //         setOrder({
  //           id: orderId,
  //           patrimony,
  //           description,
  //           status,
  //           solution,
  //           when: dateFormat(created_at),
  //           closed,
  //         });
  //         setIsLoading(false);
  //       })
  //       .catch(() => {
  //         Alert.alert("Ops", "Não há dados para serem mostrados");
  //         navigation.goBack();
  //       });
  //   })();
  // }, [orderId]);

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <VStack flex={1} bg={"gray.700"}>
      <Header title="Solicitação" />

      <ScrollView
        mt={3}
        h={"full"}
        w={"full"}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
      >
        <HStack
          bg={"gray.500"}
          alignItems={"center"}
          justifyContent={"space-between"}
          p={4}
          mx={5}
        >
          <Text
            fontSize={"5xl"}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            color={colors.white}
            p={1}
          >
            01
          </Text>
          <VStack
            h={"full"}
            bg={"gray.700"}
            justifyContent={"center"}
            px={4}
            flex={1}
            borderRadius={"sm"}
          >
            <Text
              fontSize={"sm"}
              textTransform={"uppercase"}
              color={colors.gray[300]}
            >
              01/01/2000 às 10:00
            </Text>
            <Text
              fontSize={"lg"}
              textTransform={"uppercase"}
              fontWeight={"bold"}
              color={colors.gray[100]}
            >
              Renan Agendado
            </Text>
            <Text
              fontSize={"xs"}
              textTransform={"uppercase"}
              fontWeight={"bold"}
              color={colors.gray[200]}
            >
              Fazer pé e mão
            </Text>
          </VStack>
        </HStack>
      </ScrollView>

      {/* <HStack bg={"gray.500"} justifyContent={"center"} p={4}>
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
      )} */}
    </VStack>
  );
}
