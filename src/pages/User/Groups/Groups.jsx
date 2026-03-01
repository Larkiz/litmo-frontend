import { Box } from "@mui/material";
import { Typography } from "@/shared/ui/Typography/Typography";
import { useSelector } from "react-redux";
import { Masonry } from "@mui/lab";
export const Groups = () => {
  const groups = useSelector((store) => store.profileStore.profile.groups);
  console.log(groups);

  return (
    <Box>
      <Typography>Группы</Typography>
      <Masonry columns={4} spacing={2}>
        {groups.map((group, index) => (
          <Box
            key={group.uid}
            sx={{ backgroundColor: group.color, width: 128, p: 1 }}
          >
            <Typography sx={{ backgroundColor: "#000000b2", p: 1 }}>
              {group.name}
            </Typography>
          </Box>
        ))}
      </Masonry>
    </Box>
  );
};
