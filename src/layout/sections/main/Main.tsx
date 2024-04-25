import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/photo.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={"center"} justify={"space-around"}>
        <div>
          <span>Hi There</span>
          <MainName>I am Jason Momoa</MainName>
          <MainTitle>Aquaman</MainTitle>
        </div>
        <Photo src={photo} alt="" />
      </FlexWrapper>
    </StyledMain>
  );
};

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;
const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #252527;
`;

const MainTitle = styled.h1`
    color: gold;
`

const MainName = styled.h2`
    color: white;
`