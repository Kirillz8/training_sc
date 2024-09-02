import { styled } from "styled-components";
import { ProjectTheme } from "../styles/Theme.styled";
import { FontPropsType } from "../App";

export const MainText = styled.p<FontPropsType>`
  font-size: ${(props) => props.fontSize || "10px"};
  font-weight: 500;
  line-height: 1.9;
  color: ${ProjectTheme.colors.regular};
  margin-left: 10px;
`;
