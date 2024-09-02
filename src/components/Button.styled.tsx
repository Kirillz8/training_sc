import { css, styled } from "styled-components";
import { ProjectTheme } from "../styles/Theme.styled";

type BtnPropsType = {
  color?: string;
  fontSize?: string;
  btnType: "primary" | "outlined";
  active?: boolean;
};

export const Btn = styled.button<BtnPropsType>`
  border: none;
  font-size: ${(props) => props.fontSize || "0.65rem"};
  font-weight: bold;
  border-radius: 5px;
  width: 86px;
  height: 30px;
  margin-left: 10px;

  ${(props) =>
    props.btnType === "primary" &&
    css<BtnPropsType>`
      background-color: ${ProjectTheme.colors.primary};
      color: snow;

      &:hover {
        background-color: transparent;
        color: ${ProjectTheme.colors.primary};
        border: 2px solid ${ProjectTheme.colors.primary};
      }
    `}

  ${(props) =>
    props.btnType === "outlined" &&
    css<BtnPropsType>`
      border: 2px solid ${ProjectTheme.colors.primary};
      color: ${ProjectTheme.colors.primary};
      background-color: transparent;

      &:hover {
        border: none;
        background-color: ${ProjectTheme.colors.primary};
        color: #fff;
      }
    `}
`;
