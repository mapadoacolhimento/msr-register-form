import { Flex } from "@radix-ui/themes";

export default function DesktopIllustration({
  img,
}: Readonly<{ img: string }>) {
  return (
    <Flex
      display={{ initial: "none", md: "flex" }}
      asChild
      style={{ backgroundColor: "var(--yellow-2)" }}
      height={"calc(100vh - 100px)"}
      justify={"center"}
      align={"center"}
    >
      <aside>
        <img
          src={img}
          alt={"Ilustração"}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </aside>
    </Flex>
  );
}
