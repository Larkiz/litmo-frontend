import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  ListItemButton,
  styled,
} from "@mui/material";
import { Typography } from "@/shared/ui/Typography/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NavLink } from "react-router";
const AccordionStyled = styled((props) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: 0,
}));

export const ExpandRoute = ({ handleDrawerClose, route }) => {
  return (
    <AccordionStyled>
      <AccordionSummary
        component={ListItemButton}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography variant="body2">{route.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {route.element.map((route, key) => (
          <ListItemButton
            key={key}
            component={NavLink}
            className="sidebar-link"
            to={route.link}
            sx={{ svg: { color: "#96755aff" } }}
            onClick={handleDrawerClose}
          >
            {route.icon}
            <Typography sx={{ fontSize: 15 }} variant="body2">
              {route.name}
            </Typography>
          </ListItemButton>
        ))}
      </AccordionDetails>
    </AccordionStyled>
  );
};
