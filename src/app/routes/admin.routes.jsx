import { Index } from "@/pages/Admin/Index/Index";

import LayersIcon from "@mui/icons-material/Layers";

const iconSx = { color: "#2F2F2F", mr: 1 };

export const adminRoutes = [
  {
    path: "/index",
    link: "/admin/index",
    name: "Главная",
    icon: <LayersIcon sx={iconSx} />,
    element: <Index />,
  },
];
