import { Button as ButtonNativeBase, IButtonProps, Heading } from "native-base";

type Props = IButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <ButtonNativeBase
      h={14}
      fontSize={"sm"}
      rounded={"sm"}
      bg={"yellow.700"}
      _pressed={{ bg: "yellow.500" }}
      {...rest}
    >
      <Heading color={"white"} fontSize={"sm"}>
        {title}
      </Heading>
    </ButtonNativeBase>
  );
}
