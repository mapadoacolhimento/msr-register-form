import "../styles/steps.css";
import { Box, Button, Flex, Heading, Progress } from "@radix-ui/themes";

export interface StepsControllerProps {
  stepName: string;
  stepNumber: number;
  isButtonDisabled: boolean;
  progress: number;
  isLastStep: boolean;
  img: {
    src: string;
    alt: string;
  };
}

export default function StepsController({
  stepName,
  stepNumber,
  isButtonDisabled,
  progress,
  isLastStep,
  img,
}: Readonly<StepsControllerProps>) {
  return (
    <Box
      position={"fixed"}
      bottom={"0"}
      width={"100%"}
      style={{ background: "white" }}
    >
      <Box
        position={"absolute"}
        right={"0"}
        bottom={"100px"}
        display={{ initial: "block", md: "none" }}
      >
        <img src={img.src} height={"150px"} alt={img.alt} />
      </Box>
      <Progress
        color={"yellow"}
        size={"3"}
        radius="none"
        value={progress}
        variant={"soft"}
        max={100}
      />
      <Flex p={"6"} width={"100%"} justify={"between"} align={"center"}>
        <Heading color="purple" highContrast size={"4"} as="h2">
          {stepNumber}. {stepName}
        </Heading>
        <Button disabled={isButtonDisabled} size={"4"} type={"submit"}>
          {isLastStep ? "Enviar" : "Continuar"}
        </Button>
      </Flex>
    </Box>
  );
}
