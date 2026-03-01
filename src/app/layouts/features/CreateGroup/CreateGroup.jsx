import { useColors } from "@/shared/hooks/useColors";
import { IconButton, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
export const CreateGroup = () => {
  const colors = useColors();
  return (
    <Tooltip title="Создать группу">
      <IconButton
        sx={{
          color: colors.iconColor,
          backgroundColor: colors.iconBg,
          ":hover": {
            backgroundColor: colors.iconBgColorHover,
          },
        }}
      >
        <AddIcon sx={{ fontSize: 30 }} />
      </IconButton>
    </Tooltip>
  );
};
