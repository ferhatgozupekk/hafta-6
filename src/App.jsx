import React from "react";

import { StyledContainer } from "./components/styled";
import { Button } from "./components/button";
import { StrongButton } from "./components/button/Button.styled";

function App() {
  return (
    <>
      <StyledContainer>
        <h1>styled component uygulandı</h1>
        <Button $primary>Button</Button>
        <StrongButton $primary>Strong Button</StrongButton>
      </StyledContainer>
    </>
  );
}

export default App;
