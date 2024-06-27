import "./styles/steps.css";
import { Box, Button, Flex, Heading, Progress } from "@radix-ui/themes";

type StepsProps = {
  stepName: string;
  stepNumber: number;
  isButtonDisabled: boolean;
  progress: number;
  isLastStep: boolean;
};

export default function Steps({
  stepName,
  stepNumber,
  isButtonDisabled,
  progress,
  isLastStep,
}: StepsProps) {
  return (
    <Box
      position={"fixed"}
      bottom={{ initial: "var(--space-6)", md: "var(--space-5)" }}
      height={{ initial: "80px", md: "70px" }}
      width={"100%"}
    >
      <Progress
        color={"yellow"}
        size={"3"}
        radius="none"
        value={progress}
        variant={"soft"}
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
