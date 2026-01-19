import styles from "./QuizCard.module.scss";
import { Paper, Typography, IconButton, Box } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const iconConfig = [
  {
    icon: PlayArrowIcon,

    className: styles.play,
    label: "play",
  },
  { icon: EditIcon, className: styles.edit, label: "edit" },
  {
    icon: DeleteIcon,

    className: styles.delete,
    label: "delete",
  },
];
const QuizCard = ({ id, title, onDeleteClick, onEditClick, onPlay }) => {
  return (
    <Paper
      className={styles.cardContainer}
      elevation={1}
      onClick={(e) => onEditClick(e, id)}
    >
      <Typography variant="h6" className={styles.title}>
        {title}
      </Typography>
      <Box display="flex" gap={1}>
        {iconConfig.map(({ icon: Icon, className, label }, i) => (
          <IconButton
            key={label}
            size="small"
            className={`${styles.actionButton} ${className}`}
            onClick={(e) =>
              i === 0
                ? onPlay
                : i === 1
                ? onEditClick(e, id)
                : onDeleteClick(e, id)
            }
            aria-label={label}
          >
            <Icon />
          </IconButton>
        ))}
      </Box>
    </Paper>
  );
};

export default QuizCard;
