
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  body: {
    color: theme.palette.secondary.main,
  },
}));

function Books(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        Books
      </Typography>
      {props.books.map((book) => {
        return (
          <div key={book.id}>
            <Typography variant="h1">{book.title}</Typography>
            <Typography variant="body1" className={classes.body}>
              {book.body}
            </Typography>
          </div>
        );
      })}
    </div>
  );
}

export default Books;
