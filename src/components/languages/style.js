import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;
  background-color: #fff;
  border: 1px solid #ccc;
`;
export const Section = styled.p`
  font-size: 34px;
  color: #333;
  margin-bottom: 20px;
  padding-top: 40px;
  padding-bottom: 30px;
`;
export const ConLang = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: ${(props) => props.color};
  justify-content: space-between;
`;
export const Langue = styled.div`
  width: 49%;
  margin-bottom: 20px;
`;
export const Title = styled.h3`
  padding-left: 20px;
  color: ${(props) => props.second};
`;
export const Level = styled.p`
  padding: 10px 20px;
  border-bottom: 2px solid ${(props) => props.color};
  font-size: 19px;
`;
