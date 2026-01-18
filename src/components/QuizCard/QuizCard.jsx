import styles from "./QuizCard.module.scss";
import { Paper, Typography, IconButton, Box } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
// const iconConfig = [
// {
//   icon: PlayArrowIcon,

//   className: styles.play,
//   label: "play",
// },
// { icon: EditIcon, className: styles.edit, label: "edit" },
// {
//   icon: DeleteIcon,

//   className: styles.delete,
//   label: "delete",
// },
// ];
const QuizCard = ({ id, title, onDeleteClick, onEdit, onPlay }) => {
  return (
    <Paper className={styles.cardContainer} elevation={1}>
      <Typography variant="h6" className={styles.title}>
        {title}
      </Typography>
      <Box display="flex" gap={1}>
        {/* {iconConfig.map(({ icon: Icon, className, label }, _i) => ( */}
        <IconButton
          key={"delete"}
          size="small"
          // className={`${styles.actionButton} ${className}`}
          className={`${styles.actionButton} ${styles.delete}`}
          // onClick={i === 0 ? onPlay : i === 1 ? onEdit : onDeleteClick}
          onClick={() => onDeleteClick(id)}
          // aria-label={label}
          aria-label={"delete"}
        >
          {/* <Icon /> */}
          <DeleteIcon />
        </IconButton>
        {/* ))} */}
      </Box>
    </Paper>
  );
};

export default QuizCard;
