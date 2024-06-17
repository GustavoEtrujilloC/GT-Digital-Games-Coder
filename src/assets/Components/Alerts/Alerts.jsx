import React from "react";
import { Alert } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";

const Alerts = ({ message, onClose }) => {
  const icon = <IconInfoCircle />;
  return (
    <Alert
      variant="light"
      color="orange"
      title="Alerta"
      icon={icon}
      withCloseButton
      onClose={onClose}
    >
      {message}
    </Alert>
  );
};

export default Alerts;
