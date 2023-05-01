import React from "react";
import { Hero } from "../../components/hero";
import { FeaturedCourses } from "../../components/featuredCourses";
import { FeaturedCards } from "../../components/featuredCards";
import { Benefits } from "../../components/benefits";
import { Become } from "../../components/become";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedCourses />
      <FeaturedCards />
      <Benefits />
      <Become />
    </>
  );
};
