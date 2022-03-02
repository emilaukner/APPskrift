import styled from "styled-components";

const StyledLoginPopup = styled.div`
	display: ${props => props.show ? "block" : "none"};
	z-index: 99;
`

export {
	StyledLoginPopup
}