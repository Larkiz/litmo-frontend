import { colors } from "@/shared/lib/colors";
import { Button } from "@mui/material";

export const TextButton = ({ sx, children, ...props }) => {
  return (
    <Button
      sx={{
        fontSize: 14,
        color: colors.neutralColor,
        borderRadius: 2,
        ":hover": {
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
