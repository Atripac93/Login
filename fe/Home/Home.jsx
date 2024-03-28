import React from "react";
import MainLayout from "../Layouts/MainLayout";
import MainContent from "../Log/Log";
import { jwtDecode } from "jwt-decode";

const Home = () => {
  const session = JSON.parse(localStorage.getItem("auth"));
  const decodedSession = jwtDecode(session);

  return (
    <MainLayout>
      <MainContent />
    </MainLayout>
  );
};

export default Home;
