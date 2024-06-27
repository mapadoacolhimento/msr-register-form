import { Box, Heading, IconButton, Text } from "@radix-ui/themes";
import { ChevronLeftIcon } from "@radix-ui/react-icons";

type MainFormProps = {
  goBack: () => void;
  title: string;
  subtitle?: string;
  StepFields: React.ReactNode;
  currentStepIndex: number;
};

export default function MultiPageForm({
  goBack,
  title,
  subtitle,
  currentStepIndex,
  StepFields,
}: MainFormProps) {
  return (
    <Box>
      <IconButton
        onClick={goBack}
        variant="ghost"
        disabled={currentStepIndex === 0}
      >
        <ChevronLeftIcon width="24" height="24" />
      </IconButton>
      <Heading as={"h1"}>{title}</Heading>
      {subtitle ? <Text>{subtitle}</Text> : null}
      {StepFields}
    </Box>
  );
}
