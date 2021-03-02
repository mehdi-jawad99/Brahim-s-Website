import React from "react";
import { Container, CopyR } from "./style";

function Footer() {
  return (
    <Container footer="/images/footer.jpg">
      {/* <img src="/images/footer.jpg" alt="" /> */}
      <CopyR>copyright &copy; 2021 by Mehdi Jerroud</CopyR>
    </Container>
  );
}

export default Footer;
