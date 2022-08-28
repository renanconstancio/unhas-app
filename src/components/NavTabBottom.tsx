import {
  NavigatorScreenParams,
  NavigationState,
  NavigationProp,
} from "@react-navigation/native";
import { IconButton, StyledProps, useTheme, HStack } from "native-base";
import { Calendar, House, User } from "phosphor-react-native";

type Props = {
  navigation: NavigationProp<NavigatorScreenParams<NavigationState>>;
} & StyledProps;

export function NavTabBottom({ navigation, ...rest }: Props) {
  const { colors } = useTheme();

  function handleGoTo(screenName: any) {
    navigation.navigate(screenName);
  }

  return (
    <HStack
      w={"full"}
      justifyContent={"space-between"}
      alignItems={"center"}
      bg={colors.gray[600]}
      height={55}
      {...rest}
    >
      <IconButton
        p={5}
        icon={<House color={colors.gray[200]} size={26} />}
        onPress={() => handleGoTo("home")}
      />
      <IconButton
        style={{
          height: 65,
          width: 65,
          borderRadius: 34.75,
          marginBottom: 22,
        }}
        bgColor={colors.gray[100]}
        icon={<Calendar color={colors.gray[900]} size={36} />}
        onPress={handleGoTo}
      />
      <IconButton
        p={5}
        icon={<User color={colors.gray[200]} size={26} />}
        onPress={() => handleGoTo("profile")}
      />
    </HStack>
  );
}
