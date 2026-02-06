import { Groups } from "@/pages/User/Groups/Groups";
import { Index } from "@/pages/User/Index/Index";
import { Profile } from "@/pages/User/Profile/Profile";
import GroupIcon from "@mui/icons-material/Group";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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
  {
    path: "/profile",
    name: "Профиль",
    element: <Profile />,
    icon: <AccountCircleIcon />,
  },
];
