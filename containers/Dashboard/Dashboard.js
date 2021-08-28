import { faShopify } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faCreditCard,
  faEnvelope,
  faHome,
  faMailBulk,
  faSearch,
  faShoppingBasket,
  faTable,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Badge,
  Link,
  List,
  ListItem,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React from "react";
import { Slide } from "react-awesome-reveal";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../redux/actions";
import DashboardWrapper from "./DashboardWrapper";
import { FiMaximize } from "react-icons/fi";
import { RiMenu2Fill } from "react-icons/ri";
import Panel from "./Panel";

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
            className="imgLogo"
          />
        </div>
        <hr className="text-light mt-5" />
        <div className="d-flex justify-content-center align-items-center">
          <div className="div text-center">
            <img
              src="https://angular.spruko.com/valex/LTR/Leftmenu-Icon-Dark-Sidebar/assets/img/faces/6.jpg"
              alt=""
              className="mb-2 user"
            />
          </div>
          <div className={`title ${(show && "show") || ""}`}>
            <h6 className="text-white mb-0">Petey Cruiser</h6>
            <span className="text-muted">Premium Member</span>
          </div>
        </div>
        <List className="mt-5" component="nav">
          {menus.map((v, i) => (
            <li key={v.to}>
              <Slide delay={i * 30}>
                <Link href={`${v.to}`}>
                  <a className={`${menu === v.id ? "active" : ""}`}>
                    <ListItem button>
                      <FontAwesomeIcon icon={v.icon} className="me-3" />
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
        <header className="border-bottom">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div
                className="toggle me-5 pt-2"
                onClick={() => toggleMenu(dispatch)}
                variant="contained"
                disableElevation
              >
                <RiMenu2Fill className="text-white fs-4" />
              </div>

              <input
                type="text"
                className="form-control ps-4 bg-0 d-none d-md-block"
                placeholder="Search for anything..."
              />
              <button _ngcontent-ekf-c90 className="btn">
                <FontAwesomeIcon
                  _ngcontent-ekf-c90
                  className="d-none d-md-block text-white"
                  icon={faSearch}
                />
              </button>
            </div>
            <div>
              <Badge badgeContent={4} color="secondary" className="me-4">
                <FontAwesomeIcon
                  color="white"
                  className="icons"
                  icon={faEnvelope}
                />
              </Badge>
              <Badge className="me-3">
                <FiMaximize className="text-white icons" />
              </Badge>
              <Badge badgeContent={1} color="error" className="me-3">
                <FiMaximize className="text-white icons" />
              </Badge>
              <img
                src="https://angular.spruko.com/valex/LTR/Leftmenu-Icon-Dark-Sidebar/assets/img/faces/6.jpg"
                className="img-user"
                alt=""
              />

              <FontAwesomeIcon
                className="text-white me-4 icons"
                icon={faBars}
              />
              <Panel />
            </div>
          </div>
        </header>
        <div className="content ">
          {children}
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default Dashboard;
