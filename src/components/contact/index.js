import React from "react";
import { Text, Email, Container, Img, Social } from "./style";

function Contact({ contact, color }) {
  let theSocials = contact.socials;
  return (
    <Container color={color}>
      <div className="container">
        <Text>Let's keep in Touch!</Text>
        <Social>
          <Email href={contact.email}>{contact.email}</Email>
          <div>
            {theSocials &&
              theSocials.map((item) => (
                <Img src={item.Icon} alt={item.platform} />
              ))}
          </div>
        </Social>
      </div>
    </Container>
  );
}

export default Contact;
