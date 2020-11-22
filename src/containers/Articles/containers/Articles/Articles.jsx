import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ArticleCard } from "../../components/ArticleCard";
import { getAllArticles } from "../../store/selectors";
import { actions } from "../../../../store/actions";
import { useTranslation } from "react-i18next";
import useStyles from "./styles";
import { push } from "connected-react-router";
import { ROUTES_PATH } from "../../../../router/constants";
import { Container, Grid, Button } from "@material-ui/core";

const Articles = () => {
  const dispatch = useDispatch();
  const articles = useSelector(getAllArticles());
  const { t } = useTranslation();
  const classes = useStyles();

  // const handleAddArticle = () => {
  //   const article = {
  //     title: `Article title ${uuidv4()}`,
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     image_url: "https://picsum.photos/id/237/200/300",
  //   };
  //   dispatch(actions.ADD_ARTICLE.REQUEST(article));
  // };

  return (
    <div>
      <div>
        <Container>
          <div className={classes.heroButtons}>
            <Grid container spacing={2}>
              <Grid item>
                <Button
                  onClick={() => dispatch(push("/articles/new"))}
                  variant="contained"
                  color="primary"
                >
                  {t("Add new article")}
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Container className={classes.cardGrid}>
        <Grid container spacing={4}>
          {articles.map((article) => {
            return (
              <Grid item key={article.id} xs={12} sm={6} md={4}>
                <ArticleCard key={article.id} {...article} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Articles;
