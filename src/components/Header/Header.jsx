import "./Header.css";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import { useData } from "../../contexts/DataProvider";
import { SiTaichilang } from "react-icons/si";

export const Header = () => {
  const { dispatch } = useData();
  const navigate = useNavigate();
  const getActiveStyle = ({ isActive }) => {
    return { color: isActive ? "white" : "" };
  };

  return (
    <nav>
      <div className="nav-logo-home-button">
        <NavLink style={getActiveStyle} to="/">
          <SiTaichilang />
          <span className="brand-name">StreetBeat</span>
        </NavLink>
      </div>

      <div className="nav-input-search">
        <input
          onChange={(e) =>
            dispatch({ type: "SEARCH", payload: e.target.value })
          }
          onKeyDown={(e) => {
            e.key === "Enter" && navigate("/product-listing");
          }}
          placeholder="Поиск"
        />
        <button>
          <GrSearch />
        </button>
      </div>
    </nav>
  );
};
