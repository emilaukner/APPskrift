import styled from "styled-components";

const StyledProfilePopup = styled.div`
	display: ${props => props.show ? "block" : "none"};
`

export {
	StyledProfilePopup
}