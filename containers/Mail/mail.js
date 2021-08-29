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
import { GoFileSymlinkDirectory } from "react-icons/go"
import { GoFileDirectory } from "react-icons/go"
import { AiFillFileAdd } from "react-icons/ai"
import { IoLogoTwitter } from "react-icons/io"
import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import data from "./dataMail";


const Mail = () => {
  return (
    
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
              <div>
                <div>
                  <p className="text-light mt-3 mb-0">Label</p>
                  <div className="mapp">
                    <div className="d-flex">
                      <span className="listText"><GoFileSymlinkDirectory/></span>
                      <p className="listText">Social</p>
                    </div>
                    <p className="listText">10</p>
                  </div>
                  <div className="mapp">
                    <div className="d-flex">
                      <span className="listText"><GoFileDirectory/></span>
                      <p className="listText">Promotions</p>
                    </div>
                    <p className="listText">22</p>
                  </div>
                  <div className="mapp">
                    <div className="d-flex">
                      <span className="listText"><AiFillFileAdd/></span>
                      <p className="listText">Updates</p>
                    </div>
                    <p className="listText">17</p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-light mt-3 mb-0">Tabs</p>
                  <div className="mapp">
                    <div className="d-flex">
                      <span className="listText"><IoLogoTwitter/></span>
                      <p className="listText">Twitter</p>
                    </div>
                    <p className="listText">2</p>
                  </div>
                  <div className="mapp">
                    <div className="d-flex">
                      <span className="listText"><FaGithub/></span>
                      <p className="listText">Github</p>
                    </div>
                    <p className="listText">32</p>
                  </div>
                  <div className="mapp">
                    <div className="d-flex">
                      <span className="listText"><FcGoogle/></span>
                      <p className="listText">Google</p>
                    </div>
                    <p className="listText">7</p>
                  </div>
                </div>
              </div>
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
                      <span>Albert Ansing</span>
                      <div className="d-flex">
                        <span>11:30am</span>
                      </div>
                    </div>
                    <div>
                      <span className="semeone">
                        Here's What You Missed This 
                        <br />  Week
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
                      <span>Carla Gudeng</span>
                      <div className="d-flex">
                        <span>
                          <AiOutlinePaperClip />{" "}
                        </span>
                        <span>11:30am</span>
                      </div>
                    </div>
                    <div>
                      <span className="semeone">
                        4 Ways to Optimize Your 
                        <br /> Search
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
                        src="https://yt3.ggpht.com/a/AATXAJzrhm0yrH5yUI4voXY_Ovg05UYf9e5_aAEyIA=s900-c-k-c0xffffffff-no-rj-mo"
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
   
  );
};

export default Mail;
