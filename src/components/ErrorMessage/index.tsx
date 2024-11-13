import { LinkBreak2Icon } from "@radix-ui/react-icons";
import { Box, Text } from "@radix-ui/themes";

import styles from "./ErrorMessage.module.css";

interface Props {
  status: number;
  error: string;
}

const ErrorMessage: React.FC<Props> = ({ error, status }) => {
  return (
    <Box className={styles.container}>
      <LinkBreak2Icon height={"4rem"} width={"4rem"} color="red" />
      <Box className={styles.message}>
        <Text size={"5"} data-testid="error-message">
          {error}
        </Text>
      </Box>
      <Text size={"2"} data-testid="error-message-status-code">
        Status Code: {status}
      </Text>
    </Box>
  );
};

export default ErrorMessage;
