import React from "react";
import { StyledDiv } from "./style";
import Food2 from "../../assets/Food2.png";

const FullWidthImageHeader = () => {
  return (
    <>
      <StyledDiv>
        <div>
            <img src={ Food2 } style={{width:"100%", height:220, objectFit:"cover"}}></img>
        </div>
            
      </StyledDiv>
    </>
  );
};

export default FullWidthImageHeader;