import { Box } from "@radix-ui/themes";

export default function DesktopIllustration() {
  return (
    <Box display={{ initial: "none", md: "block" }} asChild>
      <aside>DesktopIllustration</aside>
    </Box>
  );
}
