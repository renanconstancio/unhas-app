import {
  Box,
  Center,
  Circle,
  FlatList,
  HStack,
  Pressable,
  ScrollView,
  Text,
  useTheme,
  VStack,
} from "native-base";
// import { useNavigation, useRoute } from "@react-navigation/native";
import { Header } from "../components/Header";
import { Alert } from "react-native";
import { Loading } from "../components/Loading";
// import {
//   CircleWavyCheck,
//   ClipboardText,
//   DesktopTower,
//   Hourglass,
// } from "phosphor-react-native";
// import { CardDetails } from "../components/CardDetails";
// import { Input } from "../components/Input";
// import { Button } from "../components/Button";
import { Fragment, useEffect, useState } from "react";
import { SchedulesDTOS } from "../DTOs/SchedulesDTO";
import {
  ChatTeardropText,
  CircleWavyCheck,
  ClockAfternoon,
  Hourglass,
} from "phosphor-react-native";
// import {
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   query,
//   Timestamp,
//   updateDoc,
//   where,
// } from "firebase/firestore";
// import db from "../config/firebase";
// import { dateFormat } from "../utils/firestoreDateFormat";

import scheduleJson from "../../data.json";

type SchedulesDetails = { nada?: string } & SchedulesDTOS;

export function Calendar() {
  const [isLoading, setIsLoading] = useState(true);
  const [schedules, setSchedules] = useState<SchedulesDetails[]>();

  const { colors } = useTheme();

  useEffect(() => {
    setSchedules(scheduleJson);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

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
        <FlatList
          data={schedules}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <Pressable onPress={() => void 0} key={index}>
              {item.children.map(({ id, month, children }) => (
                <HStack
                  bg={colors.gray[600]}
                  mb={4}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  rounded={"sm"}
                  overflow={"hidden"}
                  key={id}
                >
                  <Box h={"full"} w={5} bg={colors.primary[100]} />

                  <Circle bg={colors.gray[500]} h={12} w={12} ml={5}>
                    <Text color={colors.white} bold={"xl"}>
                      {month}
                    </Text>
                    {/* <CircleWavyCheck
                      size={24}
                      mirrored={"s"}
                      color={statusColor}
                    /> */}
                    {/* {data.status === "closed" ? (
                    ) : (
                      <Hourglass size={24} color={statusColor} />
                    )} */}
                  </Circle>
                  <VStack flex={1} my={5} ml={5}>
                    {children.map(() => (
                      <>
                        <Text color={"white"} fontSize={"md"}>
                          Patrimômio {item.year}
                        </Text>
                        <HStack alignItems={"center"}>
                          <ClockAfternoon size={15} color={colors.gray[300]} />
                          <Text color={"gray.200"} fontSize={"xs"} ml={1}>
                            {item.year}
                          </Text>
                        </HStack>
                      </>
                    ))}
                  </VStack>
                </HStack>
              ))}
            </Pressable>
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
              </Text>
            </Center>
          )}
        />
      </ScrollView>

      {/* <HStack bg={"gray.500"} justifyContent={"center"} p={4}>
        {schedules.status === "closed" ? (
          <CircleWavyCheck size={22} color={colors.yellow[300]} />
        ) : (
          <Hourglass size={22} color={colors.secondary[700]} />
        )}

        <Text
          ml={2}
          fontSize={"sm"}
          textTransform={"uppercase"}
          color={
            schedules.status === "closed"
              ? colors.yellow[300]
              : colors.secondary[700]
          }
        >
          {schedules.status === "closed" ? "finalizado" : "em andamento"}
        </Text>
      </HStack>

      <ScrollView mx={5} showsVerticalScrollIndicator={false}>
        <CardDetails
          title="equipamento"
          description={`Patrimônio ${schedules.patrimony}`}
          icon={DesktopTower}
        />
        <CardDetails
          title="Descrição do problema"
          description={schedules.description}
          icon={ClipboardText}
          footer={`Registrado em ${schedules.when}`}
        />
        <CardDetails
          title="Solução"
          description={schedules.solution}
          icon={CircleWavyCheck}
          footer={schedules.closed && `Encerrado em ${schedules.closed}`}
        >
          {schedules.status == "open" && (
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

      {schedules.status === "open" && (
        <Button
          title="Encerrar solicitação"
          m={5}
          onPress={handleSchedulesClosed}
        />
      )} */}
    </VStack>
  );
}
