import React from "react";
import { Container, Section, Title, Level, ConLang, Langue } from "./style";

function Languages({ languages, color, second }) {
  return (
    <Container>
      <div className="container">
        <Section>Languages</Section>
      </div>
      <div className="container">
        <ConLang color={color}>
          {languages.map((item) => (
            <Langue>
              <Title second={second}>{item.name}</Title>
              <Level>{item.level}</Level>
            </Langue>
          ))}
        </ConLang>
      </div>
    </Container>
  );
}

export default Languages;
