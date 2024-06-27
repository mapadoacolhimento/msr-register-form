import { Box, Heading, IconButton, Text } from "@radix-ui/themes";
import { ChevronLeftIcon } from "@radix-ui/react-icons";

type MainFormProps = {
  goBack: () => void;
  title: string;
  subtitle?: string;
  Fields: React.ReactNode;
};

export default function MainForm({
  goBack,
  title,
  subtitle,
  Fields,
}: MainFormProps) {
  return (
    <Box>
      <IconButton onClick={goBack}>
        <ChevronLeftIcon width="24" height="24" />
      </IconButton>
      <Heading as={"h1"}>{title}</Heading>
      {subtitle ? <Text>{subtitle}</Text> : null}
      {Fields}
    </Box>
  );
}
