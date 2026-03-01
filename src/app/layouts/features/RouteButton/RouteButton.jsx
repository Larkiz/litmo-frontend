import { CreateGroup } from "@/app/layouts/features/CreateGroup/CreateGroup";
import { useLocation } from "react-router";

const buttons = { "/groups": <CreateGroup /> };
export const RouteButton = () => {
  const { pathname } = useLocation();

  return buttons[pathname];
};
