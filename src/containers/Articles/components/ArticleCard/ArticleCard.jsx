import React from "react";
import useStyles from "./styles";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import { ROUTES_PATH } from "../../../../router/constants";
import { actions } from "../../../../store/actions";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";

const ArticleCard = ({ title, description, image_url, id }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleRemoveArticle = () => {
    dispatch(actions.REMOVE_ARTICLE.REQUEST(id));
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={image_url}
        title={title}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(push(`${ROUTES_PATH.ARTICLES}/${id}`))}
        >
          View
        </Button>
        <Button
          onClick={() => dispatch(push(`${ROUTES_PATH.ARTICLES}/${id}`))}
          size="small"
          color="primary"
        >
          Edit
        </Button>
        <Button size="small" color="secondary" onClick={handleRemoveArticle}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
