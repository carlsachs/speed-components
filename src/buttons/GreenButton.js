import styled from "styled-components";

export default styled.button`
    background: rgb(87,150,97);
    background: radial-gradient(circle, rgba(87,150,97,0.6194852941176471) 0%, rgba(242,251,243,0.45702030812324934) 100%);
    width: 150px;
    border: none;
    border-radius: 5px;
    height: 40px;
    :hover {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);    
    }
`;