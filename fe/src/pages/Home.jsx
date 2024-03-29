import React from "react";
import MainLayout from "../layouts/MainLayout";
import MainContent from "../components/homePage/MainContent";
import useSession from "../hooks/useSession";

const Home = () => {
  const loggedUser = useSession();
  console.log(loggedUser);
  return (
    <>
      <MainLayout>
        <MainContent />
      </MainLayout>
    </>
  );
};

export default Home;
