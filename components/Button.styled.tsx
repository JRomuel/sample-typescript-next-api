import styled, { keyframes } from "styled-components";

type Props = {
    color?: string;
    size?: string;
    variant?: string;
}
// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Button = styled.button.attrs<Props>(props => ({
    size: props.size || "1em",
  }))<Props>`
    background: ${(props) => {
        switch (props.variant) {
        case "primary":
            return "palevioletred";
        case "secondary":
            return "red";
        case "accent":
            return "#13544e";
        default:
            return "blue";
    }}};
    color: #fff;
    border-radius: 9999px;
    box-sizing: border-box;
    border: 1px solid transparent;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    outline: 0 solid transparent;
    margin: ${props => props.size};
    padding: ${props => props.size};
    word-break: break-word;
    transition: all 300ms ease-in-out;
    animation: ${rotate} 2s linear infinite;
    &:hover{
        background:white;
        color: black;
        
    }
`;

export const FacebookButton = styled(Button)`
    background: #315197;
    color: white;
    border: 0;
    text-decoration: none;
`;

