import styled from "styled-components";

const DashboardWrapper = styled.div`
  display: flex;
  .sidebar {
    border-right: 2px solid #333c51 !important;
    flex-shrink: 0;
    width: 60px;
    overflow: hidden;
    background: #1f2940 !important;
    transition: 0.3s;
    height: 100vh;
    position: sticky;
    top: 0;
    padding-top: 20px;
    padding-bottom: 20px;
    transition: 0.5s;
    &:hover {
      width: 300px;
      padding: 20px;
    }
    &.show {
      width: 250px;
      padding: 20px;
    }

    span {
      font-size: 13px;
    }

    .imgLogo {
      position: absolute;
      top: 10px;
      left: 50px;
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
          &.active:hover {
            .MuiButtonBase-root {
              color: blue !important;
            }
          }
        }
      }
    }
    .user {
      width: 65px;
      height: 65px;
      border-radius: 100%;
      border: 2px solid #0caadf !important;
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

      input {
        background-color: none !important;
        border-radius: 30px;
        border-outside: none;
        border: none;
        box-shadow: none;
      }

      .img-user {
        border-radius: 100%;
        width: 40px;
        height: 40px;
        margin-right: 15px;
      }

      .icons {
        cursor: pointer;
      }
    }
  }
`;

export default DashboardWrapper;
