import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
`;
export const Section = styled.p`
  font-size: 34px;
  color: #333;
  margin-bottom: 20px;
  padding-top: 40px;
`;
export const Block = styled.div`
  display: flex;
  &:nth-child(even) {
    border-left: 5px solid #2085aa;
  }
  &:nth-child(odd) {
    border-right: 5px solid #2085aa;
  }
`;
export const Logo = styled.div`
  display: block;
  padding-left: 0 20px;
  width: 11%;
  /* border: 1px solid #f00; */
  img {
    display: block;
    width: 65px;
    height: 65px;
    margin: 0 auto;
  }
`;

export const Information = styled.div`
  width: 80%;
  /* border: 1px solid #f00; */
`;
export const Title = styled.h3`
  margin-bottom: 5px;
`;
export const Company = styled.p`
  color: #222;
  margin-bottom: 5px;
`;
export const Jobdate = styled.p`
  color: #555;
  margin-bottom: 15px;
`;
export const Description = styled.p`
  margin-bottom: 15px;
`;
export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;
export const Tag = styled.span`
  padding: 10px 15px;
  border: 1.5px solid #2085aa;
  color: #2085aa;
  margin-right: 4px;
  margin-bottom: 4px;
`;

export const Sup = styled.sup`
  font-weight: bold;
`;
