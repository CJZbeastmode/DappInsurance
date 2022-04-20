import styled from "styled-components";

const Button = styled.button`
    font-size: 18px;
    height: 50px;
    width: 200px;
    background-color: white;
    color: #d674c9;
    padding: 5px 15px;
    border-radius: 10px;
    border: 1px solid #d674c9;
    outline: 0;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    &:hover {
        background-color: #d674c9;
        color: white;
    }
    &:disabled {
        cursor: default;
        opacity: 0.7;
    }
`;

export default Button;