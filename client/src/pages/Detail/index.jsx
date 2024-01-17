import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { DeleteById, GetById } from "../../store/course/api_actions";
import styled from "styled-components";
import { addToWishlist } from "../../store/wishlist/wishlistSlice";

const Detail = () => {
  const { id } = useParams();
  const { currentCourseItem, loading, error } = useSelector(
    (state) => state.course
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetById(id));
  }, [id]);
  return (
    <StyledWrapper>
      <div className="container">
        {loading ? (
          <div class="spinner-border" role="status">
            <span class="sr-only"></span>
          </div>
        ) : currentCourseItem ? (
          <div className="row ">
            <div className="col-12 col-md-6 col-lg-6">
              <img
                src={currentCourseItem.image}
                alt="item-img"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-6 p-4">
              <h3>{currentCourseItem.title}</h3>
              <p>Description: {currentCourseItem.title}</p>
              <p>Author: {currentCourseItem.author}</p>
              <p>Price: ${currentCourseItem.price}</p>
              <div className="actions">
                <button
                  className="btn btn-outline-dark"
                  onClick={() => {
                    dispatch(DeleteById(currentCourseItem._id));
                  }}
                >
                  Delete
                </button>{" "}
                <button className="btn btn-dark" onClick={()=>{
                    dispatch(addToWishlist(currentCourseItem))
                }}>Add to wishlist</button>
              </div>
            </div>
          </div>
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
    </StyledWrapper>
  );
};
const StyledWrapper = styled.div`
  padding-top: 80px;
`;

export default Detail;
