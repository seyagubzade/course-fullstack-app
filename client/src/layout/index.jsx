import React from "react";
import Header from "./Header";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import styled from "styled-components";
import Footer from "./Footer";
import Add from "../pages/Add";
import Detail from "../pages/Detail";
import Wishlist from "../pages/Wishlist";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <StyledWrapper>
      <Header />
      <StyledContent>
        <Routes>
          <Route path="*" element={<p>Not found</p>} />
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </StyledContent>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div``;

const StyledContent = styled.div`
  padding-top: 80px;
`;

export default Layout;
