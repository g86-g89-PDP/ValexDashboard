import { faShopify } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faCreditCard,
  faHome,
  faMailBulk,
  faShoppingBasket,
  faTable,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, List, ListItem } from "@material-ui/core";
import React from "react";
import { Slide } from "react-awesome-reveal";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../redux/type";
import DashboardWrapper from "./DashboardWrapper";

const menus = [
  { id: "index", to: "/", title: "Index", icon: faHome },
  {
    id: "products",
    to: "/products",
    title: "Products",
    icon: faShoppingBasket,
  },
  {
    id: "productDetails",
    to: "/productDetails",
    title: "Product-Details",
    icon: faShopify,
  },
  { id: "card", to: "/card", title: "Card", icon: faCreditCard },
  { id: "mail", to: "/mail", title: "Mail", icon: faMailBulk },
  {
    id: "basicTables",
    to: "/basicTables",
    title: "Basic Tables",
    icon: faTable,
  },
];

const Dashboard = ({ children, menu }) => {
  const dispatch = useDispatch();

  const show = useSelector((state) => state.isSidebarShow);

  return (
    <DashboardWrapper>
      <div className={`sidebar ${(show && "show") || ""}`}>
        <div className="d-flex justify-content-center align-items-center">
          <img
            src="https://angular.spruko.com/valex/LTR/Leftmenu-Icon-Dark-Sidebar/assets/img/brand/logo-white.png"
            alt="not photo"
          />
        </div>
        <hr className="text-light" />
        <div></div>
        <List className="mt-5" component="nav">
          {menus.map((v, i) => (
            <li key={v.to}>
              <Slide delay={i * 30}>
                <Link href={`${v.to}`}>
                  <a className={`${menu === v.id ? "active" : ""}`}>
                    <ListItem button>
                      <FontAwesomeIcon icon={v.icon} className="me-2" />
                      {v.title}
                    </ListItem>
                  </a>
                </Link>
              </Slide>
            </li>
          ))}
        </List>
      </div>
      <div className="rightside">
        <header className="d-flex justify-content-between border-bottom">
          <div
            className="toggle"
            onClick={() => toggleMenu(dispatch)}
            variant="contained"
            disableElevation
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </header>
        <div className="content">{children}</div>
      </div>
    </DashboardWrapper>
  );
};

export default Dashboard;
