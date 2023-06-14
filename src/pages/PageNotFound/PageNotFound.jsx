import "./PageNotFound.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="no-items-container">
      <h2 className="page-heading">Страница не найдена!</h2>
    </div>
  );
};
