import React from "react";
import "./index.css";

import { Layout } from "./components/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import { About } from "./pages/about";
import { Blog } from "./pages/blog";
import { Contact } from "./pages/contact";
import { CoursePage } from "./pages/course";
import { Page } from "./pages/page";
import { Box } from "@mui/material";

const pages = [
  { title: "home_page", component: <HomePage />, path: "/" },
  { title: "about", component: <About />, path: "/about" },
  { title: "blog", component: <Blog />, path: "/blog" },
  { title: "contact", component: <Contact />, path: "/contact" },
  { title: "course", component: <CoursePage />, path: "/course" },
  { title: "page", component: <Page />, path: "/page" },
];

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {pages.map((page) => (
            <Route path={page.path} element={page.component} key={page.title} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
