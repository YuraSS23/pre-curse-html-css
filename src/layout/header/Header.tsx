import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {Logo} from "../../components/logo/Logo";
import {FlexWrapper} from "../../components/FlexWrapper";
import {unmountComponentAtNode} from "react-dom";

const items = ["Main", "Rates", "Create account"];

export const Header = () => {
    return (
        <StyledHeader>
            <FlexWrapper justify={"space-between"}>
                <Logo />
                <Menu menuItems={items}/>
            </FlexWrapper>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #0A61F7;
  padding: 14px 130px;
`
