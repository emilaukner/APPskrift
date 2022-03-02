import styled from "styled-components";

const StyledProfilePopup = styled.div`
	display: ${props => props.show ? "block" : "none"};
	z-index: 99;
`

export {
	StyledProfilePopup
}