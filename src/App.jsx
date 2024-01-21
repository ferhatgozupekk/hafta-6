import React from "react";

import { StyledContainer } from "./components/styled";
import { Button } from "./components/button";

function App() {
  return (
    <>
      <StyledContainer>
        <h1>styled component uygulandı</h1>
        <Button $primary>Button</Button>
      </StyledContainer>
      <h1>styled component uygulandı</h1>
    </>
  );
}

export default App;
