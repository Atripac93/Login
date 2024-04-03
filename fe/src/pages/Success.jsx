import React from "react";

export const Success = () => {
  const params = new URLSearchParams(window.location.search);

  const token = params.get("token");
  return <div>Il tuo token e´ {token}</div>;
};
