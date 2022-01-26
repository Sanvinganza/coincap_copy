import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import { Briefcase } from "./Briefcase";

export const Header = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpenBriefcase = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="header">
        <div className="header-container">
          <div className="menu">
            <div className="menu__item">
              <div className="subtitle"> Bitcoin </div>
              <div className="price"> $35,926.89 </div>
            </div>
            <div className="menu__item">
              <div className="subtitle"> Ethereum </div>
              <div className="price"> $2,363.37</div>
            </div>
            <div className="menu__item">
              <div className="subtitle"> Tether </div>
              <div className="price"> $1.00 </div>
            </div>
          </div>

          <IconButton size="small" onClick={handleOpenBriefcase}>
            <ShoppingCartIcon className="cartIcon"/>
          </IconButton>
          <Briefcase open={open} handleOpenBriefcase={handleOpenBriefcase}/>
        </div>
      </div>
    </>
  );
};
