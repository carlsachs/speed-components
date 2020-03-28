import styled from "styled-components";

export default styled.button`
    background: rgb(0,89,204);
    background: radial-gradient(circle, rgba(0,89,204,0.6530987394957983) 0%, rgba(239,249,255,0.45702030812324934) 100%);
    width: 150px;
    border: none;
    border-radius: 5px;
    height: 40px;
    :hover {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);    
    }
`;