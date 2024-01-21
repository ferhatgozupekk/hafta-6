import React from "react";

import { StyledContainer } from "./components/styled";
import { Button } from "./components/button";
import {
  CoolButton,
  StrongButton,
  SubmitButton,
} from "./components/button/Button.styled";

function App() {
  return (
    <>
      <StyledContainer>
        <h1>styled component uygulandı</h1>
        <Button $primary>Button</Button>
        <br />
        <StrongButton $primary>Strong Button</StrongButton>
        <br />
        <CoolButton as="a" href="https:google.com" target="blank">
          Cool button
        </CoolButton>
        <br />
        <SubmitButton $primary>Submit Button</SubmitButton>
      </StyledContainer>
    </>
  );
}

export default App;
