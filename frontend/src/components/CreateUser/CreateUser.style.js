import styled from "styled-components";

const StyledCreateUser = styled.div`
	visibility: ${(props) => props.show ? "visible" : "hidden"};
	z-index: 100;
`

export {
	StyledCreateUser
}