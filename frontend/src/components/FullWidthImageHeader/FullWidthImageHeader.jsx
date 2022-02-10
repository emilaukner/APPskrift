import React from "react";
import { StyledDiv } from "./style";

const FullWidthImageHeader = (props) => {
  return (
    <>
      <StyledDiv>
        <div>
            <img src={ props.imgHeader } style={{width:"100%", height:220, objectFit:"cover"}}></img>
        </div>
      </StyledDiv>
    </>
  );
};
export default FullWidthImageHeader;
