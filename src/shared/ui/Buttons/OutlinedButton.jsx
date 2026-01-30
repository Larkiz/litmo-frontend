import { Button } from "@mui/material";

export const OutlinedButton = ({ children, type = "title", sx, ...props }) => {
  return (
    <Button
      sx={{
        fontWeight: 900,
        fontSize: type === "title" ? { xs: 13, md: 24 } : 14,
        color: "rgb(63, 63, 63)",
        boxShadow: "0 3px 4px 0 rgba(0, 0, 0, 0.35)",
        border: "2px solid rgb(63, 63, 63)",
        borderRadius: 2,
        backgroundColor: "#FFF",
        pl: 2,
        pr: 2,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
