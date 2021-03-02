import React from "react";
import { Container, Section, ConIcons, ConIcon, IconName } from "./style";
import myIcons from "./data";

function Skils() {
  return (
    <Container>
      <div className="container">
        <Section>Skils</Section>
      </div>
      <div className="container">
        <ConIcons>
          {myIcons.map((Te, index) => (
            <ConIcon key={index}>
              <Te.functio size="50px" />
              <IconName>{Te.name}</IconName>
            </ConIcon>
          ))}
        </ConIcons>
      </div>
    </Container>
  );
}

export default Skils;
