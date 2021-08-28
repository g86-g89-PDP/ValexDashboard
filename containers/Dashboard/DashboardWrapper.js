import styled from "styled-components";

const DashboardWrapper = styled.div`
  display: flex;
  .sidebar {
    border-right: 2px solid #333c51 !important;
    flex-shrink: 0;
    width: 58px;
    overflow: hidden;
    background: #1f2940 !important;
    transition: 0.3s;
    height: 100vh;
    position: sticky;
    top: 0;
    padding-top: 20px;
    padding-bottom: 20px;
    transition: 0.4s;
    &:hover {
      width: 250px;
      padding: 20px;
    }
    &.show {
      width: 250px;
      padding: 20px;
    }

    .title {
      position: absolute;
      top: 156px;
      left: 77px;
    }

    span {
      font-size: 13px;
    }

    .imgLogo {
      position: absolute;
      top: 10px;
      left: 54px;
    }

    nav {
      li {
        a {
          .MuiButtonBase-root {
            display: block !important;
            padding: 10px 20px !important;
            border-radius: 6px !important;
            color: #d9dfe6 !important;
            margin-bottom: 10px !important;
            transition: 0.3s !important;
            min-width: 200px !important;
            overflow: hidden !important;
          }
          &.active {
            .MuiButtonBase-root {
              color: #2a7ef3 !important;
            }
          }
        }
      }
    }

    .div {
      width: 72px;
      height: 72px;
      border-radius: 100%;
      border: 2px solid #0caadf !important;
      .user {
        width: 67px;
        height: 67px;
        border-radius: 100%;
        border: 3px solid #1f2940 !important;
      }
    }
  }
  .rightside {
    background-color: #141b2d !important;
    flex: 1;
    position: relative;
    header {
      position: sticky;
      background: #1f2940 !important;
      padding: 10px;
      position: sticky;
      top: 0;
      background: rgba(255, 255, 255, 0.25);
      backdrop-filter: blur(2px);
      -webkit-backdrop-filter: blur(4px);
      border: 1px solid rgba(255, 255, 255, 0.18);
      z-index: 1000;

      .toggle {
        cursor: pointer;
        border-radius: 100%;
        text-align: center;
      }
      }

      input {
        width: 290px;
        border-color: #ffffff1a !important;
        border: 1px solid #e2e8f51a !important;
        background-color: #ffffff1a !important;
        border-radius: 30px;
       /* border-outline: 0; */
        border: none;
        box-shadow: none;
      }

      .img-user {
        border-radius: 100%;
        width: 40px;
        height: 40px;
        margin-right: 8px;
      }

      .icons {
        cursor: pointer;
      }
    }
  }
`;

export default DashboardWrapper;
