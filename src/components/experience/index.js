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
  Sup,
} from "./style";

function Experience({ experience }) {
  return (
    <Container>
      <div className="container">
        <Section>Experience</Section>
      </div>
      {experience.map((item) => (
        <Block key={item.id}>
          <Logo>
            <img src={item.logo} alt={item.company} />
          </Logo>
          <Information>
            <Title>{item.title}</Title>
            <Company>
              {item.company} - {item.type}
            </Company>
            <Jobdate>
              {item.jobDate} <Sup>.</Sup> {item.period}
            </Jobdate>
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

export default Experience;
