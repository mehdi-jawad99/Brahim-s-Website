import React from "react";
import {
  Container,
  Section,
  Block,
  Logo,
  Information,
  Tags,
  Company,
  Title,
  Description,
  Jobdate,
  Tag,
} from "./style";

function Education({ education }) {
  return (
    <Container>
      <div className="container">
        <Section>Education & Learning</Section>
      </div>
      {education.map((item) => (
        <Block key={item.id}>
          <Logo>
            <img src={item.logo} alt={item.univercity} />
          </Logo>
          <Information>
            <Title>{item.univercity}</Title>
            <Company>{item.specialist}</Company>
            <Jobdate>{item.duration}</Jobdate>
            <Description>{item.description}</Description>
            <Tags>
              {item.tags.map((tech, index) => (
                <Tag key={index}>{tech}</Tag>
              ))}
            </Tags>
          </Information>
        </Block>
      ))}
    </Container>
  );
}

export default Education;
