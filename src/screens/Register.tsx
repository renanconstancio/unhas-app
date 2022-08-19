import { useState } from "react";
import { VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [patrimony, setPatrimony] = useState("");
  const [description, setDescription] = useState("");

  const navigation = useNavigation();

  async function handleNewOrderRegister() {
    if (!patrimony || !description) {
      return Alert.alert("Registrar", "Preencha todos os campos.");
    }

    // setIsLoading(true);
    // await addDoc(collection(db, "orders"), {
    //   patrimony,
    //   description,
    //   status: "open",
    //   created_at: Timestamp.now(),
    // })
    //   .then(() => {
    //     Alert.alert("Solicitação", "Solicitação registrada com sucesso.");
    //     navigation.goBack();
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setIsLoading(false);
    //     return Alert.alert(
    //       "Solicitação",
    //       "Não foi possível registrar a solicitação."
    //     );
    //   });
  }

  return (
    <VStack flex={1} pb={6} bg={"gray.600"}>
      <Header title={"Nova solicitação"} />

      <VStack flex={1} px={6}>
        <Input
          onChangeText={setPatrimony}
          placeholder={"Número do pratimônio"}
        />

        <Input
          onChangeText={setDescription}
          placeholder={"Descrição do problema"}
          textAlignVertical={"top"}
          multiline
          flex={1}
          mt={5}
        />
        <Button
          title={"Cadastrar"}
          mt={5}
          isLoading={isLoading}
          onPress={handleNewOrderRegister}
        />
      </VStack>
    </VStack>
  );
}
