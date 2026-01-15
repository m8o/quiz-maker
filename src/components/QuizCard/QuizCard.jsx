import React from "react";
import { Card, CardContent, Box, IconButton, styled } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const iconConfig = [
  { icon: PlayArrowIcon, color: "success", label: "play" },
  { icon: EditIcon, color: "primary", label: "edit" },
  { icon: DeleteIcon, color: "error", label: "delete" },
];
const BorderedIconButton = styled(IconButton)(({ theme }) => ({
  boxShadow: theme.shadows[1],
  "&:hover": {
    boxShadow: theme.shadows[4],
  },
}));
const QuizCard = ({ title, onPlay, onEdit, onDelete }) => {
  return (
    <Card sx={{ maxWidth: "800px", alignSelf: "center", width: "100%" }}>
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            "&hover": {
              cursor: "pointer",
            },
          }}
          onClick={onPlay}
        >
          <Box
            sx={{
              typography: "h6",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              // maxWidth: "70%", // Adjust as needed
            }}
          >
            {title}
          </Box>
          <Box display="flex" gap={1}>
            {iconConfig.map(({ icon: Icon, color, label }, i) => (
              <BorderedIconButton
                key={label}
                size="small"
                color={color}
                onClick={i === 0 ? onPlay : i === 1 ? onEdit : onDelete}
                aria-label={label}
              >
                <Icon />
              </BorderedIconButton>
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default QuizCard;
