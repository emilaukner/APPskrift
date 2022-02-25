import styled from "styled-components";

const StyledLoginPopup = styled.div`
	display: ${props => props.show ? "block" : "none"};
`

export {
	StyledLoginPopup
}