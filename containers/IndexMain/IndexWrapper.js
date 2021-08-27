import styled from 'styled-components'

export const IndexWrapper = styled.div`

.indexMainPage {
    width: 100%;
    background-color: #141B2D;

    .smallText{
            font-size: 13px;
            color: silver;
        }
    .header {
        display: flex;
        justify-content: space-between;
        color: white;
        padding: 20px 15px;

        
    }
    .cards {
       position: relative;
       width: 230px;
       padding: 10px 10px 20px 10px;
      
       .titleCard {
           color: white;
           font-size: 14px;
           font-weight: bold;
           font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
       }
        .iconCount {
            position: absolute;
            top: 50px;
            right: 10px;
        }
    }

}
`