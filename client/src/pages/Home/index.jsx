import React from "react";
import HeroSlider from "../../components/HeroSlider";
import Courses from "./Courses";
import OurServices from "./OurServices";
import UpcomingEvents from "./UpcomingEvents";
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HeroSlider />
      <Courses />
      <OurServices />
      <UpcomingEvents />
    </div>
  );
};

export default Home;
