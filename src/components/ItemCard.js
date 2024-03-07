import React from "react";
import {
  Card,
  CardContent,
  Collapse,
  Typography,
  IconButton,
  CardActions,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { makeStyles } from "@mui/styles";

function ItemCard({ id, index, title, subtitle, link, textList }) {
  const darkMode = index % 2 === 1;
  const useStyles = makeStyles({
    root: {
      maxWidth: 500,
      width: 500,
      borderRadius: "0 !important",
      backgroundColor: darkMode ? "#24305E !important" : "white !important",
    },
    title: {
      fontSize: "2em !important",
      lineHeight: "1 !important",
      margin: "32px 0 !important",
      color: darkMode ? "white" : "#24305E",
    },
    subtitle: {
      color: darkMode ? "white" : "#24305E",
    },
    link: {
      color: darkMode ? "#A8D0E6" : "#374785",
      fontWeight: "bolder",
      "&:hover": {
        color: "#F76C6C",
      },
    },
    text: {
      margin: "8px 0 !important",
      color: darkMode ? "#C2C2C2 !important" : "#818181 !important",
    },
    actions: {
      justifyContent: "center",
    },
    icon: {
      color: darkMode ? "#A8D0E6" : "#374785",
    },
  });
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} elevation={0}>
      <CardContent>
        <Typography
          gutterBottom
          variant="overline"
          component="div"
          className={classes.title}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            gutterBottom
            variant="subtitle1"
            component="div"
            className={classes.subtitle}
          >
            {subtitle}
          </Typography>
        )}
        {link && (
          <Typography variant="body2">
            <a href={link} rel="noreferrer" target="_blank" className={classes.link}>
              {link}
            </a>
          </Typography>
        )}
        <Collapse in={expanded}>
          {textList.map((text, i) => (
            <Typography
              key={`${id}-${i}`}
              variant="body2"
              className={classes.text}
            >
              {text}
            </Typography>
          ))}
        </Collapse>
      </CardContent>
      <CardActions className={classes.actions}>
        <IconButton onClick={handleExpand}>
          {expanded ? (
            <ExpandLessIcon className={classes.icon} />
          ) : (
            <ExpandMoreIcon className={classes.icon} />
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ItemCard;
