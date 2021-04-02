import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 300px;
`;
export const Section = styled.section`
  background-color: ${(props) => (props.one ? "#115D78" : "#2085AA")};
  width: ${(props) => (props.one ? "15%" : "90%")};
  position: relative;
  padding-left: ${(props) => (props.one ? 0 : "150px")};
`;
/*Start section one*/
export const Image = styled.div`
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
export const Name = styled.h1`
  font-family: "Caveat", cursive;
  color: #353d45;
  font-size: 34px;
  font-size: 65px;
  margin-top: 20px;
  font-weight: normal;
`;
export const Title = styled.h3`
  font-family: "Caveat", cursive;
  color: #fff;
  font-size: 37px;
  /* margin-top: 20px; */
  font-weight: normal;
  text-indent: 20px;
`;

export const Bio = styled.p`
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
export const Button = styled.button`
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
export const Navbar = styled.ul`
  display: flex;
  height: 60px;
  padding-left: 60px;
  background-color: #1d232a;
`;
export const Options = styled.li`
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
