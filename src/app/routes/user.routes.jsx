import { Groups } from "@/pages/User/Groups/Groups";
import { Index } from "@/pages/User/Index/Index";
import GroupIcon from "@mui/icons-material/Group";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
export const userRoutes = [
  {
    path: "/",
    name: "Главная",
    element: <Index />,
    icon: <HomeFilledIcon />,
  },
  {
    path: "/groups",
    name: "Группы",
    element: <Groups />,
    icon: <GroupIcon />,
  },
];
