import styled from "styled-components";

const StyledLoginPopup = styled.div`
	display: ${props => props.show ? "block" : "none"};
	position: absolute;
	left: 50%;
  transform: translate(-50%, 0);
	top: 40%;
`

export {
	StyledLoginPopup
}