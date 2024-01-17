import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { AddNew, GetAll } from "../../store/course/api_actions";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet";

const Add = () => {
  const dispatch = useDispatch();
  const { courses, loading, error } = useSelector((state) => state.course);
  const navigate = useNavigate();

  const getAllData = async () => {
    dispatch(GetAll());
  };
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="container pt-5">
      <Helmet>
        <title>Add new product</title>
      </Helmet>
      <h1>Add New Item</h1>
      <Formik
        initialValues={{
          title: "",
          author: "",
          desc: "",
          price: 0,
          image: "",
          userImg: "",
        }}
        onSubmit={async (values) => {
          dispatch(AddNew(values));
          navigate("/");
        }}
      >
        <Form>
          <div class="form-group mb-3">
            <label htmlFor="title">Title</label>
            <Field
              id="title"
              name="title"
              placeholder="Title"
              className="form-control"
            />
            {/* <small id="titleHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
          </div>
          <div class="form-group mb-3">
            <label htmlFor="author">Author</label>
            <Field
              id="author"
              name="author"
              placeholder="Author"
              className="form-control"
            />
          </div>
          <div class="form-group mb-3">
            <label htmlFor="desc">Description</label>
            <Field
              id="desc"
              name="desc"
              placeholder="Description"
              className="form-control"
            />
          </div>
          <div class="form-group mb-3">
            <label htmlFor="price">Price</label>
            <Field
              id="price"
              name="price"
              type="number"
              placeholder="Price"
              className="form-control"
            />
          </div>
          <div class="form-group mb-3">
            <label htmlFor="image">Image</label>
            <Field
              id="image"
              name="image"
              placeholder="Image"
              className="form-control"
            />
            <small className="form-text text-muted">Paste URL here</small>
          </div>
          <div class="form-group mb-3">
            <label htmlFor="userImg">Author Image</label>
            <Field
              id="userImg"
              name="userImg"
              placeholder="Author Image"
              className="form-control"
            />
            <small className="form-text text-muted">Paste URL here</small>
          </div>

          <button className="btn btn-dark" type="submit">
            Add product
          </button>
        </Form>
      </Formik>
      <br />
      <br />
      <h3>All product list</h3>
      {courses ? (
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Author</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((item, index) => (
              <tr key={item._id}>
                <th scope="row">{index + 1}</th>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>{item.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        "Not found"
      )}
    </div>
  );
};

export default Add;
