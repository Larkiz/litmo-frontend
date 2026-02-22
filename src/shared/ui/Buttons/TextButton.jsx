import { useColors } from "@/shared/hooks/useColors";
import { Button } from "@mui/material";

export const TextButton = ({ sx, children, ...props }) => {
  const colors = useColors();
  return (
    <Button
      sx={{
        fontSize: 14,
        color: colors.textColor,
        borderRadius: 2,
        transition: ".2s",
        ":hover": {
          color: colors.neutralColor,
          backgroundColor: colors.textColor,
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
