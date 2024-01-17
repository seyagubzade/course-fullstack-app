import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteById, GetAll } from "../../../store/course/api_actions";
import { Link } from "react-router-dom";
import "./styles.scss";
import { addToWishlist } from "../../../store/wishlist/wishlistSlice";

const Courses = () => {
  const dispatch = useDispatch();
  const { courses, loading, error } = useSelector((state) => state.course);
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const getAllData = async () => {
    dispatch(GetAll());
  };
  useEffect(() => {
    getAllData();
  }, []);
  useEffect(() => {
    setFilteredData(() => {
      return courses.filter((course) =>
        course.title.toLowerCase().includes(searchValue.toLowerCase().trim())
      );
    });
  }, [courses, searchValue]);
  return (
    <div className="courses-section">
      <div className="container">
        <div className="section-header mb-3">
          <div className="divider"></div>
          <h3>Popular Courses</h3>
        </div>
        <div className="content">
          <div className="filter-section mb-5">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <div className="row pt-3">
            {loading ? (
              <div class="spinner-border" role="status">
                <span class="sr-only"></span>
              </div>
            ) : courses ? (
              filteredData?.map((item) => (
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="card mt-4">
                    <img src={item.image || "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"} class="card-img-top" alt="card-img" style={{height:"250px", objectFit:"cover"}}/>
                    <div class="card-body">
                      <Link to={`/detail/${item._id}`}>
                        <h5 class="card-title">{item.title}</h5>
                      </Link>
                      <p class="card-text">{item.desc}</p>
                      <div className="actions">
                        <button className="btn btn-outline-dark" onClick={()=>{
                            dispatch(DeleteById(item._id))
                        }}>Delete</button> {" "}
                        <button className="btn btn-dark" onClick={()=>{
                            dispatch(addToWishlist(item))
                        }}>Add to wishlist</button>
                      </div>
                    </div>
                    <div className="card-bottom d-flex align-items-center">
                      <div className="author-image">
                        <img
                          src={item.userImg}
                          alt="author-img"
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div className="author-info">
                        <h5>
                          {item.author}, <span>Author</span>
                        </h5>
                      </div>
                      <div className="price">${item.price}</div>
                    </div>
                  </div>
                </div>
              ))
            ) : error ? (
              <div class="alert alert-danger" role="alert">
                {error.message}
              </div>
            ) : (
              <div class="alert alert-light" role="alert">
                Not Found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
