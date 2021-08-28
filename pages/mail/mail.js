import React from "react";
import { MailWrapper } from "./mailWrapper";
import { BiAlignJustify } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { RiRestartLine } from "react-icons/ri";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BsFolderFill } from "react-icons/bs";
import { RiSpamLine } from "react-icons/ri";
import { BsTrash } from "react-icons/bs";
import { GoFileSubmodule } from "react-icons/go";
import { AiOutlineTag } from "react-icons/ai";
import data from "../../containers/Mail/dataMail";
import Dashboard from "../../containers/Dashboard/Dashboard";

const Mail = () => {
  return (
    <Dashboard menu="/mail">
      <MailWrapper>
        <div className="start">
          <div className="Mail">
            <h2>Mail</h2>
            <h4 className="mailRu">/Mail</h4>
          </div>
          <div className="d-flex">
            <div>
              <button className="btn humburger">
                <BiAlignJustify />
              </button>
              <button className="btn star">
                <AiFillStar />
              </button>
              <button className="btn restart">
                <RiRestartLine />
              </button>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-3  list">
            <div className="lists">
              <div className=" btn btn-primary complas">
                <p>COMPOSE</p>
              </div>
              {data.map((v) => {
                return (
                  <div key={v.number} className="mapp">
                    <div className="d-flex">
                      <span className="listText">{v.icon}</span>
                      <p className="listText">{v.name}</p>
                    </div>
                    <p className="listText">{v.number}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-9 col-md-9 ">
            <div className="tables">
              <div className="inbox">
                <div className="have">
                  <h1>Inbox</h1>
                  <p>You have 2 unread messages</p>
                </div>
                <div className="miniInbox">
                  <div className="mt-3">
                    <p>1-50 of 1200</p>
                  </div>
                  <div>
                    <button className="btn aiLeft">
                      <AiOutlineLeft />
                    </button>
                    <button className="btn aiRight">
                      <AiOutlineRight />
                    </button>
                  </div>
                </div>
              </div>

              <div className="inpi">
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>
                <div>
                  <RiRestartLine className="me-3" />{" "}
                  <BsFolderFill className="me-3" />{" "}
                  <RiSpamLine className="me-3" /> <BsTrash className="me-3" />{" "}
                  <GoFileSubmodule className="me-3" />{" "}
                  <AiOutlineTag className="me-3" />
                </div>
              </div>
              <div className="olcham">
                <div className="d-flex">
                  <div className="mishka">
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />{" "}
                      <AiFillStar className="color" />
                    </div>
                    <div className="userImg">
                      <img
                        src="https://avatars.mds.yandex.net/get-zen_doc/1550999/pub_5d6686cd3f548700add09167_5d66ae90ecfb8000acd877ab/scale_1200"
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="Adrean">
                      <span>Adrean Monino</span>
                      <div className="d-flex">
                        <span>
                          <AiOutlinePaperClip />{" "}
                        </span>
                        <span>11:30am</span>
                      </div>
                    </div>
                    <div>
                      <span className="semeone">
                        Someone who believes in
                        <br /> you
                      </span>
                    </div>
                    <div>
                      <p>
                        enean commodo li gula eget dolor cum socia eget dolor
                        enean commodo li gula eget dolor cum socia eget dcum
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="olcham">
                <div className="d-flex">
                  <div className="mishka">
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />{" "}
                      <AiFillStar className="color" />
                    </div>
                    <div className="userImg">
                      <img
                        src="https://im0-tub-ru.yandex.net/i?id=6691b0147eb6a0ac1095b24bd0b4035f-l&ref=rim&n=13&w=640&h=640"
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="Adrean">
                      <span>Adrean Monino</span>
                      <div className="d-flex">
                        <span>11:30am</span>
                      </div>
                    </div>
                    <div>
                      <span className="semeone">
                        Someone who believes in
                        <br /> you
                      </span>
                    </div>
                    <div>
                      <p>
                        enean commodo li gula eget dolor cum socia eget dolor
                        enean commodo li gula eget dolor cum socia eget dcum
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="olcham">
                <div className="d-flex">
                  <div className="mishka">
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />{" "}
                      <AiFillStar className="color" />
                    </div>
                    <div className="userImg">
                      <img
                        src="https://i.pinimg.com/originals/ff/d9/b1/ffd9b14d983e73016d2de5cf497dc2ba.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="Adrean">
                      <span>Adrean Monino</span>
                      <div className="d-flex">
                        <span>
                          <AiOutlinePaperClip />{" "}
                        </span>
                        <span>11:30am</span>
                      </div>
                    </div>
                    <div>
                      <span className="semeone">
                        Someone who believes in
                        <br /> you
                      </span>
                    </div>
                    <div>
                      <p>
                        enean commodo li gula eget dolor cum socia eget dolor
                        enean commodo li gula eget dolor cum socia eget dcum
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="olcham">
                <div className="d-flex">
                  <div className="mishka">
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />{" "}
                      <AiFillStar className="color" />
                    </div>
                    <div className="userImg">
                      <img
                        src="https://sun9-63.userapi.com/impg/_qzX0Hs_Xfwu68Y9dKEXi5OSQqfGhN_tGvhBIA/CmNRBWt4pIk.jpg?size=604x604&quality=96&sign=f74f8c27f3eb991af56e540cdad023e0&type=album"
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="Adrean">
                      <span>Adrean Monino</span>
                      <div>
                        <span>11:30am</span>
                      </div>
                    </div>
                    <div>
                      <span className="semeone">
                        Someone who believes in
                        <br /> you
                      </span>
                    </div>
                    <div>
                      <p>
                        enean commodo li gula eget dolor cum socia eget dolor
                        enean commodo li gula eget dolor cum socia eget dcum
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MailWrapper>
    </Dashboard>
  );
};

export default Mail;
