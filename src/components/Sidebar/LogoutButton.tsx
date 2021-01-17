import React from "react";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton: React.FC = () => {
  const { logout, isLoading } = useAuth0();
  return (
    <Button loading={isLoading} onClick={() => logout()}>
      Logout <ArrowRightOutlined />
    </Button>
  );
};
