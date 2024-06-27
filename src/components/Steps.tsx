import "./styles/steps.css";
import { Box, Button, Flex, Heading, Progress } from "@radix-ui/themes";

type StepsProps = {
  stepName: string;
  stepNumber: number;
  isValid: boolean;
  onClick: () => void;
  progress: number;
};

export default function Steps({
  stepName,
  stepNumber,
  isValid,
  onClick,
  progress,
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
        <Button onClick={onClick} disabled={!isValid} size={"4"}>
          Continuar
        </Button>
      </Flex>
    </Box>
  );
}
