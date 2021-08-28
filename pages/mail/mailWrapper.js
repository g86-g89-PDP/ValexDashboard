import styled from "styled-components";

export const MailWrapper = styled.div`
    overflow-x: hidden;
    img{
        border-radius: 50%;
        padding: 6px;
        width: 100% !important;
    }
    .start{
        display: flex;
        justify-content: space-between;
        padding: 5px 10px;
    }
    .mailRu{
        color: #72726E !important;
    }

    .list{
        background-color: #1F2940;
        height: 100vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        border-radius: 10px;
        
        .listText{
            color: #737886;
            &:hover{
                color: white;
                cursor: pointer !important; 
            }
        }
    }

    .Mail{
        display: flex !important;
        align-items: center;
    }
    .btn{
        margin-left: 8px;
        color: white;
    }
    .humburger{
        background-color: #00B9FF;
    }
    .star{
        background-color: #EE335E;
    }
    .restart{
        background-color: #FBBC0B;
    }

    .complas{
        display: flex;
        justify-content: center;
        width: 230px;
        height: 40px;
        font-weight: bold;
        margin: 25px 0;
    }
    .mapp{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
        border-bottom: 1px solid white;
        span{
            padding: 10px;
        }
        p{
            padding: 10px 10px 0 10px;
        }
    }
    .inpi{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid gray;
        padding: 10px;
    }
    .userImg{
        height: 70px !important;
        width: 70px;
        border-radius: 50%;
        img{
            width: 100%;
        }
    }
    .mishka{
        display: flex;
        justify-content: start;
        align-items: center;
    }
    .Adrean{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
   .olcham{
       padding: 10px;
       border:  1px solid gray;
       p{
           color: #737886;
       }
   }
   .tables{
       background-color: #1F2940;
       color: white !important;
       padding: 30px;
       border-radius: 10px;
   }
   .inbox{
       display: flex;
       justify-content: space-between;
       align-items: center;
       .miniInbox{
           display: flex !important;
           align-items: center !important;
           .btn{
                margin: 0;
            }
            .aiLeft{
                background-color: #424A5E;
            }
            .aiRight{
                background-color: #555C6E;
            }
       }
      
   }
   .semeone{
       color: #B7B3B0;
       font-weight: bold;
   }
   .color{
       color: #363F53;
     
   }
  
  

   @media screen and (max-width: 900px){
       .complas{
            width: 180px !important;
       }
      
   }
 
`;