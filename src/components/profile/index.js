import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getData } from "../../redux/actions/actions";
import styled from "styled-components";
// import { Li} from 'react-dom'

const Container = styled.div`
  display: flex;
  height: 300px;
`;
const Section = styled.section`
  background-color: ${(props) => (props.one ? "#115D78" : "#2085AA")};
  width: ${(props) => (props.one ? "15%" : "90%")};
  position: relative;
  padding-left: ${(props) => (props.one ? 0 : "150px")};
`;
/*Start section one*/
const Image = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 5px solid #ddd;
  position: absolute;
  top: 27px;
  left: 54px;
  z-index: 4;
  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
`;
/*End section one*/
/*Start section two*/
const Name = styled.h1`
  font-family: "Caveat", cursive;
  color: #353d45;
  font-size: 34px;
  font-size: 65px;
  margin-top: 20px;
  font-weight: normal;
`;
const Title = styled.h3`
  font-family: "Caveat", cursive;
  color: #fff;
  font-size: 37px;
  /* margin-top: 20px; */
  font-weight: normal;
  text-indent: 20px;
`;

const Bio = styled.p`
  color: #dedede;
  font-size: 25px;
  margin-top: 20px;
  letter-spacing: 0.5px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  span {
    font-weight: 900;
    color: #fff;
  }
`;
const Button = styled.button`
  text-transform: uppercase;
  background: transparent;
  padding: 10px 30px;
  color: white;
  border-color: white;
  font-size: 20px;
  position: absolute;
  right: 8px;
  top: 8px;
  cursor: pointer;
`;
/*End section two*/
/*Statrt Navbar */
const Navbar = styled.ul`
  display: flex;
  height: 60px;
  padding-left: 60px;
  background-color: #1d232a;
`;
const Options = styled.li`
  min-width: 100px;
  color: #fff;
  text-align: center;
  line-height: 60px;
  padding: 0 40px;
  height: 62px;
  letter-spacing: 2px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #2085aa;
  }
`;
/*Statrt Navbar */

function Profile({ profile }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <>
      <Container>
        <Section one>
          <Image>
            <img src="/images/one.JPG" alt="mehdi" />
          </Image>
        </Section>
        <Section>
          <Name>{profile.name}</Name>
          <Title>{profile.title}</Title>
          <Bio>
            {profile.bio}
            <span>INNOVEOS</span>
          </Bio>
          <Button>download</Button>
        </Section>
      </Container>
      <Navbar>
        <Options>Resume</Options>
        <Options>Portfolio</Options>
        <Options>Open Source Projects</Options>
        <Options>Blog</Options>
        <Options>Hire me</Options>
      </Navbar>
    </>
  );
}

export default Profile;
