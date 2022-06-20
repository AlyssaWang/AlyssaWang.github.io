import React, { useEffect } from "react";
import { Box, List, ListItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TitleSidebar from "../components/TitleSidebar";
import cake1 from "../files/cake1.jpg";
import cake2 from "../files/cake2.jpg";
import cake3 from "../files/cake3.jpg";
import cake4 from "../files/cake4.jpg";
import cake5 from "../files/cake5.jpg";
import cake6 from "../files/cake6.jpg";
import cake7 from "../files/cake7.jpg";
import cake8 from "../files/cake8.jpg";


const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "fit-content",
    height: "100%",
    backgroundColor: "#d9f3c4",
  },
  title: {
    color: "#24305E",
    padding: "10px",
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      color: "white",
    },
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

function About() {
  const classes = useStyles();
  const [cakes, setCakes] = React.useState([]);

  useEffect(() => {
    setCakes([cake1, cake2, cake3, cake4, cake5, cake6, cake7, cake8]);
  }, []);

  const link = (url, text) => (
    <a href={url} target="_blank" rel="noreferrer" className={classes.link} >
      {text}
    </a>
  );

  return (
    <Box className={classes.root}>
      <TitleSidebar
        title="About Me"
        file=""
        text={[
          "Some hobbies of mine include cross-stitch, sending postcards, solving crosswords, and critically analyzing pop literature and media.",
          <span>I also run a cake microblog. Here are some memorable cakes from the #caketour. Find me on Instagram at {link('https://www.instagram.com/caketour.by.alyssa/', '@caketour.by.alyssa')}.</span>,
          "Contact me at: alyssa.c.wang@gmail.com",
        ]}
      />
      <Box className={classes.cardContainer}>
        <List>
          {cakes.map((cake, i) => (
            <ListItem key={i}>
              <img src={cake} width="400" height="100%" alt="cake pictures"></img>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default About;
