import React, { useEffect, useState } from "react";
import "./index.scss";
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import { getArticle } from "../../store/selectors";
import { withRouter } from "react-router";
import { actions } from "../../../../store/actions";
import { ROUTES_PATH } from "../../../../router/constants";
import { Formik, Form, Field } from "formik";
import { FORMS } from "../../constants/forms";
// import CKEditor from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Article = ({
  match: {
    params: { id },
  },
}) => {
  const dispatch = useDispatch();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (id !== "new") {
      dispatch(actions.FETCH_ARTICLE.REQUEST(id));
    }
  }, [dispatch]);

  const selectedArticle = useSelector(getArticle(id));

  useEffect(() => {
    setArticle(selectedArticle);
  }, [selectedArticle]);

  // const handleChangeArticle = () => {
  //
  // };

  const handleRemoveArticle = () => {
    dispatch(actions.REMOVE_ARTICLE.REQUEST(article.id));
    dispatch(push(ROUTES_PATH.ARTICLES));
  };

  const handleSubmit = (data) => {
    if (id !== "new") {
      dispatch(actions.EDIT_ARTICLE.REQUEST(data));
    } else {
      article.image_url = "https://picsum.photos/id/237/200/300";
      dispatch(actions.ADD_ARTICLE.REQUEST(data));
    }
    dispatch(push(ROUTES_PATH.ARTICLES));
  };

  const getError = (errors, touched, name) => {
    if (errors[name] && touched[name]) {
      return <div>{errors[name]}</div>;
    }
    return null;
  };

  // const handleChangeCKEditor = (data) => {
  //   console.log(data);
  // };

  return (
    <div className="article">
      {/*<img src={article.image_url} alt={article.title} />*/}
      <Formik
        enableReinitialize={true}
        initialValues={article ? article : FORMS.ARTICLE.INIT}
        validateOnChange={true}
        validateOnBlur={true}
        validationSchema={FORMS.ARTICLE.SCHEMA}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const {
            errors,
            touched,
            values: { title, description },
          } = props;
          return (
            <Form>
              <Field name="title" id="title" type="text" value={title} />
              <div>{getError(errors, touched, "title")}</div>
              <Field
                name="description"
                id="description"
                type="text"
                // component={() =>
                //   <CKEditor
                //     name="description"
                //     id="description"
                //     editor={ClassicEditor}
                //     data={description}
                //     onChange={handleChangeCKEditor}
                //   />
                // }
              />
              <div>{getError(errors, touched, "description")}</div>

              <button type="submit">Save changes</button>
            </Form>
          );
        }}
      </Formik>
      <button onClick={handleRemoveArticle} type="button">
        Remove
      </button>
    </div>
  );
};

export default withRouter(Article);
