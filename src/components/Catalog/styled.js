import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: #fff;
  margin: 10px 40px;
  padding: 0 40px;
  border-radius: 5px;
  display: flexbox;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 1.5em;
`;

export const CardWrapper = styled.div`
  //display: flex;
  flex-wrap: wrap;
  // width: 100vw;
`;

export const CardCol = styled.div`
  color: black;
  // width: ${(props) => (props.size / 12) * 100}vw;
  margin: 10px;
`;
