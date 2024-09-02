import React from "react";
import { styled } from "styled-components";
import { Img } from "./components/HeaderBackground.styled";
import { Header } from "./components/Header.styled";
import { MainText } from "./components/MainText.styled";
import picture from "./img/Rectangle.png";
import { ProjectTheme } from "./styles/Theme.styled";
import { Btn } from "./components/Button.styled";

export type FontPropsType = {
  fontSize?: string;
};

function App() {
  return (
    <div className="App">
      <Box>
        <Img src={picture} />
        <Header fontSize="16px">Headline</Header>
        <MainText fontSize="12px">
          Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
          ornare in venenn.
        </MainText>
        <div>
          <Btn btnType="primary">See more</Btn>
          <Btn btnType="outlined">Save</Btn>
        </div>
      </Box>
    </div>
  );
}

const Box = styled.div`
  background-color: ${ProjectTheme.colors.light};
  border-radius: 10px;
  width: 300px;
  margin: 40px auto;
  box-shadow: 0px 4px 20px 5px #0000001a;
  padding: 10px;

  & > * {
    margin-bottom: 10px;
  }
`;

export default App;
