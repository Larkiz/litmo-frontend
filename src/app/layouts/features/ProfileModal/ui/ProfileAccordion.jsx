import { useColors } from "@/shared/hooks/useColors";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

export const ProfileAccordion = ({ title, children }) => {
  const colors = useColors();
  return (
    <Accordion sx={{ width: "100%", backgroundColor: colors.elementBg }}>
      <AccordionSummary
        // expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography sx={{ color: colors.textColor }} component="span">
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ "*": { color: colors.textColor } }}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};
