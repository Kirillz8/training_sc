import { styled } from "styled-components";
import { ProjectTheme } from "../styles/Theme.styled";
import { FontPropsType } from "../App";

export const Header = styled.h1<FontPropsType>`
  font-size: ${(props) => props.fontSize || "1rem"};
  font-weight: 700;
  line-height: 1.8;
  color: ${ProjectTheme.colors.dark};
  margin-left: 10px;
`;
