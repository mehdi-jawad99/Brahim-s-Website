import React from "react";
import { Text, Email, Container, Social } from "./style";
import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

function Contact({ contact, color }) {
  let theSocials = contact.socials;
  return (
    <Container color={color}>
      <div className="container">
        <Text>Let's keep in Touch!</Text>
        <Email href={contact.email}>{contact.email}</Email>
        {theSocials &&
          theSocials.map((Item) => {
            let pars = parseInt(Item.Icon);
            return (
              <Social to={Item.url}>
                <pars />
              </Social>
            );
          })}
      </div>
    </Container>
  );
}

export default Contact;
