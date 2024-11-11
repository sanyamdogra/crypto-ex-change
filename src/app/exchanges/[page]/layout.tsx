import { Flex } from "@radix-ui/themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex p={"1.5em"} align={"center"} direction={"column"} justify={"center"}>
      {children}
    </Flex>
  );
}
