import React from "react";
import MainLayout from "../layouts/MainLayout";
import MainContent from "../components/homePage/MainContent";
import { jwtDecode } from "jwt-decode";

const Home = () => {
  const session = JSON.parse(localStorage.getItem("auth"));
  const decodedSession = jwtDecode(session);

  return (
    <>
      <MainLayout>
        <MainContent />
      </MainLayout>
    </>
  );
};

export default Home;

//Pagina Home all´interno della quale mi sono importato MainLayout e MainContent affinche´ li possa trasferire
//anche in altre pagine qualora ne abbia bisogno. Nel MainContent ho inserito l´intera struttura dell`homePage
