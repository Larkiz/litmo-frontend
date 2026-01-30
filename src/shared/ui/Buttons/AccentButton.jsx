import { colors } from "@/shared/lib/colors";
import { Button } from "@mui/material";

export const AccentButton = ({ children, type = "title", sx, ...props }) => {
  return (
    <Button
      sx={{
        fontWeight: 800,
        fontSize: type === "title" ? { xs: 13, md: 24 } : 14,
        color: colors.textColor,
        boxShadow:
          "0 3px 4px 0 rgba(0, 0, 0, 0.35), inset 0 3px 6px 0 rgba(0, 0, 0, 0)",
        borderRadius: 2,
        backgroundColor: colors.accentColor,
        pl: 2,
        pr: 2,
        ":hover": {
          boxShadow:
            "0 3px 4px 0 rgba(0, 0, 0, 0), inset 0 3px 6px 0 rgba(0, 0, 0, 0.55)",
        },
        transition: ".25s ease",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
