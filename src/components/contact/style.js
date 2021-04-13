import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin-top: 40px;
  background-color: ${(props) => props.color};
  border: 1px solid #ccc;
  font-family: "Caveat", cursive;
  border-bottom: none;
  padding-bottom: 40px;
`;
export const Text = styled.p`
  color: #ddd;
  font-family: "Caveat", cursive;
  text-align: center;
  padding: 40px 0 40px;
  font-size: 50px;
  letter-spacing: 2px;
`;

export const Email = styled.p`
  color: #deeede;
  display: block;
  font-family: "Caveat", cursive;
  text-decoration: line-bottom;
  font-size: 40px;

  text-decoration: underline;
`;
export const Social = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const Img = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  margin-left: 10px;
  cursor: pointer;
`;
