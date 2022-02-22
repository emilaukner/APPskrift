import styled from "styled-components";

const StyledLoginPopup = styled.div`
	visibility: ${props => props.show ? "true" : "false"};
	position: absolute;
	left: 50%;
  transform: translate(-50%, 0);
	top: 40%;
`

export {
	StyledLoginPopup
}