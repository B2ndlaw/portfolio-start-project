import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";

export const Header = () => {
  return (
    <SlyledHeader>
      <Logo />
      <Menu />
    </SlyledHeader>
  );
};

const SlyledHeader = styled.header`
  background-color: #43627d;
  display: flex;
  justify-content:space-between;
`;
